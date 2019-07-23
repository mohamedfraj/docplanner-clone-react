import React from "react";
import { Card } from "react-bootstrap";

function Footer() {
    return (
        <Card.Footer className=" pays">
            <div className="text">
                <div className="pay">
                    <small className="text-muted">We are leaders in 10 countries: <a href='https://www.znanylekarz.pl/' >Poland</a> , <a href='://www.doktortakvimi.com'>Turkey</a>,<a href='https://www.doctoralia.es/'> Spain</a>,<a href='https://www.miodottore.it/'>Italy</a> ,<a href='https://www.znamylekar.cz/'>Czech Republic</a> ,<a href="https://www.doctoralia.com.mx/">Mexico</a> ,<a href='https://www.doctoralia.co/'> Colombia</a>,<a href='https://www.doctoralia.com.br/'> Brazil</a>,<a href='https://www.doctoraliar.com/'>Argentina</a>  and <a href='https://www.doctoralia.cl/'>Chile</a> </small>
                </div>
                <div className="text">
                    <small className="text-muted">This site uses cookies to deliver services in accordance with this Privacy Policy. You can specify the conditions for storing or accessing cookies on your browser.</small>
                </div>
                <small className="text-muted"> www.docplanner.com © 2019</small>
            </div>
        </Card.Footer>
    )
}

export default Footer;