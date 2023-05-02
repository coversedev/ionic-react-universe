import { IonButton, IonIcon, IonLabel } from "@ionic/react";
import { logoLinkedin } from "ionicons/icons";

import "./CTAButton11.scss";

const CTAButton11 = () => {
  return (
    <IonButton fill="clear" className="social-btn">
      <IonIcon slot="end" icon={logoLinkedin} />
      <IonLabel>Follow me</IonLabel>
    </IonButton>
  );
};

export default CTAButton11;
