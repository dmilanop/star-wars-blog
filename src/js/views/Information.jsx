import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "../component/Card.jsx";

import { Context } from "../store/appContext";

const Information = () => {
	const { store, actions } = useContext(Context);

	// const [information, setInformation] = useState({});

	const { id, type } = useParams();

	useEffect(() => {
		// if (id) {
		// 	for (let arr in store) {
		// 		if (arr === type) {
		// 			let newArr = store[type].find(item => {
		// 				return item.uid == id;
		// 			});
		// 			setInformation(newArr);
		// 		}
		// 	}
		// }

		actions.moreInformation(id, type);
	}, []);

	return (
		<>
			<div className="card mb-3" style={{ maxWidth: "540px" }}>
				<div className="row g-0">
					<div className="col-md-4">
						<img src="https://via.placeholder.com/400x540" className="img-fluid rounded-start" alt="..." />
					</div>
					<div className="col-md-8">
						<div className="card-body">
							<h5 className="card-title">Name: {store.information.name}</h5>
							<h5>URL: {store.information.url}</h5>
							<h5>Eye color: {store.information.eye_color}</h5>
							<h5>Gender: {store.information.gender}</h5>
							<h5>Climate: {store.information.climate}</h5>
							<h5>Population: {store.information.population}</h5>
							<h5>Model: {store.information.model}</h5>
							<h5>Passengers: {store.information.passengers}</h5>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Information;
