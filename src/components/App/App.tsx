import React, {useState} from 'react';
import CardForm from '../CardForm/CardForm';
import Menu from '../Menu/Menu'

const App:React.FC = () => {
    const [toggle, setToggle] = useState<boolean>(true);

    if (toggle) {
        return <CardForm handleClick={()=>setToggle(!toggle)}/>;
      }
      return <Menu handleClick={()=>setToggle(!toggle)}/>;

}

export default App;