"use client";
export interface Props {
  children?: string | string[];
  className?: string;
}

export function renderTextArray(text: string | string[]) {
  // Client side: check if the text is an array and render each item as a separate span
  if (Array.isArray(text)) {
    return text.map((item, index) => <span key={index}>{item}</span>);
  }

  // Client side: if the text is not an array, render it as a single span
  return <span>{text}</span>;
}
