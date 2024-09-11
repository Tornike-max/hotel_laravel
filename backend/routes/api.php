<?php

use App\Http\Controllers\CareerController;
use App\Http\Controllers\CategoriesController;
use App\Http\Controllers\CompanyController;
use App\Http\Controllers\LocationController;
use App\Http\Controllers\SessionController;
use App\Http\Controllers\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');


//careers
Route::group(['middleware' => 'auth:sanctum'], function () {
    Route::get('/careers', [CareerController::class, 'index']);
    Route::get('/careers/{id}', [CareerController::class, 'show']);
    Route::post('/careers', [CareerController::class, 'store']);
    Route::post('/careers/{id}', [CareerController::class, 'update']);
    Route::delete('/careers/{id}', [CareerController::class, 'destroy']);

    //companies
    Route::get('/companies', [CompanyController::class, 'index']);
    Route::get('/companies/get-ids', [CompanyController::class, 'getIds']);
    Route::get('/companies/{id}', [CompanyController::class, 'show']);
    Route::post('/companies', [CompanyController::class, 'store']);
    Route::post('/companies/{id}', [CompanyController::class, 'update']);
    Route::delete('/companies/{id}', [CompanyController::class, 'destroy']);

    //categories
    Route::get('/categories', [CategoriesController::class, 'index']);
    Route::get('/categories/{id}', [CategoriesController::class, 'show']);
    Route::post('/categories', [CategoriesController::class, 'store']);
    Route::post('/categories/{id}', [CategoriesController::class, 'update']);
    Route::delete('/categories/{id}', [CategoriesController::class, 'destroy']);

    //locations
    Route::get('/locations', [LocationController::class, 'index']);
    Route::get('/locations/{id}', [LocationController::class, 'show']);
    Route::post('/locations', [LocationController::class, 'store']);
    Route::post('/locations/{id}', [LocationController::class, 'update']);
    Route::delete('/locations/{id}', [LocationController::class, 'destroy']);

    //user
    Route::post('/session/logout', [SessionController::class, 'destroy']);
    Route::get('/session/user/{id}', [SessionController::class, 'show']);
});

//signup & login
Route::post('/user/register', [UserController::class, 'store']);
Route::post('/session/login', [SessionController::class, 'store']);
