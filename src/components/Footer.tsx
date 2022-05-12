import React from 'react';

const Footer:React.FC  = () => {
    return (
        <footer>
            <div className="wrapper footer__wrapper">
                <button className={'button__footer question'}><i className="fa-solid fa-circle-question"/></button>
                <button className={'button__footer '}><i className="fa-solid fa-gear"/></button>

            </div>
        </footer>
    );
};

export default Footer;