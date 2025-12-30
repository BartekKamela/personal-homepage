import { Wrapper, Photo, Intro, Name, Content } from "./styled";
import { Button } from "../../../../common/Button";

export const MainInformation = () => (
  <Wrapper>
    <Photo src="./images/photo.jpg" />
    <div>
      <Intro>THIS IS</Intro>
      <Name>Bartłomiej Kamela</Name>
      <Content>I am junior Frontend Developer with React, currently looking for new job opportunities.</Content>
      <Button />
    </div>
  </Wrapper>
);