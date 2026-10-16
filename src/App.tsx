import { useState } from "react";
import { AppLayout } from "./components/layout/AppLayout";
import { DashboardPage } from "./pages/DashboardPage";
import { ContactsPage } from "./pages/ContactsPage";

export type PageName = "Home" | "Contacts";

export default function App() {
  const [page, setPage] = useState<PageName>("Home");

  return (
    <AppLayout activePage={page} onNavigate={setPage}>
      {page === "Home" ? <DashboardPage /> : <ContactsPage />}
    </AppLayout>
  );
}