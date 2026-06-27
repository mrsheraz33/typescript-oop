// Static Keyword
class Student {
    static totalStudents = 0;
    name;
    constructor(n) {
        this.name = n;
        Student.totalStudents++;
    }
    static getSchoolRules() {
        console.log("School Rule: You must come at 8 am");
    }
}
// you can access static method or
// property without creating an object so let's check
Student.getSchoolRules();
console.log(Student.totalStudents); // 0
// So now creating an object of Student class
const s1 = new Student("Ali");
const s2 = new Student("Sheraz");
const s3 = new Student("Usman");
// so now check again the static property
console.log(`The total students is : ${Student.totalStudents}`);
export {};
