/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"

class CivilPage extends React.Component {
  state = {
    fullName: "",
    email: "",
    numberOfPeople: "",
    message: "",
    isError: false,
    isLoading: false
  };

  formCellStyle = {
    textAlign: 'center',
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
    this.setState({
      isLoading: true
    })

    if (this.state.fullName === '' || this.state.email === '' || this.state.numberOfPeople === '') {
      this.setState({
        message: 'Please, fill all the fields',
        isError: true,
        isLoading: false
      });
      return;
    }

    fetch('https://api.apispreadsheets.com/data/KLUVlceUxqpxcmRl/', {
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
    })
    .then((response) => {
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return response;
    })
    .then((response) => {
      this.setState({
        message: 'Thank you! We are very happy to spend this very special day with you!',
        isError: false,
        isLoading: false
      })

      return response;
    })
    .catch(error => {
      this.setState({
        message: 'An error has occured. Please refresh the page and try again later. If the problem persists, you can also RSVP at this phone number: (647)471-7860 Ana Paula',
        isError: true,
        isLoading: false
      });
    });
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
        src="/images/vida-civil.jpg"
        sx={{
          maxWidth: '100%',
          width: 500,
          maxHeight: '100vh',
          margin: 'auto',
          padding: 0
        }} />
      <div sx={{
        textAlign: 'center',
        fontSize: 16,
        marginBottom: 32
      }}>
        <a
          sx={{
            color: 'black',
            textDecoration: 'underline'
          }} 
          href="https://en.casare.me/KirilleAna/lista-de-casamento/239672" 
          alt="Wedding registry">
            Wedding registry
        </a>
      </div>
      <div sx={{
        textAlign: 'center',
        fontSize: 16,
        marginBottom: 32
      }}>
        <a
          sx={{
            color: 'black',
            textDecoration: 'underline'
          }} 
          href="http://casare.me/KirilleAna" 
          alt="Our story">
            Our story
        </a>
      </div>
    </div>
    )};
}

export default CivilPage
