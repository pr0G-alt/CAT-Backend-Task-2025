create table product (
  product_id int primary key,
  product_name varchar(100),
  is_recyclable boolean,
  is_low_fat boolean
);

insert into product(product_id, product_name, is_recyclable, is_low_fat) values (1, 'Product A', true, true);
insert into product(product_id, product_name, is_recyclable, is_low_fat) values (2, 'Product B', true, false);
insert into product(product_id, product_name, is_recyclable, is_low_fat) values (3, 'Product C', false, true);
insert into product(product_id, product_name, is_recyclable, is_low_fat) values (4, 'Product D', true, true);

select product_id, product_name from Product
where is_recyclable = true and is_low_fat = true;