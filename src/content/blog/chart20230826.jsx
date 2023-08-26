import React from 'react'

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts'

const data = [
  {
    name: 'English',
    TotalSpeakers: 1456000000,
  },
  {
    name: 'Mandarin Chinese',
    TotalSpeakers: 1138000000,
  },
  {
    name: 'Hindi',
    TotalSpeakers: 609500000,
  },
  {
    name: 'Spanish',
    TotalSpeakers: 559100000,
  },
  {
    name: 'French',
    TotalSpeakers: 309800000,
  },
  {
    name: 'Standard Arabic',
    TotalSpeakers: 274000000,
  },
  {
    name: 'Bengali',
    TotalSpeakers: 272800000,
  },
  {
    name: 'Portuguese',
    TotalSpeakers: 263600000,
  },
  {
    name: 'Russian',
    TotalSpeakers: 255000000,
  },
  {
    name: 'Urdu',
    TotalSpeakers: 231700000,
  },
]

export default () => (
  <div style={{ width: '100%', height: '600px' }}>
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        width={650}
        height={600}
        layout="vertical"
        data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis type="number"/>
        <YAxis width={100} dataKey="name" type="category" />
        <Tooltip />
        <Legend />
        <Bar dataKey="TotalSpeakers" fill="hsl(136,78%,22%)" barSize={30} />
      </BarChart>
    </ResponsiveContainer>
  </div>
)