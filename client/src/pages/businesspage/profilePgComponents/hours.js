//code for hours

import React from "react";
import Table from 'react-bootstrap/Table';


function hoursPF(props) {



    return (
        <div>
            <Table responsive>
            {/* <thead>
                <tr className="hoursHead">
                   {props.name} Hours
                </tr>
            </thead> */}

            <tbody>
                <tr>
                    <td>Monday</td>
                    <td>{props.MonOpen}PM</td>
                    <td>to</td>
                    <td>{props.MonClose}PM</td>
                </tr>

                <tr>
                    <td>Tuesday</td>
                    <td>{props.TuesOpen}PM</td>
                    <td>to</td>
                    <td>{props.TuesClose}PM</td>
                </tr>

                <tr>
                    <td>Wednesday</td>
                    <td>{props.WedOpen}PM</td>
                    <td>to</td>
                    <td>{props.WedClose}PM</td>
                </tr>

                <tr>
                    <td>Thursday</td>
                    <td>{props.ThursOpen}PM</td>
                    <td>to</td>
                    <td>{props.ThursClose}PM</td>
                </tr>

                <tr>
                    <td>Friday</td>
                    <td>{props.FriOpen}PM</td>
                    <td>to</td>
                    <td>{props.FriClose}PM</td>
                </tr>

                <tr>
                    <td>Saturday</td>
                    <td>Closed</td>
                    <td></td>
                    <td></td>
                </tr>

                <tr>
                    <td>Sunday</td>
                    <td>Closed</td>
                    <td></td>
                    <td></td>
                </tr>

                {/* <tr>
                    <td>Saturday</td>
                    <td>9PM</td>
                    <td>to</td>
                    <td>5PM</td>
                </tr>

                
                 <tr>
                    <td>Sunday</td>
                    <td>{props.SunOpen}PM</td>
                    <td>to</td>
                    <td>{Props.SunClose}PM</td>
                </tr>
                 */}
     
            </tbody>
            </Table>
        </div>
    )
}

export default hoursPF