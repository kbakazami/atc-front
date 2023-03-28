function SearchBar(){
    return(
        <div className="search-bar">
            <input className={"px-4 py-2 w-80 border-2 border-primary focus:border-primary rounded"} type="text" placeholder="Rechercher une région..." />
        </div>
    )
}
export default SearchBar;