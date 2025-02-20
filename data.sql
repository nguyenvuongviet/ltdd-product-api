CREATE DATABASE ltdd_product_db;

USE ltdd_product_db;

CREATE TABLE categories (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL
);

CREATE TABLE products (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    category_id INT,
    price DECIMAL(10, 2) NOT NULL,
    quantity_sold INT DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (category_id) REFERENCES categories(id)
);

INSERT INTO categories (name) VALUES ('Điện thoại'), ('Laptop'), ('Phụ kiện');

INSERT INTO products (name, category_id, price, quantity_sold, created_at) VALUES
('iPhone 15', 1, 29990000, 120, NOW()),
('Samsung Galaxy S23', 1, 25990000, 95, NOW()),
('MacBook Pro 16', 2, 59990000, 50, NOW()),
('Dell XPS 13', 2, 34990000, 40, NOW()),
('Chuột Logitech G502', 3, 1299000, 150, NOW() - INTERVAL 3 DAY),
('Bàn phím cơ Keychron K8', 3, 1899000, 130, NOW() - INTERVAL 5 DAY),
('Tai nghe Sony WH-1000XM5', 3, 7990000, 80, NOW() - INTERVAL 10 DAY);
