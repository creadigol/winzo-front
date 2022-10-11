import React from 'react'
import Container from 'react-bootstrap/Container'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'
function Error() {
    return (
        <>
            <Container fluid className='Error-page'>
                <Container>
                    <div className="Error-content">
                        <h5>Oops! The page you requested wasn't found</h5>
                        <p>We can't seem to find the page you are looking for.</p>
                        <Link to='/'>
                            <Button className='back-btn'>Back to Home</Button>
                        </Link>
                    </div>
                </Container>
            </Container>
        </>
    )
}

export default Error
