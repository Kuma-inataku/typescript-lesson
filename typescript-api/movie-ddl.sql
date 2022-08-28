-- https://teratail.com/questions/52778 
-- cmdでtypescript-apiに来てからmysql接続、sourceで読み込み可能
drop database if exists MOVIE;

create database MOVIE CHARACTER SET UTF8;

CONNECT MOVIE;
drop user if exists 'app-user'@'%';
set global validate_password_policy=LOW;
create user 'app-user'@'%' identified by 'PaAsW0rD';
grant all privileges on MOVIE.* TO 'app-user'@'%';

create table if not exists MOVIE
(
    ID                 serial primary key,
    NAME               varchar(100)                      not null,
    CREATED_AT         timestamp(3)    default current_timestamp(3) not null,
    UPDATED_AT         timestamp(3)    default current_timestamp(3) not null
);

INSERT INTO MOVIE (NAME) VALUES ("horror");
INSERT INTO MOVIE (NAME) VALUES ("action");
INSERT INTO MOVIE (NAME) VALUES ("kids");
