<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreSessionRequest;
use App\Http\Resources\UserResource;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class SessionController extends Controller
{
    public function store(StoreSessionRequest $request)
    {
        $validatedData = $request->validated();

        $user = User::where('email', '=', $validatedData['email'])->first();

        if (!empty($user)) {
            if (Auth::attempt($validatedData)) {
                $token = $user->createToken('myToken')->plainTextToken;

                return response()->json([
                    'status' => '200 OK',
                    'message' => 'Login successful',
                    'data' => [
                        'user' => new UserResource($user),
                        'access_token' => $token,
                    ],
                ], 200);
            } else {
                return response()->json([
                    'status' => '401 Unauthorized',
                    'message' => 'Invalid credentials',
                ], 401);
            }
        } else {
            return response()->json([
                'status' => '404 Not Found',
                'message' => 'User not found!',
                'errors' => [
                    'message' => 'The user with the provided email does not exist.'
                ]
            ], 404);
        }
    }


    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        if (!$id) {
            return response()->json([
                'status' => '400 Bad Request',
                'message' => 'Invalid ID',
                'data' => []
            ], 400);
        }
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

        if ($request->user()) {
            $request->user()->currentAccessToken()->delete();

            return response()->json([
                'status' => '200 ok',
                'message' => 'success',
                'data' => []
            ], 200);
        }

        return response()->json([
            'status' => '401',
            'message' => 'User not authenticated',
            'data' => []
        ], 401);
    }
}
