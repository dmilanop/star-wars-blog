import React, { useContext } from "react";
import PropTypes from "prop-types";
import "../../styles/index.scss";
import { Context } from "../store/appContext.js";
import { Link } from "react-router-dom";

const Card = ({ item, endpoint, type }) => {
	const { store, actions } = useContext(Context);

	return (
		<div className="card">
			<img src="https://via.placeholder.com/400x200" className="card-img-top" alt="..." />
			<div className="card-body">
				<h5 className="card-title">{item.name}</h5>
				<br />
				<div className="button-like">
					<Link to={`/${type}/${item.uid}`} className="btn btn-outline-primary">
						Learn more!
					</Link>
					<button
						type="button"
						className="btn btn-outline-warning"
						onClick={() => actions.addFavoritesPeople(item.name, endpoint)}>
						<i className="far fa-heart" />
					</button>
				</div>
			</div>
		</div>
	);
};

export default Card;

Card.propTypes = {
	item: PropTypes.object,
	endpoint: PropTypes.string,
	type: PropTypes.string
};
