import React, { Component } from "react";
import { Container, Row, Col } from "../../components/Grid";
import './Contact.css';
import axios from 'axios';

class Contact extends Component {
  constructor(props) {
	super(props);
	this.state = {
  	name: '',
  	email: '',
  	message: ''
	  }
  }

  handleSubmit(event){
    event.preventDefault();
    axios({
      method: "POST", 
      url:"http://localhost:3002/send", 
      data:  this.state
    }).then((response)=>{
      if (response.data.status === 'success'){
        alert("Message Sent."); 
        this.resetForm()
      }else if(response.data.status === 'fail'){
        alert("Message failed to send.")
      }
    })
  }

  resetForm(){
    
     this.setState({name: '', email: '', message: ''})
  }

  render() {
    return (
      <Container fluid>
           <Row>
           <Col size="size md-12">
              <h1>GET IN TOUCH</h1>
              <h2>Have a question for us? Ask away!</h2>
              <p>We’d also love to hear your suggestions on new categories you’d like to see. </p>
            </Col>
          </Row>
        
          <div className="Contact">
            <form id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">

              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" 
                  className="form-control" 
                  value={this.state.name}   
                  onChange={this.onNameChange.bind(this)} />
              </div>

              <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Email address</label>
                  <input 
                    type="email" 
                    className="form-control"  
                    aria-describedby="emailHelp" 
                    value={this.state.email} 
                    onChange=  {this.onEmailChange.bind(this)} 
                  />
              </div>

              <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea className="form-control" rows="5" value=  {this.state.message} onChange={this.onMessageChange.bind(this)}   />
              </div>

              <button type="submit" className="btn btn-primary">Submit</button>
            
            </form>
          </div>
        </Container>
      
    );
   }
   
    onNameChange(event) {
    this.setState({name: event.target.value})
    }

    onEmailChange(event) {
    this.setState({email: event.target.value})
    }

    onMessageChange(event) {
    this.setState({message: event.target.value})
    }
}
  
  export default Contact;