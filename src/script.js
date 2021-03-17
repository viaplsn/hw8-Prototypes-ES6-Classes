//Basic
class Student {
    constructor(university, course, fullName, studentMarks = [5, 4, 4, 5], studentStatus = true) {
        this.university = university;
        this.course = course;
        this.fullName = fullName;
        this.studentMarks = studentMarks;
        this.studentStatus = studentStatus;
    }
    getInfo() {
        return `Студент ${this.course}го курсу університету ${this.university}, ${this.fullName}`;
    }
    get marks() {
        if(this.studentStatus != false) {
            return this.studentMarks
        } else {
            return null;
        }
    }
    set setMarks(mark) {
        if(this.studentStatus != false) {
            return this.studentMarks.push(mark);
        } else {
            return null;
        }
    }
    getAverageMark() {
        if(this.studentStatus != false) {
            return this.studentMarks.reduce(callbackGetAverage, 0) / this.studentMarks.length;
        } else {
            return null;
        }
    }
    dismiss() {
        this.studentStatus = false;
    }
    recover() {
        this.studentStatus = true;
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
console.log("Оцінки студента після відновлення та виставленої 4ки:", student.marks);

//Advanced
class BudgetStudent extends Student {
    constructor(university, course, fullName, studentMarks, studentStatus) {
        super(university, course, fullName, studentMarks, studentStatus);
        this.getScholarship = function getScholarship() {
            if(this.getAverageMark() >= 4) {
                console.log('Повідомлення про отримання стипендії: "Ви отримали 1400 грн. стипендії"')
            } else if(this.studentStatus != true) {
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
budgetStudent.getScholarship();