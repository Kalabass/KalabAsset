import { Routing } from '@/pages';
import { createGlobalStyle } from 'styled-components';
import { withQueryClient } from './providers/with-queryClient';
import { withRouter } from './providers/with-router';

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@100;200;300;400;500;600;700&display=swap');
	html{
		font-family: 'Roboto Mono', monospace;
	}
  body {
    margin: 0;
    padding: 0;
		font-family: 'Roboto Mono', monospace;
		background-color: rgb(173, 216, 230);
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
