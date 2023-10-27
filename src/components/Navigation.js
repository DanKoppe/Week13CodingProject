import React from 'react';

export default class Navigation extends React.Component {
    render() {
        return (
            <div className='container-fluid bg-dark'>
                <nav className='navbar navbar-expand-sm navbar-dark bg-dark'>
                    <div className='d-flex justify-content-between w-100'>
                        <h4 className='navbar-text'>Navbar Temp Text</h4>
                        <ul className='navbar-nav'>
                            <li className='nav-item'>
                                <a className='nav-link' href='#'>Home</a>
                            </li>
                            <li className='nav-item'>
                                <a className='nav-link' href='#'>Log In</a>
                            </li>
                            <li className='nav-item'>
                                <a className='nav-link' href='#'>Contact Us</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
}
