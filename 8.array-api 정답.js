// Q1. make a string out of an array
{
  const fruits = ['apple', 'banana', 'orange'];
  console.log(fruits.join('-'));
}
/*
 */
// Q2. make an array out of a string
{
  const fruits = 'π, π₯, π, π';
  const result = fruits.split(','); // split λ λ°°μ΄λ‘ λ°νν¨ 
  console.log(result);
}

// Q3. make this array look like this: [5, 4, 3, 2, 1]
{
  const array = [1, 2, 3, 4, 5]; 
  console.log(array.reverse()); 
  console.log(array); //reverse μ¬μ©μ λ°°μ΄μμ²΄κ° λ¦¬λ²μ€λκΈ°λλ¬Έμ array κ°μ 5,4,3,2,1λ‘ λ°λ. 

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
  /* λ΄κ° μ΄ λ°©μ 
  for(let i=0; i<Student.length; i++){
    if(students[i].score===90){
      console.log(students[i].name);
    }
  }
  */
 const result = students.find(student => student.score ===90);
 console.log(result);
 /* μμ λμΌν¨ 
   students.find(function(student){
         return student.score ===90;  });
         */
}
 
 


// Q6. make an array of enrolled students
// 2λ² μΈλ±μ€κ° trueμΈ νμλ€λ§ λ°°μ΄μ λ±λ‘.
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
  console.log(lower);  50μ  λ―Έλ§μΈ νμμ΄ λκ΅°μ§ μκ³ μΆμλ μ¬μ© */
  
  //μ‘°κ±΄μ λ§μ‘±νλκ² νλλΌλ μλμ§ νμΈνλ €λ©΄ someμ μ¬μ© 
  const result = students.some(student => student.score<50);
  console.log(result); 

  const result2 = students.every(student => student.score <50);
  console.log(result2);
  //λͺ¨λ  λ°°μ΄μ΄ μ‘°κ±΄μ μΆ©μ‘±ν κ²½μ°λ₯Ό μ²΄ν¬νκ³ μΆμλ every λ₯Ό μ¬μ© 
}

// Q9. compute students' average score
{ 
  
  //reduceRight λ λ°°μ΄μ μμλ₯Ό κ±°κΎΈλ‘ λ°κΎΌν reduceμ²λ¦¬νλ€. 
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

 
// Bonus! do Q10 sorted in ascending order μ€λ¦μ°¨μμΌλ‘ μ λ ¬ 
// result should be: '45, 66, 80, 88, 90'
{
  const a = students.map(student => student.score)
  .filter(score=>score>50)
  .sort((a,b)=>a-b) //μ μλ₯Ό λ΄λ¦Όμ°¨μμΌλ‘ μ λ ¬νκ³  μΆμμ .sort((a,b)=>b-a)λ‘ λ³κ²½νλ©΄λ¨. 
  .join('-');  

  console.log(a);
}
