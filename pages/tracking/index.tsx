import DefaultLayout from "@/layouts/default";
import { title, subtitle } from "@/components/primitives";
import { Card, CardHeader, CardBody } from "@heroui/card";
import { Progress } from "@heroui/progress";
import { Image } from "@heroui/image";
import { FaTasks, FaEye, FaSyncAlt } from "react-icons/fa"; // Import icons

export default function TrackingPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-lg text-center justify-center">
          <h1 className={title({ class: "flex items-center justify-center gap-2" })}>
            <FaSyncAlt /> 实时处理追踪
          </h1>
          <h2 className={subtitle({ class: "mt-4" })}>
            动态展示材料处理进度，并通过热力图可视化关键法律要素。
          </h2>
        </div>

        <Card className="max-w-lg mt-6 p-4">
          <CardHeader>
            <p className="text-md flex items-center gap-2"><FaTasks /> 处理进度</p>
          </CardHeader>
          <CardBody>
            <Progress
              aria-label="处理进度..."
              size="md"
              value={60} // Example progress value
              color="success"
              showValueLabel={true}
              className="max-w-md"
            />
            <p className="text-sm text-default-500 mt-2">当前阶段：金额识别</p>
            <p className="text-xs text-default-500">模拟流程：文本提取 → 金额识别 → 案件匹配</p>
          </CardBody>
        </Card>

        <Card className="max-w-lg mt-6 p-4">
          <CardHeader>
            <p className="text-md flex items-center gap-2"><FaEye /> 可视化注意力热力图</p>
          </CardHeader>
          <CardBody className="items-center">
            <Image
              isBlurred
              width={300}
              // Use a more dynamic placeholder image service
              src={`https://picsum.photos/seed/heatmap/300/200`}
              alt="注意力热力图占位符"
              className="m-5"
            />
            <p className="text-xs text-default-500 mt-2">模拟功能：高亮显示模型关注的关键法律要素。</p>
          </CardBody>
        </Card>

      </section>
    </DefaultLayout>
  );
}
