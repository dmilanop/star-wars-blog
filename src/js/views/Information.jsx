import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "../component/Card.jsx";

import { Context } from "../store/appContext";

const Information = () => {
	const { store, actions } = useContext(Context);

	const [information, setInformation] = useState({});

	const { id, type } = useParams();

	useEffect(() => {
		if (id) {
			for (let arr in store) {
				if (arr === type) {
					let newArr = store[type].find(item => {
						return item.uid == id;
					});
					setInformation(newArr);
				}
			}
		}
	}, []);

	return (
		<>
			<Card item={information} />
		</>
	);
};

export default Information;
