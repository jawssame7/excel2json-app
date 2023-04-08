<?php

namespace App\Imports;

use Illuminate\Support\Collection;
use Maatwebsite\Excel\Concerns\ToModel;

class DummyImport implements ToModel
{

    /**
     * @param array $row
     * @return array|\Illuminate\Database\Eloquent\Model[]
     */
    public function model(array $row): array
    {
        return $row;
    }
}
