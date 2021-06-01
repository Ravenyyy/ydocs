import 'jest';
import BasicLayout from '..';
import React from 'react';
import renderer, {
  ReactTestInstance,
  ReactTestRenderer,
} from 'react-test-renderer';
import zhCN from '../../locales/zh-CN';

import {
  IntlProvider,
  setIntl,
  setLocale,
} from '@@/plugin-locale/localeExports';

describe.skip('Layout: BasicLayout', () => {
  it('Render correctly', () => {
    const wrapper: ReactTestRenderer = renderer.create(
      <IntlProvider locale={'zh-CN'} messages={zhCN} defaultLocale={'zh-CN'}>
        <BasicLayout />
      </IntlProvider>,
    );
    expect(wrapper.root.children.length).toBe(1);
  });
});
