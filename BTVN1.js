
const books = [
    {
        bookCode: "B01",
        title: "Lap trinh JavaScript",
        category: "Cong nghe",
        price: 120000,
        totalCopies: 10,
        availableCopies: 2,
        shelfLocation: "A1"
    },
    {
        bookCode: "B02",
        title: "Co so du lieu MySQL",
        category: "Cong nghe",
        price: 150000,
        totalCopies: 8,
        availableCopies: 5,
        shelfLocation: "A2"
    },
    {
        bookCode: "B03",
        title: "Lap trinh C",
        category: "Lap trinh",
        price: 100000,
        totalCopies: 6,
        availableCopies: 0,
        shelfLocation: "B1"
    }
];

// 1. CREATE: Nhap sach moi vao kho bang push()
books.push({
    bookCode: "B04",
    title: "Lap trinh Python",
    category: "Lap trinh",
    price: 180000,
    totalCopies: 12,
    availableCopies: 12,
    shelfLocation: "B2"
});

console.log("Da nhap sach moi B04!");

// 2. UPDATE: Sinh vien muon sach B01
let borrowedBook = books.find(book => book.bookCode === "B01");

if (borrowedBook) {
    if (borrowedBook.availableCopies > 0) {
        borrowedBook.availableCopies--;

        console.log("Muon sach thanh cong:", borrowedBook.title);

        if (borrowedBook.availableCopies === 0) {
            console.log("Trang thai: HET SACH TREN KE");
        } else {
            console.log(
                "So sach con lai tren ke:",
                borrowedBook.availableCopies
            );
        }
    } else {
        console.log("Khong the muon: sach da het tren ke!");
    }
} else {
    console.log("Khong tim thay sach B01!");
}

// 3. DELETE: Thanh ly sach hong B03 bang splice()
let index = books.findIndex(book => book.bookCode === "B03");

if (index !== -1) {
    let removedBook = books.splice(index, 1);
    console.log("Da thanh ly sach:", removedBook[0].title);
} else {
    console.log("Khong tim thay sach can thanh ly!");
}

// 4. READ: Thay doi vi tri ke cua B02
let bookToMove = books.find(book => book.bookCode === "B02");

if (bookToMove) {
    bookToMove.shelfLocation = "C1";
    console.log("Da chuyen sach B02 den ke C1");
}

// 5. KIEM KE: Tinh tong so sach va gia tri tai san
let totalBooks = 0;
let totalAvailable = 0;
let totalAssets = 0;

for (let i = 0; i < books.length; i++) {
    totalBooks += books[i].totalCopies;
    totalAvailable += books[i].availableCopies;
    totalAssets += books[i].totalCopies * books[i].price;
}

// 6. IN BANG KIEM KE RA CONSOLE
console.log("");
console.log("==============================================================");
console.log("             BAO CAO KIEM KE KHO THU VIEN");
console.log("==============================================================");

console.table(books);

console.log("Tong dau sach:", books.length);
console.log("Tong so luong sach:", totalBooks);
console.log("Tong sach kha dung tren ke:", totalAvailable);
console.log(
    "Tong gia tri tai san:",
    totalAssets.toLocaleString("vi-VN"),
    "VND"
);
