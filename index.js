//object literal
let bob = {
  fname: "bob",
  lname: "smith",
  age: 18,
  height: 6,
  transcript:[
    {
      course: 'INFO 1603',
      grades: [ 89, 34, 67 ]
    },
    {
      course: 'INFO 1601',
      grades: [ 89, 34, 67 ]
    }
  ]
};

let sally = {
  fname: "sally",
  lname: "smith",
  age: 18,
  height: 6,
  transcript:[
    {
      course: 'INFO 1601',
      grades: [ 100, 89, 79 ]
    }
  ]
};

let paul = {
  fname: "paul",
  lname: "smith",
  age: 18,
  height: 6,
  transcript:[
    {
      course: 'INFO 1600',
      grades: [ 89, 34, 67 ]
    }
  ]
};


const students = [bob, sally, paul];

function getAverageGrade(student, course){    //  This function is morer efficient
  for(let i=0; i < student.transcript.length; i++){
    if(student.transcript[i].course === course){
      let sum = 0;
      for(let j = 0; j < student.transcript[i].grades.length; j++){
        sum += student.transcript[i].grades[j]; 
      }
      return sum /student.transcript[i].grades.length;
    }
  }
  return -1;
}


function getAverageGrade2(student, course){ //alternative method to function above
  let avg = 0;
  let found = false;

  for(let t of student.transcript){
    if(t.course === course){
      let sum = 0;
      for(let grade of  t.grades){
        sum += grade; 
      }

      avg = sum / t.grades.length;
      found = true;
      break;
    }
  }

  if(found)
    return avg;
  else 
    return -1;
}


function getAssignmentMark(student, course, num){
  for (let i = 0 ; i < student.transcript.length; i++){
    if(student.transcript[i].course === course){
      if (num < student.transcript[i].grades.length && num >= 0){
        return student.transcript[i].grades[num];
      }
    }
  }
  return -1;
}

function getAssignmentMark2(student, course, num){
  for (let t of  student.transcript){
    if(t.course === course){
      if (num < t.grades.length && num >= 0){
        return t.grades[num];
      }
    }
  }
  return -1;
}

function averageAssessment(students, courseName, assignment){

  let sum =0;
  let count = 0;

  for( let i = 0; i < students.length; i++){
    let mark = getAssignmentMark(students[i], courseName, assignment)
    if(mark !== -1){
      sum += mark;
      count ++; 
    }
  }

  if(count > 0)
    return sum /  count;

  return -1;

}

console.log("===========================");
console.log("Average grade for " + bob.fname + " " + bob.lname + " in INFO 1603 is: ", getAverageGrade(bob, 'INFO 1603'));
console.log("===========================", "\n");

console.log("===========================");
console.log("Assignment 1 grade for " + sally.fname + " " + sally.lname + " in INFO 1601 is: ", getAssignmentMark(sally, 'INFO 1601', 0));
console.log("===========================", "\n");

console.log("===========================");
console.log("Average grade for assignment 1 in INFO 1601 is: ", averageAssessment(students, 'INFO 1601', 0));
console.log("===========================", "\n");

