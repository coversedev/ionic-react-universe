import { IonButton, IonIcon, IonLabel } from "@ionic/react";
import "./CTAButton5.scss";
import { arrowForwardOutline } from "ionicons/icons";

const CTAButton5 = () => {
  return (
    <IonButton className="btn-neon">
      <IonIcon slot="end" icon={arrowForwardOutline} />
      <IonLabel>Subscribe</IonLabel>
    </IonButton>
  );
};

export default CTAButton5;
