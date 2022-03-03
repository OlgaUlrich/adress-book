import React from "react";
import Contact from "../contact";

class Listing extends React.Component{
    constructor(props){
        super()
        this.state={
             contacts: [
            {
            name: "Propusion Academy",
            adress: "Heinrichstrasse 200 Zürich",
            telephone: "+41 044 585 18 14",
            file: null 
            },
                {
            name: "Olga Ulrich",
            adress: "Emil Platz Zürich",
            telephone: "+41 222 535 18 14",
            file: null 
            },
                    {
            name: "Dan Abramov",
            adress: "USA",
            telephone: "+1 222 535 55 18",
            file: null 
            }
            
        ]
        }
        
    }


    componentDidUpdate(prevProps) {
      if(this.props.inputContact !== prevProps.inputContact){ 
         this.setState({ contacts:  [...this.state.contacts, this.props.inputContact]});
      }
   }


   
render(){
return(

 <div className="listing">
    
            <Contact contactsArray={this.state.contacts} />         
        
 </div>

        )



 }

}

export default Listing