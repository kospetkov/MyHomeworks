WD_PS6_MySQL
=======================

server version
=======================

-Apache/2.4.29 (Win32) OpenSSL/1.1.0g PHP/7.2.3
-----------------------------------------------------------

create database
=======================

-NAME => db_chat
-server_name => localhost
-user_name => root
-password => ''
-port => 3306
-----------------------------------------------------------

create table
=======================

table 'login'
=======================

-NAMR => login
-comparison => utf8_general_ci
-id => int(11), AUTO_INCREMENT
-user => varchar(64), utf8_general_ci
-pass => varchar(64), utf8_general_ci
----------------------------------------------------------

table 'messages'
=======================

-NAME => messages
-comparison => utf8_general_ci
-id => int(11), AUTO_INCREMENT
-user => varchar(64), utf8_general_ci
-time => timestamp, CURENT_TIMESTAMP, ON APDATE CURRENT_TIMESTAMP
-msg => varchar(1000), utf8_general_ci
-----------------------------------------------------------


