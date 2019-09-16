import isPrime from './isPrime';

describe('isPrime', () => {
    it('should return true if the number is prime', () =>{
        expect(isPrime(7)).toBeTruthy();
        expect(isPrime(7)).toBe(true);
    });

    it('should return false if the number is not prime or not a number', () =>{
        expect(isPrime(10)).toBeFalsy();
        expect(isPrime(10)).toBe(false);
        expect(isPrime('test')).toBe(false);
    });
});

