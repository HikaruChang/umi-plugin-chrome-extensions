import { join } from 'path';
import { Service } from 'umi';
import { render } from '@testing-library/react';

const fixtures = join(__dirname, './fixtures');

test('normal tmp', async () => {
  const cwd = join(fixtures, 'normal');
  const service = new Service({
    cwd,
    plugins: [require.resolve('./index')],
  });
  // 用于产生临时文件
  await service.run({
    name: 'g',
    args: {
      _: ['g', 'tmp'],
    },
  });

  // eslint-disable-next-line global-require,import/no-dynamic-require
  const reactNode = require(join(cwd, '.umi-test', 'umi.ts')).default;
  const { container } = render(reactNode);
  expect(container.textContent).toEqual('');
});
