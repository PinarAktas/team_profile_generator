const Engineer = require('../lib/engineer');
const engineer = new Engineer('pinar', '1234567', 'pinaraktas81@gmail.com', 'PinarAktas');

test('test if we can get the constructor values for the engineer object', () => {
    expect(engineer.name).toBe('pinar');
    expect(engineer.id).toBe('1234567');
    expect(engineer.email).toBe('pinaraktas81@gmail.com');
    expect(engineer.githubUsername).toBe('PinarAktas');
});

test('test if we can get the name from the getName() method', () => {
    expect(engineer.getName()).toBe('pinar');
});

test('test if we can get the id from the getId() method', () => {
    expect(engineer.getId()).toBe('1234567');
});

test('test if we can get the email from the getEmail() method', () => {
    expect(engineer.getEmail()).toBe('pinaraktas81@gmail.com');
});

test('test if we can get the github username from the getGithub() method', () => {
    expect(engineer.getGithub()).toBe('PinarAktas');
});

test('test if we can get the role from the getRole() method', () => {
    expect(engineer.getRole()).toBe('Engineer');
});