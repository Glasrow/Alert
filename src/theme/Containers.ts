import styled from "styled-components"
import {color, ColorProps} from "styled-system"

interface Iconteiner extends ColorProps{}

const Containers = styled.div<Iconteiner>`
	${color}
	margin-top: 5px;
	height: 770px;
	display: grid;
  	grid-template-columns: 1fr ;
`

export default Containers