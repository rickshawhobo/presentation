<?php
// 1) get only the ids of the entire table. Hopefully you have memory to contain all your ids
$ids = DB::table('products')->select('id')->where('status', 0)->where('valid', 1)->get();

$offset = 0;
$size = 100;

// 2) break the array of ids into smaller pieces so you can select a collection to work on
do {
    $selectIds = array_slice($ids, $offset, $size);

    $collection = Product::whereIn('id', $selectsIds)->where('status', 0)->where('valid', 1)->get();

    foreach ($collection as $product) {
        // do stuff
    }
    $offset = $offset + $size;

} while (!empty($selectsIds));

// 3) profit!

