export class AgeCalc {
    constructor(birthdate) {
        this.date = new Date(birthdate);
    }


    earthAge() {
        let now = new Date();
        let monthDiff = now.getMonth() - (this.date.getMonth());
        let dayDiff = now.getDate() - (this.date.getDate());
        let age = now.getFullYear() - (this.date.getFullYear());
        console.log("this month: " + now.getMonth() + " birthMonth: " + this.date.getMonth());
        console.log("this year: " + now.getFullYear() + " birthYear: " + this.date.getFullYear());
        console.log("this day: " + now.getDate() + "birthDay: " + this.date.getDate());
        console.log(now);
        if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
            age--;
        }
        
        return age;
    }

    mercuryAge() {
        let age = this.earthAge();
        return age * 0.24;
    }
    
    venusAge() {
        let age = this.earthAge();
        return age * 0.62;
    }
    
    marsAge() {
        let age = this.earthAge();
        return age * 1.88;
    }

    jupiterAge() {
        let age = this.earthAge();
        return age * 11.86;
    }
}