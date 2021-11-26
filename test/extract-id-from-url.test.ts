import {extractIdFromUrl} from '../src';

it('text content of title is equal to fake title value', async () => {
  expect(
    extractIdFromUrl(
      'https://www.notion.so/username/et-tempore-iste-36d1060897c442399eb86e1f98dd31d4',
    ),
  ).toBe('36d1060897c442399eb86e1f98dd31d4');

  expect(
    extractIdFromUrl(
      'https://www.notion.so/username/6b218cf027f54743ac7635fcbae61d18?v=c7e32351677e4d6b9936235d72a4def4',
    ),
  ).toBe('6b218cf027f54743ac7635fcbae61d18');

  expect(() => {
    extractIdFromUrl('https://www.notion.so/username/6b218cf02');
  }).toThrowError('Could not extract id from url');
});
