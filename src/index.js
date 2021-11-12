import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Section from './Section';
import ChocolateQuad from './ChocolateQuad';
import './styles.css';
import HappyButton from './HappyButton';
import Doggie from './Doggie';
import Food from './Food';

const apiKey = process.env.REACT_APP_API_KEY;
const searchTerm = 'art';
const fetchUrl = `https://api.giphy.com/v1/gifs/search?q=${searchTerm}&limit=50&api_key=${apiKey}`;
const doggieUrl = 'https://dog.ceo/api/breeds/image/random';
const foodUrl = 'https://foodish-api.herokuapp.com/api/';

class ArtApi extends Component {
  constructor(props) {
    super(props);
    this.state = {
      apiData: [],
      apiData2: '',
      reloadState: true,
      api1Call: false,
      api2Call: false,
    };
  }

  fetchApis = () => {
    const self = this;
    self.setState({
      api1Call: false,
      api2Call: false,
    });

    fetch(foodUrl)
      .then((res) => res.json())
      .then((json) => this.setState({ apiData: json.image }))
      .then(() => this.setState({ api1Call: true }));

    fetch(doggieUrl)
      .then((res) => res.json())
      .then((json) => this.setState({ apiData2: json.message }))
      .then(() => this.setState({ api2Call: true }));
  };

  changeMood() {
    if (this.state.api1Call && this.state.api2Call) {
      this.setState({ mood: 'happy' });
    }
  }

  componentDidMount() {
    // this.mounted = true;
    this.fetchApis();
    this.changeMood();
  }

  render() {
    return (
      <div className="main">
        <Food apiData={this.state.apiData} />
        <Doggie apiData={this.state.apiData2} />
        {this.state.api1Call && this.state.api2Call ? <ChocolateQuad mood={'happy'} /> : <ChocolateQuad mood={'sad'} />}
        <HappyButton action={this.fetchApis} />
      </div>
    );
  }
}

export default ArtApi;

const rootElement = document.getElementById('root');
ReactDOM.render(<ArtApi />, rootElement);
