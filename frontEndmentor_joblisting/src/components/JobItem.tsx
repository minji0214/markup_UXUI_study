import styled from "styled-components";
import { JobItemType } from "./MainPage";

interface JobItemProps {
  item: JobItemType;
}

export const JobItem: React.FC<JobItemProps> = ({ item }) => {
  return (
    <JobItemWrapper>
      <div className="leftContent-wrapper">
        <img src={item.logo} width={80} height={80} alt="logo" />
        <div className="content-wrapper">
          <div className="top">
            <div className="company">{item.company}</div>
            {item.new && <div className="new">new</div>}
            {item.featured && <div className="featured">featured</div>}
          </div>

          <div className="middle">
            <div className="position">{item.position}</div>
          </div>
          <div className="bottom">
            <div className="postedAt">{item.postedAt}</div>
            <span>&#183;</span>
            <div className="contract">{item.contract}</div>
            <span>&#183;</span>
            <div className="location">{item.location}</div>
          </div>
          <hr className="hr" />
        </div>
      </div>

      <div className="rightContent-wrapper">
        {item.languages.map((language, idx) => (
          <div key={idx}>{language}</div>
        ))}
        {item.tools.map((tool, idx) => (
          <div key={idx}>{tool}</div>
        ))}
        <div>tools</div>
      </div>
    </JobItemWrapper>
  );
};
const JobItemWrapper = styled.div`
  background-color: white;
  border-radius: 3px;
  padding: 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 375px) {
    flex-direction: column;
    /* justify-content: start; */
    align-items: flex-start;
  }
  .leftContent-wrapper {
    display: flex;
    @media (max-width: 375px) {
      position: relative;
    }

    img {
      border-radius: 100%;
      margin-right: 20px;
      @media (max-width: 375px) {
        width: 40px;
        height: 40px;
        position: absolute;
        top: -49%;
      }
    }
    .content-wrapper {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
    .top {
      display: flex;
      gap: 5px;
      div:not(:first-child) {
        padding: 5px 10px;
      }
    }
    .company {
      font-weight: 700;
      color: rgba(93, 165, 164, 255);
      padding: 5px 10px 5px 0;
    }
    .new {
      background-color: rgba(93, 165, 164, 255);
      border-radius: 15px;
      color: white;
    }
    .featured {
      background-color: black;
      color: white;
      border-radius: 15px;
      margin: 0 auto;
      text-align: center;
    }
    .middle {
      float: left;
      .position {
        font-size: 20px;
        font-weight: 700;
        color: rgba(93, 165, 164, 255);
        cursor: pointer;
        @media (max-width: 375px) {
          margin: 10px 0;
          color: black;
        }
      }
    }
    .bottom {
      display: flex;
      color: rgba(142, 148, 148, 255);
      font-weight: 500;
      gap: 10px;
      @media (max-width: 375px) {
      }
    }
    .hr {
      display: none;
      @media (max-width: 375px) {
        display: block;
        width: 100%;
        border: 0.25px rgba(142, 148, 148, 255) solid;
        margin-top: 10px;
      }
    }
  }
  .rightContent-wrapper {
    display: flex;
    gap: 10px;
    @media (max-width: 375px) {
      flex-wrap: wrap;
    }
    div {
      background-color: rgba(240, 248, 246, 255);
      padding: 7px 9px;
      color: rgba(93, 165, 164, 255);
      font-weight: 600;
      border-radius: 3px;
      cursor: pointer;
    }
  }
`;
