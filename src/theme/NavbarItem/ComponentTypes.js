import React from 'react';
import ComponentTypes from '@theme-original/NavbarItem/ComponentTypes';
import SearchButton from '@site/src/components/SearchButton';

// 自定义搜索按钮组件
function CustomSearchButton(props) {
  return <SearchButton {...props} />;
}

export default {
  ...ComponentTypes,
  'custom-search-button': CustomSearchButton,
};