// import Data from "../../data/Data.json";
// import { useState } from "react";


const Auth = () => {
  return (
    <>
    <div className="container column is-3 py-6">
          <div className="container">
      <h2 className="is-size-3 pt-6">Connexion</h2>

      <form id="loginForm">

<div className="field">
  <label className="label">Email</label>
  <div className="control">
    <input className="input" type="email" id="email" placeholder="youremail@mail.com" required/>
  </div>
</div>

<div className="field">
  <label className="label">Name</label>
  <div className="control">
    <input className="input" type="password" id="password" placeholder="password" required/>
  </div>
</div>

<div className="field">
  <div className="control">
    <button type="submit" className="button is-link">Submit</button>
  </div>
</div>

 <p id="error" className="error-msg"></p>

</form>

</div>
</div>
</>
  )
}

export default Auth
