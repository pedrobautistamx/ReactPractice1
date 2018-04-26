import Labels from 'Assets/Labels'
import React from 'react'
import { Row, Col, Button } from 'react-bootstrap'
import TextInput from "Components/common/TextInput"
import SelectInput from "Components/common/SelectInput"
import DateTimePickerInput from "Components/common/DateTimePickerInput"
import TextareaInput from "Components/common/TextareaInput"










const PopUpDataClient = (props) => {
    
    let variable1=[{id: 1, valor: "var1"}, {id: 2, valor: "var2"}]


console.log(props)
console.log(props.names.nameInput)
    return (

        
        
        
        
        
	<div>
        
        
        
<Row className="mb12">
<Col xs={12}>
<fieldset>
<legend style={{display: 'block',float: 'left'}}>{"My First Component"}</legend>
</fieldset>
</Col>
</Row>
<Row className="mb12">
<Col xs={12}>
<form name="formCriterios" id="formCriterios" >
<Row>
<Col sm={12} md={4}>
<SelectInput
               label={"Selecciona"}
name={'nameSelect'}
options={variable1}
             value={props.names.form.nameSelect}
               required
error={props.validate || false} />
</Col>
    
    
<Col sm={12} md={4}>
<TextInput
label={"TextInput"}
placeholder={"textinput"}
name={'nameInput'}
value={props.names.form.nameInput}
onChange= {props.handleText}           
required
maxLength={100}
error={props.validate || false} />
</Col>
    
    
    
<Col sm={12} md={4}>
<DateTimePickerInput
 />
</Col>
<Col sm={12} md={12}>
<TextareaInput
label={"TextAre"}
placeholder={"textarea"}
name={'nameTextA'}
value={props.names.form.nameTextA}/>
               </Col>
</Row>
</form>
</Col>
</Row>
          
        
        
      
           
        
        
        
        
      
		
	</div>
)
}
export default PopUpDataClient

