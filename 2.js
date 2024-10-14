const studentData = {
    name: "Amaan",
    age: 18,
    grade: 'A',
}
function student(updateGrade) {
    studentData.grade = updateGrade;
}
student('B')
console.log(studentData)