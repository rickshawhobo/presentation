<?php

$qb = Product::where('status', 0)->where('valid', 1);

$qb->chunkById(100, function ($products) {

    foreach ($products as $product) {

        $product->status = 1;
        $product->save();
    }
});