<?php

use App\Http\Controllers\ActionController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Auth\AuthController;
use App\Http\Controllers\PetitionController;
use App\Http\Controllers\TypeController;
use App\Models\Petition;

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
Route::group([
    'prefix' => 'auth'
], function () {
    Route::post('login', [AuthController::class,'login']);
    Route::post('register', [AuthController::class,'register']);
    Route::group([
      'middleware' => 'auth:api'
    ], function() {
        Route::get('logout', [AuthController::class,'logout']);
        Route::get('user', [AuthController::class,'user']);
        Route::get('userIndex',[AuthController::class,'index']);

        Route::get('indexPetition',[PetitionController::class,'index']);
        Route::get('getUserPetitions/{email}',[PetitionController::class,'userPetitions']);
        Route::get('getPetition/{id}',[PetitionController::class,'show']);
        Route::delete('deletePetition/{id}',[PetitionController::class,'destroy']);
        Route::post('createPetition',[PetitionController::class,'store']);
        Route::put('updatePetition/{id}',[PetitionController::class,'update']);

        Route::get('indexAction',[ActionController::class,'index']);
        Route::post('createAction',[ActionController::class,'store']);
        Route::put('updateAction/{id}',[ActionController::class,'update']);
        Route::delete('deleteAction/{id}',[ActionController::class,'destroy']);

        Route::get('indexType',[TypeController::class,'index']);
        Route::post('createType',[TypeController::class,'store']);
        Route::put('updateType/{id}',[TypeController::class,'update']);
        Route::delete('deleteType/{id}',[TypeController::class,'destroy']);
    });
});

