<?php

use App\Http\Controllers\CareerController;
use App\Http\Controllers\CompanyController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');


//careers
Route::get('/careers', [CareerController::class, 'index']);
Route::get('/careers/{id}', [CareerController::class, 'show']);
Route::post('/careers', [CareerController::class, 'store']);
Route::post('/careers/{id}', [CareerController::class, 'update']);
Route::delete('/careers/{id}', [CareerController::class, 'destroy']);


//companies

Route::get('/companies', [CompanyController::class, 'index']);
Route::get('/companies/{id}', [CompanyController::class, 'show']);
Route::post('/companies', [CompanyController::class, 'store']);
Route::post('/companies/{id}', [CompanyController::class, 'update']);
