import React, { useState } from "react";
import propTypes from "prop-types";
import { Consumer } from "../../context";

const Contact = (props) => {
	const { id, name, email, phone } = props.contact;
	const [state, setState] = useState({ showContactInfo: false });

	const onDeleteClick = (id, dispatch) => {
		dispatch({ type: "DELETE_CONTACT", payload: id });
	};
	return (
		<Consumer>
			{(value) => {
				const { dispatch } = value;
				return (
					<div className='card card-body mb-3'>
						<h4 className='d-flex justify-content-between'>
							<div>
								<span>{name}</span>
								<i
									className='fas fa-sort-down'
									style={{ cursor: "pointer" }}
									onClick={() =>
										setState({ showContactInfo: !state.showContactInfo })
									}
								></i>
							</div>
							<i
								className='fa fa-times text-danger'
								style={{ cursor: "pointer" }}
								onClick={() => onDeleteClick(id, dispatch)}
							></i>
						</h4>
						{state.showContactInfo && (
							<ul className='list-group'>
								<li className='list-group-item'>Email:{email}</li>
								<li className='list-group-item'>Phone:{phone}</li>
							</ul>
						)}
					</div>
				);
			}}
		</Consumer>
	);
};

Contact.propTypes = {
	contact: propTypes.object.isRequired,
};

export default Contact;
