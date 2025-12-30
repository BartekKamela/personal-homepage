import { SpinnerIcon } from "../../../../../common/icons/SpinnerIcon";
import { Wrapper, StyledSpinnerIcon } from "./styled";

export const Loader = () => (
  <Wrapper>
    Please wait, projects are being loaded...
    <StyledSpinnerIcon>
      <SpinnerIcon />
    </StyledSpinnerIcon>
  </Wrapper>
);

export default Loader;