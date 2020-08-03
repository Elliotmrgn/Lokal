import React, { useState } from "react";
import { Redirect, Link } from "react-router-dom";
import { Container, Row, Col } from "../../components/Grid";
import { Card } from "../../components/Card";
import { Input, FormBtn } from "../../components/Form";
import AUTH from "../../utils/AUTH";
import Nav from "../../components/Nav/Nav";
import firebase from '../../components/OTP/firebase'

function SignupForm() {
  const [userObject, setUserObject] = useState({
    firstName: '',
    lastName: '',
    username: '',
    password: '',
    confirmPassword: '',
    phoneNumber:'',
    redirectTo: null
  });
  const [redirectTo, setRedirectTo] = useState(null);
  const handleChange = (event) => {
		setUserObject({
      ...userObject,
			[event.target.name]: event.target.value
		});
	};
 
	const handleSubmit  = (event) => {
    
  event.preventDefault();
		// TODO - validate!
		AUTH.signup({
      firstName: userObject.firstName,
      lastName: userObject.lastName,
      username: userObject.username,
      password: userObject.password,
    }).then(response => {
      if (!response.data.errmsg) {
        setRedirectTo('/Otp');
      } else {
      }
    });
  };
  
  if (redirectTo) {
    return <Redirect to={{ pathname: redirectTo }} />
  }
  
  return (
    <>
      <main>
        <Container>
          <Row>
            <Col size="md-3"></Col>
            <Col size="md-6">
              <div className="hello">
                First register for an account so you can list your business!
              </div>
              {/* <Card title="Register for React Reading List"> */}
              <form style={{ marginTop: 10 }}>
                {/* <label htmlFor="username">First name: </label> */}
                <Input
                  type="text"
                  name="firstName"
                  value={userObject.firstName}
                  onChange={handleChange}
                  placeholder="first name"
                  class="form__field"
                />
                {/* <label htmlFor="username">Last name: </label> */}
                <Input
                  type="text"
                  name="lastName"
                  value={userObject.lastName}
                  onChange={handleChange}
                  placeholder="last name"
                  class="form__field"
                />
                {/* <label htmlFor="username">Username: </label> */}
                <Input
                  type="text"
                  name="username"
                  value={userObject.username}
                  onChange={handleChange}
                  placeholder="username"
                  class="form__field"
                />
                {/* <label htmlFor="email">Email: </label> */}
                <Input
                  type="text"
                  name="email"
                  value={userObject.email}
                  onChange={handleChange}
                  placeholder="email"
                  class="form__field"
                />
                {/* <label htmlFor="password">Password: </label> */}
                <Input
                  type="password"
                  name="password"
                  value={userObject.password}
                  onChange={handleChange}
                  placeholder="password"
                  class="form__field"
                />
                {/* <label htmlFor="confirmPassword">Confirm Password: </label> */}
                <Input
                  type="password"
                  name="confirmPassword"
                  value={userObject.confirmPassword}
                  onChange={handleChange}
                  placeholder="confirm password"
                  class="form__field"
                />
                <Link to="/login">Login</Link>
                <FormBtn onClick={handleSubmit}>Register</FormBtn>
              </form>
              {/* </Card> */}
            </Col>
            <Col size="md-3"></Col>
          </Row>
        </Container>
      </main>
    </>
  );
}

export default SignupForm;
