import React, { component } from 'react';

const Teams = (props) => {
    return (
        <div id="batting-table" className="container-fluid" style={{padding:"0px 0px 0px 0px"}}>
            <div  style={{padding:"0px 0px 0px 0px", overflow: "auto"}}>
                <table className="table-custom">
                    <tbody>
                        <tr>
                            <th className="tableHeading">Team</th>
                            <th className="tableHeading">Franchise ID</th>
                            <th className="tableHeading">League</th>
                            <th className="tableHeading">Division</th>
                            <th className="tableHeading">Games</th>
                            <th className="tableHeading">Wins</th>
                            <th className="tableHeading">Losses</th>
                            <th className="tableHeading">Win %</th>
                            <th className="tableHeading">Division Win</th>
                            <th className="tableHeading">League Win</th>
                            <th className="tableHeading">World Series Win</th>
                            <th className="tableHeading">Park</th>
                            <th className="tableHeading">Attendance</th>
                        </tr>
                        {
                            props.stats.map(function(team){
                                return (
                                    <tr key={`${team.teamid}${team.lgid}${team.franchid}${team.attendance}`}>
                                        <td className='tableData' >{team.name}</td>
                                        <td className='tableData' >{team.franchid}</td>
                                        <td className='tableData' >{team.lgid}</td>
                                        <td className='tableData' >{team.divid}</td>
                                        <td className='tableData' >{team.g}</td>
                                        <td className='tableData' >{team.w}</td>
                                        <td className='tableData' >{team.l}</td>
                                        <td className='tableData' >{(team.w / team.g).toString().slice(1,5)}</td>
                                        <td className='tableData' >{team.divwin}</td>
                                        <td className='tableData' >{team.lgwin}</td>
                                        <td className='tableData' >{team.wswin}</td>
                                        <td className='tableData' >{team.park}</td>
                                        <td className='tableData' >{team.attendance}</td>
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

export default Teams;