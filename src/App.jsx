import { Routes, Route } from "react-router-dom";
import OverviewPage from "./pages/OverviewPage";
import TransactionsPage from "./pages/TransactionsPage";
import LoginPage from "./pages/LoginPage";
import BudgetsPage from "./pages/BudgetsPage";
import PotsPage from "./pages/PotsPage";
import RecurringBillsPage from "./pages/RecurringBillsPage";
import ScrollToTop from "./utils/ScrollToTop";

function App() {
  return (
    <div className="relative">
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/overview" element={<OverviewPage />} />
        <Route path="/transactions" element={<TransactionsPage />} />
        <Route path="/budgets" element={<BudgetsPage />} />
        <Route path="/recurringBills" element={<RecurringBillsPage />} />
        <Route path="/pots" element={<PotsPage />} />
      </Routes>
    </div>
  );
}

export default App;
