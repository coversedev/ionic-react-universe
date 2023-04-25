import { IonChip, IonIcon, IonItem, IonLabel, IonList } from "@ionic/react";
import classNames from "classnames";
import { closeCircleOutline } from "ionicons/icons";

import "./DynIonChips.scss";

type IonChipModel = {
  id: string | number;
  name?: string;
  value: Record<string, any>;
};

type DynIonChipsProps = {
  onRemoveChipHandler: (id: string | number) => void;
  activatedChipHandler: (chip: Record<string, any>) => void;
  chipValues: IonChipModel[];
  activatedChipId: number | string;
  color?: string;
};

const DynIonChips = ({
  onRemoveChipHandler,
  activatedChipHandler,
  chipValues,
  activatedChipId,
  color,
}: DynIonChipsProps) => {
  return (
    <IonList
      className="dyn-chips-wrapper ion-display-flex ion-flex-direction-row"
      lines="none"
    >
      {chipValues?.map((chip: any, index: number) => (
        <IonItem key={index}>
          <IonChip
            color={color || "secondary"}
            className={classNames("chip", {
              active: activatedChipId !== -1 && chip?.id === activatedChipId,
            })}
            onClick={(e) => {
              e.stopPropagation();
              activatedChipHandler(chip);
            }}
          >
            <IonLabel>{chip?.name ? chip.name : `Detail ${chip.id}`}</IonLabel>
            <IonIcon
              className="chip-remove"
              icon={closeCircleOutline}
              onClick={(e) => {
                e.stopPropagation();
                onRemoveChipHandler(chip?.id);
              }}
            />
          </IonChip>
        </IonItem>
      ))}
    </IonList>
  );
};
export default DynIonChips;
