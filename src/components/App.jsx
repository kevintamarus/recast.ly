class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      video: window.exampleVideoData[0],
      videos: window.exampleVideoData
    };
  }

  click(current) {
    this.setState({video: current});
  }
  
  componentDidMount() {
    this.getVideos('reason 6 tutorial');
  }

  getVideos(query) {
    var options = {
      key: this.props.API_KEY,
      query: query
    };
    
    this.props.searchYouTube(options, (current) => {
      this.setState({
        video: current[0],
        videos: current
      });
    });
  }

  render() {
    return (
      <div>
        <Nav />
        <div className="col-md-7">
          <VideoPlayer video={this.state.video}/>
        </div>
        <div className="col-md-5">
          <VideoList videos={this.state.videos} click={this.click.bind(this)}/>
        </div>
      </div>
    );

  }
}

// var App = () => (
//   <div>
//     <Nav />
//     <div className="col-md-7">
//       <VideoPlayer/>
//     </div>
//     <div className="col-md-5">
//       <VideoList/>
//     </div>
//   </div>
// );

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
