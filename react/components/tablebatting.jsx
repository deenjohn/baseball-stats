import React, { component } from 'react';

const TableComponent = (props) => {
    return (
        <div id="batting-table" className="container-fluid" style={{padding:"0px 0px 0px 0px"}}>
            <div  style={{padding:"0px 0px 0px 0px", overflow: "auto"}}>
                <table className="table-custom">
                    <tbody>
                        <tr>
                            <th className="tableHeading">First Name</th>
                            <th className="tableHeading">Last Name</th>
                            <th className="tableHeading">Team</th>
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
                            props.stats.map(function(player){
                                return (
                                    <tr key={`${player.playerid}${player.nameLast}${player.teamid}${player.ab}${player.g}${player.so}${player.stint}`}>
                                        <td className='tableData' >{player.nameFirst}</td>
                                        <td className='tableData' >{player.nameLast}</td>
                                        <td className='tableData' >{player.teamid}</td>
                                        <td className='tableData' >{player.g}</td>
                                        <td className='tableData' >{player.ab}</td>
                                        <td className='tableData' >{player.bb}</td>
                                        <td className='tableData' >{player.so}</td>
                                        <td className='tableData' >{player.h}</td>
                                        <td className='tableData' >{Number(player.h / player.ab).toString().slice(1,5)}</td>
                                        <td className='tableData' >{player.h2b}</td>
                                        <td className='tableData' >{player.h3b}</td>
                                        <td className='tableData' >{player.hr}</td>
                                        <td className='tableData' >{player.r}</td>
                                        <td className='tableData' >{player.sb}</td>
                                        <td className='tableData' >{player.cs}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default TableComponent;