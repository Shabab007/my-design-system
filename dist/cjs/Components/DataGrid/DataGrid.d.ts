import { GridRowsProp, GridColDef, GridCellParams } from '@mui/x-data-grid-pro';
import React from 'react';
export interface DataGridProps {
    rows: GridRowsProp;
    columns: GridColDef[];
    rowHeight?: number;
    showCellVerticalBorder?: boolean;
    getTreeDataPathValue?: string;
    onCellEditStart?: (params: GridCellParams) => void;
}
declare const RobenDataGrid: (props: DataGridProps) => React.JSX.Element;
export default RobenDataGrid;
