SQLSTATE[HY000]: General error: 2014 Cannot execute queries while other unbuffered queries are active.
Consider using PDOStatement::fetchAll(). Alternatively, if your code is only ever going to run against mysql,
you may enable query buffering by setting the PDO::MYSQL_ATTR_USE_BUFFERED_QUERY attribute.