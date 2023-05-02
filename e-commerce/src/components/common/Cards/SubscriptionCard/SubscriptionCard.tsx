import {
  IonList,
  IonItem,
  IonIcon,
  IonButton,
  IonLabel,
  IonTitle,
  IonRow,
} from "@ionic/react";
import { checkmark } from "ionicons/icons";
import "./SubscriptionCard.scss";

const SubscriptionCard = () => {
  return (
    <div className="pack-container">
      <div className="header">
        <IonLabel className="title">Starter</IonLabel>
        <IonRow className="price-container">
          <IonLabel>$</IonLabel>
          <IonTitle>24</IonTitle>
          <IonLabel>/mo</IonLabel>
        </IonRow>
      </div>
      <div className="body">
        <IonList lines="none" className="lists">
          <IonItem className="list">
            <IonIcon icon={checkmark} slot="start" />
            <IonLabel>2 team members</IonLabel>
          </IonItem>
          <IonItem className="list">
            <IonIcon icon={checkmark} slot="start" />
            <IonLabel>100+ components</IonLabel>
          </IonItem>
          <IonItem className="list">
            <IonIcon icon={checkmark} slot="start" />
            <IonLabel>2 month free updates</IonLabel>
          </IonItem>
          <IonItem className="list">
            <IonIcon icon={checkmark} slot="start" />
            <IonLabel>Life time technical support</IonLabel>
          </IonItem>
        </IonList>
      </div>
      <div className="footer">
        <IonButton fill="solid" color="light">
          Buy Now
        </IonButton>
      </div>
    </div>
  );
};

export default SubscriptionCard;
