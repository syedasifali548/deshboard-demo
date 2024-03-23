import * as React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';
import './chart.css'

const data1 = [
  { label: 'Group A', value: 400 },
  { label: 'Group B', value: 300 },
  { label: 'Group C', value: 300 },
  { label: 'Group D', value: 200 },
];

const data2 = [
  { label: 'A1', value: 100 },
  { label: 'A2', value: 300 },
  { label: 'B1', value: 100 },
  { label: 'B2', value: 80 },
  { label: 'B3', value: 40 },
  { label: 'B4', value: 30 },
  { label: 'B5', value: 50 },
  { label: 'C1', value: 100 },
  { label: 'C2', value: 200 },
  { label: 'D1', value: 150 },
  { label: 'D2', value: 50 },
];

const TwoLevelPieChart=()=> {
  return (
    <PieChart
      series={[
        {
          innerRadius: 0,
          outerRadius: 40,
          data: data1,
        },
        {
          innerRadius: 40,
          outerRadius: 60,
          data: data2,
        },
      ]}
      width={180}
      height={120}
      slotProps={{
        legend: { hidden: true },
      }}
    />
  );
}
export default TwoLevelPieChart;