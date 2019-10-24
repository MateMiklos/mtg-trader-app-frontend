import React, {Component} from 'react';


class NavBar extends Component {
    
    state = {
        name: ''
    };

    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
        this.onSearch = this.onSearch.bind(this);
    };

    onSubmit = (e) => {
        e.preventDefault();
        console.log('http://localhost:8080/cards/');
        fetch('http://localhost:8080/cards/')
        .then(res => res.json())
        .then(this.props.callbackAfterSearch)
        .catch(error => console.log(error))
        console.log(this.props.cardList)
    };

    onChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    };

    onSearch = (e) => {
        e.preventDefault();
        console.log(`http://localhost:8080/cards/${this.state.name}`);
        fetch(`http://localhost:8080/cards/${this.state.name}`)
        .then(res => res.json())
        .then(this.props.callbackAfterSearch)
        .catch(error => console.log(error))
        console.log(this.props.cardList)
    };

    render() {
        return (
            <nav>
                <h1>Booyakasha</h1>
                <a  onClick={this.onSubmit}>ALL CARDS</a>
                <form>
                    <input name="name" onChange={this.onChange} type="name" placeholder="card name" aria-label="Search"/>
                    <button onClick={this.onSearch} type="submit">Search</button>
                </form>
            </nav>       
        )
    }
}

export default NavBar;