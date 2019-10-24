import React, {Component} from 'react';

class CardTable extends Component {
    
//    componentDidUpdate() {
//        fetch('http://localhost:8080/cards/' + 'Jitte')
//        .then(res => res.json())
//        .then((data) => {
//            this.setState({ cardList: data})
//        })
//        .catch(error => console.log(error))
//    }

    render() {
        console.log(this.props.cardList)
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
                    {this.props.cardList.map(card => 
                        <tr key={card.id}>
                            <td>{card.userName}</td>
                            <td>{card.userEmail}</td>
                            <td>{card.name}</td>
                            <td>{card.condition}</td>
                            <td>{card.price} huf</td>
                            <td>{card.status}</td>
                            <td>
                                <button>Einstand!</button>
                            </td>
                        </tr>)
                    }
                    </tbody>
                </table>
            </div>
        );
    }
}

export default CardTable;
