const generate_password = require('random-password-generator'); 
describe('generate_password function', () => {
    test('generates a password of default length 12 and medium strength', () => {
        const password = generate_password();
        expect(password).toHaveLength(12);
        expect(password).toMatch(/[a-z]/);
        expect(password).toMatch(/[A-Z]/);
        expect(password).toMatch(/[0-9]/);
    });

    test('generates a password of length 16 and strong strength', () => {
        const password = generate_password(16, 'strong');
        expect(password).toHaveLength(16);
        expect(password).toMatch(/[a-z]/);
        expect(password).toMatch(/[A-Z]/);
        expect(password).toMatch(/[0-9]/);
        expect(password).toMatch(/[!@#$%^&*()-_=+[\]{}|;:,.<>?]/);
    });


    test('generates a password of length 8 and weak strength', () => {
        const password = generate_password(8, 'weak');
        expect(password).toHaveLength(8);
        expect(password).toMatch(/[a-z]/);
        expect(password).toMatch(/[A-Z]/);
    });

    test('generates a password of length 20 and medium strength', () => {
        const password = generate_password(20, 'medium');
        expect(password).toHaveLength(20);
        expect(password).toMatch(/[a-z]/);
        expect(password).toMatch(/[A-Z]/);
        expect(password).toMatch(/[0-9]/);
    });
});