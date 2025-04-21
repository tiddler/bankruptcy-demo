import DefaultLayout from "@/layouts/default";
import { title, subtitle } from "@/components/primitives";
import { Card, CardHeader, CardBody } from "@heroui/card";
import { Link } from "@heroui/link";
import { Listbox, ListboxItem } from "@heroui/listbox";
import { Divider } from "@heroui/divider";
import { FaBalanceScale, FaGavel, FaBookOpen, FaHistory, FaExternalLinkAlt } from "react-icons/fa"; // Import icons

export default function DecisionPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-lg text-center justify-center">
          <h1 className={title({ class: "flex items-center justify-center gap-2" })}>
            <FaBalanceScale /> 决策辅助工具
          </h1>
          <h2 className={subtitle({ class: "mt-4" })}>
            关联法律条款生成分配建议，并提供相似案例参考。
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-6 mt-6">
          <Card className="max-w-md p-4">
            <CardHeader>
              <p className="text-md flex items-center gap-2"><FaGavel /> 分配建议（模拟）</p>
            </CardHeader>
            <CardBody>
              <p className="text-sm">基于《企业破产法》第 X 条 Y 款：</p>
              <p className="text-lg font-semibold mt-2">普通债权清偿比例建议: 34.7%</p>
              <Link href="#" size="sm" isExternal className="mt-2 inline-flex items-center gap-1">
                <FaBookOpen /> 查看相关法条 <FaExternalLinkAlt size={12}/>
              </Link>
              <p className="text-xs text-default-500 mt-2">模拟功能：自动关联法条并生成建议。</p>
            </CardBody>
          </Card>

          <Card className="max-w-md p-4">
            <CardHeader>
              <p className="text-md flex items-center gap-2"><FaHistory /> 相似案例参考（模拟）</p>
            </CardHeader>
            <CardBody>
              <Listbox
                aria-label="相似案例列表"
                className="max-w-xs"
              >
                <ListboxItem key="case1" textValue="案例一">
                  <div className="flex gap-2 items-center">
                    <div className="flex flex-col">
                      <span className="text-small">案例一：XX 公司破产案</span>
                      <span className="text-tiny text-default-400">匹配度: 85% | 清偿率: 32%</span>
                    </div>
                  </div>
                </ListboxItem>
                <ListboxItem key="case2" textValue="案例二">
                  <div className="flex gap-2 items-center">
                    <div className="flex flex-col">
                      <span className="text-small">案例二：YY 科技破产清算</span>
                      <span className="text-tiny text-default-400">匹配度: 78% | 清偿率: 38%</span>
                    </div>
                  </div>
                </ListboxItem>
              </Listbox>
              <p className="text-xs text-default-500 mt-2">模拟功能：基于历史数据匹配相似案例。</p>
            </CardBody>
          </Card>
        </div>

      </section>
    </DefaultLayout>
  );
}
