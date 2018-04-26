import * as Utils from 'Assets/Utils'

import Labels from 'Assets/Labels'

import React, { Component } from 'react'
import {closeModal, createModal} from 'Modules/Modal'

import PopUpDataClient from 'Components/callClient/PopUpDataClient'


import Contenedor from 'Components/callClient/Contenedor'

import { getDataClient, clearDataClient } from "Modules/DataClient"

import { connect } from 'react-redux'

import { getContenedor, clearContenedor  } from "Modules/NewModul"

class CallContainer extends Component {

	onSubmit() {
		event.preventDefault()

	}
     handleText (event) {
        
        event.preventDefault()
        this.setState(
        {form:{...this.state.form, [event.target.name]: event.target.value}},
            () => {this.props.getDataClient({})}
        )
        
    }
    

	constructor(props) {
		super(props)

		this.state = {
            
            form:{
            prueba: "uno",
            nameSelect: 1,
            nameInput: "input1",
            nameDate: "date1",
            nameTextA: "TextA"}
            
					}

		this.onSubmit = this.onSubmit.bind(this)
        this.handleText=this.handleText.bind(this)
	}
    
    
   

	componentWillMount() {
		
	}

	render() {
		return(
			<div className="container">
				<Contenedor names={this.state} handleText={this.handleText}></Contenedor>
            
			</div>
		)
	}

componentDidMount(){
    
console.log("component did mount");
    
    
}


componentWillUnmount(){
    
    
    componentWillReceiveProps(nextprops)
    
{
    
    
    console.log(nextprops.data.form)
}
    
}


}

const mapStateToProps = (state) => {
    
    console.log("Servicio", state.NewModul.get("Get").toJS())
	return {
 data: state.NewModul.get('Get').toJS()
        
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
        clearDataClient: () => dispatch(clearContenedor), 
        getDataClient: ()=> dispatch(getContenedor()),



	}
};

export default connect(mapStateToProps, mapDispatchToProps)(CallContainer)
