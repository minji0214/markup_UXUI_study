import styled from "styled-components";
import { JobItem } from "./JobItem";
import { JobItemType } from "./MainPage";
interface JobListProps {
  list: JobItemType[];
}

export const JobList: React.FC<JobListProps> = ({ list }) => {
  console.log(list);
  return (
    <JobListWrapper>
      {list.map((item: JobItemType) => {
        return <JobItem item={item} key={item.id} />;
      })}
    </JobListWrapper>
  );
};
const JobListWrapper = styled.div`
  margin: 40px 0;
`;
