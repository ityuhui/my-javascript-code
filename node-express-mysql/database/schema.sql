
CREATE DATABASE IF NOT EXISTS mydb;

use mydb;

drop table if exists mytable;

create table mytable (
  id integer primary key autoincrement,
  description text not null
);
