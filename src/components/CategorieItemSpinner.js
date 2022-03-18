import { NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';

function CategorieItemSpinner() {
    return (
        <NavItem>
            <NavLink to={'/'} className={"nav-link"} >Cargando categorías...</NavLink>
        </NavItem>
    );
}
    
export default CategorieItemSpinner;