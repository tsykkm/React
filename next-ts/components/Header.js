import React from 'react';

const Header = props => {
    return (
        <header>
            <div>{props.header}</div>
            <div>{props.title}</div>
        </header>
    )
}

export default Header;