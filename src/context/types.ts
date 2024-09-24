import { ReactNode } from "react";

export interface CounterContextProps {
  count: number;
  increment: () => void;
  decrement: () => void;
}

export interface CounterProviderProps {
  children: ReactNode;
}
