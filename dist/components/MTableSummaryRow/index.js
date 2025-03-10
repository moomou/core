'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
var _typeof3 = require('@babel/runtime/helpers/typeof');
Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.MTableSummaryRow = MTableSummaryRow;
exports['default'] = void 0;
var _TableRow2 = _interopRequireDefault(require('@mui/material/TableRow'));
var _typeof2 = _interopRequireDefault(require('@babel/runtime/helpers/typeof'));
var _toConsumableArray2 = _interopRequireDefault(
  require('@babel/runtime/helpers/toConsumableArray')
);
var _TableCell2 = _interopRequireDefault(require('@mui/material/TableCell'));
var _defineProperty2 = _interopRequireDefault(
  require('@babel/runtime/helpers/defineProperty')
);
var React = _interopRequireWildcard(require('react'));
var _utils = require('../../utils');
var CommonValues = _interopRequireWildcard(
  require('../../utils/common-values')
);
var _store = require('../../store');
var _propTypes = _interopRequireDefault(require('prop-types'));
function _getRequireWildcardCache(nodeInterop) {
  if (typeof WeakMap !== 'function') return null;
  var cacheBabelInterop = new WeakMap();
  var cacheNodeInterop = new WeakMap();
  return (_getRequireWildcardCache = function _getRequireWildcardCache(
    nodeInterop
  ) {
    return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
  })(nodeInterop);
}
function _interopRequireWildcard(obj, nodeInterop) {
  if (!nodeInterop && obj && obj.__esModule) {
    return obj;
  }
  if (
    obj === null ||
    (_typeof3(obj) !== 'object' && typeof obj !== 'function')
  ) {
    return { default: obj };
  }
  var cache = _getRequireWildcardCache(nodeInterop);
  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }
  var newObj = {};
  var hasPropertyDescriptor =
    Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var key in obj) {
    if (key !== 'default' && Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor
        ? Object.getOwnPropertyDescriptor(obj, key)
        : null;
      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }
  newObj['default'] = obj;
  if (cache) {
    cache.set(obj, newObj);
  }
  return newObj;
}
function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly &&
      (symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      })),
      keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2
      ? ownKeys(Object(source), !0).forEach(function (key) {
          (0, _defineProperty2['default'])(target, key, source[key]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(
          target,
          Object.getOwnPropertyDescriptors(source)
        )
      : ownKeys(Object(source)).forEach(function (key) {
          Object.defineProperty(
            target,
            key,
            Object.getOwnPropertyDescriptor(source, key)
          );
        });
  }
  return target;
}
function MTableSummaryRow(_ref) {
  var columns = _ref.columns,
    rowProps = _ref.rowProps,
    renderSummaryRow = _ref.renderSummaryRow;
  var options = (0, _store.useOptionStore)();
  if (!renderSummaryRow) {
    return null;
  }
  function renderPlaceholderColumn(key) {
    var numIcons =
      arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
    var size = CommonValues.elementSize(
      _objectSpread(
        _objectSpread({}, rowProps),
        {},
        {
          options: options
        }
      )
    );
    var width =
      numIcons *
      CommonValues.baseIconSize(
        _objectSpread(
          _objectSpread({}, rowProps),
          {},
          {
            options: options
          }
        )
      );
    return /*#__PURE__*/ React.createElement(_TableCell2['default'], {
      key: 'placeholder.'.concat(key),
      size: size,
      padding: 'none',
      style: {
        width: width,
        padding: '0px 5px',
        boxSizing: 'border-box'
      }
    });
  }
  var placeholderLeftColumns = [];
  var placeholderRightColumns = [];
  var placeholderKey = 0;

  // Create empty columns corresponding to selection, actions, detail panel, and tree data icons
  if (options.selection) {
    placeholderLeftColumns.push(renderPlaceholderColumn(placeholderKey++));
  }
  if (
    rowProps.actions &&
    rowProps.actions.filter(function (a) {
      return a.position === 'row' || typeof a === 'function';
    }).length > 0
  ) {
    var numRowActions = CommonValues.rowActions(rowProps).length;
    if (options.actionsColumnIndex === -1) {
      placeholderRightColumns.push(
        renderPlaceholderColumn(placeholderKey++, numRowActions)
      );
    } else if (options.actionsColumnIndex >= 0) {
      placeholderLeftColumns.push(
        renderPlaceholderColumn(placeholderKey++, numRowActions)
      );
    }
  }
  if (rowProps.detailPanel && options.showDetailPanelIcon) {
    if (options.detailPanelColumnAlignment === 'right') {
      placeholderRightColumns.push(renderPlaceholderColumn(placeholderKey++));
    } else {
      placeholderLeftColumns.push(renderPlaceholderColumn(placeholderKey++));
    }
  }
  if (rowProps.isTreeData) {
    placeholderLeftColumns.push(renderPlaceholderColumn(placeholderKey++));
  }
  return /*#__PURE__*/ React.createElement(
    _TableRow2['default'],
    null,
    placeholderLeftColumns,
    (0, _toConsumableArray2['default'])(columns)
      .sort(function (a, b) {
        return a.tableData.columnOrder - b.tableData.columnOrder;
      })
      .map(function (column, index) {
        var summaryColumn = renderSummaryRow({
          index: column.tableData.columnOrder,
          column: column,
          columns: columns
        });
        var cellAlignment =
          column.align !== undefined
            ? column.align
            : ['numeric', 'currency'].indexOf(column.type) !== -1
            ? 'right'
            : 'left';
        var value = '';
        var style = (0, _utils.getStyle)({
          columnDef: column,
          scrollWidth: 0
        });
        if (
          (0, _typeof2['default'])(summaryColumn) === 'object' &&
          summaryColumn !== null
        ) {
          value = summaryColumn.value;
          style = summaryColumn.style;
        } else {
          value = summaryColumn;
        }
        return /*#__PURE__*/ React.createElement(
          _TableCell2['default'],
          {
            key: index,
            style: style,
            align: cellAlignment
          },
          value
        );
      }),
    placeholderRightColumns
  );
}
MTableSummaryRow.propTypes = {
  columns: _propTypes['default'].array,
  renderSummaryRow: _propTypes['default'].func
};
var _default = MTableSummaryRow;
exports['default'] = _default;
