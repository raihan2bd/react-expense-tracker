import NewExpenseForm from "./NewExpenseForm";

import "./NewExpense.css";
const NewExpense = (props) => {
  const saveExpenseHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };

    props.onAddExpense(expenseData);
  };
  return (
    <div className="new-expense">
      <NewExpenseForm onSaveExpenseData={saveExpenseHandler} />
    </div>
  );
};

export default NewExpense;
