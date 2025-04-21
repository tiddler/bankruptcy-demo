import DefaultLayout from "@/layouts/default";
import { title, subtitle } from "@/components/primitives";
import { Card, CardHeader, CardBody, CardFooter } from "@heroui/card";
import { Divider } from "@heroui/divider";
import { Input } from "@heroui/input";
import { Button } from "@heroui/button";
import { FaFilePdf, FaFileImage, FaFileUpload, FaFileAlt } from "react-icons/fa";

export default function UploadPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-lg text-center justify-center">
          <h1 className={title({ class: "flex items-center justify-center gap-2" })}>
            <FaFileUpload /> 材料智能上传
          </h1>
          <h2 className={subtitle({ class: "mt-4" })}>
            支持多种格式文件批量上传，并自动进行数据清洗与归一化处理。
          </h2>
        </div>

        <Card className="max-w-[400px] mt-6">
          <CardHeader className="flex gap-3">
            <div className="flex flex-col">
              <p className="text-md">上传文件</p>
              <p className="text-small text-default-500 flex items-center gap-1">
                支持: <span className="text-red-500"><FaFilePdf /></span> PDF, <FaFileAlt /> 扫描件, <span className="text-blue-500"><FaFileImage /></span> 照片等格式
              </p>
            </div>
          </CardHeader>
          <Divider/>
          <CardBody>
            <Input type="file" label="选择文件" placeholder="点击或拖拽文件到此处" multiple />
            <p className="text-xs text-default-500 mt-2">模拟功能：自动去除水印、矫正倾斜。</p>
          </CardBody>
          <Divider/>
          <CardFooter>
            <Button color="primary" startContent={<FaFileUpload />}>开始上传</Button> {/* Add icon to button */}
          </CardFooter>
        </Card>
      </section>
    </DefaultLayout>
  );
}
