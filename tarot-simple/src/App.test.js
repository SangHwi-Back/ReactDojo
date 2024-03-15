import ResultGenerator from './resultGenerator';
import data from './data';

test('유닛 테스트 ResultGenerator.getSpreadDescription', () => {
  for (let i = 0; i < data.spreads.length; i++) {
    const result = ResultGenerator.getSpreadDescription(i);
    expect(result).toBe(data.spreads[i].description);
  }
});
