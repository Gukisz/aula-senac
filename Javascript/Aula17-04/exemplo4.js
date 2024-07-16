const course = {
    name: 'Noturno Frontend',
    languages: ['JS', 'CSS', 'HTML']
}
course.numberOfStudents = 50 // pode fazer das duas formas com chaves e sem chaves
course['numberOfStudents'] = 50

console.log(course)