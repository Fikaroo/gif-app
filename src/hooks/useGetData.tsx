import { useQuery } from "react-query";
import { Main } from "../types";

interface IUseGetData<T> {
  name: string;
  api: () => Promise<T>;
}

type DataType = Main;

const useGetData = ({ name, api }: IUseGetData<DataType>) => {
  const result = useQuery(name, api);
  return result;
};

export default useGetData;
