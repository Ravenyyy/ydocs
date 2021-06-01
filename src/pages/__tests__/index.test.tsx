import 'jest';
import Index from '../home';
import React from 'react';
import renderer, {
  ReactTestInstance,
  ReactTestRenderer,
} from 'react-test-renderer';
import { IntlProvider, setIntl } from '@@/plugin-locale/localeExports';
import zhCN from '../../locales/zh-CN';

describe.only('Page: index', () => {
  it('Render correctly', () => {
    const wrapper: ReactTestRenderer = renderer.create(
      <IntlProvider locale="zh-CN" messages={zhCN}>
        <Index />
      </IntlProvider>,
    );
    expect(wrapper.root.children.length).toBe(1);
    const outerLayer = wrapper.root.children[0] as ReactTestInstance;
    expect(outerLayer.children.length).toBe(1);
  });
});
