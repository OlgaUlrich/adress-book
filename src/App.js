import Listing from './components/listing';
import React, {useState} from 'react';
import Form from './components/input/form';
import Header from './components/header/header';
import styled from 'styled-components';


const Wrapper = styled.div`
box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
width: 40%;
margin: auto;

`

function App() {

const [inputContact, setContact] = useState([])
  const [clicked, setClick] = useState(false)

    




  return (
    
clicked === true ?
<>
<Wrapper>
<Header clicked={clicked} setClick={setClick}/>
<Form setContact={setContact}/>
<Listing inputContact={inputContact} />
</Wrapper>
</>

:

<>
<Wrapper>
<Header clicked={clicked} setClick={setClick}/>
<Listing inputContact={inputContact} />
</Wrapper>
</>
  
  )
   
  
}

export default App;
