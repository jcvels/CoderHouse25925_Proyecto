import { NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';

function CategorieItem( {label='not-defined', to='/' } ) {
    return (
        <NavItem>
            <NavLink to={to} className={({ isActive }) => { return isActive ? "nav-link active text-decoration-underline" : "nav-link" }} >{label}</NavLink>
        </NavItem>
    );
}
    
export default CategorieItem;