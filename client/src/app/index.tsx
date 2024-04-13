import { createGlobalStyle } from 'styled-components';
import { Routing } from '../pages';
import { withQueryClient, withRouter } from './providers';
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: Arial, sans-serif;
		
		html, body, #root {
    height: 100%;
    width: 100%;
  }
  }
`;
const App = () => {
	return (
		<>
			<GlobalStyle />
			<Routing />
		</>
	);
};

export default withQueryClient(withRouter(App));
