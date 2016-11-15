<?php

DB::connection()->getPdo()->setAttribute(PDO::MYSQL_ATTR_USE_BUFFERED_QUERY, false);

foreach (Product::cursor() as $product) {

    // do stuff

}

