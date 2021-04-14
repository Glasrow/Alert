import "./data/exampletemplate"
import Container from "./tag/Boxs"
import styled from "styled-components"
import './App.css';
import {ThemeProvider} from "styled-components"
import theme from './theme'
import GlobaStyle from "./theme/glob"
import Box from './theme/Box'


const Wrapper = styled.div`
	box-sizing: border-box;
	display: flex;
	width: 100vw;
	height: 100vh;
	justify-content: center;
	align-items: center;
`

function App() {
	return (
		<ThemeProvider theme={theme}>
			<GlobaStyle/>
			<Wrapper>
				<Box width={2} height={4} bg={0} borderRadius={2} boxShadow={0} >
					<Container/>
				</Box>
			</Wrapper>
		</ThemeProvider>
	);
}

export default App;
