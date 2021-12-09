<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

use App\Models\User;
use App\Models\order;


class paytmCheckoutController extends Controller
{
    // public function initialize_transaction(Request $req){
    
    //             /*
    //             * import checksum generation utility
    //             * You can get this utility from https://developer.paytm.com/docs/checksum/
    //             */
                

    //             $paytmParams = array();

    //             $paytmParams["body"] = array(
    //                 "requestType"=> "Payment","mid"=> "KqVDCA97132325772368","websiteName"=> "WEBSTAGING","orderId"=> $req->order_id,"callbackUrl"=> $req->call_back_url,"txnAmount"=> array("value"=> $req->amount,"currency"=> "INR",),"userInfo"=> array("custId"=> $req->cust_id)
    //             );

    //             /*
    //             * Generate checksum by parameters we have in body
    //             * Find your Merchant Key in your Paytm Dashboard at https://dashboard.paytm.com/next/apikeys 
    //             */
    //             $checksum = PaytmChecksum::generateSignature(json_encode($paytmParams["body"], JSON_UNESCAPED_SLASHES), "%rEGfHPintbBC8BC");

    //             $paytmParams["head"] = array("signature"=> $checksum
    //             );
	// 			$post_data = $paytmParams;
    //             // $post_data = json_encode($paytmParams, JSON_UNESCAPED_SLASHES);

    //             /* for Staging */
    //             $url = "https://securegw-stage.paytm.in/theia/api/v1/initiateTransaction?mid=KqVDCA97132325772368&orderId=".$req->order_id;

    //             /* for Production */
    //             // $url = "https://securegw.paytm.in/theia/api/v1/initiateTransaction?mid=YOUR_MID_HERE&orderId=ORDERID_98765";

            
    //             // $headers = array("Content-Type: application/json");
    //             // $ch = curl_init($url);
    //             // curl_setopt($ch, CURLOPT_URL,$url);
    //             // curl_setopt($ch, CURLOPT_POST, 1);
    //             // curl_setopt($ch, CURLOPT_POSTFIELDS, $post_data);
    //             // curl_setopt($ch, CURLOPT_RETURNTRANSFER, true); 
    //             // curl_setopt($ch, CURLOPT_HTTPHEADER, $headers); 
                
                
    //             // $response = curl_exec($ch);
    //             return $post_data;

    // }
	public function create_payment_order(Request $req){
		// API URL
		$url = 'https://sandbox.cashfree.com/pg/orders';
		$app_id ="111757da6e876d961e30b66af5757111";
		$security_key = "TEST125be7b015eab5f894ac84d2f7e0f86b1a9cb0ab";
		// Create a new cURL resource
		$ch = curl_init($url);

		// Setup request to send json via POST
		$data = array(
			'order_id' => $req->order_id,
			'order_amount' => (float) $req->order_amount,
			'order_currency' => "INR",
			'customer_details' => array(
				'customer_id' => $req->customer_details['customer_id'],
				'customer_email' => $req->customer_details['customer_email'],
				'customer_phone' => $req->customer_details['customer_phone']
			),
			'order_meta' => array(
				'return_url' => $req->order_meta['return_url']
			)
		);
		$payload = json_encode($data);

		// Attach encoded JSON string to the POST fields
		curl_setopt($ch, CURLOPT_POSTFIELDS, $payload);

		// Set the content type to application/json
		curl_setopt($ch, CURLOPT_HTTPHEADER, array('Content-Type:application/json','x-api-version: 2021-05-21','x-client-id: '.$app_id,'x-client-secret: '.$security_key));

		// Return response instead of outputting
		curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

		// Execute the POST request
		$result = curl_exec($ch);

		// Close cURL resource
		curl_close($ch);
		return $result;
	}
	public function create_order(Request $req){
		$order = new order;
		if(!(order::where('order_id','=',$req->order_id)->exists())){
			$order->customer_id = $req->customer_id;
			$order->order_id = $req->order_id;
			$order->order_contents = $req->order_contents;
			$order->order_status = $req->order_status;
			$result = $order->save();
			if($result){
				return ["status"=>1,"message"=>"order_created"];
			}
			else{
				return ["status"=>0,"message"=>"can't create order"];
			}
		}
		else{
			return ["status"=>0,"message"=>"order with that order id already exist"];
		}
		
	}
}
