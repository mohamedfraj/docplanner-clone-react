import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import bg from './bg.png'

const divStyle = {
    width: '100%',
    height: 'auto',
    backgroundImage: `url(${bg})`,
    backgroundSize: 'cover'
};
const tab = [
    {
        logo: 'https://www.docplanner.com/img/flag.png',
        titre: "Leader in 10 countries",
        paragraphdiv: "Poland, Turkey, Spain, Italy, Czech Republic, Mexico, Brazil, Colombia, Argentina and Chile",
        css: "h"
    }, {
        logo: "https://www.docplanner.com/img/visits.png",
        titre: "1.5 million appointments",
        paragraphdiv: "booked last month",

    }, {
        logo: "https://www.docplanner.com/img/patients.png",
        titre: "30 million unique patients",
        paragraphdiv: "visit us every month",
        css: "h"
    }, {
        logo: "https://www.docplanner.com/img/doctors.png ",
        titre: "2 million active doctors",
        paragraphdiv: "trust in our solutions",
    }
];

function Cardimg() {
    return (
        <div style={divStyle}>
            <Container className='Containercards'>
                <Row>
                <Col lg={5} md={12} sm={12}>
                <div className='titre-parag'>
                    <h1 className='H1the-world'>The world's biggest healthcare platform</h1>
                    <p className='paragraph-wework' >We work from 6 offices all over the world, bringing Docplanner Group to life in almost 20 countries.</p>
                </div>
                </Col>
                <Col lg={7} md={12} sm={12}>
                <div className='descardes'>
                    {tab.map(el =>

                        <div className='cardlogo' style={{ marginTop: el.css == "h" && '40px' }}>
                            <div className='centre'>
                                <img src={el.logo}></img>
                            </div>
                            <h2 className='tith1 centre'>{el.titre}</h2>
                            <p className='paragpoland centre' >{el.paragraphdiv}</p>
                        </div>)} 
                </div> </Col>
                </Row>
            </Container>
        </div >)
}
export default Cardimg;