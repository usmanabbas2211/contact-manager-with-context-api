import React, { useState } from "react";
const Context = React.createContext();

const reducer = (state, action) => {
	switch (action.type) {
		case "DELETE_CONTACT":
			return {
				...state,
				contacts: state.contacts.filter(
					(contact) => contact.id !== action.payload
				),
			};
		default:
			return state;
	}
};

export const Provider = (props) => {
	const [state, setState] = useState({
		contacts: [
			{
				id: 1,
				name: "john",
				email: "john@email.com",
				phone: "555-555-555",
			},
			{
				id: 2,
				name: "smilga",
				email: "smilga@email.com",
				phone: "555-555-555",
			},
			{
				id: 3,
				name: "carren",
				email: "carren@email.com",
				phone: "555-555-555",
			},
		],
		dispatch: (action) => setState((state) => reducer(state, action)),
	});
	return <Context.Provider value={state}>{props.children}</Context.Provider>;
};

export const Consumer = Context.Consumer;
