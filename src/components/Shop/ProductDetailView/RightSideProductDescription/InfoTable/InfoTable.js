import React, { Fragment } from 'react';
import styled from 'styled-components';

export default function InfoTable({ numeGrup, atributeGrup }) {

    // const tableRowsToDisplay = [];
    // let i = 0;
    // for (let prop in tableType) {
    //     if (Object.prototype.hasOwnProperty.call(tableType, prop)) {
    //         // do stuff
    //         tableRowsToDisplay[i] = {};
    //         tableRowsToDisplay[i].title = titles[name][prop];
    //         tableRowsToDisplay[i].value = tableType[prop];
    //         i++;
    //     }
    // }

    return (
        <Fragment>
            <div>
                <tr>
                    <th>{numeGrup}</th>
                    <th></th>
                </tr>
                {
                    // tableRowsToDisplay.map((item, i) => {
                    //     return (<tr key={i}><td>{item.title}</td><td>{item.value}</td></tr>);
                    // })
                }
                <tr>
                    <td>asdjalksjd</td>
                    <td>asda</td>
                </tr>

            </div>
        </Fragment >
    )
}

const TableWrapper = styled.table`
    border-collapse: collapse;
    margin-right: 0.5rem;
    th, td {
        text-align: left;
        padding: 8px;
    }  
    tbody tr:nth-child(even) {background-color: white;}
    th {
        background-color: var( --greenColor);
        color: white;
    }

`;
