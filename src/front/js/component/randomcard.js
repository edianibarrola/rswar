import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link, useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
export const RandomCard = () => {
	const { store, actions } = useContext(Context);
	const history = useHistory();
	const getRandomInt = (min, max) => {
		return Math.floor(Math.random() * (max - min + 1)) + min;
	};

	let suit = store.suit;
	let cardnumbers = store.cardnumbers;
	let cardClass1 = suit[getRandomInt(0, suit.length - 1)];
	let cardNumber1 = cardnumbers[getRandomInt(0, cardnumbers.length - 1)];
	let cardClass2 = suit[getRandomInt(0, suit.length - 1)];
	let cardNumber2 = cardnumbers[getRandomInt(0, cardnumbers.length - 1)];
	let winner = "";
	if (cardClass1 == "spade") {
		if (cardClass2 != "spade") {
			if (cardNumber1 > cardNumber2) {
				winner = p1name + "has won!";
			}
		}
	}
	return (
		<div className="row">
			<div className="col-12">
				<h1>{winner + " won this round!"}</h1>
			</div>
			<div className="row">
				<div className="col">
					<h1>{store.p1name}</h1>
					<div className={"card " + cardClass1}>
						<h1>{cardNumber1}</h1>
					</div>
				</div>

				<div className="col">
					<h1>{store.p2name}</h1>
					<div className={"card " + cardClass2}>
						<h1>{cardNumber2}</h1>
					</div>
				</div>
				<div className="col-12">
					<Link to="/">
						<button>play again</button>
					</Link>
				</div>
			</div>
		</div>
	);
};
