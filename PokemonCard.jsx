import React, { Component } from "react";
import { data } from "./data/pokemonData";

// console.log(data.element.attacks);

class PokemonCard extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <>

                <div className="row row-cols-1 row-cols-md-3 g-4">

                    {
                        data.map((element, index) => {
                            return (
                                <div class="col">
                                    <div className="card">
                                        <img src={element.images.small} className="card-img-top" alt="..." />
                                        <div className ="card-body">
                                        <h5 className ="card-title">{element.name} <span className="ps-4">HP:{element.hp}</span></h5>
                                        <h3 className="fs-5">Attacks:</h3>
                                        {element.attacks.map((item, index) => {
                                            return (<span className="card-text">{item.name},</span>)
                                        })}
                                        <h3 className="fs-5">Abilities:</h3>
                                        <p>N/A</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }

                </div>
            </>
        )
    }
};

export default PokemonCard;