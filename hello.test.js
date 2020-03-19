const hello = require('./hello');

test('outputs the correct string', () => {
  expect(hello()).toBe("Hello world!");
});
test('outputs the correct string x2', () => {
  expect(hello()).toBe("Hello world!");
});
test('outputs the correct string x3', () => {
  expect(hello()).toBe("Hello world!");
});
