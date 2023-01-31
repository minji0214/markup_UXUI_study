import { Layout } from "./Layout";
import { Header } from "./header";
import { JobList } from "./JobList";
import axios from "axios";
import { useQuery, useMutation } from "react-query";
import { useQueryClient } from "react-query";
import { useRef, useState } from "react";

export interface JobItemType {
  id: number;
  company: string;
  logo: string;
  new: boolean;
  featured: boolean;
  position: string;
  role: string;
  level: string;
  postedAt: string;
  contract: string;
  location: string;
  languages: string[];
  tools: string[];
}

//!우선 데이터를 가져온다.
//!데이터 타입지정
const fetchJobList = (): Promise<JobItemType[]> => {
  return axios.get("./public/data.json").then((response) => response.data);
};

export const MainPage: React.FC<{}> = ({}) => {
  const [loadingStatus, setIsLoadingStatus] = useState(false);
  const queryClient = useQueryClient();
  const query = useQuery<JobItemType[], Error, JobItemType[]>(
    "querykey",
    fetchJobList,
    {
      onSuccess: (data) => {
        console.log(data);
      },
      onError: () => {
        console.log("에러");
      },
    }
  );
  if (query.isLoading) {
    // setIsLoadingStatus(true);
    return null;
  }
  const fetchQuery = query.data;
  const jobList = fetchQuery as JobItemType[];
  console.log("jobList", jobList);
  return (
    <Layout>
      <Header />
      <JobList list={jobList} />
    </Layout>
  );
};
