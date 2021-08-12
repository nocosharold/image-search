import React from 'react';
import ReactDOM from 'react-dom';
import Unsplash from './api/unsplash';
import Image from './components/Image';
import SearchBar from './components/SearchBar';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        keyword: "",
        images: [],
    };
  }
  onFormSubmit = async (event) => {
      event.preventDefault();
      this.getImages(this.state.keyword);
      
      // With class-based components, we require to refer to 'this' to access the props object.
      // onSearchSubmit is the property name that we copy
      // set in our App component that holds the onSearchSubmit() callback.
      // Now we can pass this.state.term to the App component.
      // this.props.onSearchSubmit(this.state.term);
  }

  getImages = async (searchterm) => {
    let images = await Unsplash.get(`/search/photos?client_id=K_YCGcfW_d1wlNvx0PPumBmlp6c9lCN5xQKMaTAHjr8&query=${searchterm}`);
    console.log(images.data.results);
    this.setState({ images:images.data.results }); 
  }

  
  componentDidMount(){
    this.getImages("pennywise");
  }

  handleChange = (e) => {
      this.setState({ keyword:e.target.value })
  }

  render() {
    let imageList = this.state.images.map((image) => <Image key={image.id} image={image}/>);
    return (
      <>
        <form onSubmit={this.onFormSubmit}>
          <input type="text" value={this.state.keyword} onChange={(e)=>{ this.handleChange(e) }} />
          <button type="submit">Search</button>
        </form>
        {imageList}
      </>
    );
  }
};

ReactDOM.render(<App />, document.querySelector('#root'));