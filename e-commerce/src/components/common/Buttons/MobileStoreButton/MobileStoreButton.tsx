import { IonButton, IonIcon } from "@ionic/react";
import { logoGooglePlaystore, logoApple } from "ionicons/icons";
import classNames from "classnames";

import "./MobileStoreButton.scss";

type MobileStoreButtonProps = {
  type: "Apple" | "Play";
  href: string;
  style?: "normal" | "stylish";
};

const MobileStoreButton = ({
  type = 'Apple',
  href,
  style = "normal",
}: MobileStoreButtonProps) => {
  return (
    <IonButton
      href={href}
      fill="clear"
      className={classNames({
        "playstore-button": type === "Play",
        "applestore-button": type === "Apple",
        normal: style === "normal",
        stylish: style === "stylish",
      })}
    >
      <IonIcon
        className="icon"
        icon={type === "Apple" ? logoApple : logoGooglePlaystore}
      />
      <div className="texts">
        <small className="text-1">  {type === "Play" ? "GET IT ON" : "DOWNLOAD FROM"}</small>
        <div className="text-2">
          {type === "Play" ? "Google Play" : "Apple Store"}
        </div>
      </div>
    </IonButton>
  );
};

export default MobileStoreButton;
