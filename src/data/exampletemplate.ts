import { values } from 'mobx'
import { Template, AlertType } from'./template'


const templates: Array<Template> = [
    {
        id: 1,
        /*maxLength: 100 */
        name: 'string',
        Text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur veniam nisi soluta. Minus, at veniam deleniti architecto perferendis obcaecati quasi reiciendis soluta facere nostrum blanditiis ullam eveniet consectetur voluptate?',
        sessions_count: 10,
        /*string($date-time)*/
        dt_created: 'string',
      
        message_channel: 1,
        is_archived: false,
        Sender: 'string;',
        message_type: 1,
        isActive: true,
        /**ms */
        leftTime: 45,
        messageCount: 46,
    },
    {
        id: 2,
        /*maxLength: 100 */
        name: 'string',
        Text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur veniam nisi soluta. Minus, at veniam deleniti architecto perferendis obcaecati quasi reiciendis soluta facere nostrum blanditiis ullam eveniet consectetur voluptate?',
        sessions_count: 10,
        /*string($date-time)*/
        dt_created: 'string',
      
        message_channel: 1,
        is_archived: false,
        Sender: 'string;',
        message_type: 1,
        isActive: false,
        /**ms */
        leftTime: 45,
        messageCount: 46,
    },
    {
        id: 6,
        /*maxLength: 100 */
        name: 'string',
        Text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur veniam nisi soluta. Minus, at veniam deleniti architecto perferendis obcaecati quasi reiciendis soluta facere nostrum blanditiis ullam eveniet consectetur voluptate?',
        sessions_count: 10,
        /*string($date-time)*/
        dt_created: 'string',
      
        message_channel: 1,
        is_archived: false,
        Sender: 'string;',
        message_type: 1,
        isActive: false,
        /**ms */
        leftTime: 45,
        messageCount: 46,
    },
    {
        id: 7,
        /*maxLength: 100 */
        name: 'string',
        Text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur veniam nisi soluta. Minus, at veniam deleniti architecto perferendis obcaecati quasi reiciendis soluta facere nostrum blanditiis ullam eveniet consectetur voluptate?',
        sessions_count: 10,
        /*string($date-time)*/
        dt_created: 'string',
      
        message_channel: 1,
        is_archived: false,
        Sender: 'string;',
        message_type: 1,
        isActive: false,
        /**ms */
        leftTime: 45,
        messageCount: 46,
    },
    {
        id: 3,
        /*maxLength: 100 */
        name: 'string',
        Text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur veniam nisi soluta. Minus, at veniam deleniti architecto perferendis obcaecati quasi reiciendis soluta facere nostrum blanditiis ullam eveniet consectetur voluptate?',
        sessions_count: 10,
        /*string($date-time)*/
        dt_created: 'string',
      
        message_channel: 2,
        is_archived: false,
        Sender: 'string;',
        alert_type: AlertType.CMAS_SEVERE,
        isActive: true,
        /**ms */
        leftTime: 45,
        messageCount: 46,
    },
    {
        id: 4,
        /*maxLength: 100 */
        name: 'string',
        Text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur veniam nisi soluta. Minus, at veniam deleniti architecto perferendis obcaecati quasi reiciendis soluta facere nostrum blanditiis ullam eveniet consectetur voluptate?',
        sessions_count: 10,
        /*string($date-time)*/
        dt_created: 'string',
      
        message_channel: 2,
        is_archived: false,
        Sender: 'string;',
        alert_type: AlertType.CMAS_SEVERE,
        isActive: true,
        /**ms */
        leftTime: 45,
        messageCount: 46,
    },
    {
        id: 5,
        /*maxLength: 100 */
        name: 'string',
        Text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur veniam nisi soluta. Minus, at veniam deleniti architecto perferendis obcaecati quasi reiciendis soluta facere nostrum blanditiis ullam eveniet consectetur voluptate?',
        sessions_count: 10,
        /*string($date-time)*/
        dt_created: 'string',
      
        message_channel: 2,
        is_archived: false,
        Sender: 'string;',
        alert_type: AlertType.CMAS_SEVERE,
        isActive: true,
        /**ms */
        leftTime: 45,
        messageCount: 46,
    },
]




let sorttempls : Array<Array<Template>> = [[],[]]
const a: (any) =  templates.reduce((container:any, value) => {
    if (value.message_channel === 1)
        sorttempls[1].push(value)
    else{
        sorttempls[0].push(value)
    }
},[[],[]])

export default sorttempls