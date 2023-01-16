import { ReactComponent as Bg } from "../../public/images/bg-header-desktop.svg";
import { ReactComponent as Bg_mobile } from "../../public/images/bg-header-mobile.svg";
import styled from "styled-components";
import { Children } from "react";
export const Background: React.FC<{ children?: React.ReactNode }> = ({
  children,
}) => {
  return (
    <BackgroundWrapper>
      <div className="background">
        <div className="imgWrapper">
          <Bg className="bgDesktop" />
          <Bg_mobile className="bgMobile" />
        </div>
        <div className="bottomBg"></div>
      </div>
      <div className="children">{children}</div>
    </BackgroundWrapper>
  );
};

const BackgroundWrapper = styled.div`
  .imgWrapper {
    background-color: rgb(5, 250, 250);
  }
  .background {
    position: absolute;
    display: flex;
    flex-direction: column;
  }
  .bottomBg {
    height: 100vh;
    background-color: rgb(238, 246, 246);
  }
  .bgDesktop {
    @media (max-width: 375px) {
      display: none;
    }
  }
  .bgMobile {
    display: none;
    @media (max-width: 375px) {
      display: block;
    }
  }
  .children {
    position: relative;
  }
`;
