const SearchBar = (props) => {
    // we used JS map function to loop through the jokes object
    // we then store each jokes to the jokes variable
    // this is the callback that we are going to pass to the child component, so that we can scoop up
    // the 'term' data that's exclusively stored in the SearchBar component.
    const onSearchSubmit = (term) => {
        console.log(term);
    }

   
    return (
        <div>
            <SearchBar onSearchSubmit={this.onSearchSubmit} />
        </div>
    );

};
export default SearchBar;