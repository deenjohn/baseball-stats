import React, { Component } from 'react';

const Batting = (props) => {
    let battingAvg;
    return (
        <div id="batting-table" className="container-fluid" style={{padding:"0px 0px 0px 0px"}}>
            <div  style={{padding:"0px 0px 0px 0px", overflow: "auto"}}>
                <table 
                className="table-custom"
                style={{width: "100%"}}>
                    <tbody>
                        <tr>
                            <th className="tableHeading">Year</th>
                            <th className="tableHeading">Games</th>
                            <th className="tableHeading">At Bats</th>
                            <th className="tableHeading">Walks</th>
                            <th className="tableHeading">Strike Outs</th>
                            <th className="tableHeading">Hits</th>
                            <th className="tableHeading">Batting Avg</th>
                            <th className="tableHeading">Doubles</th>
                            <th className="tableHeading">Triples</th>
                            <th className="tableHeading">Home Runs</th>
                            <th className="tableHeading">Runs</th>
                            <th className="tableHeading">Stoles Bases</th>
                            <th className="tableHeading">Caught Stealing</th>
                        </tr>
                        {
                            props.batting.map(function(year){
                                return (
                                    <tr key={`${year.yearid}${year.teamid}`}>
                                        <td className="tableData">{year.yearid}</td>  
                                        <td className="tableData">{year.g}</td>
                                        <td className="tableData">{year.ab}</td>
                                        <td className="tableData">{year.bb}</td>
                                        <td className="tableData">{year.so}</td>
                                        <td className="tableData">{year.h}</td>
                                        <td className="tableData">{Number(year.h / year.ab).toString().slice(1,5)}</td>
                                        <td className="tableData">{year.h2b}</td>
                                        <td className="tableData">{year.h3b}</td>
                                        <td className="tableData">{year.hr}</td>
                                        <td className="tableData">{year.r}</td>
                                        <td className="tableData">{year.sb}</td>
                                        <td className="tableData">{year.cs}</td>
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

export default Batting;