import { useState, useEffect } from "react";
import { AppContext } from "./AppContext";

export function AppProvider({ children }) {
  const [data, setData] = useState(() => {
    const stored = localStorage.getItem("data");
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        localStorage.setItem("data", JSON.stringify(data));
      })
      .catch((err) => console.error(err));
  }, []);

  const balance = data.balance;
  const transactions = data.transactions;
  const budgets = data.budgets;
  const pots = data.pots;

  return (
    <AppContext.Provider value={{ data, balance, transactions, budgets, pots }}>
      {children}
    </AppContext.Provider>
  );
}
