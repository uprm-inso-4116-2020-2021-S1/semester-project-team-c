Install MariaDB and MySQL Workbench:
	https://mariadb.com/kb/en/installing-mariadb-on-macos-using-homebrew/
	https://linuxize.com/post/how-to-install-mariadb-on-ubuntu-18-04/ 
	sudo mysql_secure_installation:
		"Enter current password" -> Hit enter
		"Set root password" -> N
		"Remove anonymous users" -> Y
		"Disallow root login remotely" -> Y
		"Remove test database and access to it" -> Y
		"Reload privileges tables now" -> Y
		
	
After installing use this resource to export the db:
	Move to file folder ./semsester-project-team-c/design_backend/test-sql-dump
	sudo mysql -u root -p
	CREATE DATABASE designDB;
	ctrl+C
	sudo mysql -u root -p designDB < designDB.sql 

After you did these steps go to the folder design_backend in a terminal:
	verify if you have the .env file:
		ls -a
	If you dont have it:
		touch .env (Make sure the file is in the design_backend folder)
		nano .env 
		Paste this information:
			SECRET_KEY=/%/%/SUPER-SECRET-KEY-FOR-THIS-APP/%/%/
			DB_DBNAME=designDB
			DB_USERNAME=root
			DB_PASSWORD=
			DB_PORT=3306
		Save!
	And to run the backend:
		npm install (while in design_backend folder to install dependencies)
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

  
  Any questions please be sure to contact us!
