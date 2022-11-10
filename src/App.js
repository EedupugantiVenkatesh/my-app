import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
function App() {
  return (
    
    <div>
      <div class="top"></div>
      <h1 align="center" class="top">LOGIN</h1>
      <center>
      <form>
        <div class="container">
          <label>Username  </label>
          <input type="text" placeholder="Enter Username" name="username" required />
          <label>Password </label>
          <input type="password" placeholder="Enter Password" name="password" required />
          <a href="m.html"><center><button type="submit" class="Login">Login</button></center></a>
          <a href="n.html"><center>
            <button type="button" class="register">Register</button> </center></a>
          <input type="checkbox" /> Remember me.
          Forgot <a href="o.hjtml"> password? </a>
        </div>
      </form>
      </center>
    </div>
  );

}

export default App;
