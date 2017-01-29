import React, { Component } from 'react';

const Pitching = (props) => {
    return (
        <div id="batting-table" className="container-fluid" style={{padding:"0px 0px 0px 0px"}}>
            <div style={{padding:"0px 0px 0px 0px", overflow: 'auto'}}>
                <table 
                className="table-custom"
                style={{width: "100%"}}>
                    <tbody className="table-custom">
                        <tr>
                            <th className="tableHeading">Year</th>
                            <th className="tableHeading">Games</th>
                            <th className="tableHeading">Wins</th>
                            <th className="tableHeading">Losses</th>
                            <th className="tableHeading">Complete Games</th>
                            <th className="tableHeading">Shut Outs</th>
                            <th className="tableHeading">Strike Outs</th>
                            <th className="tableHeading">Walks</th>
                            <th className="tableHeading">Hits</th>
                            <th className="tableHeading">Home Runs</th>
                            <th className="tableHeading">Earned Runs</th>
                            <th className="tableHeading">Earned Run Average</th>
                        </tr>
                        {
                            props.pitching.map(function(year){
                                return (
                                    <tr key={`${year.yearid}${year.teamid}`}>
                                        <td className="tableData">{year.yearid}</td>
                                        <td className="tableData">{year.g}</td>
                                        <td className="tableData">{year.w}</td>
                                        <td className="tableData">{year.l}</td>
                                        <td className="tableData">{year.cg}</td>
                                        <td className="tableData">{year.sho}</td>
                                        <td className="tableData">{year.so}</td>
                                        <td className="tableData">{year.bb}</td>
                                        <td className="tableData">{year.h}</td>
                                        <td className="tableData">{year.hr}</td>
                                        <td className="tableData">{year.er}</td>
                                        <td className="tableData">{year.era}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Pitching;