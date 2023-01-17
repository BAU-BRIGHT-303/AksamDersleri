import React from 'react'

function Contact() {
  return (
    <div className="container">
  <div className="row">
    <h1 style={{color: 'black'}}>CONTACT US</h1>
  </div>
  <div className="row">
    <h4 style={{textAlign: 'center'}}>What do you think about us?</h4>
  </div>
  <div className="row input-container">
    <div className="col-xs-12">
      <div className="styled-input wide">
        <input type="text" required />
        <label>Name</label> 
      </div>
    </div>
    <div className="col-md-6 col-sm-12">
      <div className="styled-input">
        <input type="text" required />
        <label>Email</label> 
      </div>
    </div>
    <div className="col-md-6 col-sm-12">
      <div className="styled-input" style={{float: 'right'}}>
        <input type="text" required />
        <label>Phone Number</label> 
      </div>
    </div>
    <div className="col-xs-12">
      <div className="styled-input wide">
        <textarea required defaultValue={""} />
        <label>Message</label>
      </div>
    </div>
    <div className="col-xs-12">
      <div className="btn-lrg submit-btn">Send Message</div>
    </div>
  </div>
</div>

  )
}

export default Contact
