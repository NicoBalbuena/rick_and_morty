import SearchBar from "./SearchBar"


const Nav = ({onSearch}) => {
    return(
        <nav>
            <SearchBar onSearch={onSearch}></SearchBar>
        </nav>
    )
}

export default Nav