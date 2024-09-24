import { FC } from "react";
import styles from "@/styles/ButtonText.module.css";
import { Button } from "../atoms/Button";
import { Text } from "../atoms/Text";
import { ButtonTextProps } from "./types";

export const ButtonText: FC<ButtonTextProps> = ({
  content,
  onIncrement,
  onDecrement,
}) => {
  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <div className={styles.text}>
          <Text content={content} />
        </div>
        <Button label="INCREMENT" onClick={onIncrement} />
        <Button label="DECREMENT" onClick={onDecrement} />
      </div>
    </div>
  );
};
