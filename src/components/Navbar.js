import { Navbar, Nav, NavbarBrand, NavItem, Button, Collapse, NavbarToggler } from 'reactstrap';
import CategorieItemButton from './CategorieItemButton';
import CartWidget from './CartWidget';

function AppNavbar({title}) {

    const handleClickJets = () => { console.log('Jets') }
    const handleClickPropellers = () => { console.log('Propellers') }
    const handleClickAnphibian = () => { console.log('Anphibian') }
    const handleClickSprayer = () => { console.log('Sprayer') }
    const handleClickCart = () => { console.log('CartButton') }

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

            <NavbarToggler /> { /* TODO: agregar metodo onClick para funcionalidad 'Collapse' */ }
                <Collapse navbar>
                    <Nav 
                        className="ms-5 me-auto"
                        navbar
                    >
                        
                        <CategorieItemButton label="Jets" handleClick={handleClickJets} />
                        <CategorieItemButton label="Propellers" backgroundColor="success" handleClick={handleClickPropellers} />
                        <CategorieItemButton label="Anphibian" handleClick={handleClickAnphibian} />
                        <CategorieItemButton label="Sprayer" handleClick={handleClickSprayer} />

                    </Nav>

                    {/*<Nav navbar>
                        <NavItem>
                            <Button color="primary" className='ms-1'>
                                Log-In
                            </Button>
                            <Button color="light" className='ms-1'>
                                Sign-In
                            </Button>
                        </NavItem>
                    </Nav> */}

                </Collapse>

                <CartWidget itemOnCart={0} handleClick={handleClickCart}/>

        </Navbar>
    );
}

export default AppNavbar;