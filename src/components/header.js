import React, {Component} from 'react';
import './header.css';

class Header extends Component{

    render(){
        return(
            <header>
                <div class="container-title">
                    <h2>NikeBlog</h2>
                </div>
                <nav>
                    <div class="container-fluid">
                    <ul>
                        <li class="nav-item" >
                        <a class="nav-link" href="#">Novidade</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" href="#">Tendência</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" href="#">Exclusividade</a>
                        </li>
                    </ul>
                    </div>
              </nav>
            </header>
        )
    }

}

export default Header;