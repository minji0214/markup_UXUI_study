import styled from "styled-components";
import { ReactComponent as Remove } from "../../public/images/icon-remove.svg";

export const Header: React.FC<{}> = ({}) => {
  return (
    <HeaderWrapper>
      <div className="items-wrapper">
        <div className="item-wrapper">
          <span>Frontend</span>
          <button className="close-btn">
            <Remove />
          </button>
        </div>
        <div className="item-wrapper">
          <span>Frontend</span>
          <button className="close-btn">
            <Remove />
          </button>
        </div>
        <div className="item-wrapper">
          <span>Frontend</span>
          <button className="close-btn">
            <Remove />
          </button>
        </div>
      </div>
      <button className="clear-btn">Clear</button>
    </HeaderWrapper>
  );
};
const HeaderWrapper = styled.div`
  min-height: 78px;
  background-color: white;
  border-radius: 3px;
  box-shadow: 0 1px 1px rgba(217, 237, 238, 255),
    0 2px 2px rgba(217, 237, 238, 255), 0 4px 4px rgba(217, 237, 238, 255),
    0 8px 8px rgba(217, 237, 238, 255);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 40px;
  @media (max-width: 375px) {
    padding: 10px 10px;
    margin-top: 100px;
  }
  .items-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    flex-wrap: wrap;
  }

  .item-wrapper {
    display: flex;
    align-items: center;
    span {
      background-color: rgba(238, 248, 248, 255);
      padding: 5px;
      font-weight: 700;
      color: rgba(93, 165, 164, 255);
    }
  }

  .close-btn {
    all: unset;
    background-color: rgba(93, 165, 164, 255);
    padding: 8px 7px 5px 7px;
    border-radius: 0 3px 3px 0;
    cursor: pointer;
    :hover {
      background-color: black;
    }
  }

  .clear-btn {
    all: unset;
    font-weight: 700;
    color: rgba(93, 165, 164, 255);
    text-decoration: underline;
    cursor: pointer;
    @media (max-width: 375px) {
      color: grey;
      text-decoration: unset;
      margin-left: 20px;
    }
  }
`;
////색깔 지정 하다맘.
