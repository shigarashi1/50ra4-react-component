import React from 'react';
import styled from 'styled-components';

import { LoadingSpinner } from '../../atoms';

type Props = {
  isLoading: boolean;
};

export const LoadingGuard: React.FC<Props> = ({ isLoading, children }) => {
  return (
    <>
      {isLoading && (
        <StyledWrapper>
          <LoadingSpinner isAbsolute={true} size={120} />
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
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  line-height: 1.5em;
`;
