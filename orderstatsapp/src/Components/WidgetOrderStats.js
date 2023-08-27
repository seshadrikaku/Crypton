import React from 'react';
import OrderStat from './OrdersStat';
import data from '../data.json';

const WidgetOrderStats = () => {
  return (
    <>
  
      <div className="widget-order-stats">
        {data.map((stat, index) => (
          <OrderStat
            key={index}
            title={stat.title}
            percentage={stat.percentage}
            amount={stat.amount}
            value={stat.value}
          />
        ))}
      </div>
    </>
  );
};

export default WidgetOrderStats;
