import { Country } from "@/types/country";
export default function TableRow({
  student,
  index,
}: {
  student: Country;
  index: number;
}) {
  return (
    <tr key={index} className="border-t border-gray-200 hover:bg-gray-50">
      <td className="p-2">{index + 1}</td>
      <td className="p-2 flex items-center gap-2">
        <span className={`flag flag-${student?.code?.toLowerCase()}`}></span>{" "}
        {student.code}
      </td>
      <td className="text-center">{student.gold}</td>
      <td className="text-center">{student.silver}</td>
      <td className="text-center">{student.bronze}</td>
      <td className="text-center font-bold">{student.total}</td>
    </tr>
  );
}
