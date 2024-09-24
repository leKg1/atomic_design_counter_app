import { createContext, useState, useCallback, FC, useContext } from "react";
import { CounterContextProps, CounterProviderProps } from "./types";

const CounterContext = createContext<CounterContextProps | undefined>(
  undefined,
);

export const useCounter = () => {
  const context = useContext(CounterContext);
  if (!context) {
    throw new Error("useCounter must be used within a CounterProvider");
  }
  return context;
};

export const CounterProvider: FC<CounterProviderProps> = ({ children }) => {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => setCount((prev) => prev + 1), []);
  const decrement = useCallback(() => setCount((prev) => prev - 1), []);

  return (
    <CounterContext.Provider value={{ count, increment, decrement }}>
      {children}
    </CounterContext.Provider>
  );
};
