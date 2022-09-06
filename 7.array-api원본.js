// Q1. make a string out of an array
{
  const fruits = ["apple", "banana", "orange"];
  const strFruits = fruits.join();
  console.log(strFruits);
  console.log(typeof strFruits);
}
// Q2. make an array out of a string
{
  const fruits = "🍎, 🥝, 🍌, 🍒";
  const arrFruits = fruits.split(",");
  console.log(arrFruits);
}

// Q3. make this array look like this: [5, 4, 3, 2, 1]
{
  const array = [1, 2, 3, 4, 5];
  console.log(array.reverse());
}

// Q4. make new array without the first two elements
{
  const array = [1, 2, 3, 4, 5];
  const array2 = array.slice(2);
  console.log(array2);
  console.log(array);
  console.log("=============");
  const array3 = array.splice(2);
  console.log(array3);
  console.log(array);
}

class Student {
  constructor(name, age, enrolled, score) {
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
  }
}
const students = [
  new Student("A", 29, true, 45),
  new Student("B", 28, false, 80),
  new Student("C", 30, true, 90),
  new Student("D", 40, false, 66),
  new Student("E", 18, true, 88),
];
console.log(students);

// Q5. find a student with the score 90
{
  // 조건에 맞는 모든학생을 출력하고싶을때
  for (score of students) {
    if (score.score == 90) {
      console.log(score);
    }
  }
  // 조건에 맞는 제일 앞 학생일 출력하고싶을때
  const result = students.find((student) => student.score === 90);
  console.log(result);
}

// Q6. make an array of enrolled students
{
  const enrolledStudent = [];
  for (student of students) {
    if (student.enrolled == true) {
      enrolledStudent.push(student);
    }
  }
  console.log(enrolledStudent);
  console.log("==========");
  // =======================================================

  const student0 = students.filter((student) => student.enrolled === true);
  console.log(student0);
}

// Q7. make an array containing only the students' scores
// result should be: [45, 80, 90, 66, 88]
{
  const score = [];
  for (student of students) {
    score.push(student.score);
  }
  console.log(score);

  // =======================================================

  console.log("==Q7==");
  const score2 = students.map((student) => student.score);
  console.log(score2);
}

// Q8. check if there is a student with the score lower than 50
{
  for (student of students) {
    if (student.score < 50) {
      console.log(student.name);
    }
  }

  console.log("====Q8====");
  // 배열중에 원하는 조건이 하나라도 있을경우를 찾는다면 some 사용 -> 하나라도있으면 true
  const result = students.some((student) => student.score < 50);
  console.log(result);

  // 모든 배열 값이 원하는 조건에 충족하는지를 확인하려면 every 사용 -> 모든 값이 충족하면 true출력
  const result2 = students.every((student) => student.score >= 50);
  console.log(result2);
}

// Q9. compute students' average score
{
  let avgscore = 0;
  for (student of students) {
    avgscore += student.score;
  }
  avgscore = avgscore / students.length;
  console.log(avgscore);
  // =======================================================
  const result = students.reduce((first, second) => first + second.score, 0);
  console.log(result / students.length);
}

// Q10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'
{
  const score = [];

  for (student of students) {
    score.push(student.score);
  }
  const strscore = score.join();
  console.log(strscore);

  // =======================================================
  const score2 = students
    .map((student) => student.score)
    .filter((score) => score > 50)
    .join();
  console.log(score2);
}

// Bonus! do Q10 sorted in ascending order
// result should be: '45, 66, 80, 88, 90'
{
  const score = [];

  for (student of students) {
    score.push(student.score);
  }
  const strscore = score.sort().join();
  console.log(strscore);
}
