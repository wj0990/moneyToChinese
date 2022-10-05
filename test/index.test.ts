import '../src';
import amountToChinese from '../src/index';
it('isInteger string test case', async () => {
  expect(amountToChinese('12')).toEqual("壹拾贰元整");
});

it('number test case', async () => {
  expect(amountToChinese('12.32')).toEqual("壹拾贰元叁角贰分");
  expect(12).toEqual(12);
});