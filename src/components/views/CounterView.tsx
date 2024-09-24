import { FC } from "react";
import { CounterProvider } from "../../context/CounterContext";
import { Counter } from "../organisms/Counter";

export const CounterView: FC = () => {
  return (
    <CounterProvider>
      <Counter />
    </CounterProvider>
  );
};
