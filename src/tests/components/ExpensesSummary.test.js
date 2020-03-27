import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from '../../components/ExpensesSummary';

test('should correctly render ExpensesSummary with 1 expense', () => {
<<<<<<< HEAD
  const wrapper = shallow(<ExpensesSummary expenseCount={1} expensesTotal={235} />);
=======
  const wrapper = shallow(<ExpensesSummary  expenseCount={1} expensesTotal={235} />)
>>>>>>> b654511824d8d542aed674707059cbd03c3dcb09
  expect(wrapper).toMatchSnapshot();
});

test('should correctly render ExpensesSummary with multiple expenses', () => {
<<<<<<< HEAD
  const wrapper = shallow(<ExpensesSummary expenseCount={23} expensesTotal={23512340987} />);
  expect(wrapper).toMatchSnapshot();
});
=======
  const wrapper = shallow(<ExpensesSummary  expenseCount={23} expensesTotal={235123409} />)
  expect(wrapper).toMatchSnapshot();
});
>>>>>>> b654511824d8d542aed674707059cbd03c3dcb09
