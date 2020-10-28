Install MariaDB and MySQL Workbench:
	https://mariadb.com/kb/en/installing-mariadb-on-macos-using-homebrew/
	https://linuxize.com/post/how-to-install-mariadb-on-ubuntu-18-04/ 
		Do not set a root password
	
After installing use this resource to export the db:
	Move to file folder ./design_backend/test-sql-dump
	sudo mysql -u root -p
	CREATE DATABASE designDB;
	ctrl C
	sudo mysql -u root -p designDB < designDB.sql 
  
  After you did these steps go to the folder design_backend in a terminal and run:
    node app.js
  
  Any questions please be sure to contact us!
