import TableDetailForm, {FormAs} from "./TableDetailForm";
import {getTableArticleData, useDataList} from "./store";
import {useLocation} from "react-router-dom";
import {parseQueryString} from "./utlUtil";

export default function TableDetailEdit() {
    const data = getTableArticleData({
        key: parseQueryString(useLocation().search).dataKey,
        list: useDataList()
    });

    return <TableDetailForm type={FormAs.update} dataProp={data} />;
};