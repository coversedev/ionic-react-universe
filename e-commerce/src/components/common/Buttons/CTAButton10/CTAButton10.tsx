import { IonButton, IonIcon, IonLabel } from "@ionic/react";
import { logoFacebook } from "ionicons/icons";

import "./CTAButton10.scss";

const CTAButton10 = () => {
  return (
    <IonButton className="cta-btn">
      <div className="logo">
        <IonIcon icon={logoFacebook} />
      </div>

      <IonLabel>Facebook</IonLabel>
    </IonButton>
  );
};

export default CTAButton10;
