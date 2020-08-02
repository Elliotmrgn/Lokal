import React, { useState } from 'react';
import { Redirect, Link } from 'react-router-dom';
import { Container, Row, Col } from '../../components/Grid';
import { Card } from '../../components/Card';
import { Input, FormBtn } from '../../components/Form';
import AUTH from '../../utils/AUTH';
import firebase from '../../components/OTP/firebase'
import { Form } from 'react-bootstrap';
function Otp(){

    const [userObject, setUserObject] = useState({
        phoneNumber:'',
        isVerified:false,
        redirectTo: null
      });
      const [redirectTo, setRedirectTo] = useState(null);
      
      const Show = (event) => {
        var x = document.getElementById("Try");
        var y=document.getElementById("Verify");
            if (userObject.isVerified) {
                x.classList.add('show');
                y.classList.remove('show');
              }
              else {
                  
                if (x.classList.contains('show')) {
                    x.classList.remove('show');
                    
                y.classList.add('show');
                  }
              }
       }
  const handleChange = (event) => {
		setUserObject({
      ...userObject,
			[event.target.name]:event.target.value
		});
	};
      if (redirectTo) {
        return <Redirect to={{ pathname: redirectTo }} />
      }
      const handleSubmit=(event)=>{
        event.preventDefault();
        
        Show();
        let number='+1'+userObject.phoneNumber;
        console.log(number);
        // let recaptcha=new firebase.auth.RecaptchaVerifier('recaptcha');
        window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha', {
          'size': 'invsible',
          'callback': function(response) {
            // reCAPTCHA solved, allow signInWithPhoneNumber.
            // ...
          },
          'expired-callback': function() {
            // Response expired. Ask user to solve reCAPTCHA again.
            // ...
            alert('asasa')
            recaptcha.clear()
          }
        });
        var recaptcha = window.recaptchaVerifier;
        console.log(recaptcha)
        firebase.auth().signInWithPhoneNumber(number,recaptcha).then(function(e){
      
          let code=prompt('Enter Code','');
          if (code==null){
            
            console.log("asasa");
            recaptcha.clear()
            return;}
          e.confirm(code).then(function(result){
              userObject.isVerified=true;
              recaptcha.clear()
              setRedirectTo('/');
          }).catch((error)=>{
            recaptcha.clear()
          })
        }).catch((error)=>{
            recaptcha.clear()
            alert('Too Many Attempts')
        })
       }
       
return(
<Container>
<Row>
  <Col size="md-3"></Col>
  <Col size="md-6">
    <Card title="Register for React Reading List">
      <form style={{marginTop: 10}}>
<div>
              <label htmlFor="phoneNumber">Phone Number: </label>
              <div className="row">
            <div className="col-md-2">
              <Input style={{width:'50px',marginRight:'10px'}} type="text" value="+1" disabled/></div>
              <Input
              type="phoneNumber"
              name="phoneNumber"
              value={userObject.phoneNumber}
              onChange={handleChange}
              required='true'
            /></div>
            <label></label>
            <div id="recaptcha"></div>
            <div id="recaptcha-resend"></div>
            </div>
            <button id="Try" className="btn btn-success show" style={{marginBottom:'10px',float:'right'}} onClick={handleSubmit}>Try Again</button>
            <button id="Verify" className="btn btn-success" style={{marginBottom:'10px',float:'right'}} onClick={handleSubmit}>Verify</button>
                
            </form>
          </Card>
        </Col>
        <Col size="md-3"></Col>
      </Row>
    </Container>
)
}


export default Otp;