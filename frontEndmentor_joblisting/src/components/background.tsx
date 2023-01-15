import { ReactComponent as Bg } from "../../public/images/bg-header-desktop.svg";
import { ReactComponent as Bg_mobile } from "../../public/images/bg-header-mobile.svg";
import styled from "styled-components";
export const Background: React.FC<{}> = ({}) => {
  return (
    <BackgroundWrapper>
      <div>
        <Bg className="bgDesktop" />
        <Bg_mobile className="bgMobile" />
      </div>
      <div></div>
    </BackgroundWrapper>
  );
};

const BackgroundWrapper = styled.div``;
