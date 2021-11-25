<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

use App\Models\shiprocket_tockens;


class shiprocketController extends Controller
{
    public function get_tocken(){
        $result= shiprocket_tockens::find(1);
        if($result){
            $cur_time = strtotime("now");
            $chk_time = $cur_time - 860400;
            if(((int)$result->created_time)>=$chk_time)
                return ['status'=>1,
                        'tocken'=>$result->tocken       
                ];
            else
                return ['status'=>0,'time_now'=> strtotime("now")];
        }
        else
            return ['status'=>0];
        return $result;
    }
    public function add_tocken(Request $req){
        if(shiprocket_tockens::find(1)){
            $result = shiprocket_tockens::find(1);
            $result->tocken = $req->tocken;
            $created_time = strtotime($req->created_time);
            $result->created_time = (string)$created_time;
            $result->save();
        }
        else{
            $new_tocken = new shiprocket_tockens;
            $new_tocken->tocken = $req->tocken;
            $created_time = strtotime($req->created_time);
            $new_tocken->created_time = (string)$created_time;
            $new_tocken->save();
        }
    }

}
