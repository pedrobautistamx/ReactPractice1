import * as Utils from 'Assets/Utils'

import Labels from 'Assets/Labels'

import React, { Component } from 'react'
import {closeModal, createModal} from 'Modules/Modal'

import PopUpDataClient from 'Components/callClient/PopUpDataClient'

import { getDataClient, clearDataClient } from "Modules/DataClient"


import Contenedor from 'Components/callClient/Contenedor'
import { connect } from 'react-redux'

class Container extends Component {

	onSubmit() {
		event.preventDefault()

	}

	constructor(props) {
		super(props)

		this.state = {
			prueba: "uno"
		}

		this.onSubmit = this.onSubmit.bind(this)
	}

	componentWillMount() {
		this.props.clearDataClient()
		this.props.getDataClient({campaniaId: 10}).then( response => {

			let data = response.Cliente
			let modalObj = {
				body: <Contenedor
					data={data}
				/>,
				closeButton: true,
				className: 'custom-middle-modal',
				footer: [{
					txt: "Cancelar",
					type: "default",
					onClick: () => {this.props.closeModal()}
				},
				{
					txt: "Continuar",
					type: 'primary',
					onClick: ()=> {this.onSubmit()}
				}]
			}

			this.setState({form: {
				Folio: '',
				NombreCliente : data.nombre,
				ApellidoCliente : data.apellidoPaterno + " " + data.apellidoMaterno,
				TelefonoDeContacto : data.Contacto ? data.Contacto.ListaTelefonos.Telefono.codigoArea + data.Contacto.ListaTelefonos.Telefono.numeroTelefonico : '',
				FechaInicioProspeccion : new Date(),
				Etapa : '',
				Estatus : '',
				ClienteId : data.idCliente
			}}, () => this.props.createModal(modalObj) )
		})
	}

	render() {
		return(
			<div className="container">
				<h1>Home</h1>
			</div>
		)
	}

componentDidMount(){
    
console.log("component did mount");
    
    
}


componentWillUnmount(){
    
    
    
}


}

const mapStateToProps = (state) => {
	return {
		dataClient: state.DataClient.get('Get').toJS()
	}
}

const mapDispatchToProps = (dispatch) => {
	return {

		clearDataClient: () => dispatch(clearDataClient()),
		getDataClient: (form) => dispatch(getDataClient(form)),

		closeModal: (modalObj) => {dispatch(closeModal(modalObj))},
		createModal: (modalObj) => {dispatch(createModal(modalObj))}
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(Container)
