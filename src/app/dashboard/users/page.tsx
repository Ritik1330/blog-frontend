// "use client";
import Image from "next/image";
import { DataTable } from "@/components/DataTable";
import { ColumnDef } from "@tanstack/react-table";

export type Payment = {
  name: string;
  email: string;
  role: "Admin" | "User";
  id: string;
};

 const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "name",
    header: "name",
    // cell: ({ row }) => {
    //   return (
    //     <div className="flex gap-2 items-center">
    //            <Image
    //         className="rounded-full border-gray-600 border-[.5px] dark:border-gray-100 "
    //         src={`https://cdn-icons-png.flaticon.com/512/17/17004.png`}
    //         width={50}
    //         height={50}
    //         alt="Picture of the Article"
    //       />
          
    //       {row.getValue("name")}</div>
    //   );
    // },
  },
  {
    accessorKey: "email",
    header: "email",
  },
  {
    accessorKey: "role",
    header: "role",
  },
  {
    accessorKey: "id",
    header: "id",
  },
];

 const data: Payment[] = [
  {
    name: "John Smith",
    email: "john.smith@example.com",
    role: "Admin",
    id: "1001",
  },
  {
    name: "Sarah Johnson",
    email: "sarah.johnson@example.com",
    role: "User",
    id: "1002",
  },
  {
    name: "Michael Lee",
    email: "michael.lee@example.com",
    role: "Admin",
    id: "1003",
  },
  {
    name: "Emily Chen",
    email: "emily.chen@example.com",
    role: "User",
    id: "1004",
  },
  {
    name: "David Miller",
    email: "david.miller@example.com",
    role: "Admin",
    id: "1005",
  },
  {
    name: "Lisa Brown",
    email: "lisa.brown@example.com",
    role: "User",
    id: "1006",
  },
  {
    name: "Daniel Kim",
    email: "daniel.kim@example.com",
    role: "Admin",
    id: "1007",
  },
  {
    name: "Michelle Wong",
    email: "michelle.wong@example.com",
    role: "User",
    id: "1008",
  },
  {
    name: "John Smith",
    email: "john.smith@example.com",
    role: "Admin",
    id: "1009",
  },
  {
    name: "Sarah Johnson",
    email: "sarah.johnson@example.com",
    role: "User",
    id: "1010",
  },
  {
    name: "Michael Lee",
    email: "michael.lee@example.com",
    role: "Admin",
    id: "1011",
  },
  {
    name: "Emily Chen",
    email: "emily.chen@example.com",
    role: "User",
    id: "1012",
  },
  {
    name: "David Miller",
    email: "david.miller@example.com",
    role: "Admin",
    id: "1013",
  },
  {
    name: "Lisa Brown",
    email: "lisa.brown@example.com",
    role: "User",
    id: "1014",
  },
  {
    name: "Daniel Kim",
    email: "daniel.kim@example.com",
    role: "Admin",
    id: "1015",
  },
  {
    name: "Michelle Wong",
    email: "michelle.wong@example.com",
    role: "User",
    id: "1016",
  },
];

export default async function Page() {
  // const data = await getData()

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  );
}
