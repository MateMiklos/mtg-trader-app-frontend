import React, {Fragment, Component} from 'react';
import ImageBackground from 'react'
import './App.css';
import NavBar from './components/NavBar';
import CardTable from './components/CardTable';
import BackgroundImage from './components/BackgroundImage';

export default class App extends Component {

  state = {
    cardList: []
  };

  componentDidMount() {
      fetch('http://localhost:8080/cards/')
      .then(res => res.json())
      .then((data) => {
          this.setState({ cardList: data })
      })
      .catch(error => console.log(error))
  }

  render() {
    return (
      <Fragment>
          <NavBar callbackAfterSearch={(data) => {this.setState({ cardList: data })}} />
          <CardTable cardList={this.state.cardList}/>
      </Fragment>
    )
  }
}
