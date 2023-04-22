import React from "react";
import SearchBar from "./SearchBar";
import styles from './NavBar.module.css';
import { Link } from 'react-router-dom';

export default function NavBar(props) {
    return (
        <div className={styles.nav}>
                <div>
                    <Link to='/home'>
                    <button className={styles.homebtn} >Home</button>
                    </Link>
                </div>
                <div>
                    <Link to= '/about'>
                    <button className={styles.aboutbtn} >About</button>
                    </Link>
                </div>
                <div>
                    <Link to= '/favorites'>
                    <button className={styles.favbtn}  >Favorites</button>
                    </Link>
                </div>
                <div>
                   <SearchBar onSearch={props.onSearch} />
                </div>
                <Link to='/'>
                    <button  className={styles.logoutbtn} onClick={props.logout}>Log Out</button>
                </Link>
        </div>
    )
    
}