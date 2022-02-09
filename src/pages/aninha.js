/** @jsx jsx */
import { jsx } from "theme-ui"

const AninhaPage = () => {
  
  
  return (<div
      sx={{
        margin: 0,
        padding: 0,
        display: `grid`,
        height: `100%`,
        backgroundColor: `white`
      }}
    >
      <img 
        alt="wedding invitation"
        src="images/aninha-bg.jpg"
        sx={{
          maxWidth: '100%',
          maxHeight: '100vh',
          margin: 'auto',
          padding: 0
        }} />
    </div>);
}

export default AninhaPage
