import type { ReactNode } from "react";

interface CardProps {
  title?: string;
  children: ReactNode;
  className?: string;
}

export function Card({ title, children, className = "" }: CardProps) {
  return (
    <section className={`panel min-w-0 p-4 sm:p-5 ${className}`}>
      {title && <h2 className="section-title mb-4">{title}</h2>}
      {children}
    </section>
  );
}