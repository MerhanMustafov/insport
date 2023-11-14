import styled from "styled-components";

import { useAppDispatch, useAppSelector } from "@/global/reduxHooks";
import { decrement, increment, incrementBy, reset } from "@/global/slices/counterSlice";

const StyledButtoonsWrapper = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
const StyledButton = styled("button")`
  cursor: pointer;
`;

function Counter() {
  const dispatch = useAppDispatch();
  const count = useAppSelector((state) => state.counter.count);

  const onIncrement = () => {
    dispatch(increment());
  };
  const onDecrement = () => {
    dispatch(decrement());
  };
  const onReset = () => {
    dispatch(reset());
  };

  const onIncrementBy5 = () => {
    dispatch(incrementBy({ amount: 5 }));
  };

  const onIncrementBy10 = () => {
    dispatch(incrementBy({ amount: 10 }));
  };

  return (
    <div>
      <StyledButtoonsWrapper>
        <StyledButton onClick={onIncrement}>Increment</StyledButton>
        <StyledButton onClick={onIncrementBy5}>Increment By 5</StyledButton>
        <StyledButton onClick={onIncrementBy10}>Increment By 10</StyledButton>
        <StyledButton onClick={onDecrement}>Decrement</StyledButton>
        <StyledButton onClick={onReset}>Reset</StyledButton>
        <h1>Result: {count}</h1>
      </StyledButtoonsWrapper>
    </div>
  );
}

export default Counter;
