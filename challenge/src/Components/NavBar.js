import React, {useState} from "react";
import './NavBar.css'
import search from "./Images/lupa.png"

    const NavBar = () => {
        const [burger_class, setBurguerClass] = useState("burger-bar unclicked")
        const [menu_class, setMenuClass] = useState("menu hidden")
        const [isMenuClicked, setIsMenuClicked] = useState(false)

        // toggle burger menu change
        const updateMenu = () =>{
            if(!isMenuClicked){
                setBurguerClass("burger-bar clicked")
                setMenuClass("menu visible")
                
            }
            else{
                setBurguerClass("burguer-bar unclicked")
                setBurguerClass("burger-bar visible")
                setMenuClass("menu hidden")
            }
            setIsMenuClicked(!isMenuClicked)
        }

        return(
            <>
                <nav>
                    <div className="burger-menu" onClick={updateMenu}>
                        <div className={burger_class} ></div>
                        <div className={burger_class} ></div>
                        <div className={burger_class} ></div>
                    </div>
                </nav>

                <div className={menu_class}>
                    <div className="menu_inputArea">
                        <div className="input">
                            <input type="text" name="inputMenu" placeholder="Realize sua pesquisa:"/>
                        </div>
                    </div>
                </div>

                <div className="search">
                    <div className="searchImageArea">
                        <img classname="search_img" src={search} alt="Pesquisar" onClick={updateMenu}/>
                    </div>
                </div>
            </>
        )
    }


export default NavBar;