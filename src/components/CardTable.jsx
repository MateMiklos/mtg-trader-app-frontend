import React, {Component} from 'react';

class CardTable extends Component {

    render() {
        console.log(this.props.cardList)
        return (
            <div>
                <table className="table table-responsive-sm table-dark table-hover">
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
                                <button class="btn btn-light">Einstand!</button>
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
