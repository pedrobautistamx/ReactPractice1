import Labels from 'Assets/Labels'
import React from 'react'
import { Row, Col, Button } from 'react-bootstrap'
import TextInput from "Components/common/TextInput"
import SelectInput from "Components/common/SelectInput"
import DatePickerInput from "Components/common/DatePickerInput"







const PopUpDataClient = (props) => {
    
    let variable1=[{id: 1, valor: "var1"}, {id: 2, valor: "var2"}]
    return (

        
        
        
        
        
	<div>
        <Row>
        <Row className="mb12">
         <Col xs={12}>
            <SelectInput label={'SelectInput'}
                         
								name={'nombreInput'}
								options={variable1}
								required
								error={props.validate || false} />     </Col>
            
            
            <Col xs={12}>
            <DatePickerInput                     />
        </Col>
            </Row>
        
        
            </Row>
           
        
        
        
        
        
		
	</div>
)
}
export default PopUpDataClient

