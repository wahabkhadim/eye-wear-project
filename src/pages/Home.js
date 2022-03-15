import React from "react";
import "../App.css"

import {Link} from "react-router-dom"



class Home extends React.Component{
    constructor(props){
        super(props);
        this.state={
                Email:[],
                Password:"",
                currentId:1
            
        }
        this.handleEmail=this.handleEmail.bind(this);
        this.handlePassword=this.handlePassword.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
      
    }
    handleEmail(e){
    

    }
    handlePassword(e){
   
        
    }
    handleSubmit(){
    }

    render(){

        return(
    <div>
    <div className="second-div">
     <div className="cont-1">
      <div className="first-logo">
        <img src="/images/logo-full.059e10fa5fedbfb65165e7565ed3936f.png" alt="img"/>
      </div>

    
      <div className="sign-up-div">
           <Link to="/Home" class="button-tag"> Sign-in</Link>
           <Link to="/Signup" class="button-tag"> Sign-up</Link>

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
            <form className=" form-class " >
              <label htmlFor="email"> Email:</label>
              <input type="email" placeholder="      text@example.com" onChange={this.handleEmail} value={EventTarget.Email}/>
              <label htmlFor="pass">password: </label>
              <input type="password" placeholder="    your password here" onChange={this.handlePassword}/>
              <br/>


  
          <a href="https://www.google.com.pk/" className="button-style" id="forgot"> forgot password</a>
          

          <button type="submit" id="sign">Sign in</button>
          </form>
        </div>
        </div>

        <div className="vl"> </div>
  
          <div className="table-container">
              <table>
              <tbody>
                  <tr>
                      <td>
                          <input type="button"  value="  Sign into Facebook  " id="button-1"/>
                      </td>
                  </tr>
                  <tr>
                      <td>
                          <input type="button" value=" Sign in with Google " id="button-2"/>
                      </td>
                  </tr>
                  <tr>
                      <td>
                          <input type="button" value="  Sign in with Github " id="button-3"/>
                      </td>
                  </tr>
                  </tbody>
              </table>
          </div>

          </div>
          

  
      
  
     

      <div className="footer-first">
          <p className="footer-para">
              Don't have an account?
              </p>
              <Link to="/Signup" id="lasttt-02">Sign up</Link>
      </div>




</div>

        )
    }
}



export default Home;
