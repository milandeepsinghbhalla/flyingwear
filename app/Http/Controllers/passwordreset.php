<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class passwordreset extends Controller
{
    public function send_mail(Request $req){
        $details = [
            'email'=> $req->email,
            'otp'=> $req->otp
        ];
        \Mail::to($req->email)->send(new \App\Mail\pwresetmail($details));
        dd("email is sent.");
    }
    public function reset_pw(Request $req){
        $user = User::where('email','=',$req->email)->first();
        $user->password = Hash::make($req->new_pw);
        $user->save();
        return ["status"=>1,"message"=>"Password updated successfuly...!!"];
    }
}
?>