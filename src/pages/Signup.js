import React from "react";
import {Link} from "react-router-dom"
import "../App.css"



class Signup extends React.Component{
    constructor(props){
        super(props);
        this.state={
                Email:"",
                Password:"",
                FullName:"",
                userData:[]      
        }
        this.handleEmail=this.handleEmail.bind(this);
        this.handlePassword=this.handlePassword.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
        this.handleFullName=this.handleFullName.bind(this);
      
    }
    handleEmail(e){
        this.setState({Email:e.target.value})
    }
    handlePassword(e){
        this.setState({Password:e.target.value})
    }
    handleFullName(e){
        this.setState({FullName:e.target.value})
    }
    handleSubmit(){
        
    }

    render(){
        console.log(this.state)
        return(
    <div>
     <div className="cont-1">
      <div className="first-logo">
        <img src="/images/logo-full.059e10fa5fedbfb65165e7565ed3936f.png" alt="img"/>
      </div>

    
        <div className="sign-up-div">
           <Link to="/Home" class="button-tag">Sign-in</Link>
           <Link to="/Signup"class="button-tag">Sign-up</Link>

        </div>

        <div className="basket-div">
            <img src="/images/020202.png" alt="img" width="40px" height="35px"/>

        </div>
       

     </div>
        <br/>
        <br/>
        <br/>
        <br/>

        <br/>




     <div className="form-container">
     <div>
           <h2 >Sign into Salinaka</h2>
            <form className=" form-class " onSubmit={this.handleSubmit} >
              <label htmlFor="name">Full Name</label>
              <input type="text" placeholder="      your full name here" onChange={this.handleFullName} value={this.state.FullName}/>
              <label htmlFor="email"> Email:</label>
              <input type="email" placeholder="      text@example.com" onChange={this.handleEmail} />
              <label htmlFor="pass">password: </label>
              <input type="password" placeholder="    your password here" onChange={this.handlePassword}/>
              <br/><br/>
              <div className="style-tag">
          <button type="submit" id="sign-09">Sign up</button>
          </div>
          </form>
        </div>
        </div>
          
      
  
     

      <div className="footer-laast">
          <p className="footer-para">
              Don't have an account?
              </p>
              <input type="button" value="Sign up" id="lasttt"/>
      </div>




</div>

        )
    }
}



export default Signup;
