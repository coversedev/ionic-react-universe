import React, { ReactElement, useState } from "react";
import { IonButton, IonIcon } from "@ionic/react";
import { eyeOffOutline, eyeOutline } from "ionicons/icons";

import "./ShowHidePassword.scss";

/**
 * ShowHidePasswordProps is an object with three properties: children, showPassword, isIcon, and inputRef.
 * children is an ReactElement<HTMLIonInputElement>, showPassword is a boolean,
 * isIcon is a boolean, and inputRef is the ion input reference.
 *
 * @property {ReactElement<HTMLIonInputElement>} children - The input element that the user is typing into.
 * @property {boolean} showPassword - boolean - This is a boolean value that determines whether the
 * password is shown or hidden.
 * @property {boolean} isIcon - boolean - This is a boolean value that determines whether the icon is
 * shown or not.
 * @property {React.MutableRefObject<HTMLIonInputElement>} inputRef - reference - This is the ion-input reference
 */
type ShowHidePasswordProps = {
	children: ReactElement<HTMLIonInputElement>;
	showPassword: boolean;
	isIcon: boolean;
	inputRef: React.MutableRefObject<HTMLIonInputElement>;
};

const ShowHidePassword = ({
	children,
	showPassword,
	isIcon,
	inputRef,
}: ShowHidePasswordProps) => {
	const [showPasswordField, setShowPasswordField] =
		useState<boolean>(showPassword);
	/**
	 * `toggleShow` is a function that toggles the value of `showPassword` and changes the type of the
	 * input to either `text` or `password` depending on the value of `showPassword`.
	 */
	const toggleShow = () => {
		setShowPasswordField(password => !password);

		/* change ion-input type based on the toggled show / hide password */
		if (inputRef && inputRef?.current && inputRef?.current?.type) {
			inputRef.current.type = showPasswordField ? "text" : "password";
		}
	};

	return (
		<div className="show-hide-password-wrapper">
			{children}
			<IonButton
				fill="clear"
				slot="icon-only"
				className="type-toggle"
				onClick={toggleShow}
			>
				{isIcon ? (
					<React.Fragment>
						{!showPasswordField ? (
							<IonIcon className="show-option" icon={eyeOffOutline} />
						) : (
							<IonIcon className="hide-option" icon={eyeOutline} />
						)}
					</React.Fragment>
				) : (
					<React.Fragment>
						<span className="show-option" hidden={showPasswordField}>
							show
						</span>
						<span className="hide-option" hidden={!showPasswordField}>
							hide
						</span>
					</React.Fragment>
				)}
			</IonButton>
		</div>
	);
};

export default ShowHidePassword;
