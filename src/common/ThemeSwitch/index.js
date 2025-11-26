import { Button, Wrapper, Text, Box, IconWrapper, Icon } from "./styled"

export const ThemeSwitch = () => {
  return (
    <Wrapper>
      <Button>
        <Text>
          DARK MODE OFF
        </Text>
        <Box>
          <IconWrapper>
            <Icon />
          </IconWrapper>
        </Box>
      </Button>
    </Wrapper>
  )
}