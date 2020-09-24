import React from 'react';
import { AgGridReact, AgGridColumn } from '@ag-grid-community/react';
import { ClientSideRowModelModule } from '@ag-grid-community/client-side-row-model';
import '@ag-grid-community/core/dist/styles/ag-grid.css';
import '@ag-grid-community/core/dist/styles/ag-theme-alpine.css';

const HighScoresDisplay = ({highScores}) => {
    return (
        <div style={{width: '610px', height: '400px'}}>
            <div
                id="myGrid"
                style={{
                    height: '100%',
                    width: '100%',
                }}
                className="ag-theme-alpine"
            >
                <AgGridReact
                    modules={[ClientSideRowModelModule]}
                    defaultColDef={{
                        width: 170,
                        sortable: true,
                    }}
                    rowData={highScores}
                >
                    <AgGridColumn field="username"/>
                    <AgGridColumn field="score" sort="desc"/>
                    <AgGridColumn field="timestamp"/>
                </AgGridReact>
            </div>
        </div>
    );

}

export default HighScoresDisplay;
