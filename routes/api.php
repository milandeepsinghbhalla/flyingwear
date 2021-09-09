<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\usercontroller;
use App\Http\Controllers\productcontroller;

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