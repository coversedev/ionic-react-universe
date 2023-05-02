import {
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCardContent,
  IonLabel,
} from "@ionic/react";
import MobileStoreButton from "../../Buttons/MobileStoreButton/MobileStoreButton";

import "./MobileCardCTA.scss";

const MobileCardCTA = () => {
  return (
    <IonCard>
      <IonCardHeader>
        <IonCardSubtitle className="small-text">Download Now!</IonCardSubtitle>
        <IonCardTitle className="title">
          Download our mobile application.
        </IonCardTitle>
      </IonCardHeader>
      <IonCardContent className="desc">
        <IonLabel>
          Download Lorem mobile banking app for IOS &amp; Android to manage your
          online money.
        </IonLabel>

        <div className="buttons">
          <MobileStoreButton type="Play" style="stylish" href="#" />
          <MobileStoreButton type="Apple" style="stylish" href="#" />
        </div>
      </IonCardContent>
    </IonCard>
  );
};

export default MobileCardCTA;
