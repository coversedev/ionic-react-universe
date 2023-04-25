import { ReactNode } from "react";
import { IonButton, IonSpinner } from "@ionic/react";
import classNames, { Argument } from "classnames";

import "./ButtonLoader.scss";

type ButtonLoaderProps = {
  classNamesVal?: Argument[];
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  onClick: (e: any) => any;
  loading?: boolean;
  children?: ReactNode | ReactNode[];
  loadingText?: string;
  raised?: boolean;
  animation?: "glow" | "spinner";
  color?: string;
  id?: string;
};

const ButtonLoader = ({
  classNamesVal = [],
  type = "button",
  disabled = false,
  onClick,
  loading = false,
  children,
  loadingText = "Loading...",
  raised = false,
  animation = "glow",
  color = "primary",
  id,
}: ButtonLoaderProps) => {
  return (
    <div
      className={classNames("button-loader-wrapper", {
        "animation-glow": animation === "glow",
        "animation-spinner": animation === "spinner",
      })}
    >
      <IonButton
        id={id}
        color={color}
        fill={raised ? "solid" : "clear"}
        className={classNames(...classNamesVal)}
        type={type}
        disabled={disabled}
        onClick={onClick}
      >
        {loading ? (
          <IonSpinner className="btn-spinner" name="crescent" />
        ) : null}
        {loading ? <div className="btn-glow"></div> : null}
        {!loading ? <span className="loader-children">{children}</span> : null}
        {loading ? <span>{loadingText}</span> : null}
      </IonButton>
    </div>
  );
};

export default ButtonLoader;
