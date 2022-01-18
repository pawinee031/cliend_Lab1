//โปรแกรมคำนวณเกรดโดยกำหนด score = คะแนนที่เราได้
let score = 100;
if ((score >= 80) && (score <= 100)) {
    console.log("A");
}
else if ((score >= 75) && (score <= 79)) {
    console.log("B+");
}
else if ((score >= 70) && (score <= 74)) {
    console.log("B");
}
else if ((score >= 65) && (score <= 69)) {
    console.log("C+");
}
else if ((score >= 60) && (score <= 64)) {
    console.log("C");
}
else if ((score >= 55) && (score <= 59)) {
    console.log("D+");
}
else if ((score >= 50) && (score <= 54)) {
    console.log("D");
}
else {
    console.log("E");
}

