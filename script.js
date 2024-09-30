document.getElementById('searchButton').addEventListener('click', function() {
    const input = document.getElementById('searchInput').value;
    const result = document.getElementById('result');
    const trashData = {
        "ทั่วไป": [
            "พลาสติกห่ออาหาร", "หลอด", "กระดาษทิชชู", "ซองขนม", 
            "ถุงแกง", "กล่องโฟมใส่ข้าว", "ซองมาม่า", "ตะเกียบไม้"
        ],
        "รีไซเคิล": [
            "ขวดพลาสติก", "ลังกระดาษ", "กระดาษ", "กระป๋องน้ำอัดลม", 
            "กระป๋อง", "แก้วพลาสติก", "หนังสือเรียน"
        ],
        "เปียก": [
            "เศษอาหาร", "ใบไม้", "กากกาแฟ", "เปลือกไข่", 
            "เศษอาหารที่เน่าเสีย", "ดอกไม้", "เศษพืชผัก", 
            "กระดาษชำระ", "เศษอาหารจากการทำอาหาร"
        ],
        "อันตราย": [
            "แบตเตอรี่", "หลอดไฟ", "ยาเสพติด", "ยาสามัญ", 
            "เศษแก้ว", "ขวดแก้ว", "แก้วกาแฟ", "ซองสารพิษ", 
            "น้ำมันเครื่อง", "อุปกรณ์อิเล็กทรอนิค", "โฟม", "ถ่านไฟฉาย"
        ]
    };

    let found = false;
    for (const category in trashData) {
        if (trashData[category].includes(input)) {
            result.innerText = `เป็นขยะประเภท: ${category}`;
            found = true;
            break;
        }
    }
    if (!found) {
        result.innerText = "ไม่พบข้อมูลขยะนี้";
    }
});
