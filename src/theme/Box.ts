import styled from "styled-components"
import {space, SpaceProps, color, ColorProps, layout, LayoutProps, border , BorderProps, shadow , ShadowProps} from 'styled-system'

const Box = styled.article<LayoutProps | ColorProps | BorderProps| ShadowProps| SpaceProps>`
	${layout}
	${space}
    ${color} 
	${shadow }
	${border}
`

export default Box