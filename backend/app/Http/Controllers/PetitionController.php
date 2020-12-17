<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Petition;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
class PetitionController extends Controller
{
    public function index(){
       return Petition::all();
    }/*  */
    public function update(Request $request, $id)
    {
        Petition::find($id)->update($request->all());
        return $request->all();
    }
    public function store(Request $request)
    {
        Petition::create($request->except('id'));
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Requests  $requests
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
         Petition::findOrFail($id);
    }
    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Requests  $requests
     * @return \Illuminate\Http\Response
     */
    public function destroy( $id)
    {
        Petition::find($id)->delete();

    }
    public function userPetitions( $email)
    {
        return Petition::query()
        ->where('origin', 'LIKE', $email)
        ->get();
    }

}
