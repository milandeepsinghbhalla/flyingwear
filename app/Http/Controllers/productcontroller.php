<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Shirt;
use Illuminate\Support\Facades\DB;
use App\Models\AllProducts;

class productcontroller extends Controller
{
    public function add_product(Request $req){
        DB::beginTransaction();
        $new_product = new AllProducts();
        $new_product->pname = $req->pname;
        $new_product->pstock = (int) $req->pstock;
        $new_product->t_name = $req->t_name;
        $result1 = $new_product->save();
        $id = $new_product->pid;
        $t_name = $new_product->t_name;
        if($result1){
            $ext = $req->file('img_1')->extension();
            $req->file('img_1')->storeAs('public/product_images','img_1_'.$id.'.'.$ext);
            $main_img_link = 'storage/product_images/img_1_'.$id.'.'.$ext;
            $other_imgs_links = array();
            for($counter=2;$counter<=($req->img_no);$counter++){
                $ext = $req->file('img_'.$counter)->extension();
                $req->file('img_'.$counter)->storeAs('public/product_images','img_'.$counter.'_'.$id.'.'.$ext);
                $link = 'storage/product_images/img_'.$counter.'_'.$id.'.'.$ext;
                array_push($other_imgs_links,$link);
            }
            $modal_id= '#'.$id;
            $label_id= 'exampleModalLabel'.$id;
            $control= 'carouselExampleControls'.$id;
            $control_link= '#carouselExampleControls'.$id;
            $result2 = DB::table($t_name)->insert([
                'pid'=> (int)$id,
                'pname'=> $req->pname,
                'pimg'=> $main_img_link,
                'psizes'=> $req->psizes,
                'pprice'=> (float)$req->pprice,
                'pstock'=> (int)$req->pstock,
                'colors'=> json_encode(json_decode($req->colors)),
                'fabric'=> $req->fabric,
                'images'=> json_encode($other_imgs_links),
                'bid'=> $req->bid,
                'sizes'=> $req->sizes,
                'stock_s'=> (int)$req->stock_s,
                'stock_m'=> (int)$req->stock_m,
                'stock_l'=> (int)$req->stock_l,
                'stock_xl'=> (int)$req->stock_xl,
                'stock_2xl'=> (int)$req->stock_2xl,
                'stock_3xl'=> (int)$req->stock_3xl,
                'stock_4xl'=> (int)$req->stock_4xl,
                'stock_5xl'=> (int)$req->stock_5xl,
                'description'=> $req->description,
                'modal_id'=> $modal_id,
                'label_id'=> $label_id,
                'control'=> $control,
                'control_link'=> $control_link

            ]);
            if($result2){
                DB::commit();
                return ['status'=>1,'message'=>'product added successfuly!!'];
            }
            else{
                DB::rollback();
                return ['status'=>0,'message'=>'error in adding result 2'];
               
            }
        }
        else{
            DB::rollback();
            return ['status'=>-1,'message'=>'error in adding result 1'];
        }
    }
    public function get_all_products(){
        $result= DB::table('all_products')->get();
        return $result;
    }
    public function get_shirts(){
        $result= DB::table('shirts')->get();
        return $result;
    }
    public function get_round_necks(){
        $result= DB::table('round_necks')->get();
        return $result;
    }
    public function get_shorts(){
        $result= DB::table('shorts')->get();
        return $result;
    }
    public function get_sweat_shirts(){
        $result= DB::table('sweat_shirts')->get();
        return $result;
    }
    public function get_polos(){
        $result= DB::table('polos')->get();
        return $result;
    }
    public function get_kurtas(){
        $result= DB::table('kurtas')->get();
        return $result;
    }
    public function get_joggers(){
        $result= DB::table('joggers')->get();
        return $result;
    }
    public function get_jeans(){
        $result= DB::table('jeans')->get();
        return $result;
    }
    public function get_caperies(){
        $result= DB::table('caperies')->get();
        return $result;
    }
}
