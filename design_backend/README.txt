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
    
    
ERRORS:

If "Error: Cannot find module 'dotenv'":
	npm install dotenv
	
If having trouble with launching the backend due to 'ER_ACCESS_DENIED_NO_PASSWORD_ERROR':
	First, connect in sudo mysql:
		sudo mysql -u root
	Check your accounts present in your db:
		SELECT User,Host FROM mysql.user;
	Delete the current root:
		DROP USER 'root'@'localhost';
	Recreate your user:
		CREATE USER 'root'@'%' IDENTIFIED BY '';
	Grant permissions to the new root:
		GRANT ALL PRIVILEGES ON *.* TO 'root'@'%' WITH GRANT OPTION;
		FLUSH PRIVILEGES;
	Source: 
		https://askubuntu.com/questions/766334/cant-login-as-mysql-user-root-from-normal-user-account-in-ubuntu-16-04
	
	https://phoenixnap.com/kb/how-to-create-mariadb-user-grant-privileges

  
  Any questions please be sure to contact us!
