<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\usercontroller;
use App\Http\Controllers\passwordreset;


/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

 Route::get('/cust-form', function () {
    return view('customer_form');
});
Route::get('/after-payment', function () {
    return view('after-payment');
});
 
Route::any('', function () {
    return view('flyingwear');
});
Auth::routes();
Route::get('send-mail',[passwordreset::class,'send_mail']);

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
