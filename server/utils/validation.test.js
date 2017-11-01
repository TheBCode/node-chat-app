const expect = require('expect');

//import isRealString
const {isRealString} = require('./validation');
//isRealString
describe('isRealString', () => {
    it('should reject non-string value', () => {
        var res = isRealString(98);
        expect(res).toBe(false);
    });

    it('should reject string w only spaces', () => {
        var res = isRealString('     ');
        expect(res).toBe(false);

    });

    it('should allow string w non-space characters', () => {
        var res = isRealString('  Byron  ');
        expect(res).toBe(true);
    });
});