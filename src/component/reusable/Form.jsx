const Form = () => {
  return (
    <>
    <div className="container column is-6 py-6">
      <h2 className="is-size-3">Contact</h2>
<div className="field">
  <label className="label">Name</label>
  <div className="control">
    <input className="input" type="text" placeholder="Text input" required/>
  </div>
</div>

<div className="field">
  <label className="label">Email</label>
  <div className="control">
    <input className="input" type="email" placeholder="Email input" required/>
  </div>
</div>

<div className="field">
  <label className="label">Message</label>
  <div className="control">
    <textarea className="textarea" placeholder="Textarea" required></textarea>
  </div>
</div>

<div className="field">
  <div className="control">
    <label className="checkbox">
      <input type="checkbox"/>
      I agree to the <a href="#">terms and conditions</a>
    </label>
  </div>
</div>

<div className="field">
  <div className="control">
    <button className="button is-link">Submit</button>
  </div>
</div>
</div>
</>
  )
}

export default Form
