import React from 'react';
import {GenericTopBox, GenricTopBoxText, HeaderBox, SeparateRowsContainer} from '../../styles/ComponentsStyles';
import Header from './Header';


interface TopContentProps {
    mainText: string;
    subText: string;
}

const TopContent: React.FC<TopContentProps> = ({mainText, subText}) => {
    return (
        <>
            <HeaderBox>
                <Header/>
                <GenericTopBox>
                    <SeparateRowsContainer>
                        <GenricTopBoxText variant='h2' textAlign="center">
                            {mainText}
                        </GenricTopBoxText>
                        <GenricTopBoxText variant='h5' textAlign="center">
                            {subText}
                        </GenricTopBoxText>
                    </SeparateRowsContainer>
                </GenericTopBox>
            </HeaderBox>

        </>
    );
};

export default TopContent;
