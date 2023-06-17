import React from 'react';
import styled from 'styled-components/macro';

import SHOES from '../../data';
import ShoeCard from '../ShoeCard';

const ShoeGrid = () => {
  return (
    <Wrapper>
        {SHOES.map((shoe) => (
           <ShoeWrapper key={shoe.slug}>
              <ShoeCard  {...shoe} />
            </ShoeWrapper>
        ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap:32px;
`;

const ShoeWrapper = styled.div`
  flex-grow: 1;
  flex-basis: 275px;
  max-width: 450px;

`;

export default ShoeGrid;