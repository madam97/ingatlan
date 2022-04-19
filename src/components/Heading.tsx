import React from 'react';
import { Form } from 'react-bootstrap';
import TOrder from '../types/TOrder';

type HeadingProps = {
  title: string,
  count?: number,
  activeOrder?: string,
  orders?: TOrder[],
  setActiveOrder?: (value: string) => void
}

export default function Heading({ title, count, activeOrder = '', orders = [], setActiveOrder = () => {} }: HeadingProps) {

  /**
   * Handles the sort select input's value change
   * @param e 
   */
  const handleOrderChange = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    e.preventDefault(); 
    setActiveOrder(e.target.value);
  }

  // ------------------------------------------

  return (
    <div className="component-heading rounded bg-light shadow">
      <h1>{title}</h1>

      {count && <span>{count} db</span>}

      {orders && 
        <Form.Select className="shadow-lg" value={activeOrder} onChange={handleOrderChange}>
          <option value="">Rendezés</option>

          {orders.map(order => <option key={order.title} value={order.id}>{order.title}</option>)}
        </Form.Select>
      }
    </div>
  )
}