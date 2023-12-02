import styled from "styled-components";

/**
 * The purpose of this component is to provide a click away background
 * for any component that needs it.
 * Every element that uses it should have a z-index higher then 99 !!!
 * AND should be place at the same stack level
 * as the component it is serving as click away handler.
 *
 * @example
 * {isCalendarOpen && (
 *   <>
 *     <ClickAwayBackGroundContainer onClick={clickAwayHandler}> --- this is the click away handler
 *     </ClickAwayBackGroundContainer>
 *     <StyledCalendarWrapper> --- this is the component that needs the click away handler
 *        <Calendar />
 *     </StyledCalendarWrapper>
 *   </>
 *  )}
 *
 * As you can see the two components are at the same stack level. !!!
 *
 */
const ClickAwayBackGroundContainer = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  z-index: 99; // every z-index anywhere used should be higher then 99 !!!
  height: 100vh;
  width: 100vw;
  background: transparent;
`;

export default ClickAwayBackGroundContainer;
