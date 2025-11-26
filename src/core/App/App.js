import { ThemeProvider } from 'styled-components';
import { theme } from './theme';
import { PersonalHomepage } from '../../features/personalHomepage/PersonalHomepage';


export const App = () => {
  return (
    <ThemeProvider theme={ theme }>
      <PersonalHomepage />
    </ThemeProvider>
  );
}

export default App;
