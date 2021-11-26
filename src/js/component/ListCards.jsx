import React, { useContext } from "react";
import Card from "./Card.jsx";
import "../../styles/index.scss";
import { Context } from "../store/appContext.js";

const ListCards = () => {
	const { store, actions } = useContext(Context);

	return (
		<>
			<div className="container">
				<div className="row">
					<div className="col-3">
						<h1 className="heading-characters">People</h1>
					</div>
				</div>
			</div>
			<div className="container">
				<div className="row-card">
					{store.people.map(item => {
						return <Card key={item.uid} item={item} endpoint={"people"} type="people" />;
					})}
				</div>
			</div>
			<div className="container">
				<div className="row">
					<div className="col-3">
						<h1 className="heading-characters">Planets</h1>
					</div>
				</div>
			</div>
			<div className="container">
				<div className="row-card">
					{store.planets.map(item => {
						return <Card key={item.uid} item={item} endpoint={"planets"} type="planets" />;
					})}
				</div>
			</div>
			<div className="container">
				<div className="row">
					<div className="col-3">
						<h1 className="heading-characters">Vehicles</h1>
					</div>
				</div>
			</div>
			<div className="container">
				<div className="row-card">
					{store.vehicles.map(item => {
						return <Card key={item.uid} item={item} endpoint={"vehicles"} type="vehicles" />;
					})}
				</div>
			</div>
		</>
	);
};

export default ListCards;
