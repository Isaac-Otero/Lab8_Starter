// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2
test('123-456-7890 is a phone number', () => {
    expect(functions.isPhoneNumber('123-456-7890')).toBe(true);
  });
  test('(442)-230-8854 is a phone number', () => {
    expect(functions.isPhoneNumber('(442)-230-8854')).toBe(true);
  });
  test('hi is not a phone number', () => {
    expect(functions.isPhoneNumber('hi')).toBe(false);
  });
  test('(0 is not a phone number', () => {
    expect(functions.isPhoneNumber('0')).toBe(false);
  });



  test('ohlala@bing.com is an email', () => {
    expect(functions.isEmail('ohlala@bing.com')).toBe(true);
  });
  test('irotero@ucd.edu is an email', () => {
    expect(functions.isEmail('irotero@ucd.edu')).toBe(true);
  });
  test('whereheat@youtube is not an email', () => {
    expect(functions.isEmail('whereheat@youtube')).toBe(false);
  });
  test('(ayo?whonethere@food.cooooolio is not an email', () => {
    expect(functions.isEmail('ayo?whonethere@food.cooooolio')).toBe(false);
  });


  test('ohlalaba23 is a strong password', () => {
    expect(functions.isStrongPassword('ohlalaba23')).toBe(true);
  });
  test('hackmepl3ase is a strong password', () => {
    expect(functions.isStrongPassword('hackmepl3ase')).toBe(true);
  });
  test('OHBOYIHOPEIMASECUREPASSWORD  is not a strong password', () => {
    expect(functions.isStrongPassword('OHBOYIHOPEIMASECUREPASSWORD ')).toBe(false);
  });
  test('plz  is not a strong password', () => {
    expect(functions.isStrongPassword('plz ')).toBe(false);
  });

  test('01/20/2020 is a date', () => {
    expect(functions.isDate('01/20/2020')).toBe(true);
  });
  test('01/29/2005 is a date', () => {
    expect(functions.isDate('01/29/2000')).toBe(true);
  });
  test('01/29/20 is not a date', () => {
    expect(functions.isDate('01/29/20 ')).toBe(false);
  });
  test('01/xx/20 is not a date', () => {
    expect(functions.isDate('01/xx/20 ')).toBe(false);
  });

  test('#ff0000 is a hexcolor', () => {
    expect(functions.isHexColor('#ff0000')).toBe(true);
  });
  test('#ff8080 is a hexcolor', () => {
    expect(functions.isHexColor('#ff8080')).toBe(true);
  });
  test('#fvriends100 is not a hexcolor', () => {
    expect(functions.isHexColor('#fvriends100')).toBe(false);
  });
  test('ff808080 is not a hexcolor', () => {
    expect(functions.isHexColor('ff808080')).toBe(false);
  });