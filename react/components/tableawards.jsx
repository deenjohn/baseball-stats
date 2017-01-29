import React, { component } from 'react';

const TableAwards = (props) => {
    return (
        <div id="batting-table" className="container-fluid" style={{padding:"0px 0px 0px 0px"}}>
            <div  style={{padding:"0px 0px 0px 0px", overflow: "auto"}}>
                <table className="table-custom">
                    <tbody>
                        <tr>
                            <th className="tableHeading">First Name</th>
                            <th className="tableHeading">Last Name</th>
                            <th className="tableHeading">League</th>
                            <th className="tableHeading">Award</th>
                            <th className="tableHeading">Tie</th>
                        </tr>
                        {
                            props.stats.map(function(player){
                                return (
                                    <tr key={`${player.playerid}${player.nameLast}${player.lgid}${player.awardid}${player.tie}`}>
                                        <td className='tableData' >{player.nameFirst}</td>
                                        <td className='tableData' >{player.nameLast}</td>
                                        <td className='tableData' >{player.lgid}</td>
                                        <td className='tableData' >{player.awardid}</td>
                                        <td className='tableData' >{player.tie}</td>
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

export default TableAwards;