import React from 'react';
import { Container, Card, Button } from "react-bootstrap";


const tab = [{
    img: "https://www.docplanner.com/images/warsaw.png",
    titre: "Warsaw",
    btn: "SEE OPENINGS"
}, {
    img: "https://www.docplanner.com/images/barcelona.png",
    titre: "Barcelona",
    btn: "SEE OPENINGS"
},
{
    img: "https://www.docplanner.com/images/istanbul.png",
    titre: "Istanbul",
    btn: "SEE OPENINGS"
},
{
    img: "https://www.docplanner.com/images/rome.png",
    titre: "Rome",
    btn: "SEE OPENINGS"
},
{
    img: "https://www.docplanner.com/images/mexico-city.png",
    titre: "Mexico city",
    btn: "SEE OPENINGS"
},
{
    img: "https://www.docplanner.com/images/curitiba.png",
    titre: "Curitiba",
    btn: "SEE OPENINGS"
}
]
function SectionCards() {
    return (
        <Container>
            <div className="descartes">
                {tab.map(el =>
                    <Card style={{ width: '21rem', height: 'auto' }}>
                        <Card.Img variant="top" style={{ maxwidth: '100%' }} src={el.img} />
                        <div className='carte'>
                            <Card.Title className="el-titre">{el.titre}</Card.Title>
                            <Button className='boton' variant="primary">{el.btn}</Button>
                        </div>
                    </Card>
                )}
            </div>
        </Container>
    )
}
export default SectionCards;