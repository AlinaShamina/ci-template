import { getLevel } from '../src/getLevel.js';
import fetchData from '../src/http.js';

jest.mock('../src/http.js');

test('should return level on success', () => {
  fetchData.mockReturnValue({ status: 'ok', level: 10 });

  const result = getLevel(1);
  expect(result).toBe('Ваш текущий уровень: 10');
});

test('should return error message on failure', () => {
  fetchData.mockReturnValue({ status: 'error' });

  const result = getLevel(1);
  expect(result).toBe('Информация об уровне временно недоступна');
});
