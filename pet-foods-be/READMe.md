## Docker build 
* Prepare mysql DB: docker run -it -d --name mysql-container_pet_food -p 3307:3306  -e MYSQL_ROOT_PASSWORD=root --restart always -v mysql_data_container_pet_food:/var/lib/mysql mysql:latest
* docker exec -it  mysql-container_pet_food /bin/sh
* mysql -u root -p 
* enter root as password
* create database petfood_db;
* docker build -t pet-food-be-img .
* docker run --name pet-food-be-container -p 8091:8091 pet-food-be-img
* docker stop pet-food-be-container
* docker rm pet-food-be-container
