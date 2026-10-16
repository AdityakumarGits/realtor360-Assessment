import type { ReactNode } from "react";
import { TopNavigation } from "./TopNavigation";
import type { PageName } from "../../App";

interface AppLayoutProps {
  activePage: PageName;
  onNavigate: (page: PageName) => void;
  children: ReactNode;
}

export function AppLayout({
  activePage,
  onNavigate,
  children,
}: AppLayoutProps) {
  return (
    <div className="min-h-screen bg-[#f4f6f8]">
      <TopNavigation activePage={activePage} onNavigate={onNavigate} />
      <main className="mx-auto max-w-[1600px] p-4 sm:p-5 lg:p-6">
        {children}
      </main>
    </div>
  );
}
