<?php

DB::connection()->getPdo()->setAttribute(PDO::MYSQL_ATTR_USE_BUFFERED_QUERY, false);

foreach (Product::cursor() as $product) {

    // this will blow up
    $product->status = 1;
    $product->save();


    // so will this
    $product->owner->foo;

    // so will any sql inside here

}


