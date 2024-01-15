import { DataGridPro, GridRowsProp, GridColDef, DataGridProProps, GridCellParams } from '@mui/x-data-grid-pro'

import React from 'react'
export interface DataGridProps {
  rows: GridRowsProp
  columns: GridColDef[]
  rowHeight?: number
  showCellVerticalBorder?: boolean
  getTreeDataPathValue?: string
  onCellEditStart?: (params: GridCellParams) => void
}

const RobenDataGrid = (props: DataGridProps) => {
  const { rows, columns, rowHeight = 60, showCellVerticalBorder = true, onCellEditStart } = props

  const getTreeDataPath: DataGridProProps['getTreeDataPath'] = (row) => row.hierarchy
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGridPro
        rows={rows}
        columns={columns}
        rowHeight={rowHeight}
        showCellVerticalBorder={showCellVerticalBorder}
        getTreeDataPath={getTreeDataPath}
        onCellEditStart={onCellEditStart}
      />
    </div>
  )
}

export default RobenDataGrid
