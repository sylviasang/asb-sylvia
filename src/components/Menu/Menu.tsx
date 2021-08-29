import React from 'react';
import styled from 'styled-components';
import { IconButton } from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

const Container = styled.div`
    display: flex;
    flex-direction: column;
`;

const NavigationContainer = styled.div`
    display: flex;
    flex-direction: row;
    border-bottom: 1px solid #000000;
`;

const Header = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`;

const FormContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-left: 180px;
`;

interface MenuProps { 
  handleClick: any
};

const Menu:React.FC<MenuProps> = (props) => {
  return (
    <Container>
      <NavigationContainer>
          <IconButton name='ArrowBackBotton' data-testid='ArrowBack' onClick={() => props.handleClick()}><ArrowBackIcon fontSize='large'/></IconButton>
          <Header><h1 data-testid='Menu'>Menu</h1></Header>
      </NavigationContainer>
      <FormContainer>
        <h2 style={{marginTop: '20px'}}>This is menu content</h2>
      </FormContainer>
    </Container>
  );
}

export default Menu;
