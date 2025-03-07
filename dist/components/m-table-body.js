'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = void 0;
var _extends2 = _interopRequireDefault(
  require('@babel/runtime/helpers/extends')
);
var _TableBody2 = _interopRequireDefault(require('@mui/material/TableBody'));
var _defineProperty2 = _interopRequireDefault(
  require('@babel/runtime/helpers/defineProperty')
);
var _toConsumableArray2 = _interopRequireDefault(
  require('@babel/runtime/helpers/toConsumableArray')
);
var _TableRow2 = _interopRequireDefault(require('@mui/material/TableRow'));
var _TableCell2 = _interopRequireDefault(require('@mui/material/TableCell'));
var _react = _interopRequireDefault(require('react'));
var _propTypes = _interopRequireDefault(require('prop-types'));
var _store = require('../store');
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
function MTableBody(props) {
  var localization = (0, _store.useLocalizationStore)().body;
  var options = (0, _store.useOptionStore)();
  var icons = (0, _store.useIconStore)();
  var columns = props.columns.filter(function (columnDef) {
    return !columnDef.hidden;
  });
  function renderEmpty(emptyRowCount, renderData) {
    var rowHeight = options.padding === 'normal' ? 49 : 36;
    if (options.showEmptyDataSourceMessage && renderData.length === 0) {
      var addColumn = 0;
      if (options.selection) {
        addColumn++;
      }
      if (
        props.actions &&
        props.actions.filter(function (a) {
          return a.position === 'row' || typeof a === 'function';
        }).length > 0
      ) {
        addColumn++;
      }
      if (props.hasDetailPanel) {
        addColumn++;
      }
      if (props.isTreeData) {
        addColumn++;
      }
      return /*#__PURE__*/ _react['default'].createElement(
        _TableRow2['default'],
        {
          style: {
            height:
              rowHeight *
              (options.paging && options.emptyRowsWhenPaging
                ? props.pageSize
                : 1)
          },
          key: 'empty-' + 0
        },
        /*#__PURE__*/ _react['default'].createElement(
          _TableCell2['default'],
          {
            style: {
              paddingTop: 0,
              paddingBottom: 0,
              textAlign: 'center'
            },
            colSpan: props.columns.reduce(function (currentVal, columnDef) {
              return columnDef.hidden ? currentVal : currentVal + 1;
            }, addColumn),
            key: 'empty-'
          },
          localization.emptyDataSourceMessage
        )
      );
    } else if (options.emptyRowsWhenPaging) {
      return /*#__PURE__*/ _react['default'].createElement(
        _react['default'].Fragment,
        null,
        (0, _toConsumableArray2['default'])(Array(emptyRowCount)).map(function (
          r,
          index
        ) {
          return /*#__PURE__*/ _react['default'].createElement(
            _TableRow2['default'],
            {
              style: {
                height: rowHeight
              },
              key: 'empty-' + index
            }
          );
        }),
        emptyRowCount > 0 &&
          /*#__PURE__*/ _react['default'].createElement(_TableRow2['default'], {
            style: {
              height: 1
            },
            key: 'empty-last1'
          })
      );
    }
  }
  function renderUngroupedRows(renderData) {
    return renderData.map(function (data, index) {
      if (data.tableData.editing || props.bulkEditOpen) {
        return /*#__PURE__*/ _react['default'].createElement(
          props.components.EditRow,
          {
            columns: columns,
            components: props.components,
            data: data,
            errorState: props.errorState,
            icons: icons,
            localization: localization.editRow,
            key: 'row-' + data.tableData.uuid,
            mode: props.bulkEditOpen ? 'bulk' : data.tableData.editing,
            isTreeData: props.isTreeData,
            detailPanel: props.detailPanel,
            onEditingCanceled: props.onEditingCanceled,
            onEditingApproved: props.onEditingApproved,
            bulkEditChangedRows: props.bulkEditChangedRows,
            getFieldValue: props.getFieldValue,
            onBulkEditRowChanged: props.onBulkEditRowChanged,
            scrollWidth: props.scrollWidth
          }
        );
      } else {
        // Treeified data is using the uuid, while the grouped data used the index
        var path = props.isTreeData
          ? [data.tableData.uuid]
          : [index + props.pageSize * props.currentPage];
        return /*#__PURE__*/ _react['default'].createElement(
          props.components.Row,
          {
            components: props.components,
            data: data,
            index: index,
            errorState: props.errorState,
            key: 'row-' + data.tableData.uuid,
            level: 0,
            onRowSelected: props.onRowSelected,
            actions: props.actions,
            columns: props.columns,
            getFieldValue: props.getFieldValue,
            detailPanel: props.detailPanel,
            path: path,
            onToggleDetailPanel: props.onToggleDetailPanel,
            onRowClick: props.onRowClick,
            onRowDoubleClick: props.onRowDoubleClick,
            isTreeData: props.isTreeData,
            onTreeExpandChanged: props.onTreeExpandChanged,
            onEditingCanceled: props.onEditingCanceled,
            onEditingApproved: props.onEditingApproved,
            hasAnyEditingRow: props.hasAnyEditingRow,
            treeDataMaxLevel: props.treeDataMaxLevel,
            cellEditable: props.cellEditable,
            onCellEditStarted: props.onCellEditStarted,
            onCellEditFinished: props.onCellEditFinished,
            onRowEditStarted: props.onRowEditStarted,
            scrollWidth: props.scrollWidth
          }
        );
      }
    });
  }
  function renderGroupedRows(groups, renderData) {
    return renderData.map(function (groupData, index) {
      return /*#__PURE__*/ _react['default'].createElement(
        props.components.GroupRow,
        {
          actions: props.actions,
          cellEditable: props.cellEditable,
          columns: props.columns,
          components: props.components,
          detailPanel: props.detailPanel,
          getFieldValue: props.getFieldValue,
          groupData: groupData,
          groups: groups,
          hasAnyEditingRow: props.hasAnyEditingRow,
          icons: icons,
          isTreeData: props.isTreeData,
          key: groupData.value == null ? '' + index : groupData.value,
          level: 0,
          localization: localization.editRow,
          onBulkEditRowChanged: props.onBulkEditRowChanged,
          onCellEditFinished: props.onCellEditFinished,
          onCellEditStarted: props.onCellEditStarted,
          onEditingApproved: props.onEditingApproved,
          onEditingCanceled: props.onEditingCanceled,
          onGroupExpandChanged: props.onGroupExpandChanged,
          onRowClick: props.onRowClick,
          onGroupSelected: props.onGroupSelected,
          onRowSelected: props.onRowSelected,
          onToggleDetailPanel: props.onToggleDetailPanel,
          onTreeExpandChanged: props.onTreeExpandChanged,
          path: [index + props.pageSize * props.currentPage],
          scrollWidth: props.scrollWidth,
          treeDataMaxLevel: props.treeDataMaxLevel
        }
      );
    });
  }
  function renderAddRow() {
    return (
      props.showAddRow &&
      /*#__PURE__*/ _react['default'].createElement(props.components.EditRow, {
        columns: columns,
        components: props.components,
        data: props.initialFormData,
        detailPanel: props.detailPanel,
        errorState: props.errorState,
        getFieldValue: props.getFieldValue,
        icons: icons,
        isTreeData: props.isTreeData,
        key: 'key-add-row',
        localization: localization.editRow,
        mode: 'add',
        onEditingApproved: props.onEditingApproved,
        onEditingCanceled: props.onEditingCanceled,
        scrollWidth: props.scrollWidth
      })
    );
  }
  var renderData = props.renderData;
  var groups = props.columns
    .filter(function (col) {
      return col.tableData.groupOrder > -1;
    })
    .sort(function (col1, col2) {
      return col1.tableData.groupOrder - col2.tableData.groupOrder;
    });
  var emptyRowCount = 0;
  if (options.paging && props.pageSize > renderData.length) {
    emptyRowCount = props.pageSize - renderData.length;
  }
  var renderSummaryRow = _react['default'].useMemo(
    function () {
      return props.renderSummaryRow
        ? function (columnData) {
            return props.renderSummaryRow(
              _objectSpread(
                _objectSpread({}, columnData),
                {},
                {
                  data: props.data,
                  currentData: props.currentData
                }
              )
            );
          }
        : undefined;
    },
    [props.data]
  );
  return /*#__PURE__*/ _react['default'].createElement(
    _TableBody2['default'],
    {
      ref: props.forwardedRef
    },
    options.filtering &&
      /*#__PURE__*/ _react['default'].createElement(
        props.components.FilterRow,
        {
          columns: columns,
          icons: icons,
          hasActions: props.actions.some(function (a) {
            return a.position === 'row' || typeof a === 'function';
          }),
          onFilterChanged: props.onFilterChanged,
          localization: localization.filterRow,
          hasDetailPanel: !!props.detailPanel,
          isTreeData: props.isTreeData,
          scrollWidth: props.scrollWidth,
          hideFilterIcons: props.options.hideFilterIcons
        }
      ),
    options.addRowPosition === 'first' && renderAddRow(),
    groups.length > 0
      ? renderGroupedRows(groups, renderData)
      : renderUngroupedRows(renderData),
    options.addRowPosition === 'last' && renderAddRow(),
    /*#__PURE__*/ _react['default'].createElement(props.components.SummaryRow, {
      columns: columns,
      renderSummaryRow: renderSummaryRow,
      rowProps: props
    }),
    renderEmpty(emptyRowCount, renderData)
  );
}
MTableBody.defaultProps = {
  actions: [],
  currentPage: 0,
  data: [],
  pageSize: 5,
  renderData: [],
  selection: false
};
MTableBody.propTypes = {
  actions: _propTypes['default'].array,
  bulkEditChangedRows: _propTypes['default'].object,
  bulkEditOpen: _propTypes['default'].bool,
  cellEditable: _propTypes['default'].object,
  columns: _propTypes['default'].array.isRequired,
  components: _propTypes['default'].object.isRequired,
  currentPage: _propTypes['default'].number,
  data: _propTypes['default'].array,
  detailPanel: _propTypes['default'].oneOfType([
    _propTypes['default'].func,
    _propTypes['default'].arrayOf(
      _propTypes['default'].oneOfType([
        _propTypes['default'].object,
        _propTypes['default'].func
      ])
    )
  ]),
  errorState: _propTypes['default'].oneOfType([
    _propTypes['default'].object,
    _propTypes['default'].bool
  ]),
  forwardedRef: _propTypes['default'].oneOfType([
    _propTypes['default'].func,
    _propTypes['default'].object
  ]),
  getFieldValue: _propTypes['default'].func.isRequired,
  hasAnyEditingRow: _propTypes['default'].bool,
  hasDetailPanel: _propTypes['default'].bool.isRequired,
  initialFormData: _propTypes['default'].object,
  isTreeData: _propTypes['default'].bool.isRequired,
  onBulkEditRowChanged: _propTypes['default'].func,
  onCellEditFinished: _propTypes['default'].func,
  onCellEditStarted: _propTypes['default'].func,
  onEditingApproved: _propTypes['default'].func,
  onEditingCanceled: _propTypes['default'].func,
  onFilterChanged: _propTypes['default'].func,
  onGroupExpandChanged: _propTypes['default'].func,
  onRowClick: _propTypes['default'].func,
  onRowDoubleClick: _propTypes['default'].func,
  onGroupSelected: _propTypes['default'].func,
  onRowSelected: _propTypes['default'].func,
  onToggleDetailPanel: _propTypes['default'].func.isRequired,
  onTreeExpandChanged: _propTypes['default'].func.isRequired,
  pageSize: _propTypes['default'].number,
  renderData: _propTypes['default'].array,
  renderSummaryRow: _propTypes['default'].func,
  scrollWidth: _propTypes['default'].number.isRequired,
  selection: _propTypes['default'].bool.isRequired,
  showAddRow: _propTypes['default'].bool,
  treeDataMaxLevel: _propTypes['default'].number
};
var _default = /*#__PURE__*/ _react['default'].forwardRef(
  function MTableBodyRef(props, ref) {
    return /*#__PURE__*/ _react['default'].createElement(
      MTableBody,
      (0, _extends2['default'])({}, props, {
        forwardedRef: ref
      })
    );
  }
);
exports['default'] = _default;
