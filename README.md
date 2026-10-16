# Realtor360 — Modular React + Tailwind Project

A beginner-friendly real-estate CRM dashboard inspired by the supplied Realtor360 screenshots. Components are split by responsibility so the code is easier to read, maintain, and extend.

## Technology

- React 18
- TypeScript
- Vite
- Tailwind CSS
- Recharts
- Lucide React icons

## Run locally

Requires Node.js 18 or newer.

```bash
npm install
npm run dev
```

Open the local URL printed by Vite.

## Production build

```bash
npm run build
npm run preview
```

The production output is generated in `dist/`.

## Project structure

```text
src/
├── components/
│   ├── layout/
│   │   ├── AppLayout.tsx
│   │   └── TopNavigation.tsx
│   ├── dashboard/
│   │   ├── MetricCard.tsx
│   │   ├── LeadSourceChart.tsx
│   │   ├── StageChart.tsx
│   │   ├── SalesPeopleChart.tsx
│   │   ├── PipelineTable.tsx
│   │   ├── TotalDealsCard.tsx
│   │   ├── RemindersCard.tsx
│   │   └── CalendarCard.tsx
│   ├── contacts/
│   │   ├── ContactFilters.tsx
│   │   ├── ContactsToolbar.tsx
│   │   ├── ContactsTable.tsx
│   │   └── CreateContactModal.tsx
│   └── common/
│       └── Card.tsx
├── data/
│   └── mockData.ts
├── pages/
│   ├── DashboardPage.tsx
│   └── ContactsPage.tsx
├── types/
│   └── index.ts
├── App.tsx
├── index.css
└── main.tsx
```

## Features

- Dashboard metrics and Recharts visualizations
- Reminders and a simple calendar view
- Contacts list with search and status, role, assignee, city, and lead-source filters
- Create-contact modal
- Responsive layout and yellow/white visual theme
- Table/grid view toggle and CSV export

## Notes

This is a frontend-only assignment implementation using mock data. It does not connect to a backend or persist changes after a page refresh. The UI is based on the screenshots provided; verify the build and compare at the target viewport before submitting.
