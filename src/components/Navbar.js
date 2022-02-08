import { useState } from 'react';
import { Navbar, Nav, NavbarBrand, NavItem, Button, Collapse, NavbarToggler } from 'reactstrap';
import CategorieItemButton from './CategorieItemButton';
import CartWidget from './CartWidget';

function AppNavbar({title}) {
    const handleClickJets = () => { console.log('Jets'); menuStateChanger(); }
    const handleClickPropellers = () => { console.log('Propellers'); menuStateChanger();  }
    const handleClickAnphibian = () => { console.log('Anphibian'); menuStateChanger(); }
    const handleClickSprayer = () => { console.log('Sprayer'); menuStateChanger(); }
    const handleClickCart = () => { console.log('CartButton'); menuStateChanger(); }

    const [ menuState, setMenuState] = useState(false);
    function menuStateChanger() {
        menuState ? setMenuState(false) : setMenuState(true);
    }

    return (
        <Navbar
            color="warning"
            expand="md"
            light
            fixed="top"
        >
            <NavbarBrand href="/">
                <img src={'./avion.svg'} width={60} alt='Logo de la aplicación' style={{display:'inline'}} />
                <h1 className='lead' style={{display:'inline'}} >{title}</h1>
            </NavbarBrand>

            <NavbarToggler onClick={menuStateChanger} /> { /* TODO: agregar metodo onClick para funcionalidad 'Collapse' */ }
            <Collapse navbar isOpen={menuState} >
                <Nav 
                    className="ms-5 me-auto"
                    navbar
                >
                    
                    <CategorieItemButton label="Jets" handleClick={handleClickJets} />
                    <CategorieItemButton label="Propellers" backgroundColor="success" handleClick={handleClickPropellers} />
                    <CategorieItemButton label="Anphibian" handleClick={handleClickAnphibian} />
                    <CategorieItemButton label="Sprayer" handleClick={handleClickSprayer} />

                </Nav>

                <hr></hr>

                <Nav navbar className='ms-2 me-2 mt-2'>
                    <NavItem>
                        <Button color="primary" className='ms-1'>
                            Log-In
                        </Button>
                        <Button color="light" className='ms-1'>
                            Sign-In
                        </Button>
                        <CartWidget itemOnCart={0} handleClick={handleClickCart}/>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
    );
}

export default AppNavbar;