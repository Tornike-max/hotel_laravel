<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreUserRequest;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Str;


class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreUserRequest $request)
    {
        try {
            $validatedData = $request->validated();

            $user = User::create($validatedData);
            $token = Str::random(60);

            return response()->json([
                'message' => 'True',
                'status' => '200 OK',
                'data' => [
                    'user' => $user,
                    'token' => hash('sha256', $token)
                ]
            ], 200);
        } catch (\Exception $e) {

            return response()->json([
                'message' => 'Registration failed',
                'status' => '500 Internal Server Error',
                'data' => []
            ], 500);
        }
    }


    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
