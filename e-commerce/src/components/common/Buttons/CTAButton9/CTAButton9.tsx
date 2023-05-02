import { IonButton, IonIcon, IonLabel } from "@ionic/react";
import "./CTAButton9.scss";
import { chevronForwardOutline } from "ionicons/icons";

const CTAButton9 = () => {
  return (
    <IonButton className="cta-btn">
      <IonIcon slot="end" icon={chevronForwardOutline} />
      <IonLabel>Learn More</IonLabel>
    </IonButton>
  );
};

export default CTAButton9;
