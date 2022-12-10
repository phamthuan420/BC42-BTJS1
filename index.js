// 1. Tính lương nhân viên làm theo tổng ngày làm việc dựa trên lương cơ bản là 100k/ngày 

// input: ĐẦU VÀO DỮ LIỆU
let bt1 = "Tính lương NV"
console.log(bt1)
let luong1Ngay = 100000;
let soNgayLam = 28;
console.log('Lương một ngày =', luong1Ngay)
console.log('Số ngày làm việc =', soNgayLam)

//Output: Tính lương trên số ngày làm việc

let luong = 0
luong = luong1Ngay * soNgayLam;

console.log('Tổng lương =',luong);

//2. VIẾT CHƯƠNG TRÌNH NHẬP 5 SỐ THỰC

// input: ĐẦU VÀO DỮ LIỆU
let bt2 = "Chương trình nhập 5 só"
console.log(bt2)
let sothuc1 = 23;
let sothuc2 = 28;
let sothuc3 = 31;
let sothuc4 = 33;
let sothuc5 = 53;
console.log('Số thực 1 =', sothuc1)
console.log('Số thực 2 =', sothuc2)
console.log('Số thực 3 =', sothuc3)
console.log('Số thực 4 =', sothuc4)
console.log('Số thực 5 =', sothuc5)

//Output: Tổng TB 5 số thực

let tbTong = 0

tbTong = (sothuc1 + sothuc2 + sothuc3 + sothuc4 + sothuc5)/5;
console.log('Tổng trung bình =', tbTong)

//3. QUY ĐỔI TIỀN

// input: ĐẦU VÀO DỮ LIỆU
let bt3 = "QUY ĐỔI TIỀN"
console.log(bt3)
let VND = 23500
console.log('1 USD =', VND)
let USD = 2
console.log('Giá trị USD Cần quy đổi = ', USD)
//Output: Quy đổi tiền tệ USD ra VND

let quyDoiVND = 0;
quyDoiVND = USD * VND;

console.log('Đổi sang VND =', quyDoiVND)


//4. TÍNH DIỆN TÍCH , CHU VI HÌNH CHỮ NHẬT

// input: ĐẦU VÀO DỮ LIỆU
let bt4 = "TÍNH DIỆN TÍCH , CHU VI HÌNH CHỮ NHẬT"
console.log(bt4);
let longs = 24;
console.log('Chiều dài =', longs);
let width = 12;
console.log('Chiều rộng =', width);
//Output: Tính và xuất ra diện tích, chu vi HCN
// Tính chu vi 
let chuVi = 0;
chuVi = (longs + width) * 2 ;
console.log('Chu Vi =', chuVi);
// Tính diện tích
let dienTich= 0;
dienTich = longs * width;
console.log('Diện tích =', dienTich);

//5. TÍNH TỔNG 2 KÝ SỐ

// input: ĐẦU VÀO DỮ LIỆU
let bt5 = "TÍNH TỔNG 2 KÝ SỐ"
console.log(bt5);
// Khai báo 
let number = 24;
console.log('Số Khai báo =', number);

//Output: TỔNG CỦA 2 KÝ SỐ
let total = 0;
total += number % 10;
console.log('Số hàng đơn vị =', total);
number = Math.floor(number / 10);
console.log('Số hàng chục =', number);
total += number;
console.log('Tổng 2 ký số =', total);


