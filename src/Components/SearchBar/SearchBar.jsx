function SearchBar(){
    return(
        <div className="search-bar absolute inset-x-4 -bottom-1/2 sm:static">
            <input className={"px-4 py-2 sm:w-80 border-2 border-primary focus:border-primary rounded"} type="text" placeholder="Rechercher une région..." />
        </div>
    )
}
export default SearchBar;