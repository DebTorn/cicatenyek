<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\FactController;

//Main page
Route::get('/', function () {
    return view('welcome');
});

//Saved facts page
Route::get('/saves', function () {
    return view('saves');
});

//Fact save
Route::post('/save', [FactController::class, 'save']);

//Table datas
Route::get('/table', [FactController::class, 'table']);
