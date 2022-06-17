/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"

class AninhaPage extends React.Component {
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
        message: 'Por favor, preencha todos os espaços',
        isError: true,
        isLoading: false
      });
      return;
    }

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
    })
    .then((response) => {
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return response;
    })
    .then((response) => {
      this.setState({
        message: 'Obrigado! Estamos muito felizes de ter vocês com a gente nesse dia especial!',
        isError: false,
        isLoading: false
      })

      return response;
    })
    .catch(error => {
      this.setState({
        message: 'Ocorreu um erro. Por favor recarregue a página e tente novamente mais tarde. Se o problema persistir, você também pode fazer a confirmação através do número de telefone (32) 99962-5556 e falar com a Cláudia do Carimonial',
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
        src="/images/vida-pt.jpg"
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
      }}>RSVP aqui:</span>
      <form onSubmit={this.handleSubmit} sx={{        
        margin: 'auto',
        width: '100%',
        padding: 0
      }}>
        <div sx={this.formCellStyle}>
          <label>
            Nome completo
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
            Número de pessoas
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
          <button type="submit">{ this.state.isLoading ? <img src="/images/loading.gif" sx={{width:20, height:20}} alt='loading' /> : 'Enviar' } </button>          
        </div>
        <div sx={{
          ...this.formCellStyle,
          color: this.state.isError ? 'red' : 'green',
          fontWeight: 600
        }}>
          <span>{this.state.message}</span>
        </div>
      </form>
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
          alt="Lista de presentes">
            Lista de presentes
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
          href="/documents/Sugestões Pousadas Tiradentes.pdf" 
          alt="Onde ficar em Tiradentes (PDF)" 
          download>
            Onde ficar em Tiradentes (PDF)
        </a>
      </div>
    </div>
    )};
}

export default AninhaPage
