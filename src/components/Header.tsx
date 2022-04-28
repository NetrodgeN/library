import React from 'react';

const Header:React.FC = () => {
    return (
        <header>
            <div className="wrapper header__wrapper">
                <nav className='header__navigation'>
                    <ul className='header__list'>
                        <li className='navigation__link'><a href="#">Help Center</a></li>
                        <li className='navigation__link'><a href="#">Our Support</a></li>
                    </ul>
                </nav>
                <div className="user__header">
                    <div className='avatar__wrapper'>
                        {/*<img src="" alt=""/>*/}
                    </div>

                    <p>John Doe</p>
                    <p>&#9660;</p>
                </div>
            </div>
        </header>
    );
};

export default Header;