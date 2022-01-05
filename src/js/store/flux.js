const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			urlBase: "https://www.swapi.tech/api",
			people: [],
			planets: [],
			vehicles: [],
			favorites: [],
			information: {}
		},
		actions: {
			getData: async endpoint => {
				let store = getStore();
				try {
					let response = await fetch(`${store.urlBase}/${endpoint}`);
					let body = await response.json();

					if (response.ok) {
						setStore({
							...store,
							[endpoint]: body.results
						});
					}
				} catch (error) {}
			},

			addFavoritesPeople: (name, endpoint) => {
				let store = getStore();

				let person;

				let existe = store.favorites.find(item => {
					return item.name == name;
				});

				if (!existe) {
					if (endpoint == "people") {
						person = store.people.find(item => {
							return item.name == name;
						});
					} else if (endpoint == "planets") {
						person = store.planets.find(item => {
							return item.name == name;
						});
					} else {
						person = store.vehicles.find(item => {
							return item.name == name;
						});
					}
					setStore({ ...store, favorites: [...store.favorites, person] });
				}
			},

			deleteFavorites: name => {
				let store = getStore();

				const newFavorites = store.favorites.filter(item => {
					return name != item.name;
				});

				setStore({ ...store, favorites: newFavorites });
			},

			moreInformation: async (id, endpoint) => {
				let store = getStore();

				try {
					let response = await fetch(`${store.urlBase}/${endpoint}/${id}`);
					let body = await response.json();

					if (response.ok) {
						setStore({
							...store,
							information: body.result.properties
						});
					}

					// console.log(body.result.properties);
				} catch (error) {}
			}
		}
	};
};

export default getState;
