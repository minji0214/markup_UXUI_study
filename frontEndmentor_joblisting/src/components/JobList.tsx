import styled from "styled-components";
import { JobItem } from "./JobItem";
import { JobItemType } from "./MainPage";
import React, { useState, Dispatch, SetStateAction } from "react";

interface JobListProps {
  list: JobItemType[];
  setTagArr: Dispatch<SetStateAction<string[]>>;
}

export const JobList: React.FC<JobListProps> = ({ list, setTagArr }) => {
  return (
    <JobListWrapper>
      {list.map((item: JobItemType) => {
        return <JobItem setTagArr={setTagArr} item={item} key={item.id} />;
      })}
    </JobListWrapper>
  );
};
const JobListWrapper = styled.div`
  margin: 40px 0;
`;
