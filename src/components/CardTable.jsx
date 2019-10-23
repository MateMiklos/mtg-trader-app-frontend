import React, {Component} from 'react';

class CardTable extends Component {
    
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

    componentDidUpdate() {
        
    }

    render() {
        console.log(this.state.cardList)
        return (
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <td scope="col">User</td>
                            <td scope="col">Email</td>
                            <td scope="col">Name</td>
                            <td scope="col">Condition</td>
                            <td scope="col">Price</td>
                            <td scope="col">Status</td>
                        </tr>
                    </thead>
                    <tbody>
                    {this.state.cardList.map(card => 
                        <tr key={card.id}>
                            <td>{card.userName}</td>
                            <td>{card.userEmail}</td>
                            <td>{card.name}</td>
                            <td>{card.condition}</td>
                            <td>{card.price} huf</td>
                            <td>{card.status}</td>
                        </tr>)
                    }
                    </tbody>
                </table>
            </div>
        );
    }
}

export default CardTable;
