import styled from 'styled-components'

declare module "styled-components" {
    export interface DefaultTheme {
        fontSizes: Array<any>
        colors: any
        space: Array<any>   
        lineHeights: Array<any>
        sizes: Array<string>
        radii: any
        shadows: Array<string>
        borders: Array<string>
    }
}
