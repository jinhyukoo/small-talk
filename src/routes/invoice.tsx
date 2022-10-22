import React from 'react';
import { useParams } from 'react-router-dom';

const Invoices: React.FC = () => {
  const params = useParams();

  return <div>Invoice: {params.invoiceId}</div>;
};

export default Invoices;
