import {Category, rows} from "@/app/(store)/rows";

type CategoryInfo = {
  category: Category,
  value: number,
}

export const categoryInfo = rows.reduce((acc: CategoryInfo[], row) => {
  const index = acc.findIndex(item => item.category === row.category);
  if (index > -1) {
    acc[index].value++;
  } else {
    acc.push({
      category: row.category,
      value: 1,
    });
  }
  return acc;
}, []);
