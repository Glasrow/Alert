import "styled-components" 
import styled from 'styled-components'

declare module "styled-components" {
    export interface DefaultTheme {
        fontSizes: Array<any>
        colors: any
        space: Array<any>   
        lineHeight: Array<any>
        sizes: Array<string>
        borderRadius: any
    }
}
