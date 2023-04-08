<?php

namespace App\Imports;

use Illuminate\Support\Collection;
use Maatwebsite\Excel\Concerns\ToCollection;
use Maatwebsite\Excel\Concerns\ToModel;
use Maatwebsite\Excel\Concerns\WithHeadingRow;
use Maatwebsite\Excel\Concerns\WithStartRow;

class ExcelImport implements ToCollection, WithHeadingRow, WithStartRow
{

    public static int $startRow = 2; // csvの1行目にヘッダがあるので2行目から取り込む

    /**
    * @param Collection $collection
    */
    public function collection(Collection $rows)
    {
        //
        $results = [];
        $arr = $rows->toArray();

        foreach ($arr as $row) {
            $rowResult = [];
            foreach ($row as $key => $val) {
                $rowResult[$key] = $val;
            }
            $results[] = $rowResult;
        }

//        foreach ($rows as $row) {
//            $ab = $row;
////            foreach ($row->items) {
////
////            }
//        }

        return $results;
    }

    public function startRow(): int
    {
        return self::$startRow;
    }
}
