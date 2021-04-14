import styled from "styled-components"
import {border, BorderProps, flexbox, FlexboxProps, layout, LayoutProps, space, SpaceProps} from "styled-system"

const FlexBox = styled.div<BorderProps|SpaceProps|LayoutProps|FlexboxProps>`
    ${space}
    ${layout}
    ${flexbox}
    ${border}
`
export default FlexBox
