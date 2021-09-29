<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\DB;

use App\Models\User;
class usercontroller extends Controller
{
    public function add_user(Request $req){
        $new_user = new User;
        if(!(User::where('email','=',$req->email)->exists())){
            $new_user->full_name = $req->name;
            $new_user->email = $req->email;
            $new_user->number = $req->number;
            $new_user->w_number = $req->w_number;
            $new_user->password = Hash::make($req->password);
            $result = $new_user->save();
            if($result){
                return ['result'=>'user signed up as ' . $req->name,
                        'check_status'=> 1        
                ];
            }
        }
        else{
            return ['result'=>'user with that email already present',
                    'check_status'=> 0,
                    'req'=> $req->email
            ];
        }
    }
    public function login(Request $req){
        $hp = DB::table('users')->where('email',$req->email)->get();
        if($hp->count()==1){
            if(Hash::check($req->password,$hp[0]->password)){
                return ['name'=>$hp[0]->full_name,
                        'cart'=> json_decode($hp[0]->cart),
                        'uid'=> $hp[0]->id,
                        'number'=> $hp[0]->number,
                        'w_number'=> $hp[0]->w_number,
                        'check_status'=> 1
                ];
            }
            else
                return ['check_status'=> 2];
        }
        else
            return ['check_status'=> 3];
        
    }
    public function update_cart(Request $req){
        $user = User::find($req->uid);
        $user->cart = json_encode($req->cart_contents);
        $user->save();
    }
    public function update_filter_results(Request $req){
        $user = user::find($req->uid);
        $user->filters = $req->filters;
        $user->save();
    }
    public function get_filters(Request $req){
        $user = user::find($req->uid);
        return ['filters'=>$user->filters];
    }
}
