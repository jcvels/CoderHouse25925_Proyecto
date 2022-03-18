import { useEffect, useState } from 'react';
import { Navbar, Nav, NavItem, Collapse, NavbarToggler } from 'reactstrap';
import { Link } from 'react-router-dom';
import { getCategories } from '../services/FirebaseService';
import CategorieItemButton from './CategorieItemButton';
import CartWidget from './CartWidget';
import CategorieItemSpinner from './CategorieItemSpinner';
import { useNotificationServices } from '../services/NotificationService';

function AppNavbar({title}) {

    const [ menuState, setMenuState] = useState(false);
    const [ categories, setCategories] = useState([]);
    const menuStateChanger = () => setMenuState( !menuState );
    const setToast = useNotificationServices()

    useEffect( () => {
        getCategories()
            .then( data => setCategories(data) )
            .catch( error => setToast('error',error) )
    }, []);

    return (
        <Navbar
            color="warning"
            expand="md"
            light
            fixed="top"
        >
            <Link className='navbar-brand' to="/">
                <img src={'/svg/avion.svg'} width={60} alt='Logo de la aplicación' />
                <h1 className='lead' >{title}</h1>
            </Link>

            <NavbarToggler onClick={menuStateChanger} /> 
            <Collapse navbar isOpen={menuState} >
                <Nav 
                    className="ms-5 me-auto"
                    navbar
                >
                    <CategorieItemButton label="All" to='/' />

                    {
                        categories.length > 0
                            ? categories.map( (item) => { return <CategorieItemButton key={item.id} label={item.label} to={ '/category/' + item.path } /> } )
                            : <CategorieItemSpinner />
                    }
                    
                </Nav>

                <Nav navbar className='ms-2 me-2 mt-2'>
                    <NavItem>
                        <CartWidget />
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
    );
}

export default AppNavbar;