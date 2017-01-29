import React, { component } from 'react';

const TablePitching = (props) => {
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
                            <th className="tableHeading">Wins</th>
                            <th className="tableHeading">Losses</th>
                            <th className="tableHeading">Complete Games</th>
                            <th className="tableHeading">Saves</th>
                            <th className="tableHeading">Hits</th>
                            <th className="tableHeading">Home Runs</th>
                            <th className="tableHeading">Walks</th>
                            <th className="tableHeading">Strike Outs</th>
                            <th className="tableHeading">Batting Avg Against</th>
                            <th className="tableHeading">ERA</th>
                        </tr>
                        {
                            props.stats.map(function(player){
                                return (
                                    <tr key={`${player.playerid}${player.nameLast}${player.teamid}${player.ab}${player.g}${player.so}${player.stint}`}>
                                        <td className='tableData' >{player.nameFirst}</td>
                                        <td className='tableData' >{player.nameLast}</td>
                                        <td className='tableData' >{player.teamid}</td>
                                        <td className='tableData' >{player.g}</td>
                                        <td className='tableData' >{player.w}</td>
                                        <td className='tableData' >{player.l}</td>
                                        <td className='tableData' >{player.cg}</td>
                                        <td className='tableData' >{player.sv}</td>
                                        <td className='tableData' >{player.h}</td>
                                        <td className='tableData' >{player.hr}</td>
                                        <td className='tableData' >{player.bb}</td>
                                        <td className='tableData' >{player.so}</td>
                                        <td className='tableData' >{player.baopp}</td>
                                        <td className='tableData' >{player.era}</td>
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

export default TablePitching;