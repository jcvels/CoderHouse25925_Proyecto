import { useState } from 'react';
import { Navbar, Nav, NavbarBrand, NavItem, Button, Collapse, NavbarToggler } from 'reactstrap';
import { Link } from 'react-router-dom';
import CategorieItemButton from './CategorieItemButton';
import CartWidget from './CartWidget';

function AppNavbar({title}) {

    const [ menuState, setMenuState] = useState(false);
   
    const menuStateChanger = () => setMenuState( !menuState );

    return (
        <Navbar
            color="warning"
            expand="md"
            light
            fixed="top"
        >
            <Link className='navbar-brand' to="/">
                <img src={'/avion.svg'} width={60} alt='Logo de la aplicación' />
                <h1 className='lead' >{title}</h1>
            </Link>

            <NavbarToggler onClick={menuStateChanger} /> 
            
            { 
                /*
                    TODO: agregar para que no se muestre error en consola:
                    
                    Warning: findDOMNode is deprecated in StrictMode. findDOMNode was passed an instance of Transition which is inside StrictMode.
                    Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node
                    at div
                    at Transition (http://localhost:3000/static/js/bundle.js:42586:30)
                    at Collapse (http://localhost:3000/static/js/bundle.js:53699:5)
                    at div
                    at nav
                    at Navbar (http://localhost:3000/static/js/bundle.js:52209:5)
                    at AppNavbar (http://localhost:3000/static/js/bundle.js:1267:5)
                    at Router (http://localhost:3000/static/js/bundle.js:41634:15)
                    at BrowserRouter (http://localhost:3000/static/js/bundle.js:41114:5)
                    at App
                */ 
            }
            
            <Collapse navbar isOpen={menuState} >
                <Nav 
                    className="ms-5 me-auto"
                    navbar
                >
                    <CategorieItemButton label="All" to='/' />
                    <CategorieItemButton label="Jets" to='/category/jets' />
                    <CategorieItemButton label="Propellers" to='/category/propellers' />
                    <CategorieItemButton label="Anphibian" to='/category/anphibian' />
                    <CategorieItemButton label="Sprayer" to='/category/sprayer' />
                </Nav>

                <Nav navbar className='ms-2 me-2 mt-2'>
                    <NavItem>
                        <Button color="primary" className='ms-1'>
                            Log-In
                        </Button>
                        <Button color="light" className='ms-1'>
                            Sign-In
                        </Button>
                        <CartWidget itemOnCart={0} handleClick={()=> alert("nada")}/>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
    );
}

export default AppNavbar;