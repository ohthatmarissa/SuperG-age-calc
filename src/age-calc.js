export default class AgeCalc {
    constructor(birthdate) {
        let now = new Date();
        this.date = new Date(birthdate);
        this.year = now.getFullYear();
        this.age = year - (this.birthdate.getFullYear());
        this.month = now.getmonthonth() - (this.birthdate.getmonthonth());
        if (month < 0 || (month === 0 && now.getDate() < (this.birthdate.getDate()))) {
          age--;
        }
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