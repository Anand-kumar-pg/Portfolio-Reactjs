
import React from 'react'
import { Button, Container, Form } from 'react-bootstrap'

function LogIn() {
    function validateForm(e) {
        e.preventDefault();
        var email = document.getElementById('Email').value;
        var password = document.getElementById('exampleInputPassword1').value;
        console.log("Email :" + email);
        console.log("password :" + password);
    
        if(email === null || email === ''){
            let emailerror = document.getElementById('emailerror');
            emailerror.innerHTML = "please enter your email or phonenumber"
            emailerror.style.display = 'block';
            return false;            
        }
    
        if(password === null || password === ''){
            let passworderror = document.getElementById('passworderror');
            passworderror.innerHTML = "please enter your password"
            passworderror.style.display = 'block';
            return false;            
        }
        
        alert("Welcome to Mostudio");
    }

    return (
      <>
      <Container style={{ marginTop: '8%' }}>
      <div className="container">
          <Form onSubmit={validateForm}>
              <h1 className="Mostudio">MOSTUDIO</h1>
              <p style={{ fontSize: 'x-large', color: '#ecd068' }}>Login Your Account</p>
              <div className="mb-3">
                  <label htmlFor="Email" className="form-label"></label>
                  <input type="email" className="form-control" id="Email" aria-describedby="emailHelp" placeholder="Email or phonenumber"/>
                  <span id="emailerror" style={{ display: 'none', color: 'rgb(228, 37, 37)', paddingRight: '66px' }}></span>
              </div>
              <div className="mb-3">
                  <label htmlFor="exampleInputPassword1" className="form-label"></label>
                  <input type="password" className="form-control" id="exampleInputPassword1" placeholder="password"/>
                  <span id="passworderror" style={{ display: 'none', color: 'rgb(228, 37, 37)', paddingRight: '66px' }}></span>
              </div>
              <Button type="submit" className="btn btn-secondary">Log In</Button>
          </Form>
      </div>
      </Container>
      </>
    )
}

export default LogIn;