import getHealthStatus from '../src/health.js';

test('healthy status', () => {
  expect(getHealthStatus({ name: 'Маг', health: 90 })).toBe('healthy');
});

test('wounded status', () => {
  expect(getHealthStatus({ name: 'Маг', health: 50 })).toBe('wounded');
});

test('critical status', () => {
  expect(getHealthStatus({ name: 'Маг', health: 10 })).toBe('critical');
});
