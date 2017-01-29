import React, { Component } from 'react';

const Awards = (props) => {
    return (
        <div id="batting-table" className="container-fluid" style={{padding:"0px 0px 0px 0px"}}>
            <div style={{padding:"0px 0px 0px 0px"}}>
                <table 
                className="table-custom"
                style={{width: "100%"}}>
                    <tbody>
                        <tr>
                            <th className="tableHeading">Year</th>
                            <th className="tableHeading">League</th>
                            <th className="tableHeading">Award</th>
                        </tr>
                        {
                            props.awards.map(function(year){
                                let awardName
                                if(year.awardid.startsWith("TSN")){
                                    awardName = year.awardid.slice(4);
                                }else awardName = year.awardid;
                                return (
                                    <tr key={`${year.yearid}${year.awardid}${year.lgid}`}>
                                        <td className="tableData">{year.yearid}</td>  
                                        <td className="tableData">{year.lgid}</td>
                                        <td className="tableData">{awardName}</td>
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

export default Awards;