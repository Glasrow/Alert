export enum MessageChannel {
  SMS = 1,
  ALERT = 2,
}

export enum MessageType {
  NORMAL = 1,
  FLASH = 2,
}

export function getMessageType(type: MessageType) {
  switch(type) {
    case MessageType.FLASH:
      return "Flash";
    case MessageType.NORMAL:
      return "Normal"
  }
}

export function isNil(val: any): val is null | undefined | void {
  return val == null
}

export function isSMS(channel: MessageChannel| undefined){
  return channel === MessageChannel.SMS
}

export function getAlertType(type: AlertType) {
  switch(type) {
    case AlertType.CMAS_EXTREME:
      return "CMAS_EXTREME";
    case AlertType.CMAS_SEVERE:
      return "CMAS_SEVERE"  
    case AlertType.ETWS_TSUNAMI:
      return "ETWS_TSUNAMI";
    case AlertType.ETWS_EARTHQUAKE:
      return "ETWS_EARTHQUAKE" 
    case AlertType.ETWS_OTHER:
       return "ETWS_OTHER";
 
  }
}

export enum AlertType {
  CMAS_EXTREME,
  CMAS_SEVERE,
  ETWS_TSUNAMI,
  ETWS_EARTHQUAKE,
  ETWS_OTHER,
}

export interface User {
  username: string;
  full_name?: string;
}

export interface Template {
  id: number;
  /*maxLength: 100 */
  name: string;
  Text: string;
  sessions_count: number;
  /*string($date-time)*/
  dt_created: string;

  message_channel?: MessageChannel;
  is_archived?: boolean;
  Sender?: string;
  message_type?: MessageType;
  alert_type?: AlertType;
  /*string($date-time)*/
  dt_last_session?: string;
  /*string($date-time)*/
  dt_last_edit?: string;
  isActive?: boolean
  /**ms */
  leftTime?: number
  messageCount?: number
}