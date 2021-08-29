import React, {useState} from 'react';
import styled from 'styled-components';
import { Button, IconButton, makeStyles } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import TextField from '@material-ui/core/TextField';

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

const Form = styled.div`
    height: calc(100vh - 150px);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

interface CardFormProps {
    handleClick: any
};

const CardForm:React.FC<CardFormProps> = (props) => {

  const [creditCardNo, setCreditCardNo] = useState<number>();
  const [cvc, setCvc] = useState<number>();
  const [expire, setExpire] = useState<Date>();
  const [creditCardError, setCreditCardError] = useState<boolean>(false);
  const [creditCardErrorInfo, setCreditCardErrorInfo] = useState<string>('');
  const [cvcError, setCvcError] = useState<boolean>(false);
  const [cvcErrorInfo, setCvcErrorInfo] = useState<string>('');
  const [expireError, setExpireError] = useState<boolean>(false);
  const [expireErrorInfo, setExpireErrorInfo] = useState<string>('');

  const handleCreditCardChange = (event: any) => {
    const creditCard = event.target.value;
    setCreditCardNo(creditCard);
    if (creditCard && !Number(creditCard)) {
        setCreditCardError(true);
        setCreditCardErrorInfo('This field should be a number');
    } else {
        setCreditCardError(false)
        setCreditCardErrorInfo('');
    }
  }

  const handleCvcChange = (event: any) => {
    const cvc = event.target.value;
    setCvc(cvc);
    if (cvc && !Number(cvc)) {
        setCvcError(true);
        setCvcErrorInfo('This field should be a number');
    } else {
        setCvcError(false);
        setCvcErrorInfo('');
    }
  }
  const handleExpireChange = (event: any) => {
    const expire = event.target.value;
    const regx = /^(\d{4})-(\d{2})-(\d{2})$/
    setExpire(expire);
    if (expire && !regx.test(expire)) {
        setExpireError(true);
        setExpireErrorInfo('This field should be a valid date e.g. 2021-08-29');
    } else {
        setExpireError(false)
        setExpireErrorInfo('');
    }
  }
  const handleSubmit = (event:any) => {
    event.preventDefault();

    if (creditCardError || cvcError || expireError ){
        alert('please correct the input fields')
        return
    }
    console.log(
        'credit card number: ', {creditCardNo},
        'cvc: ', {cvc},
        'expire', {expire},
    )
  }

  return (
    <Container>
        <NavigationContainer>
            <IconButton name='HamburgerButton' data-testid='HamburgerButton' onClick={() => props.handleClick()}><MenuIcon fontSize='large'/></IconButton>
            <Header><h1 data-testid='Register'>Register Card Form</h1></Header>
        </NavigationContainer>
        <FormContainer>
            <Form>
                <h2 style={{marginTop: '20px'}}>Welcome {'{'} User.FirstName {'}'}</h2>
                <form onSubmit={handleSubmit}>
                    <TextField
                        name='Credit Card Number Input'
                        data-testid='CreditCardNumber'
                        style={{display: 'block', marginBottom: '20px', width: 400}} 
                        required 
                        label="Credit Card Number" 
                        variant="outlined" 
                        value={creditCardNo} 
                        onChange={handleCreditCardChange}
                        error={creditCardError}
                        helperText={creditCardErrorInfo}
                    />
                    <TextField 
                        name='CVC'
                        data-testid='CVC'
                        style={{width: '100px', marginRight: '20px'}}
                        required 
                        label="CVC" 
                        variant="outlined" 
                        value={cvc} 
                        onChange={handleCvcChange}
                        error={cvcError}
                        helperText={cvcErrorInfo}                
                        
                    />
                    <TextField
                        name='Expire'
                        data-testid='Expire'
                        style={{width: '120px', marginRight: '20px'}}
                        required 
                        label="Expire" 
                        variant="outlined" 
                        value={expire} 
                        onChange={handleExpireChange}
                        error={expireError}
                        helperText={expireErrorInfo}   
                        
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
