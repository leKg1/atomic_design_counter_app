import { FC } from "react";

interface TextProps {
  content: string;
}

export const Text: FC<TextProps> = ({ content }) => {
  return <span>{content}</span>;
};
