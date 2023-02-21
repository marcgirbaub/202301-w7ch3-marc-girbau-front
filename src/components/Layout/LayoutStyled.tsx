import styled from "styled-components";

const LayoutStyled = styled.div`
  .main-header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    &__title {
      font-family: monospace;
      font-weight: 800;
      font-size: 50px;
      padding: 0 10px;
    }
  }
`;

export default LayoutStyled;
