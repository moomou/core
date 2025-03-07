'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
var _typeof3 = require('@babel/runtime/helpers/typeof');
Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = void 0;
var _LinearProgress2 = _interopRequireDefault(
  require('@mui/material/LinearProgress')
);
var _TableFooter2 = _interopRequireDefault(
  require('@mui/material/TableFooter')
);
var _TableRow2 = _interopRequireDefault(require('@mui/material/TableRow'));
var _extends2 = _interopRequireDefault(
  require('@babel/runtime/helpers/extends')
);
var _Box2 = _interopRequireDefault(require('@mui/material/Box'));
var _toConsumableArray2 = _interopRequireDefault(
  require('@babel/runtime/helpers/toConsumableArray')
);
var _Table2 = _interopRequireDefault(require('@mui/material/Table'));
var _typeof2 = _interopRequireDefault(require('@babel/runtime/helpers/typeof'));
var _slicedToArray2 = _interopRequireDefault(
  require('@babel/runtime/helpers/slicedToArray')
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
var _react = _interopRequireDefault(require('react'));
var _debounce = require('debounce');
var _deepEql = _interopRequireDefault(require('deep-eql'));
var CommonValues = _interopRequireWildcard(require('./utils/common-values'));
var _dnd = require('@hello-pangea/dnd');
var _dataManager = _interopRequireDefault(require('./utils/data-manager'));
var _components = require('./components');
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
var MaterialTable = /*#__PURE__*/ (function (_React$Component) {
  (0, _inherits2['default'])(MaterialTable, _React$Component);
  var _super = _createSuper(MaterialTable);
  function MaterialTable(_props) {
    var _this;
    (0, _classCallCheck2['default'])(this, MaterialTable);
    _this = _super.call(this, _props);
    (0, _defineProperty2['default'])(
      (0, _assertThisInitialized2['default'])(_this),
      'dataManager',
      new _dataManager['default']()
    );
    (0, _defineProperty2['default'])(
      (0, _assertThisInitialized2['default'])(_this),
      'checkedForFunctions',
      false
    );
    (0, _defineProperty2['default'])(
      (0, _assertThisInitialized2['default'])(_this),
      'clearCriteria',
      function () {
        _this.dataManager.clearCriteria();
        _this.setState(_this.dataManager.getRenderState());
      }
    );
    (0, _defineProperty2['default'])(
      (0, _assertThisInitialized2['default'])(_this),
      'isRemoteData',
      function (props) {
        return !Array.isArray((props || _this.props).data);
      }
    );
    (0, _defineProperty2['default'])(
      (0, _assertThisInitialized2['default'])(_this),
      'onAllSelected',
      function (checked) {
        _this.dataManager.changeAllSelected(
          checked,
          _this.props.options.selectionProps
        );
        _this.setState(_this.dataManager.getRenderState(), function () {
          return _this.onSelectionChange();
        });
      }
    );
    (0, _defineProperty2['default'])(
      (0, _assertThisInitialized2['default'])(_this),
      'onGroupSelected',
      function (checked, path) {
        _this.dataManager.changeGroupSelected(checked, path);
        _this.setState(_this.dataManager.getRenderState(), function () {
          return _this.onSelectionChange();
        });
      }
    );
    (0, _defineProperty2['default'])(
      (0, _assertThisInitialized2['default'])(_this),
      'onChangeColumnHidden',
      function (column, hidden) {
        _this.dataManager.changeColumnHidden(column, hidden);
        _this.setState(_this.dataManager.getRenderState(), function () {
          _this.props.onChangeColumnHidden &&
            _this.props.onChangeColumnHidden(column, hidden);
        });
      }
    );
    (0, _defineProperty2['default'])(
      (0, _assertThisInitialized2['default'])(_this),
      'onChangeGroupOrder',
      function (groupedColumn) {
        _this.dataManager.changeGroupOrder(groupedColumn.tableData.id);
        _this.setState(_this.dataManager.getRenderState());
      }
    );
    (0, _defineProperty2['default'])(
      (0, _assertThisInitialized2['default'])(_this),
      'onChangeOrder',
      function (orderBy, orderDirection, sortOrder) {
        _this.dataManager.changeColumnOrder(orderBy, orderDirection, sortOrder);
        var orderByCollection = _this.dataManager.getOrderByCollection();
        if (_this.isRemoteData()) {
          var query = _objectSpread({}, _this.state.query);
          query.page = 0;
          query.orderBy = _this.state.columns.find(function (a) {
            return a.tableData.id === orderBy;
          });
          query.orderDirection = orderDirection;
          console.warn(
            'Properties orderBy and orderDirection had been deprecated when remote data, please start using orderByCollection instead'
          );
          query.orderByCollection = orderByCollection;
          _this.onQueryChange(query, function () {
            _this.props.onOrderChange &&
              _this.props.onOrderChange(orderBy, orderDirection);
            _this.props.onOrderCollectionChange &&
              _this.props.onOrderCollectionChange(orderByCollection);
          });
        } else {
          _this.setState(_this.dataManager.getRenderState(), function () {
            _this.props.onOrderChange &&
              _this.props.onOrderChange(orderBy, orderDirection);
            _this.props.onOrderCollectionChange &&
              _this.props.onOrderCollectionChange(orderByCollection);
          });
        }
      }
    );
    (0, _defineProperty2['default'])(
      (0, _assertThisInitialized2['default'])(_this),
      'onPageChange',
      function (event, page) {
        if (_this.isRemoteData()) {
          var query = _objectSpread({}, _this.state.query);
          query.page = page;
          _this.onQueryChange(query, function () {
            _this.props.onPageChange &&
              _this.props.onPageChange(page, query.pageSize);
          });
        } else {
          _this.dataManager.changeCurrentPage(page);
          _this.setState(_this.dataManager.getRenderState(), function () {
            _this.props.onPageChange &&
              _this.props.onPageChange(page, _this.state.pageSize);
          });
        }
      }
    );
    (0, _defineProperty2['default'])(
      (0, _assertThisInitialized2['default'])(_this),
      'onRowsPerPageChange',
      function (event) {
        var pageSize = event.target.value;
        _this.dataManager.changePageSize(pageSize);
        var callback = function callback() {
          _this.props.onPageChange && _this.props.onPageChange(0, pageSize);
          _this.props.onRowsPerPageChange &&
            _this.props.onRowsPerPageChange(pageSize);
        };
        if (_this.isRemoteData()) {
          var query = _objectSpread({}, _this.state.query);
          query.pageSize = event.target.value;
          query.page = 0;
          _this.onQueryChange(query, callback);
        } else {
          _this.dataManager.changeCurrentPage(0);
          _this.setState(_this.dataManager.getRenderState(), callback);
        }
      }
    );
    (0, _defineProperty2['default'])(
      (0, _assertThisInitialized2['default'])(_this),
      'onDragEnd',
      function (result) {
        if (!result || !result.source || !result.destination) return;
        _this.dataManager.changeByDrag(result);
        _this.setState(_this.dataManager.getRenderState(), function () {
          if (
            _this.props.onColumnDragged &&
            result.destination.droppableId === 'headers' &&
            result.source.droppableId === 'headers'
          ) {
            _this.props.onColumnDragged(
              result.source.index,
              result.destination.index
            );
          }
        });
      }
    );
    (0, _defineProperty2['default'])(
      (0, _assertThisInitialized2['default'])(_this),
      'onGroupExpandChanged',
      function (path) {
        _this.dataManager.changeGroupExpand(path);
        _this.setState(_this.dataManager.getRenderState());
      }
    );
    (0, _defineProperty2['default'])(
      (0, _assertThisInitialized2['default'])(_this),
      'onGroupRemoved',
      function (groupedColumn, index) {
        var result = {
          combine: null,
          destination: {
            droppableId: 'headers',
            index: 0
          },
          draggableId: groupedColumn.tableData.id,
          mode: 'FLUID',
          reason: 'DROP',
          source: {
            index: index,
            droppableId: 'groups'
          },
          type: 'DEFAULT'
        };
        _this.dataManager.changeByDrag(result);
        _this.setState(_this.dataManager.getRenderState(), function () {
          _this.props.onGroupRemoved &&
            _this.props.onGroupRemoved(groupedColumn, index);
        });
      }
    );
    (0, _defineProperty2['default'])(
      (0, _assertThisInitialized2['default'])(_this),
      'onEditingApproved',
      function (mode, newData, oldData) {
        if (
          mode === 'add' &&
          _this.props.editable &&
          _this.props.editable.onRowAdd
        ) {
          _this.setState(
            {
              isLoading: true
            },
            function () {
              _this.props.editable
                .onRowAdd(newData)
                .then(function (result) {
                  _this.setState(
                    {
                      isLoading: false,
                      showAddRow: false
                    },
                    function () {
                      if (_this.isRemoteData()) {
                        _this.onQueryChange(_this.state.query);
                      }
                    }
                  );
                })
                ['catch'](function (reason) {
                  var errorState = {
                    message: reason,
                    errorCause: 'add'
                  };
                  _this.setState({
                    isLoading: false,
                    errorState: errorState
                  });
                });
            }
          );
        } else if (
          mode === 'update' &&
          _this.props.editable &&
          _this.props.editable.onRowUpdate
        ) {
          _this.setState(
            {
              isLoading: true
            },
            function () {
              _this.props.editable
                .onRowUpdate(newData, oldData)
                .then(function (result) {
                  _this.dataManager.changeRowEditing(oldData);
                  _this.setState(
                    _objectSpread(
                      {
                        isLoading: false
                      },
                      _this.dataManager.getRenderState()
                    ),
                    function () {
                      if (_this.isRemoteData()) {
                        _this.onQueryChange(_this.state.query);
                      }
                    }
                  );
                })
                ['catch'](function (reason) {
                  var errorState = {
                    message: reason,
                    errorCause: 'update'
                  };
                  _this.setState({
                    isLoading: false,
                    errorState: errorState
                  });
                });
            }
          );
        } else if (
          mode === 'delete' &&
          _this.props.editable &&
          _this.props.editable.onRowDelete
        ) {
          _this.setState(
            {
              isLoading: true
            },
            function () {
              _this.props.editable
                .onRowDelete(
                  Object.entries(oldData).reduce(function (old, _ref) {
                    var _ref2 = (0, _slicedToArray2['default'])(_ref, 2),
                      key = _ref2[0],
                      val = _ref2[1];
                    if (key !== 'tableData') old[key] = val;
                    return old;
                  }, {})
                )
                .then(function (result) {
                  _this.dataManager.changeRowEditing(oldData);
                  _this.setState(
                    _objectSpread(
                      {
                        isLoading: false
                      },
                      _this.dataManager.getRenderState()
                    ),
                    function () {
                      if (_this.isRemoteData()) {
                        _this.onQueryChange(_this.state.query);
                      }
                    }
                  );
                })
                ['catch'](function (reason) {
                  var errorState = {
                    message: reason,
                    errorCause: 'delete'
                  };
                  _this.setState({
                    isLoading: false,
                    errorState: errorState
                  });
                });
            }
          );
        } else if (
          mode === 'bulk' &&
          _this.props.editable &&
          _this.props.editable.onBulkUpdate
        ) {
          _this.setState(
            {
              isLoading: true
            },
            function () {
              _this.props.editable
                .onBulkUpdate(_this.dataManager.bulkEditChangedRows)
                .then(function (result) {
                  _this.dataManager.changeBulkEditOpen(false);
                  _this.props.onBulkEditOpen &&
                    _this.props.onBulkEditOpen(false);
                  _this.dataManager.clearBulkEditChangedRows();
                  _this.setState(
                    _objectSpread(
                      {
                        isLoading: false
                      },
                      _this.dataManager.getRenderState()
                    ),
                    function () {
                      if (_this.isRemoteData()) {
                        _this.onQueryChange(_this.state.query);
                      }
                    }
                  );
                })
                ['catch'](function (reason) {
                  var errorState = {
                    message: reason,
                    errorCause: 'bulk edit'
                  };
                  _this.setState({
                    isLoading: false,
                    errorState: errorState
                  });
                });
            }
          );
        }
      }
    );
    (0, _defineProperty2['default'])(
      (0, _assertThisInitialized2['default'])(_this),
      'onEditingCanceled',
      function (mode, rowData) {
        if (mode === 'add') {
          _this.props.editable.onRowAddCancelled &&
            _this.props.editable.onRowAddCancelled();
          _this.setState({
            showAddRow: false
          });
        } else if (mode === 'update') {
          _this.props.editable.onRowUpdateCancelled &&
            _this.props.editable.onRowUpdateCancelled();
          _this.dataManager.changeRowEditing(rowData);
          _this.setState(_this.dataManager.getRenderState());
        } else if (mode === 'delete') {
          _this.dataManager.changeRowEditing(rowData);
          _this.setState(_this.dataManager.getRenderState());
        }
      }
    );
    (0, _defineProperty2['default'])(
      (0, _assertThisInitialized2['default'])(_this),
      'retry',
      function () {
        _this.onQueryChange(_this.state.query);
      }
    );
    (0, _defineProperty2['default'])(
      (0, _assertThisInitialized2['default'])(_this),
      'onQueryChange',
      function (query, callback) {
        query = _objectSpread(
          _objectSpread(_objectSpread({}, _this.state.query), query),
          {},
          {
            error: _this.state.errorState
          }
        );
        _this.setState(
          {
            isLoading: true,
            errorState: undefined
          },
          function () {
            _this.props
              .data(query)
              .then(function (result) {
                query.totalCount = result.totalCount;
                query.page = result.page;
                var nextQuery = _objectSpread(
                  _objectSpread({}, query),
                  {},
                  {
                    totalCount: result.totalCount,
                    page: result.page
                  }
                );
                _this.dataManager.setData(
                  result.data,
                  _this.props.options.idSynonym
                );
                _this.setState(
                  _objectSpread(
                    _objectSpread(
                      {
                        isLoading: false,
                        errorState: false
                      },
                      _this.dataManager.getRenderState()
                    ),
                    {},
                    {
                      query: nextQuery
                    }
                  ),
                  function () {
                    callback && callback();
                  }
                );
              })
              ['catch'](function (error) {
                var errorState = {
                  message:
                    (0, _typeof2['default'])(error) === 'object'
                      ? error.message
                      : error !== undefined
                      ? error
                      : _this.props.localization.error,
                  errorCause: 'query'
                };
                _this.setState(
                  _objectSpread(
                    {
                      isLoading: false,
                      errorState: errorState
                    },
                    _this.dataManager.getRenderState()
                  )
                );
              });
          }
        );
      }
    );
    (0, _defineProperty2['default'])(
      (0, _assertThisInitialized2['default'])(_this),
      'onRowSelected',
      function (event, path, dataClicked) {
        _this.dataManager.changeRowSelected(event.target.checked, path);
        _this.setState(_this.dataManager.getRenderState(), function () {
          return _this.onSelectionChange(dataClicked);
        });
      }
    );
    (0, _defineProperty2['default'])(
      (0, _assertThisInitialized2['default'])(_this),
      'onSelectionChange',
      function (dataClicked) {
        if (_this.props.onSelectionChange) {
          var selectedRows = [];
          var findSelecteds = function findSelecteds(list) {
            list.forEach(function (row) {
              if (row.tableData.checked) {
                selectedRows.push(row);
              }
            });
          };
          findSelecteds(_this.state.originalData);
          _this.props.onSelectionChange(selectedRows, dataClicked);
        }
      }
    );
    (0, _defineProperty2['default'])(
      (0, _assertThisInitialized2['default'])(_this),
      'onSearchChangeDebounce',
      (0, _debounce.debounce)(function (searchText) {
        if (_this.isRemoteData()) {
          var query = _objectSpread({}, _this.state.query);
          query.page = 0;
          query.search = searchText;
          _this.onQueryChange(query, function () {
            _this.props.onSearchChange &&
              _this.props.onSearchChange(searchText);
          });
        } else {
          _this.setState(_this.dataManager.getRenderState(), function () {
            _this.props.onSearchChange &&
              _this.props.onSearchChange(searchText);
          });
        }
      }, _this.props.options.debounceInterval)
    );
    (0, _defineProperty2['default'])(
      (0, _assertThisInitialized2['default'])(_this),
      'onFilterChange',
      function (columnId, value) {
        _this.dataManager.changeFilterValue(columnId, value);
        _this.setState({}, _this.onFilterChangeDebounce);
      }
    );
    (0, _defineProperty2['default'])(
      (0, _assertThisInitialized2['default'])(_this),
      'onFilterChangeDebounce',
      (0, _debounce.debounce)(function () {
        if (_this.isRemoteData()) {
          var query = _objectSpread({}, _this.state.query);
          query.page = 0;
          query.filters = _this.state.columns
            .filter(function (a) {
              return a.tableData.filterValue;
            })
            .map(function (a) {
              return {
                column: a,
                operator: '=',
                value: a.tableData.filterValue
              };
            });
          _this.onQueryChange(query, function () {
            _this.props.onFilterChange &&
              _this.props.onFilterChange(query.filters);
          });
        } else {
          _this.setState(_this.dataManager.getRenderState(), function () {
            if (_this.props.onFilterChange) {
              var appliedFilters = _this.state.columns
                .filter(function (a) {
                  return a.tableData.filterValue;
                })
                .map(function (a) {
                  return {
                    column: a,
                    operator: '=',
                    value: a.tableData.filterValue
                  };
                });
              _this.props.onFilterChange(appliedFilters);
            }
          });
        }
      }, _this.props.options.debounceInterval)
    );
    (0, _defineProperty2['default'])(
      (0, _assertThisInitialized2['default'])(_this),
      'onTreeExpandChanged',
      function (path, data) {
        _this.dataManager.changeTreeExpand(path);
        _this.setState(_this.dataManager.getRenderState(), function () {
          _this.props.onTreeExpandChange &&
            _this.props.onTreeExpandChange(data, data.tableData.isTreeExpanded);
        });
      }
    );
    (0, _defineProperty2['default'])(
      (0, _assertThisInitialized2['default'])(_this),
      'onToggleDetailPanel',
      function (path, render) {
        _this.dataManager.changeDetailPanelVisibility(path, render);
        _this.setState(_this.dataManager.getRenderState());
      }
    );
    (0, _defineProperty2['default'])(
      (0, _assertThisInitialized2['default'])(_this),
      'onCellEditStarted',
      function (rowData, columnDef) {
        _this.dataManager.startCellEditable(rowData, columnDef);
        _this.setState(_this.dataManager.getRenderState());
      }
    );
    (0, _defineProperty2['default'])(
      (0, _assertThisInitialized2['default'])(_this),
      'onCellEditFinished',
      function (rowData, columnDef) {
        _this.dataManager.finishCellEditable(rowData, columnDef);
        _this.setState(_this.dataManager.getRenderState());
      }
    );
    (0, _defineProperty2['default'])(
      (0, _assertThisInitialized2['default'])(_this),
      'onEditRowDataChanged',
      function (rowData, newData) {
        _this.dataManager.setEditRowData(rowData, newData);
        _this.setState(_this.dataManager.getRenderState());
      }
    );
    (0, _defineProperty2['default'])(
      (0, _assertThisInitialized2['default'])(_this),
      'onColumnResized',
      function (id, offset, changedColumnWidthsBeforeOffset, initialColWidths) {
        var colInfo = function colInfo(col) {
          return _objectSpread(
            _objectSpread(
              _objectSpread(
                {
                  field: col.field,
                  width: col.tableData.width,
                  widthPx: col.tableData.widthPx
                },
                col.id && {
                  id: col.id
                }
              ),
              col.minWidth && {
                minWidth: col.minWidth
              }
            ),
            col.maxWidth && {
              maxWidth: col.maxWidth
            }
          );
        };
        var colsResized = _this.dataManager.onColumnResized(
          id,
          offset,
          changedColumnWidthsBeforeOffset,
          initialColWidths
        );
        _this.setState(_this.dataManager.getRenderState(), function () {
          if (
            offset === 0 &&
            _this.props.onColumnResized &&
            colsResized.length > 0
          ) {
            _this.props.onColumnResized(
              colsResized.map(function (col) {
                return colInfo(col);
              }),
              _this.state.columns.map(function (col) {
                return colInfo(col);
              })
            );
          }
        });
      }
    );
    (0, _defineProperty2['default'])(
      (0, _assertThisInitialized2['default'])(_this),
      'renderTable',
      function (props) {
        var _props$options$tableW;
        return /*#__PURE__*/ _react['default'].createElement(
          _Table2['default'],
          {
            sx: props.sx,
            style: _objectSpread(
              _objectSpread(
                {},
                props.options.tableWidth === 'variable' && {
                  width: _this.state.tableStyleWidth
                }
              ),
              {},
              {
                tableLayout:
                  props.options.fixedColumns &&
                  (props.options.fixedColumns.left ||
                    props.options.fixedColumns.right)
                    ? 'fixed'
                    : props.options.tableLayout
              }
            )
          },
          props.options.header &&
            /*#__PURE__*/ _react['default'].createElement(
              props.components.Header,
              {
                actions: _this.state.actions,
                columns: _this.state.columns,
                selectedCount: _this.state.selectedCount,
                dataCount: props.parentChildData
                  ? _this.dataManager.searchedData.length
                  : _this.state.columns.some(function (col) {
                      return col.tableData.groupOrder > -1;
                    })
                  ? _this.state.groupedDataLength
                  : _this.state.data.length,
                hasDetailPanel: !!props.detailPanel,
                showActionsColumn:
                  !_this.dataManager.bulkEditOpen &&
                  _this.state.actions &&
                  _this.state.actions.some(function (a) {
                    return a.position === 'row' || typeof a === 'function';
                  }),
                onAllSelected: _this.onAllSelected,
                onOrderChange: _this.onChangeOrder,
                isTreeData: _this.props.parentChildData !== undefined,
                treeDataMaxLevel: _this.state.treeDataMaxLevel,
                onColumnResized: _this.onColumnResized,
                scrollWidth: _this.state.width,
                sorting:
                  props.options.sorting ||
                  _this.dataManager.maxColumnSort !== 0,
                allowSorting: _this.dataManager.maxColumnSort !== 0,
                orderByCollection: _this.dataManager.getOrderByCollection(),
                tableWidth:
                  (_props$options$tableW = props.options.tableWidth) !== null &&
                  _props$options$tableW !== void 0
                    ? _props$options$tableW
                    : 'full'
              }
            ),
          /*#__PURE__*/ _react['default'].createElement(props.components.Body, {
            actions: _this.state.actions,
            components: _this.props.components,
            renderData: _this.state.renderData,
            data: _this.state.data,
            renderSummaryRow: _this.props.renderSummaryRow,
            currentPage: _this.isRemoteData() ? 0 : _this.state.currentPage,
            initialFormData: props.initialFormData,
            pageSize: _this.state.pageSize,
            columns: _this.state.columns,
            errorState: _this.state.errorState,
            detailPanel: props.detailPanel,
            options: props.options,
            getFieldValue: _this.dataManager.getFieldValue,
            isTreeData: _this.props.parentChildData !== undefined,
            onFilterChanged: _this.onFilterChange,
            onRowSelected: _this.onRowSelected,
            onGroupSelected: _this.onGroupSelected,
            onToggleDetailPanel: _this.onToggleDetailPanel,
            onGroupExpandChanged: _this.onGroupExpandChanged,
            onTreeExpandChanged: _this.onTreeExpandChanged,
            onEditingCanceled: _this.onEditingCanceled,
            onEditingApproved: _this.onEditingApproved,
            onRowClick: _this.props.onRowClick,
            onRowDoubleClick: _this.props.onRowDoubleClick,
            showAddRow: _this.state.showAddRow,
            hasAnyEditingRow: !!(
              _this.state.lastEditingRow || _this.state.showAddRow
            ),
            hasDetailPanel: !!props.detailPanel,
            treeDataMaxLevel: _this.state.treeDataMaxLevel,
            cellEditable: props.cellEditable,
            onCellEditStarted: _this.onCellEditStarted,
            onCellEditFinished: _this.onCellEditFinished,
            onRowEditStarted: _this.onRowEditStarted,
            bulkEditOpen: _this.dataManager.bulkEditOpen,
            bulkEditChangedRows: _this.dataManager.bulkEditChangedRows,
            onBulkEditRowChanged: _this.dataManager.onBulkEditRowChanged,
            scrollWidth: _this.state.width
          })
        );
      }
    );
    (0, _defineProperty2['default'])(
      (0, _assertThisInitialized2['default'])(_this),
      'onRowEditStarted',
      function (rowData) {
        var _this$props$editable;
        if (
          !(
            (_this$props$editable = _this.props.editable) !== null &&
            _this$props$editable !== void 0 &&
            _this$props$editable.onRowUpdate
          )
        ) {
          return;
        }
        _this.dataManager.changeRowEditing(rowData, 'update');
        _this.setState(
          _objectSpread(
            _objectSpread({}, _this.dataManager.getRenderState()),
            {},
            {
              showAddRow: false
            }
          )
        );
      }
    );
    (0, _defineProperty2['default'])(
      (0, _assertThisInitialized2['default'])(_this),
      'getColumnsWidth',
      function (props, count) {
        var result = [];
        var actionsWidth = CommonValues.actionsColumnWidth(props);
        if (actionsWidth > 0) {
          if (
            count > 0 &&
            props.options.actionsColumnIndex >= 0 &&
            props.options.actionsColumnIndex < count
          ) {
            result.push(actionsWidth + 'px');
          } else if (
            count < 0 &&
            props.options.actionsColumnIndex < 0 &&
            props.options.actionsColumnIndex >= count
          ) {
            result.push(actionsWidth + 'px');
          }
        }

        // add selection action width only for left container div
        if (props.options.selection && count > 0) {
          var selectionWidth = CommonValues.selectionMaxWidth(
            props,
            _this.state.treeDataMaxLevel
          );
          result.push(selectionWidth + 'px');
        }
        for (
          var i = 0;
          i < Math.abs(count) && i < _this.state.columns.length;
          i++
        ) {
          var colDef =
            _this.state.columns[
              count >= 0 ? i : _this.state.columns.length - 1 - i
            ];
          if (colDef.tableData) {
            if (typeof colDef.tableData.width === 'number') {
              result.push(colDef.tableData.width + 'px');
            } else {
              result.push(colDef.tableData.width);
            }
          }
        }
        return 'calc(' + result.join(' + ') + ')';
      }
    );
    (0, _defineProperty2['default'])(
      (0, _assertThisInitialized2['default'])(_this),
      'getRenderData',
      function () {
        return _this.props.options.exportAllData
          ? _this.state.data
          : _this.state.renderData;
      }
    );
    var calculatedProps = _this.getProps(_props);
    _this.setDataManagerFields(calculatedProps, true);
    var renderState = _this.dataManager.getRenderState();
    _this.state = _objectSpread(
      _objectSpread(
        {
          data: [],
          errorState: undefined
        },
        renderState
      ),
      {},
      {
        query: {
          filters: renderState.columns
            .filter(function (a) {
              return a.tableData.filterValue;
            })
            .map(function (a) {
              return {
                column: a,
                operator: '=',
                value: a.tableData.filterValue
              };
            }),
          orderBy: renderState.columns.find(function (a) {
            return a.tableData.id === renderState.orderBy;
          }),
          orderDirection: renderState.orderDirection,
          orderByCollection: renderState.orderByCollection,
          page: 0,
          pageSize: calculatedProps.options.pageSize,
          search: renderState.searchText,
          totalCount: 0
        },
        showAddRow: false,
        bulkEditOpen: false,
        width: 0,
        tableInitialWidthPx: undefined,
        tableStyleWidth: '100%',
        actions: calculatedProps.actions
      }
    );
    _this.tableContainerDiv = /*#__PURE__*/ _react['default'].createRef();
    return _this;
  }
  (0, _createClass2['default'])(MaterialTable, [
    {
      key: 'componentDidMount',
      value: function componentDidMount() {
        var _this2 = this;
        this.setState(
          _objectSpread(
            _objectSpread({}, this.dataManager.getRenderState()),
            {},
            {
              width: this.tableContainerDiv.current.scrollWidth
            }
          ),
          function () {
            if (_this2.isRemoteData()) {
              _this2.onQueryChange(
                _objectSpread(
                  _objectSpread({}, _this2.state.query),
                  {},
                  {
                    page: _this2.props.options.initialPage || 0
                  }
                )
              );
            }

            /**
             * THIS WILL NEED TO BE REMOVED EVENTUALLY.
             * Warn consumer of renamed prop.
             */
            if (_this2.props.onDoubleRowClick !== undefined) {
              console.warn(
                'Property `onDoubleRowClick` has been renamed to `onRowDoubleClick`'
              );
            }
            /**
             * THIS WILL NEED TO BE REMOVED EVENTUALLY.
             * Warn consumer of deprecated prop.
             */
            if (_this2.props.options.sorting !== undefined) {
              console.warn(
                'Property `sorting` has been deprecated, please start using `maxColumnSort` instead. https://github.com/material-table-core/core/pull/619'
              );
            }
          }
        );
      }
    },
    {
      key: 'setDataManagerFields',
      value: function setDataManagerFields(props, isInit, prevColumns) {
        var _props$options$tableW2,
          _this3 = this;
        var savedColumns = {};
        if (props.options.persistentGroupingsId && localStorage) {
          var materialTableGroupings = localStorage.getItem(
            'material-table-groupings'
          );
          if (materialTableGroupings) {
            materialTableGroupings = JSON.parse(materialTableGroupings);
            if (materialTableGroupings[props.options.persistentGroupingsId]) {
              materialTableGroupings[
                props.options.persistentGroupingsId
              ].forEach(function (savedGrouping) {
                savedColumns[savedGrouping.field] = {
                  groupOrder: savedGrouping.groupOrder,
                  groupSort: savedGrouping.groupSort,
                  columnOrder: savedGrouping.columnOrder
                };
              });
            }
          }
        }
        this.dataManager.setTableWidth(
          (_props$options$tableW2 = props.options.tableWidth) !== null &&
            _props$options$tableW2 !== void 0
            ? _props$options$tableW2
            : 'full'
        );
        this.dataManager.setColumns(props.columns, prevColumns, savedColumns);
        this.dataManager.setDefaultExpanded(props.options.defaultExpanded);
        this.dataManager.changeRowEditing();
        var _props$options = props.options,
          clientSorting = _props$options.clientSorting,
          grouping = _props$options.grouping,
          maxColumnSort = _props$options.maxColumnSort;
        this.dataManager.setClientSorting(clientSorting);
        this.dataManager.setMaxColumnSort(grouping ? 1 : maxColumnSort);
        this.dataManager.setOrderByCollection();
        if (this.isRemoteData(props)) {
          this.dataManager.changeApplySearch(false);
          this.dataManager.changeApplyFilters(false);
          this.dataManager.changeApplySort(false);
        } else {
          this.dataManager.changeApplySearch(true);
          this.dataManager.changeApplyFilters(true);
          this.dataManager.changeApplySort(true);
          this.dataManager.setData(props.data, props.options.idSynonym);
        }
        var prevDefaultOrderByCollection =
          this.dataManager.getDefaultOrderByCollection();
        var defaultOrderByCollection = props.options.defaultOrderByCollection;
        var defaultCollectionSort = [];
        var defaultSort = '';
        var prevSort = '';
        if (defaultOrderByCollection && defaultOrderByCollection.length > 0) {
          defaultCollectionSort = (0, _toConsumableArray2['default'])(
            defaultOrderByCollection
          ).slice(0, maxColumnSort);
          defaultCollectionSort = this.dataManager.sortOrderCollection(
            defaultCollectionSort
          );
          defaultSort = JSON.stringify(defaultCollectionSort);
          prevSort = JSON.stringify(prevDefaultOrderByCollection);
          if (defaultSort !== prevSort) {
            this.dataManager.setDefaultOrderByCollection(defaultCollectionSort);
          }
        } else {
          var defaultSorts = getDefaultCollectionSort(
            props.columns,
            prevColumns,
            this.dataManager.maxColumnSort
          );
          defaultCollectionSort = (0, _toConsumableArray2['default'])(
            defaultSorts[0]
          );
          defaultSort = JSON.stringify(defaultCollectionSort);
          prevSort = JSON.stringify(
            (0, _toConsumableArray2['default'])(defaultSorts[1])
          );
        }
        var currentSort = JSON.stringify(this.dataManager.orderByCollection);
        // If the default sorting changed and differs from the current default sorting, it will trigger a new sorting
        var shouldReorder =
          isInit ||
          (!this.isRemoteData() &&
            // Only if a defaultSortingDirection is passed, it will evaluate for changes
            defaultCollectionSort.length &&
            // Default sorting has changed
            defaultSort !== prevSort &&
            // Default sorting differs from current sorting
            defaultSort !== currentSort);
        if (
          shouldReorder &&
          defaultCollectionSort.length > 0 &&
          maxColumnSort > 0
        ) {
          defaultCollectionSort.forEach(function (_ref3) {
            var orderBy = _ref3.orderBy,
              orderDirection = _ref3.orderDirection,
              sortOrder = _ref3.sortOrder;
            return _this3.dataManager.changeColumnOrder(
              orderBy,
              orderDirection,
              sortOrder
            );
          });
        }
        isInit &&
          this.dataManager.changeSearchText(props.options.searchText || '');
        isInit &&
          this.dataManager.changeSearchDebounce(
            props.options.searchDebounceDelay
          );
        isInit &&
          this.dataManager.changeCurrentPage(
            props.options.initialPage ? props.options.initialPage : 0
          );
        isInit && this.dataManager.changePageSize(props.options.pageSize);
        this.dataManager.changePaging(
          this.isRemoteData() ? false : props.options.paging
        );
        isInit && this.dataManager.changeParentFunc(props.parentChildData);
        this.dataManager.changeDetailPanelType(props.options.detailPanelType);
      }
    },
    {
      key: 'cleanColumns',
      value: function cleanColumns(columns) {
        return columns.map(function (col) {
          var colClone = _objectSpread({}, col);
          delete colClone.tableData;
          return colClone;
        });
      }
    },
    {
      key: 'componentDidUpdate',
      value: function componentDidUpdate(prevProps) {
        // const propsChanged = Object.entries(this.props).reduce((didChange, prop) => didChange || prop[1] !== prevProps[prop[0]], false);

        var fixedPrevColumns = this.cleanColumns(prevProps.columns);
        var fixedPropsColumns = this.cleanColumns(this.props.columns);
        var columnPropsChanged = !(0, _deepEql['default'])(
          fixedPrevColumns,
          fixedPropsColumns
        );
        var propsChanged =
          columnPropsChanged ||
          !(0, _deepEql['default'])(prevProps.options, this.props.options);
        if (!this.isRemoteData()) {
          propsChanged =
            propsChanged ||
            !(0, _deepEql['default'])(prevProps.data, this.props.data);
        }
        if (prevProps.options.pageSize !== this.props.options.pageSize) {
          this.dataManager.changePageSize(this.props.options.pageSize);
        }
        if (propsChanged) {
          var props = this.getProps(this.props);
          this.setDataManagerFields(props, false, prevProps.columns);
          this.setState(
            _objectSpread(
              _objectSpread({}, this.dataManager.getRenderState()),
              {},
              {
                actions: props.actions
              }
            )
          );
        }
        var count = this.isRemoteData()
          ? this.state.query.totalCount
          : this.state.data.length;
        var currentPage = this.isRemoteData()
          ? this.state.query.page
          : this.state.currentPage;
        var pageSize = this.isRemoteData()
          ? this.state.query.pageSize
          : this.state.pageSize;
        if (
          count <= pageSize * currentPage &&
          currentPage !== 0 &&
          !this.state.isLoading
        ) {
          this.onPageChange(null, Math.max(0, Math.ceil(count / pageSize) - 1));
        }
      }
    },
    {
      key: 'getProps',
      value: function getProps(props) {
        var _this4 = this;
        var calculatedProps = _objectSpread({}, props || this.props);
        var localization = this.props.localization.body;
        if (calculatedProps.options.selection) {
          calculatedProps.actions = calculatedProps.actions
            .filter(function (a) {
              return a;
            })
            .map(function (action) {
              if (
                action.position === 'auto' ||
                action.isFreeAction === false ||
                (action.position === undefined &&
                  action.isFreeAction === undefined)
              ) {
                if (typeof action === 'function') {
                  return {
                    action: action,
                    position: 'toolbarOnSelect'
                  };
                } else
                  return _objectSpread(
                    _objectSpread({}, action),
                    {},
                    {
                      position: 'toolbarOnSelect'
                    }
                  );
              } else if (action.isFreeAction) {
                if (typeof action === 'function') {
                  return {
                    action: action,
                    position: 'toolbar'
                  };
                } else
                  return _objectSpread(
                    _objectSpread({}, action),
                    {},
                    {
                      position: 'toolbar'
                    }
                  );
              } else return action;
            });
        } else {
          calculatedProps.actions = calculatedProps.actions
            .filter(function (a) {
              return a;
            })
            .map(function (action) {
              if (
                action.position === 'auto' ||
                action.isFreeAction === false ||
                (action.position === undefined &&
                  action.isFreeAction === undefined)
              ) {
                if (typeof action === 'function') {
                  return {
                    action: action,
                    position: 'row'
                  };
                } else
                  return _objectSpread(
                    _objectSpread({}, action),
                    {},
                    {
                      position: 'row'
                    }
                  );
              } else if (action.isFreeAction) {
                if (typeof action === 'function') {
                  return {
                    action: action,
                    position: 'toolbar'
                  };
                } else
                  return _objectSpread(
                    _objectSpread({}, action),
                    {},
                    {
                      position: 'toolbar'
                    }
                  );
              } else return action;
            });
        }
        if (calculatedProps.editable) {
          var _this$state;
          if (calculatedProps.editable.onRowAdd) {
            calculatedProps.actions.push({
              icon: calculatedProps.icons.Add,
              tooltip: localization.addTooltip,
              position: 'toolbar',
              disabled: !!this.dataManager.lastEditingRow,
              onClick: function onClick() {
                _this4.dataManager.changeRowEditing();
                if (_this4.state.showAddRow) {
                  _this4.props.editable.onRowAddCancelled &&
                    _this4.props.editable.onRowAddCancelled();
                }
                _this4.setState(
                  _objectSpread(
                    _objectSpread({}, _this4.dataManager.getRenderState()),
                    {},
                    {
                      showAddRow: !_this4.state.showAddRow
                    }
                  )
                );
              }
            });
          }
          if (calculatedProps.editable.onRowUpdate) {
            calculatedProps.actions.push(function (rowData) {
              return {
                icon: calculatedProps.icons.Edit,
                tooltip: calculatedProps.editable.editTooltip
                  ? calculatedProps.editable.editTooltip(rowData)
                  : localization.editTooltip,
                disabled:
                  calculatedProps.editable.isEditable &&
                  !calculatedProps.editable.isEditable(rowData),
                hidden:
                  calculatedProps.editable.isEditHidden &&
                  calculatedProps.editable.isEditHidden(rowData),
                onClick: function onClick(e, rowData) {
                  _this4.onRowEditStarted(rowData);
                }
              };
            });
          }
          if (calculatedProps.editable.onRowDelete) {
            calculatedProps.actions.push(function (rowData) {
              return {
                icon: calculatedProps.icons.Delete,
                tooltip: calculatedProps.editable.deleteTooltip
                  ? calculatedProps.editable.deleteTooltip(rowData)
                  : localization.deleteTooltip,
                disabled:
                  calculatedProps.editable.isDeletable &&
                  !calculatedProps.editable.isDeletable(rowData),
                hidden:
                  calculatedProps.editable.isDeleteHidden &&
                  calculatedProps.editable.isDeleteHidden(rowData),
                onClick: function onClick(e, rowData) {
                  _this4.dataManager.changeRowEditing(rowData, 'delete');
                  _this4.setState(
                    _objectSpread(
                      _objectSpread({}, _this4.dataManager.getRenderState()),
                      {},
                      {
                        showAddRow: false
                      }
                    )
                  );
                }
              };
            });
          }
          if (calculatedProps.editable.onBulkUpdate) {
            calculatedProps.actions.push({
              icon: calculatedProps.icons.Edit,
              tooltip: localization.bulkEditTooltip,
              position: 'toolbar',
              hidden: this.dataManager.bulkEditOpen,
              disabled:
                calculatedProps.isBulkEditable &&
                calculatedProps.isBulkEditable(),
              onClick: function onClick() {
                _this4.dataManager.changeBulkEditOpen(true);
                _this4.props.onBulkEditOpen &&
                  _this4.props.onBulkEditOpen(true);
                _this4.setState(_this4.dataManager.getRenderState());
              }
            });
            calculatedProps.actions.push({
              icon: calculatedProps.icons.Check,
              tooltip: localization.bulkEditApprove,
              position: 'toolbar',
              hidden: !this.dataManager.bulkEditOpen,
              onClick: function onClick() {
                return _this4.onEditingApproved('bulk');
              }
            });
            calculatedProps.actions.push({
              icon: calculatedProps.icons.Clear,
              tooltip: localization.bulkEditCancel,
              position: 'toolbar',
              hidden: !this.dataManager.bulkEditOpen,
              onClick: function onClick() {
                _this4.dataManager.changeBulkEditOpen(false);
                _this4.props.onBulkEditOpen &&
                  _this4.props.onBulkEditOpen(false);
                _this4.dataManager.clearBulkEditChangedRows();
                _this4.setState(_this4.dataManager.getRenderState());
              }
            });
          }

          // If only bulk update and add row are used, the columns do not align with the action column
          if (
            (_this$state = this.state) !== null &&
            _this$state !== void 0 &&
            _this$state.showAddRow &&
            calculatedProps.editable.onRowAdd &&
            calculatedProps.actions.filter(function (action) {
              return action.position === 'row';
            }).length === 0
          ) {
            calculatedProps.actions.push({
              icon: undefined,
              position: 'row',
              onClick: function onClick() {},
              disabled: true
            });
          }
        }
        return calculatedProps;
      }
    },
    {
      key: 'renderFooter',
      value: function renderFooter() {
        var props = this.getProps();
        if (props.options.paging) {
          var currentPage = this.isRemoteData()
            ? Math.min(
                props.page,
                Math.floor(props.totalCount / this.state.pageSize)
              )
            : this.state.currentPage;
          var totalCount = this.isRemoteData()
            ? props.totalCount
            : this.state.data.length;
          return /*#__PURE__*/ _react['default'].createElement(
            _Table2['default'],
            null,
            /*#__PURE__*/ _react['default'].createElement(
              _TableFooter2['default'],
              {
                style: {
                  display: 'grid'
                }
              },
              /*#__PURE__*/ _react['default'].createElement(
                _TableRow2['default'],
                {
                  style: {
                    display: 'grid'
                  }
                },
                /*#__PURE__*/ _react['default'].createElement(
                  props.components.Pagination,
                  {
                    sx: {
                      display: 'flex',
                      justifyContent: props.options.paginationAlignment
                        ? props.options.paginationAlignment
                        : 'flex-end',
                      overflowX: 'auto',
                      '& .MuiTablePagination-displayedRows': {
                        display: 'none'
                      }
                    },
                    colSpan: 3,
                    count: this.isRemoteData()
                      ? this.state.query.totalCount
                      : totalCount,
                    rowsPerPage: this.state.pageSize,
                    rowsPerPageOptions: props.options.pageSizeOptions,
                    SelectProps: {
                      renderValue: function renderValue(value) {
                        return /*#__PURE__*/ _react['default'].createElement(
                          _Box2['default'],
                          {
                            sx: {
                              padding: '0px 5px'
                            }
                          },
                          value +
                            ' ' +
                            props.localization.pagination.labelRows +
                            ' '
                        );
                      }
                    },
                    page: this.isRemoteData()
                      ? this.state.query.page
                      : currentPage,
                    onPageChange: this.onPageChange,
                    onRowsPerPageChange: this.onRowsPerPageChange,
                    ActionsComponent: function ActionsComponent(subProps) {
                      return props.options.paginationType === 'normal'
                        ? /*#__PURE__*/ _react['default'].createElement(
                            _components.MTablePagination,
                            (0, _extends2['default'])({}, subProps, {
                              showFirstLastPageButtons:
                                props.options.showFirstLastPageButtons
                            })
                          )
                        : /*#__PURE__*/ _react['default'].createElement(
                            _components.MTableSteppedPagination,
                            (0, _extends2['default'])({}, subProps, {
                              showFirstLastPageButtons:
                                props.options.showFirstLastPageButtons,
                              numberOfPagesAround:
                                props.options.numberOfPagesAround
                            })
                          );
                    },
                    labelRowsPerPage:
                      props.localization.pagination.labelRowsPerPage
                  }
                )
              )
            )
          );
        }
      }
    },
    {
      key: 'render',
      value: function render() {
        var _this5 = this;
        var props = this.getProps();
        return /*#__PURE__*/ _react['default'].createElement(
          _dnd.DragDropContext,
          {
            onDragEnd: this.onDragEnd,
            nonce: props.options.cspNonce
          },
          /*#__PURE__*/ _react['default'].createElement(
            this.props.components.Container,
            {
              style: _objectSpread(
                {
                  position: 'relative'
                },
                props.style
              )
            },
            props.options.paginationPosition === 'top' ||
              props.options.paginationPosition === 'both'
              ? this.renderFooter()
              : null,
            props.options.toolbar &&
              /*#__PURE__*/ _react['default'].createElement(
                this.props.components.Toolbar,
                {
                  actions: props.actions,
                  components: this.props.components,
                  originalData: this.state.originalData,
                  columns: this.state.columns,
                  selectedCount: this.state.selectedCount,
                  getFieldValue: this.dataManager.getFieldValue,
                  data: this.getRenderData,
                  title: props.title,
                  searchText: this.dataManager.searchText,
                  searchDebounceDelay: this.dataManager.searchDebounceDelay,
                  onSearchChanged: this.onSearchChangeDebounce,
                  isRemoteData: this.isRemoteData(),
                  dataManager: this.dataManager,
                  onColumnsChanged: this.onChangeColumnHidden
                }
              ),
            props.options.grouping &&
              /*#__PURE__*/ _react['default'].createElement(
                this.props.components.Groupbar,
                {
                  groupColumns: this.state.columns
                    .filter(function (col) {
                      return col.tableData.groupOrder > -1;
                    })
                    .sort(function (col1, col2) {
                      return (
                        col1.tableData.groupOrder - col2.tableData.groupOrder
                      );
                    }),
                  onSortChanged: this.onChangeGroupOrder,
                  onGroupRemoved: this.onGroupRemoved,
                  onGroupChange: this.props.onGroupChange,
                  persistentGroupingsId: props.options.persistentGroupingsId
                }
              ),
            /*#__PURE__*/ _react['default'].createElement(
              _components.MTableScrollbar,
              {
                double: props.options.doubleHorizontalScroll
              },
              /*#__PURE__*/ _react['default'].createElement(
                _dnd.Droppable,
                {
                  droppableId: 'headers',
                  direction: 'horizontal'
                },
                function (provided, snapshot) {
                  var table = _this5.renderTable(props);
                  return /*#__PURE__*/ _react['default'].createElement(
                    'div',
                    {
                      ref: provided.innerRef
                    },
                    /*#__PURE__*/ _react['default'].createElement(
                      'div',
                      {
                        ref: _this5.tableContainerDiv,
                        style: {
                          maxHeight: props.options.maxBodyHeight,
                          minHeight: props.options.minBodyHeight,
                          overflowY: props.options.overflowY
                        }
                      },
                      _this5.state.width &&
                        props.options.fixedColumns &&
                        props.options.fixedColumns.right
                        ? /*#__PURE__*/ _react['default'].createElement(
                            'div',
                            {
                              style: {
                                width: _this5.getColumnsWidth(
                                  props,
                                  -1 * props.options.fixedColumns.right
                                ),
                                position: 'absolute',
                                top: 0,
                                right: 0,
                                boxShadow:
                                  '-2px 0px 15px rgba(125,147,178,.25)',
                                overflowX: 'clip',
                                zIndex: 11
                              }
                            },
                            /*#__PURE__*/ _react['default'].createElement(
                              'div',
                              {
                                style: {
                                  width: _this5.state.width,
                                  background: 'white',
                                  transform: 'translateX(calc('.concat(
                                    _this5.getColumnsWidth(
                                      props,
                                      -1 * props.options.fixedColumns.right
                                    ),
                                    ' - 100%))'
                                  )
                                }
                              },
                              table
                            )
                          )
                        : null,
                      /*#__PURE__*/ _react['default'].createElement(
                        'div',
                        null,
                        table
                      ),
                      _this5.state.width &&
                        props.options.fixedColumns &&
                        props.options.fixedColumns.left
                        ? /*#__PURE__*/ _react['default'].createElement(
                            'div',
                            {
                              style: {
                                width: _this5.getColumnsWidth(
                                  props,
                                  props.options.fixedColumns.left
                                ),
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                boxShadow: '2px 0px 15px rgba(125,147,178,.25)',
                                overflowX: 'clip',
                                zIndex: 11
                              }
                            },
                            /*#__PURE__*/ _react['default'].createElement(
                              'div',
                              {
                                style: {
                                  width: _this5.state.width,
                                  background: 'white'
                                },
                                onKeyDown: function onKeyDown(e) {
                                  if (e.key === 'Tab') {
                                    e.preventDefault();
                                  }
                                }
                              },
                              table
                            )
                          )
                        : null
                    ),
                    provided.placeholder
                  );
                }
              )
            ),
            (this.state.isLoading || props.isLoading) &&
              props.options.loadingType === 'linear' &&
              /*#__PURE__*/ _react['default'].createElement(
                'div',
                {
                  style: {
                    position: 'relative',
                    width: '100%'
                  }
                },
                /*#__PURE__*/ _react['default'].createElement(
                  'div',
                  {
                    style: {
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      height: '100%',
                      width: '100%'
                    }
                  },
                  /*#__PURE__*/ _react['default'].createElement(
                    _LinearProgress2['default'],
                    null
                  )
                )
              ),
            props.options.paginationPosition === 'bottom' ||
              props.options.paginationPosition === 'both'
              ? this.renderFooter()
              : null,
            (this.state.isLoading || props.isLoading) &&
              props.options.loadingType === 'overlay' &&
              /*#__PURE__*/ _react['default'].createElement(
                'div',
                {
                  style: {
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    height: '100%',
                    width: '100%',
                    zIndex: 11
                  }
                },
                /*#__PURE__*/ _react['default'].createElement(
                  this.props.components.OverlayLoading,
                  {
                    theme: props.theme
                  }
                )
              ),
            this.state.errorState &&
              this.state.errorState.errorCause === 'query' &&
              /*#__PURE__*/ _react['default'].createElement(
                'div',
                {
                  style: {
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    height: '100%',
                    width: '100%',
                    zIndex: 11
                  }
                },
                /*#__PURE__*/ _react['default'].createElement(
                  this.props.components.OverlayError,
                  {
                    error: this.state.errorState,
                    retry: this.retry,
                    theme: props.theme
                  }
                )
              )
          )
        );
      }
    }
  ]);
  return MaterialTable;
})(_react['default'].Component);
exports['default'] = MaterialTable;
function getDefaultCollectionSort(currentColumns, prevColumns, maxColumnSort) {
  var defaultCollectionSort = [];
  var prevCollectionSort = [];
  if (maxColumnSort > 0) {
    defaultCollectionSort = reduceByDefaultSort(currentColumns, maxColumnSort);
  }
  if (prevColumns) {
    prevCollectionSort = reduceByDefaultSort(prevColumns, maxColumnSort);
  }
  return [defaultCollectionSort, prevCollectionSort];
}
function reduceByDefaultSort(list, maxColumnSort) {
  var sortColumns = list.filter(function (column) {
    return column.defaultSort && column.sorting !== false;
  });
  return sortColumns.slice(0, maxColumnSort).map(function (column, index) {
    return {
      orderBy: column.tableData
        ? column.tableData.id
        : list.findIndex(function (val) {
            return val.field === column.field;
          }),
      orderDirection: column.defaultSort,
      sortOrder: index + 1
    };
  });
}
