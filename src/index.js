import React from 'react';
import ReactDOM from 'react-dom';
import Unsplash from './api/unsplash';
import Image from './components/Image';

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
  }

  getImages = async (searchterm) => {
    let images = await Unsplash.get(`/search/photos?client_id=K_YCGcfW_d1wlNvx0PPumBmlp6c9lCN5xQKMaTAHjr8&query=${searchterm}`);
    console.log(images.data.results);
    this.setState({ images:images.data.results }); 
  }

  
  componentDidMount(){
    this.getImages("car");
  }

  handleChange = (e) => {
      this.setState({ keyword:e.target.value })
  }

  render() {
    let imageList = this.state.images.map((image) => <Image className="brick" key={image.id} image={image}/>);
    return (
      <div className="ui container">
        <form className="ui fluid container" onSubmit={this.onFormSubmit}>
          <label>Image Search</label>
          <div class="ui input">
            <input type="text" value={this.state.keyword} onChange={(e)=>{ this.handleChange(e) }} />
          </div>
          <button className="ui button" type="submit">Search</button>
        </form>
        <div className="masonry">
          {imageList}
        </div>
      </div>
    );
  }
};

ReactDOM.render(<App />, document.querySelector('#root'));