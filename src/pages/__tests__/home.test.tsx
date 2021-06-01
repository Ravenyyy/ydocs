import 'jest';
import Index from '../home';
import React from 'react';
import renderer from 'react-test-renderer';
import { IntlProvider } from 'umi';
import zhCN from '../../locales/zh-CN';

describe('Page: index', () => {
  it('Render correctly', () => {
    const wrapper = renderer.create(
      <IntlProvider locale="zh-CN" messages={zhCN}>
        <Index />
      </IntlProvider>,
    );
    expect(wrapper.root.children.length).toBe(1);
    const content = wrapper.root;
    expect(content.findByType('h1').children[0]).toBe('首页');
    expect(content.findByType('h2').children[0]).toBe('文档仓库');
  });
});
