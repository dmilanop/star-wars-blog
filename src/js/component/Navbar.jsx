import React, { useContext } from "react";
import starWars from "../../img/template.jpeg";
import { Link } from "react-router-dom";
import "../../styles/index.scss";
import { Context } from "../store/appContext";

const Navbar = () => {
	const { store, actions } = useContext(Context);

	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container-fluid">
				<Link to="/" className="navbar-brand">
					<img className="logo" src={starWars} />
				</Link>
				<div className="dropdown favorites">
					<button
						className="btn btn-primary dropdown-toggle button-first"
						type="button"
						id="dropdownMenu2"
						data-bs-toggle="dropdown"
						aria-expanded="false">
						Favorites
						<span className="badge bg-danger">{`${store.favorites.length}`}</span>
					</button>
					<ul className="dropdown-menu" aria-labelledby="dropdownMenu2">
						{store.favorites.map(favorite => {
							return (
								<li key={favorite.uid} className="icon-button">
									{favorite.name}{" "}
									<button
										type="button"
										className="btn btn-danger"
										onClick={() => {
											actions.deleteFavorites(favorite.name);
										}}>
										<i className="fas fa-trash-alt trash" />
									</button>
								</li>
							);
						})}
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
