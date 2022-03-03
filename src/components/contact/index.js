import React from "react";
import styled from "styled-components";


const ContactCard = styled.div`
display: flex;
flex-direction:column;
background-color:#f2f2f2;
width: 100%;
padding-top: 1%;
/* padding-bottom: 1%; */

/* border: 1px solid black; */

`
const MainInfo = styled.div`
 display: flex;
 flex-direction:column;
 /* align-items:center; */
 justify-content:center;
  img{
    width: 40px;
    height: 40px;
    border-radius:50%;
    margin-bottom:1%;
   
  }
  span{
  
    /* border: 1px solid black; */
    align-self: center;
    padding-bottom: 1%;
  }

    .infoBtn{
            background-color:#96d4ff;
            color: #ffffff;
            border: none;
            font-size: 0.6rem;
            /* align-self: center; */
            margin-right: 5%;
             width: 44px;
            height: 40px;
            border-radius:50%;

            
           
  }

}
`

const MoreInfo = styled.div`
  transition: height 10s;
  width: 100%;
  background-color:#ffffff;
  flex-direction:column;
  box-shadow: 0px 5px 5px -5px rgba(34, 60, 80, 0.6) inset;
   color: #757575;

  span{
    width: 100%;
      padding-bottom: 1%;
      padding-left:5%;
  }




`

class Contact extends React.Component{

  constructor(props){
      super()
          this.state ={
          clicked: false, 
          displSt: false,
          idDiv: null
          }
        this.MoreInfoShow = this.MoreInfoShow.bind(this)
        this.sortedArr = this.sortedArr.bind(this)
  }

    
  MoreInfoShow = (e) => {
   let idName = `div${e.target.id}`
   let onFocusId = document.getElementById(idName) 
   let btn = document.getElementById(e.target.id) 
   console.log(btn)
   if(onFocusId.style.display==="flex"){
     onFocusId.style.display="none"
      btn.style.transform="rotate(360deg)"
   }else if(onFocusId.style.display==="none"){
      onFocusId.style.display="flex"
       btn.style.transform="rotate(180deg)"
   }
  }

     sortedArr = (arg) => arg.sort(function(a, b){
    if(a.name < b.name) { return -1; }
    if(a.name > b.name) { return 1; }
    return 0;
})

render(){


          return(
                <div>
              {this.sortedArr(this.props.contactsArray).map((item, key) => {
                return(
                  <ContactCard>
                  <MainInfo>
                    <div style={{"display":"flex",  "padding-left": "5%", "justifyContent":"space-between"}}>
                      <div style={{"display":"flex", "alignContent":"center", "width":"100%"}}>
                    {item.file === null ?
                   <img src="./assets/22.jpg" alt='' />
                    :
                   <img src={item.file} alt='' />
                    }
                  
                  <span style={{"padding-left": "2%"}}>{item.name}</span>
                  </div>
                   <button className="infoBtn" key={item.key} id={key} onClick={(e)=>this.MoreInfoShow(e)}>
                  &#9660;



                   </button>
                   

                  </div>
                 


                      


                  </MainInfo>

                       <MoreInfo key={item.key} id={`div${key}`} style={{"display":"none"}}>
                  <span>Adress: {item.adress}</span>
                  <span>Telephone: {item.telephone}</span>
                      </MoreInfo>

                

 
                  
                 
                  </ContactCard>
                )
              })}
                </div>
          )




    }
}

export default Contact