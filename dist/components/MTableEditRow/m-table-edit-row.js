'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
var _typeof = require('@babel/runtime/helpers/typeof');
Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = void 0;
var _extends2 = _interopRequireDefault(
  require('@babel/runtime/helpers/extends')
);
var _objectWithoutProperties2 = _interopRequireDefault(
  require('@babel/runtime/helpers/objectWithoutProperties')
);
var _classCallCheck2 = _interopRequireDefault(
  require('@babel/runtime/helpers/classCallCheck')
);
var _createClass2 = _interopRequireDefault(
  require('@babel/runtime/helpers/createClass')
);
var _assertThisInitialized2 = _interopRequireDefault(
  require('@babel/runtime/helpers/assertThisInitialized')
);
var _inherits2 = _interopRequireDefault(
  require('@babel/runtime/helpers/inherits')
);
var _possibleConstructorReturn2 = _interopRequireDefault(
  require('@babel/runtime/helpers/possibleConstructorReturn')
);
var _getPrototypeOf2 = _interopRequireDefault(
  require('@babel/runtime/helpers/getPrototypeOf')
);
var _defineProperty2 = _interopRequireDefault(
  require('@babel/runtime/helpers/defineProperty')
);
var _TableCell = _interopRequireDefault(require('@mui/material/TableCell'));
var _TableRow = _interopRequireDefault(require('@mui/material/TableRow'));
var _Typography = _interopRequireDefault(require('@mui/material/Typography'));
var _propTypes = _interopRequireDefault(require('prop-types'));
var _react = _interopRequireDefault(require('react'));
var _utils = require('../../utils');
var CommonValues = _interopRequireWildcard(
  require('../../utils/common-values')
);
var _validate = require('../../utils/validate');
var _excluded = ['editComponent'],
  _excluded2 = [
    'detailPanel',
    'isTreeData',
    'onRowClick',
    'onRowSelected',
    'onTreeExpandChanged',
    'onToggleDetailPanel',
    'onEditingApproved',
    'onEditingCanceled',
    'getFieldValue',
    'components',
    'icons',
    'columns',
    'localization',
    'options',
    'actions',
    'errorState',
    'onBulkEditRowChanged',
    'scrollWidth'
  ];
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
    (_typeof(obj) !== 'object' && typeof obj !== 'function')
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
function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();
  return function _createSuperInternal() {
    var Super = (0, _getPrototypeOf2['default'])(Derived),
      result;
    if (hasNativeReflectConstruct) {
      var NewTarget = (0, _getPrototypeOf2['default'])(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return (0, _possibleConstructorReturn2['default'])(this, result);
  };
}
function _isNativeReflectConstruct() {
  if (typeof Reflect === 'undefined' || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === 'function') return true;
  try {
    Boolean.prototype.valueOf.call(
      Reflect.construct(Boolean, [], function () {})
    );
    return true;
  } catch (e) {
    return false;
  }
}
/**
 *
 *
 *
 *
 *
 *
 *
 *
 * THIS FILE IS HERE FOR HISTORICAL/PORTING PURPOSES
 *
 *
 *
 *
 * IT IS NOT CURRENTLY IN USE
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 */ /* eslint-disable no-unused-vars */
/* eslint-enable no-unused-vars */
var MTableEditRow = /*#__PURE__*/ (function (_React$Component) {
  (0, _inherits2['default'])(MTableEditRow, _React$Component);
  var _super = _createSuper(MTableEditRow);
  function MTableEditRow(props) {
    var _this;
    (0, _classCallCheck2['default'])(this, MTableEditRow);
    _this = _super.call(this, props);
    (0, _defineProperty2['default'])(
      (0, _assertThisInitialized2['default'])(_this),
      'handleSave',
      function () {
        _this.props.onEditingApproved(
          _this.props.mode,
          _this.state.data,
          _this.props.data
        );
      }
    );
    (0, _defineProperty2['default'])(
      (0, _assertThisInitialized2['default'])(_this),
      'handleKeyDown',
      function (e) {
        if (e.keyCode === 13 && e.target.type !== 'textarea') {
          _this.handleSave();
        } else if (
          e.keyCode === 13 &&
          e.target.type === 'textarea' &&
          e.shiftKey
        ) {
          _this.handleSave();
        } else if (e.keyCode === 27) {
          _this.props.onEditingCanceled(_this.props.mode, _this.props.data);
        }
      }
    );
    _this.state = {
      data: props.data
        ? JSON.parse(JSON.stringify(props.data))
        : _this.createRowData()
    };
    return _this;
  }
  (0, _createClass2['default'])(MTableEditRow, [
    {
      key: 'createRowData',
      value: function createRowData() {
        return this.props.columns
          .filter(function (column) {
            return 'initialEditValue' in column && column.field;
          })
          .reduce(function (prev, column) {
            prev[column.field] = column.initialEditValue;
            return prev;
          }, {});
      }
    },
    {
      key: 'renderColumns',
      value: function renderColumns() {
        var _this2 = this;
        var size = CommonValues.elementSize(this.props);
        var mapArr = this.props.columns
          .filter(function (columnDef) {
            return !columnDef.hidden && !(columnDef.tableData.groupOrder > -1);
          })
          .sort(function (a, b) {
            return a.tableData.columnOrder - b.tableData.columnOrder;
          })
          .map(function (columnDef, index) {
            var value =
              typeof _this2.state.data[columnDef.field] !== 'undefined'
                ? _this2.state.data[columnDef.field]
                : (0, _utils.selectFromObject)(
                    _this2.state.data,
                    columnDef.field
                  );
            var getCellStyle = function getCellStyle(columnDef, value) {
              var cellStyle = {
                color: 'inherit'
              };
              if (typeof columnDef.cellStyle === 'function') {
                cellStyle = _objectSpread(
                  _objectSpread({}, cellStyle),
                  columnDef.cellStyle(value, _this2.props.data)
                );
              } else {
                cellStyle = _objectSpread(
                  _objectSpread({}, cellStyle),
                  columnDef.cellStyle
                );
              }
              if (columnDef.disableClick) {
                cellStyle.cursor = 'default';
              }
              return _objectSpread({}, cellStyle);
            };
            var style = {};
            if (index === 0) {
              style.paddingLeft = 24 + _this2.props.level * 20;
            }
            var allowEditing = false;
            if (columnDef.editable === undefined) {
              allowEditing = true;
            }
            if (columnDef.editable === 'always') {
              allowEditing = true;
            }
            if (columnDef.editable === 'onAdd' && _this2.props.mode === 'add') {
              allowEditing = true;
            }
            if (
              columnDef.editable === 'onUpdate' &&
              _this2.props.mode === 'update'
            ) {
              allowEditing = true;
            }
            if (typeof columnDef.editable === 'function') {
              allowEditing = columnDef.editable(columnDef, _this2.props.data);
            }
            if (!columnDef.field || !allowEditing) {
              var readonlyValue = _this2.props.getFieldValue(
                _this2.state.data,
                columnDef
              );
              return /*#__PURE__*/ _react['default'].createElement(
                _this2.props.components.Cell,
                {
                  size: size,
                  icons: _this2.props.icons,
                  columnDef: columnDef,
                  value: readonlyValue,
                  key: columnDef.tableData.id,
                  rowData: _this2.props.data,
                  style: getCellStyle(columnDef, value)
                }
              );
            } else {
              var editComponent = columnDef.editComponent,
                cellProps = (0, _objectWithoutProperties2['default'])(
                  columnDef,
                  _excluded
                );
              var EditComponent =
                editComponent || _this2.props.components.EditField;
              var error = (0, _validate.validateInput)(
                columnDef,
                _this2.state.data
              );
              return /*#__PURE__*/ _react['default'].createElement(
                _TableCell['default'],
                {
                  size: size,
                  key: columnDef.tableData.id,
                  align:
                    ['numeric'].indexOf(columnDef.type) !== -1
                      ? 'right'
                      : 'left',
                  style: getCellStyle(columnDef, value)
                },
                /*#__PURE__*/ _react['default'].createElement(EditComponent, {
                  key: columnDef.tableData.id,
                  columnDef: cellProps,
                  value: value,
                  error: !error.isValid,
                  helperText: error.helperText,
                  locale: _this2.props.localization.dateTimePickerLocalization,
                  rowData: _this2.state.data,
                  onChange: function onChange(value) {
                    var data = _objectSpread({}, _this2.state.data);
                    (0, _utils.setObjectByKey)(data, columnDef.field, value);
                    // data[columnDef.field] = value;
                    _this2.setState(
                      {
                        data: data
                      },
                      function () {
                        if (_this2.props.onBulkEditRowChanged) {
                          _this2.props.onBulkEditRowChanged(
                            _this2.props.data,
                            data
                          );
                        }
                      }
                    );
                  },
                  onRowDataChange: function onRowDataChange(data) {
                    _this2.setState(
                      {
                        data: data
                      },
                      function () {
                        if (_this2.props.onBulkEditRowChanged) {
                          _this2.props.onBulkEditRowChanged(
                            _this2.props.data,
                            data
                          );
                        }
                      }
                    );
                  }
                })
              );
            }
          });
        return mapArr;
      }
    },
    {
      key: 'renderActions',
      value: function renderActions() {
        var _this3 = this;
        if (this.props.mode === 'bulk') {
          return;
        }
        var size = CommonValues.elementSize(this.props);
        var localization = _objectSpread(
          _objectSpread({}, MTableEditRow.defaultProps.localization),
          this.props.localization
        );
        var isValid = this.props.columns.every(function (column) {
          var error = (0, _validate.validateInput)(column, _this3.state.data);
          return error.isValid;
        });
        var actions = [
          {
            icon: this.props.icons.Check,
            tooltip: localization.saveTooltip,
            disabled: !isValid,
            onClick: this.handleSave
          },
          {
            icon: this.props.icons.Clear,
            tooltip: localization.cancelTooltip,
            onClick: function onClick() {
              _this3.props.onEditingCanceled(
                _this3.props.mode,
                _this3.props.data
              );
            }
          }
        ];
        return /*#__PURE__*/ _react['default'].createElement(
          _TableCell['default'],
          {
            size: size,
            padding: 'none',
            key: 'key-actions-column',
            style: _objectSpread(
              {
                width: 42 * actions.length,
                padding: '0px 5px'
              },
              this.props.options.editCellStyle
            )
          },
          /*#__PURE__*/ _react['default'].createElement(
            this.props.components.Actions,
            {
              data: this.props.data,
              actions: actions,
              components: this.props.components,
              size: size
            }
          )
        );
      }
    },
    {
      key: 'getStyle',
      value: function getStyle() {
        var style = {
          // boxShadow: '1px 1px 1px 1px rgba(0,0,0,0.2)',
          borderBottom: '1px solid red'
        };
        return style;
      }
    },
    {
      key: 'render',
      value: function render() {
        var size = CommonValues.elementSize(this.props);
        var localization = _objectSpread(
          _objectSpread({}, MTableEditRow.defaultProps.localization),
          this.props.localization
        );
        var columns;
        if (
          this.props.mode === 'add' ||
          this.props.mode === 'update' ||
          this.props.mode === 'bulk'
        ) {
          columns = this.renderColumns();
        } else {
          var colSpan = this.props.columns.filter(function (columnDef) {
            return !columnDef.hidden && !(columnDef.tableData.groupOrder > -1);
          }).length;
          columns = [
            /*#__PURE__*/ _react['default'].createElement(
              _TableCell['default'],
              {
                size: size,
                padding:
                  this.props.options.actionsColumnIndex === 0
                    ? 'none'
                    : undefined,
                key: 'key-edit-cell',
                colSpan: colSpan
              },
              /*#__PURE__*/ _react['default'].createElement(
                _Typography['default'],
                {
                  variant: 'h6'
                },
                localization.deleteText
              )
            )
          ];
        }
        if (this.props.options.selection) {
          columns.splice(
            0,
            0,
            /*#__PURE__*/ _react['default'].createElement(
              _TableCell['default'],
              {
                padding: 'none',
                key: 'key-selection-cell'
              }
            )
          );
        }
        if (this.props.isTreeData) {
          columns.splice(
            0,
            0,
            /*#__PURE__*/ _react['default'].createElement(
              _TableCell['default'],
              {
                padding: 'none',
                key: 'key-tree-data-cell'
              }
            )
          );
        }
        if (this.props.options.actionsColumnIndex === -1) {
          columns.push(this.renderActions());
        } else if (this.props.options.actionsColumnIndex >= 0) {
          var endPos = 0;
          if (this.props.options.selection) {
            endPos = 1;
          }
          if (this.props.isTreeData) {
            endPos = 1;
            if (this.props.options.selection) {
              columns.splice(1, 1);
            }
          }
          columns.splice(
            this.props.options.actionsColumnIndex + endPos,
            0,
            this.renderActions()
          );
        }

        // Lastly we add detail panel icon
        if (this.props.detailPanel) {
          var alignment = this.props.options.detailPanelColumnAlignment;
          var index = alignment === 'left' ? 0 : columns.length;
          columns.splice(
            index,
            0,
            /*#__PURE__*/ _react['default'].createElement(
              _TableCell['default'],
              {
                padding: 'none',
                key: 'key-detail-panel-cell'
              }
            )
          );
        }
        this.props.columns
          .filter(function (columnDef) {
            return columnDef.tableData.groupOrder > -1;
          })
          .forEach(function (columnDef) {
            columns.splice(
              0,
              0,
              /*#__PURE__*/ _react['default'].createElement(
                _TableCell['default'],
                {
                  padding: 'none',
                  key: 'key-group-cell' + columnDef.tableData.id
                }
              )
            );
          });
        var _this$props = this.props,
          detailPanel = _this$props.detailPanel,
          isTreeData = _this$props.isTreeData,
          onRowClick = _this$props.onRowClick,
          onRowSelected = _this$props.onRowSelected,
          onTreeExpandChanged = _this$props.onTreeExpandChanged,
          onToggleDetailPanel = _this$props.onToggleDetailPanel,
          onEditingApproved = _this$props.onEditingApproved,
          onEditingCanceled = _this$props.onEditingCanceled,
          getFieldValue = _this$props.getFieldValue,
          components = _this$props.components,
          icons = _this$props.icons,
          columnsProp = _this$props.columns,
          localizationProp = _this$props.localization,
          options = _this$props.options,
          actions = _this$props.actions,
          errorState = _this$props.errorState,
          onBulkEditRowChanged = _this$props.onBulkEditRowChanged,
          scrollWidth = _this$props.scrollWidth,
          rowProps = (0, _objectWithoutProperties2['default'])(
            _this$props,
            _excluded2
          );
        return /*#__PURE__*/ _react['default'].createElement(
          _react['default'].Fragment,
          null,
          /*#__PURE__*/ _react['default'].createElement(
            _TableRow['default'],
            (0, _extends2['default'])(
              {
                onKeyDown: this.handleKeyDown
              },
              rowProps,
              {
                style: this.getStyle()
              }
            ),
            columns
          )
        );
      }
    }
  ]);
  return MTableEditRow;
})(_react['default'].Component);
exports['default'] = MTableEditRow;
MTableEditRow.defaultProps = {
  actions: [],
  index: 0,
  options: {},
  path: [],
  localization: {
    saveTooltip: 'Save',
    cancelTooltip: 'Cancel',
    deleteText: 'Are you sure you want to delete this row?'
  },
  onBulkEditRowChanged: function onBulkEditRowChanged() {}
};
MTableEditRow.propTypes = {
  actions: _propTypes['default'].array,
  icons: _propTypes['default'].any.isRequired,
  index: _propTypes['default'].number.isRequired,
  data: _propTypes['default'].object,
  detailPanel: _propTypes['default'].oneOfType([
    _propTypes['default'].func,
    _propTypes['default'].arrayOf(
      _propTypes['default'].oneOfType([
        _propTypes['default'].object,
        _propTypes['default'].func
      ])
    )
  ]),
  options: _propTypes['default'].object.isRequired,
  onRowSelected: _propTypes['default'].func,
  path: _propTypes['default'].arrayOf(_propTypes['default'].number),
  columns: _propTypes['default'].array,
  onRowClick: _propTypes['default'].func,
  onEditingApproved: _propTypes['default'].func,
  onEditingCanceled: _propTypes['default'].func,
  localization: _propTypes['default'].object,
  getFieldValue: _propTypes['default'].func,
  errorState: _propTypes['default'].oneOfType([
    _propTypes['default'].object,
    _propTypes['default'].bool
  ]),
  onBulkEditRowChanged: _propTypes['default'].func
};
