import React, { useState } from "react";
import Contact from "./Contact";
import { Consumer } from "../../context";

const Contacts = () => {
	return (
		<Consumer>
			{(value) => {
				const { contacts } = value;
				return (
					<React.Fragment>
						{contacts.map((contact) => {
							return <Contact key={contact.id} contact={contact} />;
						})}
					</React.Fragment>
				);
			}}
		</Consumer>
	);
};

export default Contacts;
