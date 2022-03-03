import styled from "styled-components";
import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup"

const Wrapper = styled.div`
display:flex;
flex-direction: column;
width: 100%;

    form{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        background-color: #f2f2f2;
        padding-top: 10%;
        padding-bottom: 5%;

        input[type=text]{
            margin-left: 5%;
            margin-right: 5%;
            margin-bottom:1%;
            border-radius: 5px;
            border: 1px solid gray;
            outline: 0;
            outline-offset: 0;
            height: 1.3rem;
            background: #ffffff;
        }

        .errorsDiv{
            color: red;
            margin-top: -2%;
            padding: 0;
            margin-left: 5%;
            font-size: 0.8rem;

        }    
        
     
        label{             
              width: 100%;
              display: flex;
              justify-content:space-between;
              align-content:center;
              /* background-color:red; */

             
         .labelText{
           /* align-self:flex-start; 
           padding-top: 1.5%; */
           color: #757575;
           padding-right: 1%;
           font-size: 0.8rem;
           /* background-color: blue; */
           
         }

        svg{
        align-self:flex-start;
           width: 15%;
           color: #96d4ff;
           cursor: pointer;
        
           }

        }

        .subBut{
            /* width: 30%; */
            align-self: flex-end;
            margin-right: 5%;
            background-color:#96d4ff;
            color: #ffffff;
            border: none;
            border-radius: 5px;
            font-size: 0.8rem;
            width: 20%;
            padding-top: 1%;
            padding-bottom: 1%;
        }

    
        .imagePreview{
            width: 100px;
             margin-left:5%;
            img{
                width: 100%;
               
               
            }
        }
    }
`

function Form(props) {
    const [imgURL, setImgURL] = useState(null)
    const { handleSubmit, handleChange, setFieldValue, values, errors } = useFormik({
        initialValues: {
            name: '',
            adress: '',
            telephone: '',
            photo: null
        },
        validationSchema: Yup.object({
            name: Yup.string().max(10, "Name should be shorter than 5 letters").required("Requared"),
            telephone: Yup.string().matches(/[0-9]+/ , 'Is not in correct format')
        }),
        onSubmit: (values, onSubmitProps) =>{
            props.setContact({name: values.name, adress: values.adress, telephone: values.telephone, file: imgURL})
            onSubmitProps.setSubmitting(false)
            onSubmitProps.resetForm()
            setImgURL(null)

        
        }
    })

    return (
        <Wrapper>
        <form onSubmit={handleSubmit}> 
        <input type="text" value={values.name} placeholder=" *Name" onChange={handleChange} name="name"/>
                {errors.name ?
                <div className="errorsDiv">Error, Name should be shorter 10 letters</div>
                :
                null}
        <input type="text" value={values.adress} placeholder=" Adress" onChange={handleChange} name="adress"/>
        <input type="text" value={values.telephone} placeholder=" Telephone" onChange={handleChange} name="telephone" />
                    {errors.telephone ?
                  <div className="errorsDiv">Error, should be only numbers</div>   
                  :
                  null}

                
          
              
               <label for="inp">
                    <div className="imagePreview">
                            {imgURL !== null ?
                            <img src={imgURL} alt=""/>
                            :
                            ''
                            }
                    </div> 

               
                <div style={{"display":"flex", "justifyContent":"flex-end", "alignContent":"center", "paddingRight":"5%"}}>
                <input style={{"display":"none"}} type="file" id="inp" onChange={(event) => {setFieldValue("photo", event.currentTarget.files[0])
                                                                                          setImgURL(URL.createObjectURL(event.currentTarget.files[0]))}}  />
                  <div className="labelText"> Add Avatar </div> 
                  <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="image" class="svg-inline--fa fa-image fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M464 448H48c-26.51 0-48-21.49-48-48V112c0-26.51 21.49-48 48-48h416c26.51 0 48 21.49 48 48v288c0 26.51-21.49 48-48 48zM112 120c-30.928 0-56 25.072-56 56s25.072 56 56 56 56-25.072 56-56-25.072-56-56-56zM64 384h384V272l-87.515-87.515c-4.686-4.686-12.284-4.686-16.971 0L208 320l-55.515-55.515c-4.686-4.686-12.284-4.686-16.971 0L64 336v48z"></path></svg>
                </div> 
               </label>
               


   
        <button className="subBut" type="submit">Submit</button>
        </form>
        </Wrapper>
      );
}

export default Form;