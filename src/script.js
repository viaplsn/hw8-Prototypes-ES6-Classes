//Basic
class Student {
    constructor(university, course, fullName, studentMarks = [5, 4, 4, 5]) {
        this.university = university;
        this.course = course;
        this.fullName = fullName;
        this.studentMarks = studentMarks;
    }
    getInfo() {
        return `Студент ${this.course}го курсу університету ${this.university}, ${this.fullName}`;
    }
    get marks() {
        return this.studentMarks
    }
    set setMarks(mark) {
        if(this.studentMarks != null) {
            return this.studentMarks.push(mark);
        }
    }
    getAverageMark() {
        if(this.studentMarks != null) {
            return this.studentMarks.reduce(callbackGetAverage, 0) / this.studentMarks.length;
        }
    }
    dismiss() {
        this.studentMarks = null;
    }
    recover() {
        this.studentMarks = [];
    }
}

function callbackGetAverage(accumulator, currentNumber) {
    return accumulator + currentNumber;
}

const student = new Student('Львівська Політехніка', 1, 'Вячеслав Плюснін');

console.log("Інформація про студента:", student.getInfo());

console.log("Початкові оцінки студента:", student.marks);

student.setMarks = 5;
console.log("Оцінки студента після поставленої 5:", student.marks);

console.log("Середній бал студента:", student.getAverageMark());

student.dismiss();
student.setMarks = 2;
console.log("Оцінки студента після відрахування:", student.marks);

student.recover();
student.setMarks = 4;
student.setMarks = 5;
console.log("Оцінки студента після відновлення:", student.marks);

//Advanced
class BudgetStudent extends Student {
    constructor(university, course, fullName, studentMarks) {
        super(university, course, fullName, studentMarks);
        this.getScholarship = function getScholarship() {
            if(this.getAverageMark() >= 4) {
                console.log('Повідомлення про отримання стипендії: "Ви отримали 1400 грн. стипендії"')
            } else if(this.studentMarks === null) {
                console.log('Повідомлення про відрахування: "Вас відраховано"');
            } else {
                console.log('Повідомлення про отримання стипендії: "Ви не набрали прохідний бал 4.0 для отримання стипендії"');
            }
        }
        setInterval(() => this.getScholarship(), 30000);
    }
}

const budgetStudent = new BudgetStudent('Львівська Політехніка', 5, 'Вячеслав Плюснін');

budgetStudent.getScholarship();

budgetStudent.dismiss();
budgetStudent.getScholarship();

budgetStudent.recover();
student.setMarks = 3;
student.setMarks = 3;
budgetStudent.getScholarship();