import { IonButton, IonIcon, IonLabel } from "@ionic/react";

import "./CTAButton12.scss";
import { sendOutline } from "ionicons/icons";

const CTAButton12 = () => {
  return (
    <IonButton className="send-btn">
     <div className="icon-wrapper">
          <IonIcon icon={sendOutline} />
        </div>

      <IonLabel>Send</IonLabel>
    </IonButton>
  );
};

export default CTAButton12;
