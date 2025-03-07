'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = void 0;
var _Box2 = _interopRequireDefault(require('@mui/material/Box'));
var _react = _interopRequireDefault(require('react'));
var _reactDoubleScrollbar = _interopRequireDefault(
  require('react-double-scrollbar')
);
var horizontalScrollContainer = {
  overflowX: 'auto',
  position: 'relative',
  '& ::-webkit-scrollbar': {
    WebkitAppearance: 'none'
  },
  '& ::-webkit-scrollbar:horizontal': {
    height: 8
  },
  '& ::-webkit-scrollbar-thumb': {
    borderRadius: 4,
    border: '2px solid white',
    backgroundColor: 'rgba(0, 0, 0, .3)'
  }
};
var ScrollBar = function ScrollBar(_ref) {
  var _double = _ref['double'],
    children = _ref.children;
  if (_double) {
    return /*#__PURE__*/ _react['default'].createElement(
      _reactDoubleScrollbar['default'],
      null,
      children
    );
  } else {
    return /*#__PURE__*/ _react['default'].createElement(
      _Box2['default'],
      {
        sx: horizontalScrollContainer
      },
      children
    );
  }
};
var _default = ScrollBar;
exports['default'] = _default;
