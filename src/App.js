import React from 'react';
import styled from 'styled-components';
import { ThemeProvider } from 'styled-components';
import './App.css';

// const themes = {
// 	light: light Theme,
// };

function App() {
	return (
		<Wrapper>
			<Drumkit>
				<Display> Text </Display>
				<KeyContainer>
					<KeyRow>
						<Key>Q</Key>
						<Key>W</Key>
						<Key>E</Key>
					</KeyRow>
					<KeyRow>
						<Key>A</Key>
						<Key>S</Key>
						<Key>D</Key>
					</KeyRow>
					<KeyRow>
						<Key>Z</Key>
						<Key>X</Key>
						<Key>C</Key>
					</KeyRow>
				</KeyContainer>
			</Drumkit>
		</Wrapper>
	);
}

export default App;

const Wrapper = styled.div`
	width: 100vw;
	height: 100vh;
	background-color: lightblue;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const Drumkit = styled.div`
	width: 400px;
	height: 400px;
	background-color: white;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const Display = styled.div`
	background-color: red;
	height: 100px;
	width: 350px;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const KeyContainer = styled.div`
	background-color: green;
	height: 275px;
	width: 350px;
	display: flex;
	flex-direction: column;
`;

const KeyRow = styled.div`
	height: 33%;
	width: 100%;
	display: flex;
	background-color: blue;
`;

const Key = styled.div`
	width: 33%;
	background-color: ghostwhite;

	display: flex;
	align-items: center;
	justify-content: center;
`;
