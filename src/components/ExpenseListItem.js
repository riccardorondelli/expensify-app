import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

const ExpenseListItem = ({ id, description, amount, createdAt }) => (
  <div>
    <Link to={`/edit/${id}`}>
      <h3>{description}</h3>
    </Link>
    <p>
<<<<<<< HEAD
      {numeral(amount / 100).format('$0,0.00')}
      -
      {moment(createdAt).format('MMMM Do, YYYY')}
=======
    {numeral(amount / 100).format('$0,0.00')} 
    - 
    {moment(createdAt).format('MMMM Do, YYYY')}
>>>>>>> b654511824d8d542aed674707059cbd03c3dcb09
    </p>
  </div>
);

export default ExpenseListItem;
