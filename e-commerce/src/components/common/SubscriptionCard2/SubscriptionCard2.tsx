import { IonButton, IonChip, IonIcon, IonItem, IonLabel, IonList, IonTitle } from "@ionic/react";
import { checkmarkOutline, shieldCheckmarkOutline } from "ionicons/icons";
import "./SubscriptionCard2.scss";

const SubscriptionCard2 = () => {
  return (
    <div className="pack_card">
      <div className="banner">
        <IonChip color="primary">most popular</IonChip>
      </div>

      <IonTitle className="pack_name">Team</IonTitle>

      <IonLabel className="description">
        Avanced feaures for Individuals and organizations
      </IonLabel>

      <IonList lines="none" className="lists">
        <IonItem className="list">
          <IonIcon icon={shieldCheckmarkOutline} />
          <IonLabel>Unlimited file storage</IonLabel>
        </IonItem>
        <IonItem className="list">
          <IonIcon icon={checkmarkOutline} />
          <IonLabel>10 GB bandwidth per month</IonLabel>
        </IonItem>
        <IonItem className="list">
          <IonIcon icon={checkmarkOutline} />
          <IonLabel>10.000 tasks per month</IonLabel>
        </IonItem>
        <IonItem className="list">
          <IonIcon icon={checkmarkOutline} />
          <IonLabel>Email support</IonLabel>
        </IonItem>
        <IonItem className="list">
          <IonIcon icon={checkmarkOutline} />
          <IonLabel>100 Webhooks</IonLabel>
        </IonItem>
      </IonList>
      <div className="bottom">
        <div className="price_container">
          <IonLabel className="devise">$</IonLabel>
          <IonLabel className="price">19</IonLabel>
          <IonLabel className="date">/month</IonLabel>
        </div>
        <IonButton fill="solid" color="primary" href="#">
          Continue with Team
        </IonButton>
      </div>
    </div>
  );
};

export default SubscriptionCard2;
