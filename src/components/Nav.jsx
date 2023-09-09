import SearchBar from "./SearchBar"
import { Link } from "react-router-dom"


const Nav = ({onSearch}) => {

    
    return(
        <nav>
            <SearchBar onSearch={onSearch}></SearchBar>

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