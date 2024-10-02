import {useLocation} from "react-router-dom";
import TableDetailForm, {FormAs} from "./TableDetailForm";
import {getTableArticleData, useDataList} from "./store";
import {parseQueryString} from "./utlUtil";

export default function TableDetail() {
  const data = getTableArticleData({
    key: parseQueryString(useLocation().search).dataKey,
    list: useDataList()
  });
  
  return <TableDetailForm type={FormAs.read} dataProp={data}/>;
}