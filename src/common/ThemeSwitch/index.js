import { useDispatch, useSelector } from "react-redux";
import { selectIsDarkTheme, toggleTheme } from "../themeSlice";
import { Button, Wrapper, Text, Box, IconWrapper, Icon } from "./styled"

export const ThemeSwitch = () => {
  const isDarkTheme = useSelector(selectIsDarkTheme);
    const dispatch = useDispatch();

  return (
    <Wrapper>
      <Button onClick={() => dispatch(toggleTheme())}>
        <Text>
          Dark mode {isDarkTheme ? "on" : "off"}
        </Text>
        <Box>
          <IconWrapper moveToRight={!isDarkTheme}>
            <Icon />
          </IconWrapper>
        </Box>
      </Button>
    </Wrapper>
  )
}