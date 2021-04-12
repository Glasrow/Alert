import React from 'react';
import styled from "styled-components";
import sorttempls from "../data/exampletemplate"
import { system } from 'styled-system'
import {Property} from "csstype"
import { Template } from'../data/template'
import TemplateElement from '../tag/Templit'
import Containers from '../theme/Containers'


const display = system({
	display: true
})

interface Ichanal{
	display: Property.Display
}

const Chanel = styled.article<Ichanal>`
	margin-top : 30px;
	margin-left: 20px;
	width: 400px;
	overflow-y: auto;
	${display}
`

const Titl = styled.h3`
	margin-left: 15px;
	margin-bottom:10px;
	font-size: 24px;
	line-height: 30px;
	color: #252C3A;
	display: inline;
`
const Box = styled.div`
	margin-top: 5px;
	height: 770px;
	display: grid;
  	grid-template-columns: 1fr ;
`

const Total = styled.span`
	padding-top: 10px;
	float: right;
	position: static;
	font-size: 12px;
	line-height: 16px;
	color: #8A8E97;
`

const isfull = (val:any, val1:Array<Template>) =>  {
	if (val===1 || val===2 && val1.length != 0 ){
		return "block"
	}
	else {
		return "none"
	}
	 
}

function Container (){
	return(
		<Containers bg={'0'}>
			<Chanel display={isfull(1, sorttempls[0])}>
				<Titl>Alerts</Titl>
				{
					sorttempls[0].map(templ =>{
						return <TemplateElement {...templ }/>
					} )
				}
			</Chanel>
			<Chanel display={isfull(2, sorttempls[1])}>	
				<Titl>SMS</Titl>
				<Total>total: {sorttempls[1].reduce((x: any, y) =>{
					x= x + y.messageCount
					return x
				}, 0 )}</Total>
				{
					sorttempls[1].map(templ =>{
						return <TemplateElement {...templ } key={templ.id}/>
					} )
				}
			</Chanel>
		</Containers>
	)
}

   
export default Container

