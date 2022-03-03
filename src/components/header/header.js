import styled from "styled-components";

const CustHeader = styled.header`
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
background-color:#f2f2f2;
width: 100%;
color: #96d4ff;



h1{
    padding-left: 5%;
    align-self: center;
}

.addBtn{
    width: 10%;
    padding-right: 5%;
  svg{
  /* width: 100%; */
    }
}
`


function Header(props) {
  

    let clickhandler = () =>{
        props.setClick(!props.clicked)  
    }    
    return (
<CustHeader>
    
  <h1>Contact Book </h1>
  <div className="addBtn" onClick={() => {clickhandler()}}>  
  <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="plus-circle" className="svg-inline--fa fa-plus-circle fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm144 276c0 6.6-5.4 12-12 12h-92v92c0 6.6-5.4 12-12 12h-56c-6.6 0-12-5.4-12-12v-92h-92c-6.6 0-12-5.4-12-12v-56c0-6.6 5.4-12 12-12h92v-92c0-6.6 5.4-12 12-12h56c6.6 0 12 5.4 12 12v92h92c6.6 0 12 5.4 12 12v56z"></path></svg>
  </div>




</CustHeader>
      );
}

export default Header;