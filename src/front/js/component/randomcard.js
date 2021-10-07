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

	let cardClass1ID = suit[getRandomInt(0, suit.length - 1)];
	let cardClass1 = "";
	switch (cardClass1ID) {
		case 1:
			cardClass1 = "heart";
			break;
		case 2:
			cardClass1 = "club";
			break;
		case 3:
			cardClass1 = "diamond";
			break;
		case 4:
			cardClass1 = "spade";
			break;
		default:
			cardClass1 = "nosuite";
	}
	let cardNumber1 = cardnumbers[getRandomInt(0, cardnumbers.length - 1)];

	let cardClass2ID = suit[getRandomInt(0, suit.length - 1)];
	let cardClass2 = "";
	switch (cardClass2ID) {
		case 1:
			cardClass2 = "heart";
			break;
		case 2:
			cardClass2 = "club";
			break;
		case 3:
			cardClass2 = "diamond";
			break;
		case 4:
			cardClass2 = "spade";
			break;
		default:
			cardClass2 = "nosuite";
	}
	let cardNumber2 = cardnumbers[getRandomInt(0, cardnumbers.length - 1)];

	let winner = "it's a Tie!";

	if (cardClass1ID > cardClass2ID) {
		winner = store.p1name + " has won!";
	} else if (cardClass1ID == cardClass2ID) {
		if (cardNumber1 > cardNumber2) {
			winner = store.p1name + " has won by having a higher card even though suits matched!";
		} else if (cardNumber2 > cardNumber1) {
			winner = store.p2name + " has won by having a higher card even though suits matched!";
		} else if (cardNumber1 == cardNumber2) {
			winner = "Wow! " + store.p1name + " has tied with " + store.p2name + "!";
		}
	} else if (cardClass2ID > cardClass1ID) {
		winner = store.p2name + " has won!";
	}

	// if (cardClass1 == "spade" && cardClass2 != "spade") {
	// 	winner = store.p1name;
	// } else if (cardClass2 == "spade" && cardClass1 != "spade") {
	// 	winner = store.p2name;
	// } else if (cardClass1 == "diamond" && cardClass2 != "diamond" && cardClass2 != "spade ") {
	// 	winner = store.p1name;
	// } else if (cardClass2 == "spade" && cardClass1 != "spade" && cardClass1 != "diamond") {
	// 	winner = store.p2name;
	// }
	// // p1 wins
	// else if (cardClass1 == "spade") {
	// 	if (cardClass2 != "spade") {
	// 		if (cardNumber1 > cardNumber2) {
	// 			winner = store.p1name + " has won!";
	// 		}
	// 	}
	// } else if (cardClass1 == "diamond") {
	// 	if (cardClass2 != "diamond" && cardClass2 != "spade") {
	// 		if (cardNumber1 > cardNumber2) {
	// 			winner = store.p1name + " has won!";
	// 		}
	// 	}
	// }

	// // p2 wins
	// else if (cardClass2 == "spade") {
	// 	if (cardClass1 != "spade") {
	// 		if (cardNumber2 > cardNumber1) {
	// 			winner = store.p2name + " has won!";
	// 		}
	// 	}
	// } else if (cardClass2 == "diamond") {
	// 	if (cardClass1 != "diamond" && cardClass1 != "spade") {
	// 		if (cardNumber2 > cardNumber1) {
	// 			winner = store.p2name + " has won!";
	// 		}
	// 	}
	// }

	return (
		<div className="row">
			<div className="col-12">
				<h1>{winner + " !"}</h1>
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
