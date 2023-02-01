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

//! 태그 추가 ==> tools,language로 나뉨.
//! tool이면 tool에서 찾고, language면 language에서 찾기
//! 해당 키워드가 있는지 리스트에서 찾기

const fetchJobList = (): Promise<JobItemType[]> => {
  return axios.get("./public/data.json").then((response) => response.data);
};

export const MainPage: React.FC<{}> = ({}) => {
  const [tagArr, setTagArr] = useState<string[]>([]);
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

  return (
    <Layout>
      {tagArr.length > 0 && <Header tagArr={tagArr} setTagArr={setTagArr} />}
      <JobList setTagArr={setTagArr} list={jobList} />
    </Layout>
  );
};
