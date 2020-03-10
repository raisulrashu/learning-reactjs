import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class FavouriteColorForm extends Component {

    state = { value: '' }

    newColor = e => {
        this.setState({ value: e.target.value })
    }

    submit = e => {
        console.log(`New Color: ${this.state.value}`)
        e.preventDefault()
    }

    render(){
        return (
            <form onSubmit={this.submit}>
                <label>Favourite Color: 
                    <input type="color"
                    onChange={this.newColor} />
                </label>
                <button>Submit</button>
            </form>
        )
    }
}

ReactDOM.render(
    <FavouriteColorForm />,
    document.getElementById('root')
);


