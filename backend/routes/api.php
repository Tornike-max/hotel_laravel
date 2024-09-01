<?php

use App\Http\Controllers\CareerController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::get('/careers', [CareerController::class, 'index']);
Route::get('/careers/{id}', [CareerController::class, 'show']);
Route::post('/careers', [CareerController::class, 'store']);
Route::post('/careers/{id}', [CareerController::class, 'update']);
Route::delete('/careers/{id}', [CareerController::class, 'destroy']);
