import { useDispatch, useSelector } from "react-redux";

import styled from "styled-components";

import { decrement, increment, reset } from "@/global/slices/counterSlice";
import { AppDispatch, RootState } from "@/global/store";

const StyledButtoonsWrapper = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
const StyledButton = styled("button")`
  cursor: pointer;
`;

function App() {
  const dispatch: AppDispatch = useDispatch();
  const count = useSelector((state: RootState) => state.counter.count);
  const onIncrement = () => {
    dispatch(increment());
  };
  const onDecrement = () => {
    dispatch(decrement());
  };
  const onReset = () => {
    dispatch(reset());
  };
  return (
    <div>
      <StyledButtoonsWrapper>
        <StyledButton onClick={onIncrement}>Increment</StyledButton>
        <StyledButton onClick={onDecrement}>Decrement</StyledButton>
        <StyledButton onClick={onReset}>Reset</StyledButton>
        <h1>Result: {count}</h1>
      </StyledButtoonsWrapper>
    </div>
  );
}

export default App;
