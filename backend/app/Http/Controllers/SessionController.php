<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreSessionRequest;
use App\Http\Resources\UserResource;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Str;

class SessionController extends Controller
{

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreSessionRequest $request)
    {
        $validatedData = $request->validated();

        if (!Auth::attempt($validatedData)) {
            return response()->json([
                'status' => '404',
                'message' => 'failure',
                'data' => []
            ], 404);
        }

        $user = Auth::user();
        $token = hash('sha256', Str::random(60));

        return response()->json([
            'status' => '200 ok',
            'session' => session(),
            'message' => 'success',
            'data' => [
                'access_token' => $token,
                'user' => new UserResource($user)
            ],

        ], 200);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        if (!$id) return;

        $user = User::query()->findOrFail($id);

        if (isset($user)) {
            return response()->json([
                'status' => '200 ok',
                'message' => 'success',
                'data' => new UserResource($user)
            ], 200);
        } else {
            return response()->json([
                'status' => '404 Not Found!',
                'message' => 'Error',
                'data' => []
            ], 404);
        }
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
    public function destroy(Request $request)
    {
        Auth::logout();
        session()->delete();


        return response()->json([
            'status' => '200 ok',
            'message' => 'success',
            'data' => []
        ], 200);
    }
}
