import {ReactNode} from "react";

export interface CardProps {
  topic?: string;
  date?: string;
  title: string;
  body: string;
  userId: number;
  id: number
}