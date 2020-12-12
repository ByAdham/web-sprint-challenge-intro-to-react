import React, {useState} from 'react';
import Character from './Character'
import styled from 'styled-components'

const Characters = (props) => {
    const {variations} = props
    console.log(variations)
    

    return (
        <StyledCharacters>              
            {variations.map(variation => {
                return <Character key={variation.id} variationImage={variation.image} variationName = {variation.name}/>
            })}
        </StyledCharacters>
    );
};


const StyledCharacters = styled.div`
width: 90%;
background-color: #f1f1f1;
display: flex;
flex-flow: row wrap;
justify-content: space-between;
align-items: space-evenly;
`





export default Characters;