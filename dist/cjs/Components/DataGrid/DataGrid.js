"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const x_data_grid_pro_1 = require("@mui/x-data-grid-pro");
const react_1 = __importDefault(require("react"));
const RobenDataGrid = (props) => {
    const { rows, columns, rowHeight = 60, showCellVerticalBorder = true, onCellEditStart } = props;
    const getTreeDataPath = (row) => row.hierarchy;
    return (react_1.default.createElement("div", { style: { height: 400, width: '100%' } },
        react_1.default.createElement(x_data_grid_pro_1.DataGridPro, { rows: rows, columns: columns, rowHeight: rowHeight, showCellVerticalBorder: showCellVerticalBorder, getTreeDataPath: getTreeDataPath, onCellEditStart: onCellEditStart })));
};
exports.default = RobenDataGrid;
//# sourceMappingURL=DataGrid.js.map