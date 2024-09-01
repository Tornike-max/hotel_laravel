<?php

namespace App\Http\Controllers;

use App\Http\Resources\CareerResource;
use App\Models\Career;
use Illuminate\Http\Request;

class CareerController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $careers = Career::with('company')->latest()->paginate(10);

        if ($careers->isEmpty()) {
            $response = [
                'message' => 'Data not found',
                'status' => '404 Not found',
                'data' => []
            ];
            return $response;
        }

        $response = [
            'message' => 'True',
            'status' => '200 ok',
            'data' => CareerResource::collection($careers)
        ];

        return $response;
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
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
