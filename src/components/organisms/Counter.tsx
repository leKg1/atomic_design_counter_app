import { FC } from "react";
import { ButtonText } from "../molecules/ButtonText";
import { useCounter } from "../../context/CounterContext";
import { useDebounce } from "../../hooks/useDebounce";

export const Counter: FC = () => {
  const { count, increment, decrement } = useCounter();
  const debouncedIncrement = useDebounce(increment, 300);
  const debouncedDecrement = useDebounce(decrement, 300);

  return (
    <ButtonText
      content={count.toString()}
      onIncrement={debouncedIncrement}
      onDecrement={debouncedDecrement}
    />
  );
};
