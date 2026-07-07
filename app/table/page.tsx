"use client";

import { DataTable } from "@/components/data-table";
import { ColumnDef } from "@tanstack/react-table";
import { Badge } from "@/components/ui/badge";
import React from "react";
import { DataTablePagination } from "@/components/table-pagination";
type Payment = {
  id: string;
  amount: number;
  status: "pending" | "processing" | "success" | "failed";
  email: string;
};

const data: Payment[] = [
  {
    id: "728ed52f",
    amount: 100,
    status: "pending",
    email: "m@example.com",
  },
  {
    id: "489e1d42",
    amount: 250,
    status: "success",
    email: "john@example.com",
  },
  {
    id: "91ab7c65",
    amount: 320,
    status: "processing",
    email: "emma@example.com",
  },
  {
    id: "d4c81a90",
    amount: 150,
    status: "failed",
    email: "alex@example.com",
  },
  {
    id: "7e3b19d8",
    amount: 450,
    status: "success",
    email: "olivia@example.com",
  },
  {
    id: "f2a64b71",
    amount: 90,
    status: "pending",
    email: "liam@example.com",
  },
  {
    id: "3c8d5f20",
    amount: 700,
    status: "processing",
    email: "noah@example.com",
  },
  {
    id: "5a7e2d91",
    amount: 210,
    status: "failed",
    email: "ava@example.com",
  },
  {
    id: "8b4f73c6",
    amount: 580,
    status: "success",
    email: "sophia@example.com",
  },
  {
    id: "1d9a8b44",
    amount: 110,
    status: "pending",
    email: "james@example.com",
  },
  {
    id: "6f2c0e81",
    amount: 980,
    status: "success",
    email: "charlotte@example.com",
  },
  {
    id: "2a4d9f57",
    amount: 340,
    status: "processing",
    email: "mia@example.com",
  },
  {
    id: "9e8b2a13",
    amount: 175,
    status: "failed",
    email: "lucas@example.com",
  },
  {
    id: "4b6c7d88",
    amount: 620,
    status: "success",
    email: "amelia@example.com",
  },
  {
    id: "0f1e2d3c",
    amount: 275,
    status: "pending",
    email: "ethan@example.com",
  },
];

export default function Table() {
  const columns: ColumnDef<Payment>[] = [
    {
      accessorKey: "email",
      header: "Email",
    },
    {
      accessorKey: "amount",
      header: "Amount",
      cell: ({ row }) => {
        const amount = parseFloat(row.getValue("amount"));
        const formatted = new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "USD",
        }).format(amount);

        return <div className=" font-medium">{formatted}</div>;
      },
    },
    {
      accessorKey: "status",
      header: "Status",
      cell: ({ row }) => {
        const status = row.getValue("status") as Payment["status"];
        let variant:
          | "secondary"
          | "destructive"
          | "link"
          | "default"
          | "outline"
          | "ghost"
          | null
          | undefined;

        switch (status) {
          case "success":
            variant = "default";
            break;
          case "pending":
            variant = "secondary";
            break;
          case "processing":
            variant = "outline";
            break;
          case "failed":
            variant = "destructive";
            break;
        }
        return (
          <div className="flex items-center gap-2">
            <Badge variant={variant}>{status}</Badge>
          </div>
        );
      },
    },
  ];
  return (
    <div>
      <DataTable columns={columns} data={data} />
     
    </div>
  );
}
