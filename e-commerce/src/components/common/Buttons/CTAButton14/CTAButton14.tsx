import { IonButton, IonLabel } from "@ionic/react";

import "./CTAButton14.scss";

const CTAButton14 = () => {
  return (
    <IonButton fill="clear" className="battery-fill-btn">
      <span className="button_lg">
        <span className="button_sl"></span>
        <IonLabel className="button_text">Hover me</IonLabel>
      </span>
    </IonButton>
  );
};

export default CTAButton14;
