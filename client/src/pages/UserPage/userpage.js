import React, { useState, useEffect } from "react";
import API from "../../utils/API";


function Userpage() {

    const meee = "5f0fa2b679ec7a7d8825ec2c"
    const [user, setuser] = useState([]);
    const [business, getBusiness] = useState([]);
    const [businesss, setBusiness] = useState([]);

    useEffect(() => {
        loaduser();
      }, []);

    function loaduser(){
        API.getUser(meee)
            .then((res) => {
            console.log(res.data);
            setuser(res.data);
            getBusiness(res.data.business[0])
            })
            .catch(err => console.log(err));
            API.getProfile(business)
                .then((res) => {
                console.log(res.data);
                setBusiness(res.data);
                })
                .catch(err => console.log(err));
        }

    return (
        <div>
            <p>hello {user.firstName}</p> 
            <h4>edit your busiensses babe</h4>
            { businesss.map((busienssNames) =>  <p>{businesss.businessName}</p>)}
       </div>
    );
}

export default Userpage