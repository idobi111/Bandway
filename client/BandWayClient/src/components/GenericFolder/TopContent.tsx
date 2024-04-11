import React from 'react';
import { GenericTopBox, GenricTopBoxText } from '../../styles/ComponentsStyles';


interface TopContentProps {
    text: string;
}

const TopContent: React.FC<TopContentProps> = ({ text }) => {
    return (
        <GenericTopBox>
            <GenricTopBoxText variant='h3'>
                {text}
            </GenricTopBoxText>
        </GenericTopBox>
    );
};

export default TopContent;
