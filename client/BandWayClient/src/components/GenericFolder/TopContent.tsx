import React from 'react';
import { GenericTopBox, GenricTopBoxText, SeparateRowsContainer } from '../../styles/ComponentsStyles';


interface TopContentProps {
    mainText: string;
    subText: string;
}

const TopContent: React.FC<TopContentProps> = ({ mainText, subText }) => {
    return (
        <GenericTopBox>
        <SeparateRowsContainer>
          <GenricTopBoxText variant='h2'>
            {mainText}
          </GenricTopBoxText>
          <GenricTopBoxText variant='h5'>
            {subText}
          </GenricTopBoxText>
        </SeparateRowsContainer>
      </GenericTopBox>
    );
};

export default TopContent;
