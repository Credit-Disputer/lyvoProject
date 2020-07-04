import React, { Component } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link, NavLink, Redirect } from "react-router-dom";


//import Login from "./containers/Login";
// import SignUp from "./components/signup.component";
//import Dispute from "/Users/Fahim/Desktop/creditapp/src/components/experiandispute.js"


class App extends Component{
  render() {
    return(
      <Router>
      <Route path="/" exact strict render={
        () =>{
          return (<div class="wrapper fadeInDown">
                  <div id="formContent">



                      <div class="fadeIn first">
                            <img src="http://danielzawadzki.com/codepen/01/icon.svg" id="icon" alt="Sample Image" />
                                </div>


                                    <form>
                                    <input type="text" id="login" class="fadeIn second" name="login" placeholder="login"/>
                                    <input type="text" id="password" class="fadeIn third" name="login" placeholder="password"/>
                                    <input type="submit" class="fadeIn fourth" value="Log In"/>

                                    </form>


                                    <div id="formFooter">
                                    <a class="underlineHover" href="/SignUp/">Sign-up</a>
                                    </div>

                                      </div>
                                      </div>);
        }
      }
      />
      <Route path="/SignUp/" exact strict render={
        () =>{
          return (<div class="wrapper fadeInDown">
                  <div id="formContent">



                      <div class="fadeIn first">
                            <img src="http://danielzawadzki.com/codepen/01/icon.svg" id="icon" alt="Sample Image" />
                                </div>


                                    <form>
                                    <input type="text" id="login" class="fadeIn second" name="First Name" placeholder="First"/>
                                    <input type="text" id="password" class="fadeIn third" name="Last Name" placeholder="Last"/>
                                    <input type="text" id="login" class="fadeIn second" name="Email" placeholder="Email Address"/>
                                    <input type="text" id="password" class="fadeIn third" name="login" placeholder="password"/>
                                  <form action="/" method="get">
                                    <input type="submit" value="Sign-Up"
                                            name="Submit" id="frm1_submit" />
                                  </form>
                                    <div id="formFooter">
                                    <a class="underlineHover" href="/">Back to login</a>
                                    </div>
                                    </form>




                                      </div>
                                      </div>);
        }
      }
      />




        </Router>
    );
  }
}









export default App;
