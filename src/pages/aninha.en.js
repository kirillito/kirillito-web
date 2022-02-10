/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"

class AninhaPage extends React.Component {
  state = {
    fullName: "",
    email: "",
    numberOfPeople: "",
  };

  formCellStyle = {
    margin: 2,
    padding: 2,
    "& input": {
      mx: 2
    }
  };

  handleInputChange = event => {
    const target = event.target
    const value = target.value
    const name = target.name
    this.setState({
      [name]: value,
    })
  };

  handleSubmit = event => {
    event.preventDefault();

    fetch('https://api.apispreadsheets.com/data/3xKShONVKje8u0Rr/', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        data : {
          fullName: this.state.fullName,
          email: this.state.email,
          numberOfPeople: this.state.numberOfPeople
        }
      })
    });

    alert('Thank you! We are very happy to spend this very special day with you!');
  };

  render() {
    return (
    <div
      sx={{
        color: 'black',
        margin: 0,
        padding: 0,
        display: `grid`,
        height: `100%`,
        backgroundColor: `white`
      }}
    >
      <img 
        alt="Ana and Kirill"
        src="/images/anakirill.jpg"
        sx={{
          maxWidth: '100%',
          width: 600,
          maxHeight: '100vh',
          margin: 'auto',
          padding: 0
        }} />
      <img 
        alt="dog"
        src="/images/vida-en.jpg"
        sx={{
          maxWidth: '100%',
          width: 500,
          maxHeight: '100vh',
          margin: 'auto',
          padding: 0
        }} />
      <span sx={{
        maxWidth: '100%',
        textAlign: "center",
        color: 'black',
        fontSize: 18,
        margin: 'auto',
        padding: 0
      }}>RSVP here:</span>
      <form onSubmit={this.handleSubmit} sx={{        
        margin: 'auto',
        padding: 0
      }}>
        <div sx={this.formCellStyle}>
          <label>
            Full name
            <input 
              type="text" 
              name="fullName" 
              value={this.state.fullName}
              onChange={this.handleInputChange}
            />
          </label>
        </div>
        <div sx={this.formCellStyle}>
          <label>
            Email
            <input 
              type="text" 
              name="email" 
              value={this.state.email}
              onChange={this.handleInputChange}
            />
          </label>
        </div>
        <div sx={this.formCellStyle}>
          <label>
            Number of people coming
            <input 
              type="text" 
              name="numberOfPeople"                
              value={this.state.numberOfPeople}
              onChange={this.handleInputChange}
            />
          </label>
        </div>
        <div sx={{
          ...this.formCellStyle,
          textAlign: 'center'
          }}>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
    )};
}

export default AninhaPage
