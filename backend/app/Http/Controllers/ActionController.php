<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Action;
class ActionController extends Controller
{
    public function index(){
        return Action::all();
      }
      public function store(Request $request){
        Action::create($request->except('id'));
      }
      public function update(Request $request,$id){
        Action::find($id)->update($request->all());
        return $request->all();
      }
      public function destroy($id){
        Action::find($id)->delete();
        return "done";
      }
}
