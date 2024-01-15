import { DataGridPro } from '@mui/x-data-grid-pro';
import React from 'react';
const RobenDataGrid = (props) => {
    const { rows, columns, rowHeight = 60, showCellVerticalBorder = true, onCellEditStart } = props;
    const getTreeDataPath = (row) => row.hierarchy;
    return (React.createElement("div", { style: { height: 400, width: '100%' } },
        React.createElement(DataGridPro, { rows: rows, columns: columns, rowHeight: rowHeight, showCellVerticalBorder: showCellVerticalBorder, getTreeDataPath: getTreeDataPath, onCellEditStart: onCellEditStart })));
};
export default RobenDataGrid;
//# sourceMappingURL=DataGrid.js.map