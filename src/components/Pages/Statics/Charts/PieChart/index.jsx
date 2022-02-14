import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { PieChart, Pie, Cell } from 'recharts';

const CircleChart = ({ data, colors, settings }) => {
  const {
    width,
    heigth,
    cx,
    cy,
    innerRadius,
    outerRadius,
    fill,
    paddingAngle,
    dataKey,
    cornerRadius,
    startAngle,
    endAngle,
  } = settings;

  return (
    <PieChart width={width} height={heigth}>
      <defs>
        {data.map((entry, index) => (
          <linearGradient id={`linearGradient${index}`} key={uuidv4()}>
            <stop offset="0%" stopColor={colors[index % colors.length].start} />
            <stop offset="100%" stopColor={colors[index % colors.length].end} />
          </linearGradient>
        ))}
      </defs>

      <Pie
        data={data}
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        fill={fill}
        paddingAngle={paddingAngle}
        dataKey={dataKey}
        cornerRadius={cornerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        isAnimationActive
      >
        {data.map((entry, index) => (
          <Cell
            key={uuidv4()}
            fill={`url(#linearGradient${index})`}
            radius={[25, 25, 25, 25]}
          />
        ))}
      </Pie>
    </PieChart>
  );
};

export default CircleChart;
