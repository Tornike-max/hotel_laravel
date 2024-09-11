<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\CareerRequest;
use App\Http\Resources\CareerResource;
use App\Models\Career;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Gate;

class AdminController extends Controller
{
    //career
    public function careersMethod()
    {
        if (!Gate::allows('is_admin')) {
            abort(401);
            exit();
        }

        $careers = Career::query()->with(['company', 'category', 'skills', 'companies'])->latest()->paginate(10);

        if (!isset($careers)) {
            return response()->json([
                'status' => '404 not found',
                'message' => "Careers not found",
                'data' => []
            ], 404);
        }

        return response()->json([
            'data' => $careers,
            'message' => 'Success',
            'status' => '200 OK'
        ]);
    }

    public function deleteCareer(Request $request, string $id)
    {
        if (!Gate::allows('is_admin')) {
            abort(401);
            exit();
        }

        if (!$id) {
            return response()->json([
                'status' => '400 bad request',
                'message' => 'ID is required!',
                'data' => []
            ], 400);
        }

        $career = Career::query()->find($id);

        if (!isset($career)) {
            return response()->json([
                'status' => '404 not found',
                'message' => "Career with the id of $id, not found!",
                'data' => []
            ], 404);
        }

        $career->delete();

        return response()->json([
            'status' => 'success',
            'message' => 'Career deleted successfully',
            'data' => []
        ], 200);
    }

    public function updateCareer(Request $request, string $id)
    {
        if (!Gate::allows('is_admin')) {
            abort(401, 'Unauthorized action.');
            exit();
        }

        if (!$id) {
            return response()->json([
                'status' => '400 bad request',
                'message' => 'ID is required',
                'data' => []
            ], 400);
        }

        $career = Career::query()->find($id);

        if (!isset($career)) {
            return response()->json([
                'status' => '404 not found',
                'message' => "Career with the id of $id, not found",
                'data' => []
            ], 404);
        }

        $validatedData = $request->validate([
            'title' => 'nullable|string',
            'description' => 'nullable|string',
            'location' => 'nullable|string',
            'salary' => 'nullable|string',
            'employment_type' => 'nullable|string',
            'experience_level' => 'nullable|string',
            'company_id' => 'nullable|integer',
            'category_id' => 'nullable|integer'
        ]);

        if (isset($validatedData)) {
            $career->update($validatedData);
            return response()->json([
                'status' => '200 ok',
                'message' => 'Career updated successfully',
                'data' => $career
            ], 200);
        }
    }

    public function storeCareer(CareerRequest $request)
    {
        if (!Gate::allows('is_admin')) {
            abort(401, 'Unauthorized action.');
            exit();
        }

        $validatedData = $request->validated();

        if (isset($validatedData)) {
            $career = Career::create($validatedData);
            return response()->json([
                'status' => '200 ok',
                'message' => 'Career stored successfully',
                'data' => $career
            ], 200);
        }
    }

    //company
    public function deleteCompany(Request $request, string $id)
    {
        if (!Gate::allows('is_admin')) {
            abort(401);
            exit();
        }
    }

    public function updateCompany(Request $request, string $id)
    {
        if (!Gate::allows('is_admin')) {
            abort(401);
            exit();
        }
    }

    public function storeCompany(Request $request)
    {
        if (!Gate::allows('is_admin')) {
            abort(401);
            exit();
        }
    }

    //category
    public function deleteCategory(Request $request, string $id)
    {
        if (!Gate::allows('is_admin')) {
            abort(401);
            exit();
        }
    }

    public function updateCategory(Request $request, string $id)
    {
        if (!Gate::allows('is_admin')) {
            abort(401);
            exit();
        }
    }

    public function storeCategory(Request $request)
    {
        if (!Gate::allows('is_admin')) {
            abort(401);
            exit();
        }
    }

    //skills
    public function deleteSkill(Request $request, string $id)
    {
        if (!Gate::allows('is_admin')) {
            abort(401);
            exit();
        }
    }

    public function updateSkill(Request $request, string $id)
    {
        if (!Gate::allows('is_admin')) {
            abort(401);
            exit();
        }
    }

    public function storeSkill(Request $request)
    {
        if (!Gate::allows('is_admin')) {
            abort(401);
            exit();
        }
    }

    //location
    public function deleteLocation(Request $request, string $id)
    {
        if (!Gate::allows('is_admin')) {
            abort(401);
            exit();
        }
    }

    public function updateLocation(Request $request, string $id)
    {
        if (!Gate::allows('is_admin')) {
            abort(401);
            exit();
        }
    }

    public function storeLocation(Request $request)
    {
        if (!Gate::allows('is_admin')) {
            abort(401);
            exit();
        }
    }
}
