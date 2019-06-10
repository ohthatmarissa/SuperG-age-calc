
import { AgeCalc } from '../src/age-calc.js';

describe('AgeCalc', function() {

    it('should test correct age on earth', function() {
        let year = 1990;
        let month = 5 - 1; // This is May, but JS is weird and represents months 0-11
        let day = 25;
        let testDate = new AgeCalc(new Date(year, month, day));
        
        let newAge = testDate.earthAge();
    
        expect(newAge).toEqual(29);
        expect(newAge).not.toEqual(32);
      });
    
      it('should test users correct age on mercury', function() {
        let testDate = new AgeCalc(new Date(1990, 5, 25));
        let dob = testDate.date;
        let mercuryAge = testDate.mercuryAge(dob);
    
        expect(mercuryAge).toEqual(120);
        expect(mercuryAge).not.toEqual(99);
      });
    
      it('should test users correct age on venus', function() {
        let testDate = new AgeCalc(new Date(1990, 5, 25));
        let dob = testDate.date;
        let venusAge = testDate.venusAge(dob);
    
        expect(venusAge).toEqual(46);
        expect(venusAge).not.toEqual(66);
      });
    
      it('should test users correct age on mars', function() {
        let testDate = new AgeCalc(new Date(1990, 5, 25));
        let dob = testDate.date;
        let marsAge = testDate.marsAge(dob);
    
        expect(marsAge).toEqual(15);
        expect(marsAge).not.toEqual(51);
      });
    
      it('should test users correct age on jupiter', function() {
        let testDate = new AgeCalc(new Date(1990, 5, 25));
        let dob = testDate.date;
        let jupiterAge = testDate.jupiterAge(dob);
    
        expect(jupiterAge).toEqual(2);
        expect(jupiterAge).not.toEqual(34);
      });
    
    });
