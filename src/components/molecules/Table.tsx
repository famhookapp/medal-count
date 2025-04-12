import { useState, useEffect, useCallback } from "react";
import { useTranslations } from "next-intl";
import TableHeader from "../atoms/TableHeader";
import TableRow from "../atoms/TableRow";
import { Country } from "@/types/country";
import { TSortKey } from "@/types/sortkey";
import { Props } from "@/types/props";

const MedalTable: React.FC<Props> = ({ rowItem, sortCol }) => {
  const [sortKey, setSortKey] = useState<TSortKey | null>(null);
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("desc");
  const [sortedItems, setSortedItems] = useState<Country[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const t = useTranslations();

  const getSortedItems = useCallback(() => {
    setIsLoading(true);
    const itemsSorted = [...rowItem].sort((x, y) => {
      if (!sortKey) return 0;
      let firstLevelSort = 0;
      const xVal = x[sortKey];
      const yVal = y[sortKey];

      if (typeof xVal === "number" && typeof yVal === "number") {
        firstLevelSort = sortOrder === "asc" ? xVal - yVal : yVal - xVal;
      }

      if (typeof xVal === "string" && typeof yVal === "string") {
        firstLevelSort = sortOrder === "asc"
          ? xVal.localeCompare(yVal)
          : yVal.localeCompare(xVal);
      }
      if (firstLevelSort !== 0) return firstLevelSort;
      const getTies = (key: typeof sortKey): keyof Country => {
        if (key === 'total') {
            return 'gold';
        } else if (key === 'gold') {
            return 'silver';
        } else if (key === 'silver' || key === 'bronze') {
            return 'gold';
        } else {
            return 'gold';
        }
      };
      const secondLevelKey = getTies(sortKey);
      const pSecondLevel = x[secondLevelKey];
      const qSecondLevel = y[secondLevelKey];
  
      if (typeof pSecondLevel === 'number' && typeof qSecondLevel === 'number') {
        return sortOrder === 'asc'
          ? pSecondLevel - qSecondLevel
          : qSecondLevel - pSecondLevel;
      }  
      return 0;
    });
    setSortedItems(itemsSorted);
    setIsLoading(false);
  }, [rowItem, sortKey, sortOrder]);

  useEffect(() => {
    setSortKey(sortCol);
  }, []);

  useEffect(() => {
    getSortedItems();
  }, [getSortedItems]);

  const handleSort = (key: TSortKey) => {
    if (sortKey === key) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortKey(key);
      setSortOrder("desc");
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">
        {t("table.header")}
      </h1>
      {sortedItems?.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="w-full table-auto border-collapse">
            <thead>
              <tr className="bg-gray-200 text-sm text-gray-700">
                <th className="p-2 text-left">#</th>
                <th className="p-2 text-left"></th>
                <TableHeader label="gold" sortKey="gold" onSort={handleSort} />
                <TableHeader
                  label="silver"
                  sortKey="silver"
                  onSort={handleSort}
                />
                <TableHeader
                  label="bronze"
                  sortKey="bronze"
                  onSort={handleSort}
                />
                <TableHeader
                  label={t("table.column-total")}
                  sortKey="total"
                  onSort={handleSort}
                />
              </tr>
            </thead>
            <tbody>
              {sortedItems &&
                sortedItems.map((student, index) => (
                  <TableRow
                    student={student}
                    index={index}
                    key={index}
                  ></TableRow>
                ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="w-full table-auto border-collapse py-5 px-5">
          {isLoading ? t("loadingData") : t("noData")}
        </div>
      )}
    </div>
  );
};

export default MedalTable;
