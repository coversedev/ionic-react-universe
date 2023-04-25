import React, { ReactNode } from "react";
import { IonApp, IonContent, IonPage } from "@ionic/react";

import "../../global.scss";

type IonStoryWrapperProps = {
  children: ReactNode | ReactNode[];
};

const IonStoryWrapper: React.FC<IonStoryWrapperProps> = ({ children }) => {
  return (
    <IonApp>
      <IonPage>
        <IonContent>{children}</IonContent>
      </IonPage>
    </IonApp>
  );
};

export default IonStoryWrapper;