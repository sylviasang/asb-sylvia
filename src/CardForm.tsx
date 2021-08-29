import React from 'react';
import styled from 'styled-components';
import { Button, IconButton, makeStyles } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import TextField from '@material-ui/core/TextField';

const Container = styled.div`
    display: flex;
    flex-direction: column
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

const Form = styled.div`
    height: calc(100vh - 150px);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const CardForm:React.FC = () => {
  return (
    <Container>
        <NavigationContainer>
            <IconButton name='HamburgerButton' data-testid='HamburgerButton'><MenuIcon fontSize='large'/></IconButton>
            <Header><h1 data-testid='Register'>Register Card Form</h1></Header>
        </NavigationContainer>
        <FormContainer>
            <Form>
                <h2 style={{marginTop: '20px'}}>Welcome {'{'} User.FirstName {'}'}</h2>
                <form>
                    <TextField
                        name='Credit Card Number Input'
                        data-testid='CreditCardNumber'
                        style={{display: 'block', marginBottom: '20px', width: 400}} 
                        required 
                        label="Credit Card Number" 
                        variant="outlined"
                    />
                    <TextField 
                        name='CVC'
                        data-testid='CVC'
                        style={{width: '100px', marginRight: '20px'}}
                        required 
                        label="CVC" 
                        variant="outlined" 
                    />
                    <TextField
                        name='Expire'
                        data-testid='Expire'
                        style={{width: '120px', marginRight: '20px'}}
                        required 
                        label="Expire" 
                        variant="outlined" 
                        /> 
                    <Button
                        name='Submit'
                        data-testid='Submit'
                        variant="contained" 
                        type="submit" 
                        size="large" 
                        style={{display: 'block', marginTop: '20px', width: 200}}>
                        Submit
                    </Button>
                </form>
            </Form>
        </FormContainer>
    </Container>

  );
}

export default CardForm;
