import React, { Component } from 'react'
import Article from './Article'
import './App.css'

export class App extends Component {

state = {
    nom: "T-shirt",
    prix: "35€"
}

    render() {
        return (
            <div>
                <Article prix="33€">Chemise</Article>
                <Article prix="50€">Pantalon</Article>
                <Article prix={this.state.prix} nom={this.state.nom}></Article>
            </div>
        )
    }
}

export default App
