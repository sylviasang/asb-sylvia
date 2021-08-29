import React, {useState} from 'react';
import CardForm from './CardForm';

const App:React.FC = () => {
    const [toggle, setToggle] = useState<boolean>(true);
    return <CardForm />;
}

export default App;