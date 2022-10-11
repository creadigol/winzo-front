import React from 'react'
import Container from 'react-bootstrap/Container'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Gamer from './Gamer';
function Navtabs() {
    return (
        <>
            <Container fluid className='navtabs-main'>
                <div className="navtab-section">
                    <Tabs
                        defaultActiveKey="All Games"
                        id="uncontrolled-tab-example"
                        className="mb-3 nav-tab-main"
                    >
                        <Tab eventKey="All Games" title="All Games">
                            <Gamer />
                        </Tab>
                        <Tab eventKey="Cards" title="Cards">
                            <h1 className='heading-1'>Cards Game is currently not available</h1>
                        </Tab>
                        <Tab eventKey="Car Racing" title="Car Racing">
                            <h1 className='heading-1'>Car Racing Game is currently not available</h1>
                        </Tab>
                        <Tab eventKey="Puzzle" title="Puzzle">
                            <h1 className='heading-1'>Puzzle Game is currently not available</h1>
                        </Tab>
                        <Tab eventKey="Casual" title="Casual">
                            <h1 className='heading-1'>Casual Game is currently not available</h1>
                        </Tab>
                        <Tab eventKey="Kids" title="Kids">
                            <h1 className='heading-1'>Kids Game is currently not available</h1>
                        </Tab>
                        <Tab eventKey="Indie" title="Indie">
                            <h1 className='heading-1'>Indie Game is currently not available</h1>
                        </Tab>
                    </Tabs>
                </div>
            </Container>
        </>
    )
}

export default Navtabs;
