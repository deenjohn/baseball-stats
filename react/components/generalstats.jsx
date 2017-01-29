import React from 'react';


const GeneralStats = function(props){
    return (
        <div id="player-table" className="container-fluid" style={{padding:"0px 0px 0px 0px"}}>
            <table className="table-custom" style={{width: "100%"}}>
                <tbody>
                    <tr>
                        <th className="tableHeading"> Bats </th>
                        <th className="tableHeading"> Throws </th>
                        <th className="tableHeading"> Debut </th>
                        <th className="tableHeading"> Final Game </th>
                        <th className="tableHeading"> Born In </th>
                        <th className="tableHeading"> Born On </th>
                    </tr>
                    <tr>
                        <td className="tableData"> {props.general.bats}</td>
                        <td className="tableData"> {props.general.throws}</td>
                        <td className="tableData"> {props.general.debut}</td>
                        <td className="tableData"> {props.general.finalgame}</td>
                        <td className="tableData"> {props.general.birthcity} {props.general.birthstate}, {props.general.birthcountry}</td>
                        <td className="tableData"> {props.general.birthmonth} {props.general.birthday} {props.general.birthyear}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default GeneralStats;
