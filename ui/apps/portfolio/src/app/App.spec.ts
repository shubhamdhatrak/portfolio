import { describe, it, expect, beforeAll } from 'vitest';
import { mount } from '@vue/test-utils';
import App from './App.vue';

beforeAll(() => {
  class MockIntersectionObserver {
    observe = () => undefined;
    unobserve = () => undefined;
    disconnect = () => undefined;
  }

  global.IntersectionObserver = MockIntersectionObserver as unknown as typeof IntersectionObserver;
});

describe('App', () => {
  it('renders profile name', () => {
    const wrapper = mount(App);
    expect(wrapper.text()).toContain('Shubham Dhatrak');
  });

  it('renders experience section', () => {
    const wrapper = mount(App);
    expect(wrapper.text()).toContain('JumpCloud');
    expect(wrapper.text()).toContain('Experience');
  });

  it('renders navigation links', () => {
    const wrapper = mount(App);
    expect(wrapper.text()).toContain('Skills');
    expect(wrapper.text()).toContain('Education');
  });

  it('renders experience chapters', () => {
    const wrapper = mount(App);
    expect(wrapper.text()).toContain('Security & Access Governance');
  });
});
