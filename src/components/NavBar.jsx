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
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <a class="navbar-brand" href="#">MtgTrader</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item active">
                            <a class="nav-link" onClick={this.onSubmit} href="#">All Cards <span class="sr-only">(current)</span></a>
                        </li>
                        <li>
                            <a class="nav-link" href="#">My Orders <span class="sr-only">(current)</span></a>
                        </li>
                    </ul>
                    <form class="form-inline my-2 my-lg-0">
                        <input class="form-control mr-sm-2" name="name" onChange={this.onChange} type="name" placeholder="card name" aria-label="Search"/>
                        <button class="btn btn-success" onClick={this.onSearch} type="submit">Search</button>
                    </form>
                </div>
            </nav>
        )
    }
}

export default NavBar;