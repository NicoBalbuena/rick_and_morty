import SearchBar from "./SearchBar"
import { Link } from "react-router-dom"
const Nav = ({onSearch,random,logoutHandler}) => {
    return(
        <nav>
            <SearchBar onSearch={onSearch}></SearchBar>
            <button className="random"onClick={random}> ADD RANDOM</button>
            <button className="logout" onClick={logoutHandler}><Link to='/'>LOG OUT</Link></button>
            <button >
                <Link to='/about'>ABOUT</Link>
            </button>

            <button>
                <Link to='/home'>HOME</Link>
            </button>

            <button>
                <Link to='/favorites'>FAVORITOS</Link>
            </button>



        </nav>
    )
}

export default Nav