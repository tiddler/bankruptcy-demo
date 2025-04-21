import DefaultLayout from "@/layouts/default";
import { title, subtitle } from "@/components/primitives";
import { Card, CardHeader, CardBody, CardFooter } from "@heroui/card";
import { Divider } from "@heroui/divider";
import { Button } from "@heroui/button";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from "@heroui/table";
import { Chip } from "@heroui/chip";
import React from "react";
import { FaFileContract, FaCheckCircle, FaExclamationTriangle, FaDownload } from "react-icons/fa"; // Import icons

export default function ResultsPage() {
  // Define types for better type safety
  type ReportColumn = { key: string; label: string };
  type ReportRow = { id: number; item: string; result: string; status: string; risk?: string };

  const reportColumns: ReportColumn[] = [
    { key: "item", label: "核验项目" },
    { key: "result", label: "核验结果" },
    { key: "status", label: "状态" },
  ];

  const reportRows: ReportRow[] = [
    { id: 1, item: "申报金额", result: "¥ 1,250,000.00", status: "正常" },
    { id: 2, item: "发生日期", result: "2023-08-15", status: "正常" },
    { id: 3, item: "债权人证件号", result: "310**********1234", status: "正常" },
    { id: 4, item: "关联凭证", result: "合同编号 XYZ789", status: "异常", risk: "高" }, // Example anomaly
  ];

  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-lg text-center justify-center">
          <h1 className={title({ class: "flex items-center justify-center gap-2" })}>
            <FaFileContract /> 智能结果展示
          </h1>
          <h2 className={subtitle({ class: "mt-4" })}>
            自动生成债权审查报告，并高亮显示异常申报材料。
          </h2>
        </div>

        <Card className="max-w-2xl mt-6 p-4">
          <CardHeader>
            <p className="text-md flex items-center gap-2"><FaFileContract />《债权审查报告》（模拟）</p>
          </CardHeader>
          <CardBody>
            <Table aria-label="债权审查报告模拟表格">
              <TableHeader columns={reportColumns}>
                {(column: ReportColumn) => <TableColumn key={column.key}>{column.label}</TableColumn>}
              </TableHeader>
              <TableBody items={reportRows}>
                {(item: ReportRow) => (
                  <TableRow key={item.id}>
                    {(columnKey: React.Key) => (
                      <TableCell>
                        {columnKey === 'status' ? (
                          <Chip
                            color={item.status === '异常' ? "danger" : "success"}
                            size="sm"
                            variant="flat"
                            startContent={item.status === '异常' ? <FaExclamationTriangle /> : <FaCheckCircle />}
                          >
                            {item.status}
                            {item.status === '异常' && item.risk && ` (${item.risk}风险)`}
                          </Chip>
                        ) : (
                          item[columnKey as keyof Omit<ReportRow, 'id' | 'risk'>]
                        )}
                      </TableCell>
                    )}
                  </TableRow>
                )}
              </TableBody>
            </Table>
            <p className="text-xs text-default-500 mt-2">模拟功能：自动生成报告，红色标记异常项并提示风险等级。</p>
          </CardBody>
          <Divider/>
          <CardFooter>
            <Button color="primary" variant="ghost" startContent={<FaDownload />}>下载报告</Button>
          </CardFooter>
        </Card>

      </section>
    </DefaultLayout>
  );
}
