import React from 'react';
import { Container } from 'react-bootstrap';

function Main() {
    return (
         <div>
          <Container>
            <a className="logo-etoile etoile">
                <img src='https://www.docplanner.com/img/sygnet.png'></img>   
            </a> 
            <h1 className='logo-etoile titre'>Making the healthcare experience more human</h1>
          </Container>
       </div>
        
    )
}

export default Main;