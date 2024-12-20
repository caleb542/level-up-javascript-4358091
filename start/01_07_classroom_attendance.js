/* Destructuring Arrays */




 function getStudents(classroom) {
  let {hasTeachingAssistant, classlist} = classroom;
  let teacher, ta, students;

   if( hasTeachingAssistant ){
     [teacher, ta, ...students] = classlist;
   } else {
      [teacher, ...students] = classlist;
   }
   return students
  }

console.log( getStudents({
  hasTeachingAssistant: false,
  classlist : ["Rashida", "John", "Roman", "Lisa", "Omair", "Lukas"]
})
)
