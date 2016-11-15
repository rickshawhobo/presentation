<?php
Product::where('status', 0)->chunk(100, function ($products) {

foreach ($products as $product) {
    // do stuff
    $product->status = 1;
    $product->save();
}

});
