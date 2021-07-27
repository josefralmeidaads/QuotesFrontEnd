import { CircleOut, CircleInside } from './styles';

const CustomDot = ({ cx, cy, r }: any) => {
    return (
      <>
      <CircleOut cx={cx} cy={cy} r={12} />
      <CircleInside cx={cx} cy={cy} r={4} fill="red"/>
      </>
    );
}

export default CustomDot;