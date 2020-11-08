import React from 'react';
import styled from 'styled-components';

import { CircularProgress } from '@material-ui/core';

type TProps = {
  isLoading: boolean;
};

export const LoadingSpiner: React.FC<TProps> = ({ isLoading, children }) => {
  return (
    <>
      {isLoading && (
        <StyledWrapper>
          <StyledCircularProgress />
        </StyledWrapper>
      )}
      {children}
    </>
  );
};

const StyledWrapper = styled.div`
  z-index: 9999;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  min-width: 100vw;
  background-color: rgba(38, 38, 39, 0.5);
  line-height: 1.5em;
  .progress {
    position: absolute;
  }
`;

const StyledCircularProgress = styled(CircularProgress)`
  position: absolute;
`;
