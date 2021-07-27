const renderCustomBarLabel = ({ payload, y, }: any ) => {
  return <text x={10} y={y + 5} fill="#666">{`$${payload.value}`}</text>;
};

export default renderCustomBarLabel;