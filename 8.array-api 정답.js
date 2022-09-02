// Q1. make a string out of an array
{
  const fruits = ['apple', 'banana', 'orange'];
  console.log(fruits.join('-'));
}
/*
 */
// Q2. make an array out of a string
{
  const fruits = '🍎, 🥝, 🍌, 🍒';
  const result = fruits.split(','); // split 는 배열로 반환함 
  console.log(result);
}

// Q3. make this array look like this: [5, 4, 3, 2, 1]
{
  const array = [1, 2, 3, 4, 5]; 
  console.log(array.reverse()); 
  console.log(array); //reverse 사용시 배열자체가 리버스되기때문에 array 값은 5,4,3,2,1로 바뀜. 

}

// Q4. make new array without the first two elements
{
  const array = [1, 2, 3, 4, 5];
  const a = array.slice(2);
  console.log(a);
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
  new Student('A', 29, true, 45),
  new Student('B', 28, false, 80),
  new Student('C', 30, true, 90),
  new Student('D', 40, false, 66),
  new Student('E', 18, true, 88),
];

const a = students.slice(2);
console.log(a);
// Q5. find a student with the score 90
{
  /* 내가 쓴 방식 
  for(let i=0; i<Student.length; i++){
    if(students[i].score===90){
      console.log(students[i].name);
    }
  }
  */
 const result = students.find(student => student.score ===90);
 console.log(result);
 /* 위와 동일함 
   students.find(function(student){
         return student.score ===90;  });
         */
}
 
 


// Q6. make an array of enrolled students
// 2번 인덱스가 true인 학생들만 배열에 등록.
{
  const enrolled0 = students.filter(student => student.enrolled ===true);
  console.log(enrolled0)
  const unenrolled = students.filter(student=> student.enrolled === false);
  console.log(unenrolled);
}


// Q7. make an array containing only the students' scores
// result should be: [45, 80, 90, 66, 88]

{
  const result = students.map(student => student.score );
  console.log(result);
}

// Q8. check if there is a student with the score lower than 50
{
  /*const lower = students.filter(student=>student.score<=50);
  console.log(lower);  50점 미만인 학생이 누군지 알고싶을때 사용 */
  
  //조건을 만족하는게 하나라도 있는지 확인하려면 some을 사용 
  const result = students.some(student => student.score<50);
  console.log(result); 

  const result2 = students.every(student => student.score <50);
  console.log(result2);
  //모든 배열이 조건에 충족할경우를 체크하고싶을땐 every 를 사용 
}

// Q9. compute students' average score
{ 
  
  //reduceRight 는 배열의 순서를 거꾸로 바꾼후 reduce처리한다. 
 const  result = students.reduce((prev,curr) => prev + curr.score, 0);
 console.log(result/students.length);
}

// Q10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'
{

  
  const a = students.map(student => student.score)
  .filter(score=>score>50)
  .join('-');
  console.log(a);
  
}

 
// Bonus! do Q10 sorted in ascending order 오름차순으로 정렬 
// result should be: '45, 66, 80, 88, 90'
{
  const a = students.map(student => student.score)
  .filter(score=>score>50)
  .sort((a,b)=>a-b) //점수를 내림차순으로 정렬하고 싶을시 .sort((a,b)=>b-a)로 변경하면됨. 
  .join('-');  

  console.log(a);
}
