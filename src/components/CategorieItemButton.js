import { NavItem, NavLink } from 'reactstrap';

const handleClickDefault = () => { console.log('not-function-defined') }

function CategorieItem( {label='not-defined', handleClick=handleClickDefault} ) {
    return (
        <NavItem>
            <NavLink style={{cursor:'pointer'}} onClick={handleClick} >{label}</NavLink>
        </NavItem>
    );
}
    
export default CategorieItem;