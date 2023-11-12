import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { BubbleType } from "./interfaces";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const bubbleType: BubbleType[] = [
  {
    id: 0,
    val: "Speech bubble pointing left",
    type: "left",
  },
  {
    id: 1,
    val: "Speech bubble pointing right",
    type: "right",
  },
  {
    id: 2,
    val: "Thinking bubble pointing left",
    type: "thinkLeft",
  },
  {
    id: 3,
    val: "Thinking bubble pointing right",
    type: "thinkRight",
  },
];
