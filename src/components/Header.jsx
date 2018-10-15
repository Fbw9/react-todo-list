import React from 'react';

const Header = props => {
        return (
            <header className="header">
                <h1>My List</h1>
                <span className={"tagline"}>{props.tagline}</span>
            </header>
        )
}

export default Header;
