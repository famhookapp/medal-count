import { TSortKey } from "@/types/sortkey";
export default function TableHeader({
  label,
  sortKey,
  onSort,
}: {
  label: string;
  sortKey: TSortKey;
  onSort: (key: TSortKey) => void;
}) {
  if (label === "gold") {
    return (
      <th
        className="p-2 text-center cursor-pointer hover:bg-gray-100 hover:border-t-4 hover:border-blue-500 transition-all duration-200"
        onClick={() => onSort(sortKey)}
      >
        <div className="gold-circle"></div>
      </th>
    );
  } else if (label === "silver") {
    return (
      <th
        className="p-2 text-center cursor-pointer hover:bg-gray-100 hover:border-t-4 hover:border-blue-500 transition-all duration-200"
        onClick={() => onSort(sortKey)}
      >
        <div className="silver-circle"></div>
      </th>
    );
  } else if (label === "bronze") {
    return (
      <th
        className="p-2 text-center cursor-pointer hover:bg-gray-100 hover:border-t-4 hover:border-blue-500 transition-all duration-200"
        onClick={() => onSort(sortKey)}
      >
        <div className="bronze-circle"></div>
      </th>
    );
  } else {
    return (
      <th
        className="p-2 text-center cursor-pointer hover:bg-gray-100 hover:border-t-4 hover:border-blue-500 transition-all duration-200"
        onClick={() => onSort(sortKey)}
      >
        {label}
      </th>
    );
  }
}
