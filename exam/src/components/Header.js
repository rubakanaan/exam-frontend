import React, { Component } from 'react'
import Nav from 'react-bootstrap/Nav';
// import Link from 'react-bootstrap/Link'
export class Header extends Component {
    render() {
        return (
            <div>
                <Nav >
                    <Nav.Item>
                        {/* <Link to="/">Home</Link> */}
                        <Nav.Link href="/">Home</Nav.Link>

                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/favorite">Favorite Drinks</Nav.Link>
                        {/* <Link  to="/favorite" >Favorite Drinks</Link> */}
                    </Nav.Item>
                </Nav>
            </div>
        )
    }
}

export default Header
