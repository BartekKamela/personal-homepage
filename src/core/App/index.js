import { useSelector } from "react-redux";
import { selectIsDarkTheme } from "../../common/themeSlice";
import { ThemeProvider } from 'styled-components';
import { themeLight, themeDark } from './theme';
import { GlobalStyle } from './GlobalStyle';
import { Normalize } from 'styled-normalize';
import { PersonalHomepage } from '../../features/personalHomepage/PersonalHomepage';


export const App = () => {
  const isDarkTheme = useSelector(selectIsDarkTheme);
  
  return (
    <ThemeProvider theme={isDarkTheme ? themeLight : themeDark}>
      <Normalize />
      <GlobalStyle />
      <PersonalHomepage />
    </ThemeProvider>
  );
}

export default App;
