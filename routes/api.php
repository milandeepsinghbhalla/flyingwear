<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\usercontroller;
use App\Http\Controllers\productcontroller;
use App\Http\Controllers\shiprocketController;
use App\Http\Controllers\paytmCheckoutController;
use App\Http\Controllers\passwordreset;



/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
Route::post('add-user',[usercontroller::class,'add_user']);
Route::post('login',[usercontroller::class,'login']);
Route::post('filter',[usercontroller::class,'update_filter_results']);
Route::post('get-filter-data',[usercontroller::class,'get_filters']);
Route::post('update-cart',[usercontroller::class,'update_cart']);
Route::post('add-product',[productcontroller::class,'add_product']);
Route::get('get-all-products',[productcontroller::class,'get_all_products']);
Route::get('get-shirts',[productcontroller::class,'get_shirts']);
Route::get('get-round-necks',[productcontroller::class,'get_round_necks']);
Route::get('get-shorts',[productcontroller::class,'get_shorts']);
Route::get('get-sweat-shirts',[productcontroller::class,'get_sweat_shirts']);
Route::get('get-polos',[productcontroller::class,'get_polos']);
Route::get('get-kurtas',[productcontroller::class,'get_kurtas']);
Route::get('get-joggers',[productcontroller::class,'get_joggers']);
Route::get('get-jeans',[productcontroller::class,'get_jeans']);
Route::get('get-caperies',[productcontroller::class,'get_caperies']);
/*below are routes for shiprocket api*/
Route::get('get-ship-tocken',[shiprocketController::class,'get_tocken']);
Route::post('add-ship-tocken',[shiprocketController::class,'add_tocken']);
Route::post('create-payment-order',[paytmCheckoutController::class,'create_payment_order']);
Route::post('create-order',[paytmCheckoutController::class,'create_order']);
Route::post('get-orders',[usercontroller::class,'get_orders']);
Route::post('update-user-orders',[usercontroller::class,'update_user_orders']);
Route::post('chk-user',[usercontroller::class,'chk_user']);
Route::post('reset-pw',[passwordreset::class,'reset_pw']);

Route::post('send-sha512',function(Request $req){
    $sha512_hash = hash("sha512", $req->realstr);
    return $sha512_hash;
});
