const Employee = require('../lib/employee');
const employee = new Employee('pinar', '1234567', 'pinaraktas81@gmail.com');

test('test if we can get the constructor values for the employee object', () => {
    expect(employee.name).toBe('pinar');
    expect(employee.id).toBe('1234567');
    expect(employee.email).toBe('pinaraktas81@gmail.com');
});

test('test if we can get the name from the getName() method', () => {
    expect(employee.getName()).toBe('pinar');
});

test('test if we can get the id from the getId() method', () => {
    expect(employee.getId()).toBe('1234567');
});

test('test if we can get the email from the getEmail() method', () => {
    expect(employee.getEmail()).toBe('pinaraktas81@gmail.com');
});

test('test if we can get the role from the getRole() method', () => {
    expect(employee.getRole()).toBe('Employee');
});