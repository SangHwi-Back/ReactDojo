'use client';

import {PieChart, Pie, Cell, ResponsiveContainer} from 'recharts';
import {categoryInfo} from "@/app/(store)/categoryInfo";

const COLORS = [
  '#0088FE', '#00C49F',
  '#FFBB28', '#FF8042',
  '#FF4560', '#775DD0',
  '#283593', '#FF0000'
];

export default function Page() {
  return <ResponsiveContainer width="100%" height="100%">
    <PieChart>
      <Pie
        data={categoryInfo}
        dataKey="value"
        nameKey="name"
        cx="50%"
        cy="50%"
        outerRadius={100}
      >
        {categoryInfo.map((entry, index) => (
          <Cell key={`cell-${entry.category}`} fill={COLORS[index]}/>
        ))}
      </Pie>
    </PieChart>
  </ResponsiveContainer>
}
