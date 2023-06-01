import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Dropdown from 'react-bootstrap/Dropdown';
import Link from 'next/link';
import styles from "./Header.module.css"



const Header = () => {
    return (
        <>
            <Navbar className={styles.navBar} expand="lg">
                <Container>
                    <Navbar.Brand   href="/">
                        <img className={styles.logo}  src='img/logo.png' />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Link className={styles.menuhead} href="/"  >Home</Link>
                            <Link className={styles.menuhead} href="/about" >About</Link>
                            <Link className={styles.menuhead} href="/single"  >Single Blog</Link>
                            <Link className={styles.menuhead} href="/elements" >Elements</Link>
                            <Link className={styles.menuhead} href="/contact" >Contact</Link>

                            {/* <Dropdown>
                                <Dropdown.Toggle variant="success" id="dropdown-basic">
                                    Dropdown Button
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown> */}


                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default Header
