import React from 'react';
import "./data/exampletemplate"
import Container from "./tag/Box"
import styled from "styled-components"
import './App.css';
import {ThemeProvider} from "styled-components"
import theme from './theme'
import GlobaStyle from "./theme/glob"
import Tolbar from './theme/Tolbar'


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
					<Tolbar >
						<Container/>
					</Tolbar>
			</Wrapper>
		</ThemeProvider>
	);
}

export default App;
