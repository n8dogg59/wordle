import React from "react";
import { GoThreeBars, GoQuestion } from 'react-icons/go';
import { IoIosStats } from 'react-icons/io';

class Header extends React.Component {
  render() {
    return (
        <header>
            <div>
            <GoThreeBars size={30} />
            <GoQuestion size={30}/>
            </div>
            <h1>Wordle</h1> 
            <IoIosStats size={30}/>
        </header>
    )
  }
}

export default Header;