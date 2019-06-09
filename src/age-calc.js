export default class AgeCalculator {
    constructor(birthdate) {
        this.date = new Date(birthdate);
        
        console.log(this.date);
    }


ageCalc() {
    let now = new Date();
    let age = now.getFullYear() - this.year;
    let month = today.getMonth() - this.month;
    
    if((month < 0) || (month === 0 && today.getDate() < this.day)) {
        age--;
    }
    
    return age;
    }

    earthAge() {
        let age = this.ageCalc()
        return age;
    }

    mercuryAge() {
        let age = this.ageCalc();
        return age * 0.24;
    }
    
    venusAge() {
        let age = this.ageCalc();
        return age * 0.62;
    }
    
    marsAge() {
        let age = this.ageCalc();
        return age * 1.88;
    }

    jupiterAge() {
        let age = this.ageCalc();
        return age * 11.86;
    }
}