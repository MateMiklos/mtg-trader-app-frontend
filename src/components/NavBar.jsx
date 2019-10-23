import React, {Component} from 'react';


class NavBar extends Component {
    
    state = {

        name: ''

    };

    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
    };

    onSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
    };

    changer = (e) => {
        this.setState({[e.target.name]: e.target.value})
    };

    onSearch = (e) => {
        e.preventDefault();
        console.log(`http://localhost:8080/cards/${this.state.name}`);
    };

    render() {
        return (
            <nav>
                <h1>Booyakasha</h1>
                <a  onClick={this.onSubmit} className="navbar-brand" href="#">Klikk mir bitte</a>
                <form>
                    <input name="name" onChange={this.changer} type="name" placeholder="card name" aria-label="Search"/>
                    <button onClick={this.onSearch} type="submit">Search</button>
                </form>
            </nav>
        
        )
    }
}

export default NavBar;