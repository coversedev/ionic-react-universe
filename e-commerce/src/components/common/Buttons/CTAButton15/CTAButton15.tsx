import { IonButton, IonIcon, IonLabel } from "@ionic/react";

import "./CTAButton15.scss";
import { arrowForwardOutline } from "ionicons/icons";

const CTAButton15 = () => {
  return (
    <IonButton className="started-btn">
      <IonLabel>Get Started</IonLabel>
      <div className="logo">
        <IonIcon icon={arrowForwardOutline}/>
      </div>
    </IonButton>
  );
};

export default CTAButton15;
