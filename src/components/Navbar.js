import { Navbar, Nav, NavbarBrand, NavItem, NavLink, Button, Collapse, NavbarToggler } from 'reactstrap';

function AppNavbar() {
    return (
        <Navbar
            color="warning"
            expand="md"
            light
            fixed="top"
        >
            <NavbarBrand href="/">
                <img src={'./avion.svg'} width={50} alt='Logo de la aplicación' style={{display:'inline'}} />
                <h5 style={{display:'inline'}} >Best-Planes-On-Sale</h5>
            </NavbarBrand>

            <NavbarToggler /> { /* TODO: agregar metodo onClick para funcionalidad 'Collapse' */ }
                <Collapse navbar>
                    <Nav 
                        className="ms-auto me-auto"
                        navbar
                    >
                        <NavItem>
                            <NavLink href="/">Jets</NavLink>
                        </NavItem>

                        <NavItem>
                            <NavLink href="/">Propellers</NavLink>
                        </NavItem>

                        <NavItem>
                            <NavLink href="/">Anphibian</NavLink>
                        </NavItem>

                        <NavItem>
                            <NavLink href="/">Sprayer</NavLink>
                        </NavItem>

                        <NavItem>
                            <NavLink href="/">More...</NavLink>
                        </NavItem>

                    </Nav>
                    <Nav navbar>
                        <NavItem>
                            <Button color="primary" className='ms-1'>
                                Log-In
                            </Button>
                            <Button color="light" className='ms-1'>
                                Sign-In
                            </Button>
                        </NavItem>
                    </Nav>
                </Collapse>
        </Navbar>
    );
}

export default AppNavbar;