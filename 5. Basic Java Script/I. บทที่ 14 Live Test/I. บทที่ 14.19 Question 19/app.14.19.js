// function calculateClockAngle(timeStr) {
//     // 1. แปลง Input ให้รองรับทั้ง format "05:30" และ "05.30"
//     const separator = timeStr.includes(':') ? ':' : '.';
//     const [hours, minutes] = timeStr.split(separator).map(Number);

//     // 2. คำนวณองศาของเข็มนาที (1 นาที = 6 องศา)
//     const minuteAngle = minutes * 6;

//     // 3. คำนวณองศาของเข็มสั้น (1 ชม. = 30 องศา, 1 นาทีเข็มสั้นขยับไป 0.5 องศา)
//     // ใช้ % 12 เพื่อให้ 12 นาฬิกากลายเป็น 0 องศา
//     const hourAngle = ((hours % 12) * 30) + (minutes * 0.5);

//     // 4. หาส่วนต่างของมุม (ค่าสัมบูรณ์)
//     let angle = Math.abs(hourAngle - minuteAngle);

//     // 5. หัวใจสำคัญ: ถ้ามุมที่ได้เกิน 180 องศา ให้เอา 360 ไปลบออก
//     // เพื่อหา "มุมแคบ" เสมอ
//     if (angle > 180) {
//         angle = 360 - angle;
//     }

//     return angle;
// }

// // --- ทดสอบตามโจทย์ ---
// console.log(calculateClockAngle("09:00")); // คาดหวัง 90  -> (270 - 0 = 270, 360-270 = 90)
// console.log(calculateClockAngle("05.30")); // คาดหวัง 15  -> (165 - 180 = 15)
// console.log(calculateClockAngle("05:45")); // คาดหวัง 97.5 -> (172.5 - 270 = 97.5)


function clockDegreeCalculator(time) {
  let splitedTime = time.split(":")
  let hour = splitedTime[0]
  let minute = splitedTime[1]

  let degreeInFiveMinutes = 30
  let degreeInAMinutes = 6
  let degreeOfShortPinInMinute = 0.5

  let longPinDegree = degreeInAMinutes * minute
  let shortPinDegree = (degreeInFiveMinutes * hour) + (minute * degreeOfShortPinInMinute)

  console.log("longPinDegree => ", longPinDegree)
  console.log("shortPinDegree => ", shortPinDegree)

  let degree = Math.abs(longPinDegree - shortPinDegree)

  if (360 - degree < degree) {
    return 360 - degree
  }

  return degree
}

// ชุด Test Case ตามในคลิป
console.log(clockDegreeCalculator("09:00"));
console.log(clockDegreeCalculator("05:30"));
console.log(clockDegreeCalculator("05:45"));