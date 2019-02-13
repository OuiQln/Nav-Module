DROP DATABASE IF EXISTS uniqlo_inv;
CREATE DATABASE uniqlo_inv;
USE uniqlo_inv;

CREATE TABLE product(
  id INT NOT NULL AUTO_INCREMENT,
  product_type VARCHAR (10) NOT NULL,
  product_price VARCHAR (65) NOT NULL,
  product_image VARCHAR(100) NOT NULL,
  product_description VARCHAR (100) NOT NULL,
  PRIMARY KEY (id)
);

insert into product (product_type, product_price, product_image, product_description) values ('pants','$39.90','https://s3-us-west-1.amazonaws.com/uniqloassets/pants1.jpeg','WOMEN EZY ANKLE-LENGTH PANTS'); 
insert into product (product_type, product_price, product_image, product_description) values ('pants','$19.90','https://s3-us-west-1.amazonaws.com/uniqloassets/pants2.jpeg','WOMEN EZY ANKLE-LENGTH PANTS'); 
insert into product (product_type, product_price, product_image, product_description) values ('pants','$29.90','https://s3-us-west-1.amazonaws.com/uniqloassets/pants3.jpeg','WOMEN EZY ANKLE-LENGTH PANTS'); 
insert into product (product_type, product_price, product_image, product_description) values ('pants','$39.90','https://s3-us-west-1.amazonaws.com/uniqloassets/pants4.jpeg','WOMEN EZY ANKLE-LENGTH PANTS'); 
insert into product (product_type, product_price, product_image, product_description) values ('pants','$39.90','https://s3-us-west-1.amazonaws.com/uniqloassets/pants5.jpeg','WOMEN EZY ANKLE-LENGTH PANTS'); 
insert into product (product_type, product_price, product_image, product_description) values ('pants','$29.90','https://s3-us-west-1.amazonaws.com/uniqloassets/pants6.jpeg','WOMEN EZY ANKLE-LENGTH PANTS'); 
insert into product (product_type, product_price, product_image, product_description) values ('pants','$39.90','https://s3-us-west-1.amazonaws.com/uniqloassets/pants7.jpeg','WOMEN EZY ANKLE-LENGTH PANTS'); 
insert into product (product_type, product_price, product_image, product_description) values ('pants','$29.90','https://s3-us-west-1.amazonaws.com/uniqloassets/pants8.jpeg','WOMEN EZY ANKLE-LENGTH PANTS'); 
