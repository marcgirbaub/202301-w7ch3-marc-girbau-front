import styled from "styled-components";

const LayoutStyled = styled.div`
  .main-header {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 1rem;

    &__title {
      font-family: monospace;
      font-weight: 800;
      font-size: 50px;
    }
  }

  .nav {
    display: flex;
    justify-content: space-between;
    gap: 2rem;
  }
`;

export default LayoutStyled;
