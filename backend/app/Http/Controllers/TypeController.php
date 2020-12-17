<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Type;

class TypeController extends Controller
{
public function index(){
  return Type::all();
}
  public function store(Request $request){
    Type::create($request->except('id'));
  }
  public function update(Request $request,$id){
    Type::find($id)->update($request->all());
    return $request->all();
  }
  public function destroy($id){
    Type::find($id)->delete();
    return "done";
  }
}
