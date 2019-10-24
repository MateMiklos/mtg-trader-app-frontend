import React, {Fragment, Component} from 'react';
import './App.css';
import NavBar from './components/NavBar';
import CardTable from './components/CardTable';

export default class App extends Component {

  state = {
    cardList: []
  };

//  constructor(props) {
//    super(props);
//    this.callbackAfterSearch = this.callbackAfterSearch.bind(this);
//};

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

//class Parent extends React.Component {
//  constructor(props) {
//    super(props)
//
//    this.handler = this.handler.bind(this)
//  }
//
//  handler(someValue) {
//    this.setState({
//      someVar: someValue
//    })
//  }
//
//  render() {
//    return <Child handler = {this.handler} />
//  }
//}
//
//class Child extends React.Component {
//  render() {
//    return <Button onClick = {this.props.handler}/ >
//  }
//}

