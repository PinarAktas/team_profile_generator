const Intern = require('../lib/intern');
const intern = new Intern('pinar', '1234567', 'pinaraktas81@gmail.com', 'Upenn');

test('test if we can get the constructor values for the engineer object', () => {
    expect(intern.name).toBe('pinar');
    expect(intern.id).toBe('1234567');
    expect(intern.email).toBe('pinaraktas81@gmail.com');
    expect(intern.school).toBe('Upenn');
});

test('test if we can get the name from the getName() method', () => {
    expect(intern.getName()).toBe('pinar');
});

test('test if we can get the id from the getId() method', () => {
    expect(intern.getId()).toBe('1234567');
});

test('test if we can get the email from the getEmail() method', () => {
    expect(intern.getEmail()).toBe('pinaraktas81@gmail.com');
});

test('test if we can get the school name from the getSchool() method', () => {
    expect(intern.getSchool()).toBe('Upenn');
});

test('test if we can get the role from the getRole() method', () => {
    expect(intern.getRole()).toBe('Intern');
});