//code for hours

import React from "react";
import Table from 'react-bootstrap/Table';


function hoursPF(props) {



    return (
        <div>
            <Table responsive>
            <thead>
                    <td></td>
                    <td>open</td>
                    <td>close</td>
                
            </thead>

            <tbody>
                <tr>
                    <td>Monday</td>
                    <td>{props.MonOpen}</td>
                    <td>{props.MonClose}</td>
                </tr>

                <tr>
                    <td>Tuesday</td>
                    <td>{props.TuesOpen}</td>
                    <td>{props.TuesClose}</td>
                </tr>

                <tr>
                    <td>Wednesday</td>
                    <td>{props.WedOpen}</td>
                    <td>{props.WedClose}</td>
                </tr>

                <tr>
                    <td>Thursday</td>
                    <td>{props.ThursOpen}</td>
                    <td>{props.ThursClose}</td>
                </tr>

                <tr>
                    <td>Friday</td>
                    <td>{props.FriOpen}</td>
                    <td>{props.FriClose}</td>
                </tr>

    
                <tr>
                    <td>Saturday</td>
                    <td>{props.SatOpen}</td>
                    <td>{props.SatClose}</td>
                </tr>

                
                 <tr>
                    <td>Sunday</td>
                    <td>{props.SunOpen}</td>
                    {/* <td>to</td> */}
                    <td>{props.SunClose}</td>
                </tr>
                
     
            </tbody>
            </Table>
        </div>
    )
}

export default hoursPF