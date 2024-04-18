import { Routing } from '@/pages';
import { createGlobalStyle } from 'styled-components';
import { withQueryClient } from './providers/with-queryClient';
import { withRouter } from './providers/with-router';
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
