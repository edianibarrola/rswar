import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { RandomCard } from "../component/randomcard";
import { Link, useParams } from "react-router-dom";

export const Home = () => {
	const { store, actions } = useContext(Context);
	const [p1val, setP1Val] = useState("");
	const [p2val, setP2Val] = useState("");
	return (
		<div className="text-center mt-5">
			<h1>Its War Time</h1>

			<div className="row">
				<div className="col">
					<input
						type="text"
						id="player1"
						value={p1val}
						placeholder="player 1"
						onChange={e => {
							setP1Val(e.target.value);
						}}
					/>
				</div>
				<div className="col">
					<input
						type="text"
						placeholder="Player 2"
						value={p2val}
						onChange={e => {
							setP2Val(e.target.value);
						}}
						id="player2"
					/>
				</div>
				<Link to="/randomcards">
					<button
						onClick={() => {
							actions.setp1(p1val);
							actions.setp2(p2val);
						}}>
						Ready?
					</button>
				</Link>
			</div>
			<div className="alert alert-info">{store.message || "Loading message from the backend..."}</div>
		</div>
	);
};
