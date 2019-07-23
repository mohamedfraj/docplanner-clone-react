import React from 'react'
import { DropdownButton, Dropdown, Container } from 'react-bootstrap'
const tab = [
    {
        for: "For patients",
        find: "Find a doctor, book a visit and solve any health-related doubt",
        img: "https://www.docplanner.com/img/screen-marketplace@2x.png",
    },
    {
        for: "For doctors",
        find: "Save time managing visits and cut no-shows by half",
        img: "https://www.docplanner.com/img/screen-saas@2x.png",
    }
]
const btn = <DropdownButton id="dropdown-basic-button" className="Hamma" title="CHOOSE COUNTRY">
    <Dropdown.Item href="#/action-1">BRESIL</Dropdown.Item>
    <Dropdown.Item href="#/action-2">FRANCE</Dropdown.Item>
    <Dropdown.Item href="#/action-3">GERMANY</Dropdown.Item>
</DropdownButton>
function Cards() {

    return (
        <Container className='cards'>
            {tab.map(el =>            
                    <div className='card' style={{ backgroundColor: el.for !== "For doctors" ? "#00ccb1" : "#3d83df" }}>
                        <p className='forpatient'>{el.for}</p>
                        <h3 className='find'>{el.find}</h3>
                        <div className='drapbtn'>
                            {"For doctors" !== el.for ? btn : ""}
                        </div>
                        <img className='imgpc' src={el.img}></img>
                    </div>
            )}
        </Container>
    )
}
export default Cards;