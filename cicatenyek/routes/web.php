<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\FactController;

Route::get('/', function () {
    return view('welcome');
});

Route::get('/saves', function () {
    return view('saves');
});

Route::post('/save', [FactController::class, 'save']);
