const Manager = require('../lib/manager');
const manager = new Manager('pinar', '1234567', 'pinaraktas81@gmail.com', '1111');

test('test if we can get the constructor values for the manager object', () => {
    expect(manager.name).toBe('pinar');
    expect(manager.id).toBe('1234567');
    expect(manager.email).toBe('pinaraktas81@gmail.com');
    expect(manager.officeNumber).toBe('1111');
});

test('test if we can get the name from the getName() method', () => {
    expect(manager.getName()).toBe('pinar');
});

test('test if we can get the id from the getId() method', () => {
    expect(manager.getId()).toBe('1234567');
});

test('test if we can get the email from the getEmail() method', () => {
    expect(manager.getEmail()).toBe('pinaraktas81@gmail.com');
});

test('test if we can get the office number from the getOfficeNumber() method', () => {
    expect(manager.getOfficeNumber()).toBe('1111');
});

test('test if we can get the role from the getRole() method', () => {
    expect(manager.getRole()).toBe('Manager');
});