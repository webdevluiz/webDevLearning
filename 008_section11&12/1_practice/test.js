// // quest 1
// let onlineCourse = "Gustavo guanabara";
// let priceCourse = 99.00;
// let goalsCourse = ["HTML", "CSS", "Js"];

// //quest 2
// // console.log(onlineCourse, priceCourse, goalsCourse[0], goalsCourse[1]);

// //quest 3
// // let resumeCourse = [onlineCourse, priceCourse, goalsCourse[0], goalsCourse[1], goalsCourse[2]];
// let resumeCourse = {name: onlineCourse, price: priceCourse, goals: goalsCourse};

// //quest 4 - o que significa output?

// //quest 5
// // let n;
// function command() {
//     console.log(resumeCourse.name);
//     console.log(resumeCourse.price);
//     console.log(resumeCourse.goals[0]);
//     console.log(resumeCourse.goals[1]);
//     console.log(resumeCourse.goals[2]);
//     // return resumeCourse.name;
// }
// command()

let person = {
    name: 'luiz',
    ola() {
        return "Olá Mundo, me chamo "+this.name;
    }
};
console.log(person.ola());