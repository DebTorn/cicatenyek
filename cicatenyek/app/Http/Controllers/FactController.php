<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Fact;

class FactController extends Controller
{
    public function save(Request $req){

        $fact = new Fact();

        $fact->fact_id = $req->fact_id;

        if($fact->save()){
            return 1;
        }else{
            return 2;
        }
    }
}
