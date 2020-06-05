import utils from '../';

describe('Utils', () => {
  describe('isNullOrUndefined', () => {
    describe('When is a null value', () => {
      it('should be true', () => {
        expect(utils.isNullOrUndefined(null)).toBeTruthy();
      });
    });

    describe('When is an undefined value', () => {
      it('should be true', () => {
        expect(utils.isNullOrUndefined(undefined)).toBeTruthy();
      });
    });

    describe('When is not null or undefined', () => {
      it('should be false', () => {
        expect(utils.isNullOrUndefined(1)).toBeFalsy();
      });
    });
  });

  describe('isEmpty', () => {
    describe('When is a string and it lenght is higher than 0', () => {
      it('should be false', () => {
        expect(utils.isEmpty('Hello')).toBeFalsy();
      });
    });

    describe('When is an empty string', () => {
      it('should be true', () => {
        expect(utils.isEmpty('')).toBeTruthy();
      });
    });
  });
});
