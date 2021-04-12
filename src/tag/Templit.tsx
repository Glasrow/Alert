import React , {Component}from 'react';
import styled from "styled-components";
import {color} from 'styled-system'
import sorttempls from "../data/exampletemplate"
import { system } from 'styled-system'
import {Property} from "csstype"
import { Template, isSMS,  isNil, AlertType} from'../data/template'



const Bigbox = styled.article`
    margin-top: 10px;
	mix-blend-mode: normal;
	border: 1px solid #EAEFF3;
	border-radius: 10px;
`

const Boxs = styled.div`
    margin-left: 15px;
    display: grid;
    grid-template-columns: 38px 1fr 50px;
    grid-auto-rows: 53px;
`
const Icon = styled.button`
    margin-top:15px;
    width: 38px;
    height: 38px;
    border-radius: 6px;
    border: 2px;
`

const BoxName = styled.div`
    padding: 0;
    margin-top:15px;
    margin-left: 12px;
    height: 38px;
    grid-template-rows: 22px 19px;
`

const Name = styled.span`
    margin:0;
    font-size: 14px;
    line-height: 22px;
    color: #252C3A;
`

const Typeresult = styled.div`
    margin: 0;
    vertical-align:top;
`

const Specific =styled.span`
    margin-top: 15px;
    font-size: 12px;
    font-size: 12px;
    line-height: 16px;
    color: #8A8E97;
`
const display = system({
	display: true
})

interface Ichanal{
	display: Property.Display
}

const Num = styled.samp<Ichanal>`
    font-size: 12px;
    line-height: 22px;
    color: #8A8E97;
    ${display}
`
const need = (chanal:any) =>{
    if (chanal == 1) {
        return true
    }
    else{
        return false
    }
        
}

const Textsr = styled.p`
    margin-left: 15px;
    font-size: 12px;
    line-height: 16px;
    color: #8A8E97;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;  
    overflow: hidden;
`
const isRegular =  (chanel ?: any, alter ?:any, tim ?:any, cou?:any, isA ?:any) => {if (isSMS(chanel) === true) { 
    const a = 'Envelope'+icon_color(isA)+'.svg'
    return ['Regular', 'sms', [a, cou]]
} else {
    const b = 'Provider'+icon_color(isA)+'.svg'
    return ['Alter', AlertType[alter], [b ,tim]]
}}

const icon_color = (Activ:any) =>{
    if (Activ === true){
        return 'Green'
    } 
    else{
        return 'Grey'
    }
}

const Text1 = styled.span`
    font-size: 14px;
    line-height: 22px;
    color: #8A8E97;
`

const Text2 = styled.span`
    font-size: 12px;
    line-height: 19px;
    color: #F64B1D;
    border-radius: 4px;
    background-color: rgba(246, 75, 29, 0.2); /*, #69C405; ; */
`
const Smolicon = styled.object`
    display:inline;
`


/*имя, тип,  внутренний тип, отправитель количестов (для смс), время транслирования(alert) */
function TemplateElement({name, message_channel, message_type, alert_type, Sender, messageCount, leftTime, Text, isActive}:Template){
    return (
        <Bigbox>
            <Boxs>
                <Icon>
                    <object type='image/svg+xml' data={isRegular(message_channel, alert_type, leftTime, messageCount, isActive)[2][0]}></object>
                </Icon>
                <BoxName>
                    <Name>{name}</Name>
                    <Typeresult>
                        <Text1>{isRegular(message_channel, alert_type, leftTime, messageCount)[0]}</Text1>
                        &nbsp;
                        <Text2>{isRegular(message_channel, alert_type, leftTime, messageCount)[1]}</Text2>
                        &nbsp;
                        <Num display={need(message_channel) ? 'inline-block': 'none'} >{Sender}</Num>
                    </Typeresult>
                </BoxName>
                <Specific>
                    <Smolicon type='image/svg+xml' data = {isRegular(message_channel, alert_type, leftTime, messageCount, isActive)[2][0]}/>
                    &nbsp;
                    {isRegular(message_channel, alert_type, leftTime, messageCount)[2][1]}
                    </Specific>
            </Boxs>
            <Textsr>{Text}</Textsr>
        </Bigbox>
    )
}
export default TemplateElement