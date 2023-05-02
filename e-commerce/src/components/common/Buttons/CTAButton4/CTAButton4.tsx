import { IonButton } from "@ionic/react";
import "./CTAButton4.scss";

const CTAButton4 = () => {
  return (
    <IonButton fill="clear" className="btn-slice">
      <div>
        <div className="top">
          <span>Sliced Button</span>
        </div>
        <div className="bottom">
          <span>Sliced Button</span>
        </div>
      </div>
    </IonButton>
  );
};

export default CTAButton4;
