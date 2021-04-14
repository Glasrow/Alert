import React , {Component}from 'react';
import { Template, isSMS,  isNil, AlertType, getAlertType,getMessageType} from'../data/template'
import Box from '../theme/Box'
import GridBox from '../theme/GridBox'
import TextBox from '../theme/TextBox';
import Icon from '../Icon'
import IconA from '../IconA'
import FlexBox from '../theme/FlexBox'

const need = (chanal:any) =>{
    if (chanal == 1) {
        return true
    }
    else{
        return false
    }
        
}

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

/*имя, тип,  внутренний тип, отправитель количестов (для смс), время транслирования(alert) */
function TemplateElement({name, message_channel, message_type, alert_type, Sender, messageCount, leftTime, Text, isActive}:Template){
    return (

         <Box mt={3} borderRadius={3}  border={1} borderColor={'2'} > 
            <GridBox ml={5} display='grid' gridTemplateColumns={'38px 1fr 50px'} gridAutoRows={'53px'}>
                <FlexBox display='flex' justifyContent='center' alignItems='center' mt={4} size={0} borderRadius={3} border={1} borderColor={'2'}>
                    {isSMS(message_channel) && <Icon color={isActive && 6 || 4} />}
                    {!isSMS(message_channel) && <IconA color={isActive && 5 || 4} />}
                </FlexBox>
                <GridBox padding={0} mt={5} ml={4} height={0} gridTemplateRows={'22px 19px'}>
                    <TextBox m={0} fontSize={2} lineHeight={2} color={'3'}>{name}</TextBox>
                    <div>
                        <TextBox display={'inline'} fontSize={1} lineHeight={1} color={'4'}>{isSMS(message_channel) && "SMS" ||"ALERT"}</TextBox>
                        &nbsp;
                        <TextBox display={'inline'} fontSize={1} lineHeight={1} color={isSMS(message_channel)&& '6' ||'5'} bg={isSMS(message_channel)&& 8 || 7}>{isSMS(message_channel) && message_type && getMessageType(message_type) || alert_type && getAlertType(alert_type)}</TextBox>
                        &nbsp;
                        {isSMS(message_channel) && <TextBox fontSize={1} lineHeight={1} color={'4'} display='inline'>{Sender}</TextBox>}
                    </div>
                </GridBox>
                <TextBox display={'inline'} fontSize={1} lineHeight={1} color={'4'}>
                    {isSMS(message_channel) && <Icon color={4} />}
                    {!isSMS(message_channel) && <IconA color={4} />}
                    &nbsp;
                    {isSMS(message_channel)&& messageCount || leftTime}
                </TextBox>
            </GridBox>
            <TextBox ml={5} fontSize={1} lineHeight={0} color={'4'} lineclamp={2}>{Text}</TextBox>
         </Box> 
    )
}
export default TemplateElement