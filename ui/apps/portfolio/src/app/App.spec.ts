import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import App from './App.vue';

describe('App', () => {
  it('renders profile name', () => {
    const wrapper = mount(App);
    expect(wrapper.text()).toContain('Shubham Dhatrak');
  });

  it('renders experience section', () => {
    const wrapper = mount(App);
    expect(wrapper.text()).toContain('JumpCloud');
  });

  it('renders navigation links', () => {
    const wrapper = mount(App);
    expect(wrapper.text()).toContain('Experience');
    expect(wrapper.text()).toContain('Projects');
  });
});
