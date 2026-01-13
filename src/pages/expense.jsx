import React, { useContext, useEffect, useState } from "react";
import MainLayout from "../components/Layouts/MainLayout";
import CardExpenseCategory from "../components/Fragments/CardExpenseCategory";
import { expenseService } from "../services/dataService";
import { AuthContext } from "../context/authContext";
import AppSnackbar from "../components/Elements/AppSnackbar";
import CircularProgress from "@mui/material/CircularProgress";

function ExpensePage() {
  const [expenses, setExpenses] = useState([]);
  const [loading, setLoading] = useState(true);
  const { logout } = useContext(AuthContext);

  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  });

  const handleCloseSnackbar = () => {
    setSnackbar((prev) => ({ ...prev, open: false }));
  };

  const fetchExpenses = async () => {
    try {
      setLoading(true);
      const data = await expenseService();
      setExpenses(Array.isArray(data) ? data : []);
    } catch (err) {
      setSnackbar({
        open: true,
        message: "Gagal mengambil data expenses",
        severity: "error",
      });
      if (err.status === 401) {
        logout();
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchExpenses();
  }, []);

  return (
    <>
      <MainLayout>
        <div className="text-2xl text-gray-02 mb-4">Expenses Comparison</div>

        {loading ? (
          <div className="flex flex-col justify-center items-center h-64 text-primary">
            <CircularProgress color="inherit" size={50} />
            <div className="mt-2">Loading Data</div>
          </div>
        ) : (
          <div className="grid sm:grid-cols-3 gap-6">
            {(expenses || []).map((expense, index) => (
              <CardExpenseCategory
                key={index}
                category={expense.category}
                amount={expense.amount}
                percentage={expense.percentage}
                trend={expense.trend}
                detail={expense.detail}
              />
            ))}
          </div>
        )}

        <AppSnackbar
          open={snackbar.open}
          message={snackbar.message}
          severity={snackbar.severity}
          onClose={handleCloseSnackbar}
        />
      </MainLayout>
    </>
  );
}

export default ExpensePage;
