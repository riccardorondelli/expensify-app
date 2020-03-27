import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
<<<<<<< HEAD
import { startAddExpense } from '../actions/expenses';

export class AddExpensePage extends React.Component {
  onSubmit = (expense) => {
    this.props.startAddExpense(expense);
=======
import { addExpense } from '../actions/expenses';

export class AddExpensePage extends React.Component {
  onSubmit = (expense) => {
    this.props.addExpense(expense);
>>>>>>> b654511824d8d542aed674707059cbd03c3dcb09
    this.props.history.push('/');
  };
  render() {
    return (
      <div>
        <h1>Add Expense</h1>
        <ExpenseForm
          onSubmit={this.onSubmit}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
<<<<<<< HEAD
  startAddExpense: (expense) => dispatch(startAddExpense(expense))
=======
  addExpense: (expense) => dispatch(addExpense(expense))
>>>>>>> b654511824d8d542aed674707059cbd03c3dcb09
});

export default connect(undefined, mapDispatchToProps)(AddExpensePage);
