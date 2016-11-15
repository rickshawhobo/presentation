<?php
Product::chunk(100, function ($products) {

foreach ($products as $product) {
    // do stuff
}

});
