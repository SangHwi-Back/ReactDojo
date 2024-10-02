import {TableData, defaultData} from "./data";
import {useLocation} from "react-router-dom";
import TableDetailForm from "./TableDetailForm";
import {useSelector} from "react-redux";
import {RootState} from "./store";

interface Parameter {
  key: string
  list: TableData[]
}

function getData({ key, list }: Parameter): TableData {
  return list.find((item: TableData) => item.key === key) || defaultData;
}

function parseQueryString(queryString: string): Record<string, string> {
  const query: Record<string, string> = {};
  const pairs = queryString.slice(1).split("&");
  
  for (const pair of pairs) {
    const [key, value] = pair.split("=");
    if (key && value) {
      query[key] = decodeURIComponent(value);
    }
  }
  
  return query;
}

export default function TableDetail() {
  const dataKey = parseQueryString(useLocation().search).dataKey;
  const data = getData({
    key: dataKey,
    list: useSelector((state: RootState) => state.data.list)
  });
  
  return <TableDetailForm editable={false} dataProp={data}/>;
}