import styled from "styled-components";
import { JobItem } from "./JobItem";

export const JobList: React.FC<{}> = ({}) => {
  return (
    <JobListWrapper>
      <JobItem />
    </JobListWrapper>
  );
};
const JobListWrapper = styled.div`
  margin: 40px 0;
`;
