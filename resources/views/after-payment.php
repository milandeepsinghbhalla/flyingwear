<?php
header('Access-Control-Allow-Origin: *');
$conn = mysqli_connect("127.0.0.1","milan","Milansingh@1","flyingwear");
if (mysqli_connect_errno()) {
    echo "Failed to connect to MySQL: " . mysqli_connect_error();
    
}
else{
    $app_id ="111757da6e876d961e30b66af5757111";
    $security_key = "TEST125be7b015eab5f894ac84d2f7e0f86b1a9cb0ab";
    
    $url = "https://sandbox.cashfree.com/pg/orders/".$_REQUEST['cf_id'];
    
    $curl = curl_init($url);
    curl_setopt($curl, CURLOPT_URL, $url);
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($curl, CURLOPT_HTTPHEADER, array('Content-Type:application/json','x-api-version: 2021-05-21','x-client-id: '.$app_id,'x-client-secret: '.$security_key));
    $resp = curl_exec($curl);
    $result = json_decode($resp,true);
    
    if($result['order_status']=="PAID"){
        
         $query = "select * from orders where order_id="."'".$result['order_id']."'";
         $orders = mysqli_query($conn,$query);
         if(!$orders){
             echo mysqli_error($conn);
         }
         $count_orders= mysqli_num_rows($orders);
         $row = mysqli_fetch_assoc($orders);
        if($count_orders==1 && $row['order_status']== "unpaid"){
             //updating order status to paid in orders table
            
            $update_status = "update orders set order_status = 'PAID' where order_id = "."'".$result['order_id']."'";
            $update_status_result = mysqli_query($conn,$update_status);
            if(!$update_status_result)
                echo "<br><br>".mysqli_error($conn);
            //
            
            
            $order_contents = $row['order_contents'];
            $order_contents = json_decode($order_contents,true);
            
            if($order_contents['order_status'] == "unpaid"){
                $order_contents['order_status'] = "PAID";
                $order_contents = json_encode($order_contents);
                $update_orders_order = "update orders set order_contents = "."'".$order_contents."'"." where order_id = '".$result['order_id']."'";
                $update_orders_order_result = mysqli_query($conn,$update_orders_order);
                if(!$update_orders_order_result)
                    echo "<br><br>".mysqli_error($conn);
            }
            //updating orders from user table
            $get_orders_query = "select * from users where id = '".$result['customer_details']['customer_id']."'";
            $get_orders_query_result = mysqli_query($conn,$get_orders_query);
            if(!$get_orders_query_result)
                echo "<br><br>".mysqli_error($conn);
            $row_orders_user = mysqli_fetch_assoc($get_orders_query_result);
            $user_orders = str_replace("\n", ' ', $row_orders_user['orders']);
            $user_orders = json_decode($user_orders);
            $type = gettype($user_orders);
            if($type == "NULL"){
                $user_orders= array();
            }
            $order_contents = json_decode($order_contents);
            array_push($user_orders,$order_contents);
            $user_orders = json_encode($user_orders);
            $update_user_order_query = "update users set orders = '".$user_orders."' where id = '".$result['customer_details']['customer_id']."'";
            $update_user_order_result = mysqli_query($conn,$update_user_order_query);
            if(!$update_user_order_result)
                echo "<br><br>".mysqli_error($conn);
            //clear cart
            $empty_cart = array();
            $empty_cart = json_encode($empty_cart);
            $empty_cart_query = "update users set cart = '".$empty_cart."' where id = '".$result['customer_details']['customer_id']."'";
            $empty_cart_result = mysqli_query($conn,$empty_cart_query);
            if(!$empty_cart_result)
                echo "<br><br>".mysqli_error($conn);
            

        }
    }
    $here_doc =<<<after_payment
        <h2 style="width:80vw;margin-top:20px;margin-left:auto;margin-right:auto;margin-bottom:15px;">Your payment was successful Now click the button below to acknowledge the order and check your order details !!!</h2>
        <center><a href="/#/orders"><button style="width: 200px;height: 50px;font: size 2em;">Orders</button></center>
    after_payment;

    echo $here_doc;
    
    //var_dump($resp);
}



?>
