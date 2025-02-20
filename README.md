# LTDD Product API

## Giới thiệu
LTDD Product API là một dự án backend sử dụng Node.js, Express và MySQL để quản lý danh mục và sản phẩm. Dự án tuân theo mô hình Model-View-Controller (MVC) để đảm bảo mã nguồn sạch và dễ bảo trì.

## Cấu trúc thư mục
```
ltdd-product-api/
│-- src/
│   │-- config/           # Cấu hình database
│   │-- controllers/      # Xử lý logic API
│   │-- middleware/       # Middleware bảo mật
│   │-- models/           # Models cho MySQL
│   │-- routes/           # Định nghĩa API routes
│   │-- utils/            # Các hàm tiện ích
│-- .env                  # Biến môi trường
│-- .gitignore            # Danh sách file bỏ qua khi commit
│-- data.sql              # Cấu trúc database
│-- package.json          # Cấu hình npm
│-- server.js             # File khởi chạy server
│-- README.md             # Hướng dẫn dự án
```

## Cài đặt
### 1. Clone repository
```sh
git clone https://github.com/your-repo/ltdd-product-api.git
cd ltdd-product-api
```

### 2. Cài đặt dependencies
```sh
npm install
```

### 3. Cấu hình môi trường
Tạo file `.env` trong thư mục gốc và thêm nội dung sau:
```
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=12345678
DB_NAME=ltdd_product_db
PORT=5000
```

### 4. Tạo database
Chạy file `data.sql` trong MySQL để tạo bảng dữ liệu.
```sh
mysql -u root -p < data.sql
```

### 5. Chạy server
```sh
node server.js
```
Server sẽ chạy trên `http://localhost:3000`

## API Endpoints
### Hiển thị tất cả danh mục
```
GET /api/categories
```
### Hiển thị sản phẩm theo danh mục
```
GET /api/products/category/:categoryId
```
### Hiển thị 10 sản phẩm bán chạy nhất
```
GET /api/products/top-sales
```
### Hiển thị 10 sản phẩm mới nhất trong 7 ngày
```
GET /api/products/recent
```

## Công nghệ sử dụng
- Node.js
- Express.js
- MySQL
- dotenv


