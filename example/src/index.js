import "babel-polyfill"
import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import Waterfall from "nopast-react-waterfall"
import { Random, RandomColor } from "./utils"
import "./index.scss"



class App extends Component {
    constructor(props){
        super(props);

        this.state = {
            cards: [],
            permutation: "min-insert",
            dynamic: true,
        }
    }


    createCards(num) {
        let cards = [];
        for(let i = 0; i < num; i++) {
            cards.push({
                width: 400,
                height: Math.floor(Random(200, 700)),
                backgroundColor: RandomColor()
            });
        }
        return cards
    }

    addCards(num) {
        this.setState(state => ({
            cards: [...state.cards, ...this.createCards(num)]
        }))
    }

    componentDidMount() {
        this.addCards(50);
    }

    changePermutation(e) {
        this.setState({
            permutation: e.target.value
        })
    }

    render() {
        const {cards, dynamic, permutation} = this.state;


        return (
            <div className="main">
                <div className="controller">
                    <label>
                        Number：
                        <input
                            type="number"
                            value={cards.length}
                            onChange={(e) => {
                                const nextNum = e.target.value;
                                if(nextNum > cards.length) {
                                    this.setState({
                                        cards: [...cards, ...this.createCards(nextNum - cards.length)]
                                    })
                                }else {
                                    this.setState({
                                        cards: cards.splice(0, nextNum)
                                    })
                                }
                            }}
                        />
                    </label>
                    <button
                        onClick={() => {
                            this.setState({
                                cards: this.createCards(50)
                            })
                        }}
                    >
                        Reset
                    </button>
                    <button
                        onClick={() => {
                            this.setState({
                                cards: [...cards, ...this.createCards(cards.length)]
                            })
                        }}
                    >
                        Double
                    </button>
                    <label>
                        Dynamically: 
                        <input
                            type="checkbox"
                            checked={dynamic}
                            onChange={(e) => {
                                this.setState({
                                    dynamic: e.target.checked
                                })
                            }}
                        />
                    </label>
                    <span>
                        The method of permutation: 
                        <label>
                            <input
                                type="radio"
                                value="min-insert"
                                checked={permutation === "min-insert"}
                                onChange={this.changePermutation.bind(this)}
                            />
                            Insert minimum height column
                        </label>
                        <label>
                            <input
                                type="radio"
                                value="min-height"
                                checked={permutation === "min-height"}
                                onChange={this.changePermutation.bind(this)}
                            />
                            Minimum height difference between each column
                        </label>
                    </span>
                </div>
                {
                    (cards.length > 0) &&
                    (
                        <Waterfall
                            options={{dynamic, permutation}}
                            className="waterfall"
                        >
                            {
                                cards.map((item, i) => (
                                    <div
                                        className="card"
                                        style={item}
                                        key={item.backgroundColor + i}
                                    >
                                        <h1 className="child">{i + 1}</h1>
                                    </div>
                                ))
                            }
                        </Waterfall>
                    )
                }
            </div>
        )
    }
}



ReactDOM.render(<App/>, document.getElementById('app'));
