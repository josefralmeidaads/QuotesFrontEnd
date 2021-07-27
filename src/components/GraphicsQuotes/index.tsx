import React from 'react';
import { Area, AreaChart, CartesianGrid, Tooltip, XAxis, YAxis } from 'recharts';

import theme from '../../styles/theme';
import renderCustomBarLabel from './components/CustomBarLabel';
import CustomDot from './components/CustomDot';
import CustomTooltip from './components/CustomTooltip';
import { Container } from './styles';

interface Graphicprops {
  width: number;
  heigth: number;
}

const GraphicsQuotes: React.FC<Graphicprops> = ({ width, heigth }: Graphicprops) => {
  const data = [
    {
      name: "10:00",
      uv: 4000,
      pv: 2400,
      amt: 2400
    },
    {
      name: "10:30",
      uv: 3000,
      pv: 1398,
      amt: 2210
    },
    {
      name: "11:00",
      uv: 2000,
      pv: 9800,
      amt: 2290
    },
    {
      name: "12:00",
      uv: 2780,
      pv: 3908,
      amt: 2000
    },
    {
      name: "13:00",
      uv: 1890,
      pv: 4800,
      amt: 2181
    },
    {
      name: "14:00",
      uv: 2390,
      pv: 3800,
      amt: 2500
    },
    {
      name: "15:00",
      uv: 3490,
      pv: 4300,
      amt: 2100
    },
    {
      name: "16:00",
      uv: 2000,
      pv: 4300,
      amt: 2100
    },
    {
      name: "16:30",
      uv: 1050,
      pv: 2500,
      amt: 2100
    },
    {
      name: "17:00",
      uv: 800,
      pv: 605,
      amt: 2100
    },
    {
      name: "17:30",
      uv: 2500,
      pv: 4300,
      amt: 2100
    },
    {
      name: "18:00",
      uv: 1259,
      pv: 4300,
      amt: 2100
    },
  ];
  return (
    <Container>
      <AreaChart style={{ paddingTop: 80 }} width={width} height={heigth - 50} data={data}
        margin={{ top: 50, right: 30, left: 0, bottom: 0 }}>
        <defs>
        <linearGradient type="monotone" id="colorUv" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor={theme.colors.primary} stopOpacity={0.8}/> 
        <stop offset="70%" stopColor={theme.colors.primary} stopOpacity={0}/>
        </linearGradient>
        </defs>
        <XAxis dataKey="name" />
        <YAxis tick={renderCustomBarLabel}/>
        <CartesianGrid strokeDasharray="1"/>
        <Tooltip content={CustomTooltip}/>
        <Area 
          type="monotone" 
          activeDot={<CustomDot />}
          dot={{ r: 2, fill: theme.colors.primary }} 
          dataKey="uv" 
          stroke={theme.colors.primary} 
          fillOpacity={1} 
          fill="url(#colorUv)"
        />
      </AreaChart>
    </Container>
  );
}

export default GraphicsQuotes;