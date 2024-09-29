import {data, TableData, defaultData} from "./data";
import {useLocation} from "react-router-dom";
import TableDetailForm from "./TableDetailForm";

function getData(dataKey: string): TableData {
  return data.list.find((item: TableData) => {
    return item.key === dataKey
  }) || defaultData;
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
  const data = getData(dataKey);
  
  return <TableDetailForm editable={false} data={data}/>;
}