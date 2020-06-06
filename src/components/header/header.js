import React from 'react';
import './header.css';

const Header = () => {
    return (
        <div className="headerBlock">
            <h3 className="headerTitle">
                <button>Game of Thrones DB</button>
            </h3>
            <ul className="headerLinks">
                <li>
                    <button>Characters</button>
                </li>
                <li>
                    <button>Houses</button>
                </li>
                <li>
                    <button>Books</button>   
                </li>
            </ul>
        </div>
    );
};

export default Header;