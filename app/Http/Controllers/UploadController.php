<?php

namespace App\Http\Controllers;

use App\Imports\ExcelImport;
use Illuminate\Http\Request;

use Maatwebsite\Excel\Facades\Excel;

class UploadController extends Controller
{
    //

    /**
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function index(Request $request)
    {

        // ファイルが選択されていない場合
        if(!$request->file('file')){
            return response()->json(['error' => 'ファイルがありません。'], 500);
        }

        // excelのデータを配列で取得
        $excelDataArr = Excel::toArray(new ExcelImport(), $request->file('file'));
        // 先頭のシートを取得
        $sheet = $excelDataArr[0];

//        dd($excelDataArr);

        return response()->json($sheet);
    }
}
