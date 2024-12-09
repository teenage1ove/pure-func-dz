import main from '../app'

test('if healthy return healthy', () => {
  expect(main({name: 'Kirill',health: 78})).toBe('healthy');
})

test('if wounded return wounded', () => {
  expect(main({name: 'Kirill',health: 40})).toBe('wounded');
})

test('if critical return critical', () => {
  expect(main({name: 'Kirill',health: 13})).toBe('critical');
})

test('if not object return error', () => {
  expect(main(4)).toBe('error');
})

test('if not object with name and health return error', () => {
  expect(main({name: 'Kirill'})).toBe('error');
})