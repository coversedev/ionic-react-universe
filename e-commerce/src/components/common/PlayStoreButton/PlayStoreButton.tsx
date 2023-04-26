import { IonButton, IonIcon } from "@ionic/react";
import { logoGooglePlaystore } from "ionicons/icons";

import "./PlayStoreButton.scss";

const PlayStoreButton = () => {
  return (
    <IonButton href="#" fill="clear" className="playstore-button">
      <IonIcon className="icon" icon={logoGooglePlaystore} />
      <div className="texts">
        <div className="text-1">GET IT ON</div>
        <div className="text-2">Google Play</div>
      </div>
    </IonButton>
  );
};

export default PlayStoreButton;
