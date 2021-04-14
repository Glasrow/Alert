import styled from "styled-components"
import {border, BorderProps, color, ColorProps, grid, GridProps, layout, LayoutProps, space, SpaceProps} from "styled-system"

const GridBox = styled.div<ColorProps| GridProps | LayoutProps |SpaceProps| BorderProps>`
	${color};
	${grid};
	${layout};
	${space};
	${border}
`

export default GridBox