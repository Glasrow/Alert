import styled from "styled-components"
import {color, ColorProps, layout, LayoutProps, space, SpaceProps, system, typography, TypographyProps } from "styled-system"

interface ITexTBox extends  ColorProps,
                            LayoutProps,
                            SpaceProps,
                            TypographyProps{
    lineclamp?: number
}

const TextBox = styled.p< ITexTBox>`
    ${space}
    ${typography}
    ${color}
    ${layout}
    ${(props) => props.lineclamp && `    display: -webkit-box;
    -webkit-line-clamp: ${ props.lineclamp};
    -webkit-box-orient: vertical;  
    overflow: hidden;`}
`

export default TextBox