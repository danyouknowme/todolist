import { AddCircle, FormatListNumbered } from '@material-ui/icons';
import React, { ReactElement, FC } from 'react'
import { NavLink } from 'react-router-dom';
import './navbar.scss';

const Navbar: FC = (): ReactElement => {
    return (
        <div className="navbar">
            <div className="wrapper">
                <NavLink exact to='/' activeClassName='active'>
                    <FormatListNumbered />
                    <span>Home</span>
                </NavLink>
                <NavLink to='/create' activeClassName='active'>
                    <AddCircle />
                    <span>Create</span>
                </NavLink>
            </div>
        </div>
    )
}

export default Navbar;
