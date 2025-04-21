import DefaultLayout from "@/layouts/default";
import { title, subtitle } from "@/components/primitives";
import { Card, CardHeader, CardBody, CardFooter } from "@heroui/card";
import { Divider } from "@heroui/divider";
import { Button } from "@heroui/button";
import { Textarea } from "@heroui/input";
import { Avatar, AvatarGroup } from "@heroui/avatar";
import { Badge } from "@heroui/badge";
import { FaUsers, FaComments, FaPaperPlane, FaSync, FaCheckCircle, FaHourglassHalf, FaBuilding, FaLandmark } from "react-icons/fa"; // Import icons

export default function CollaborationPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-lg text-center justify-center">
          <h1 className={title({ class: "flex items-center justify-center gap-2" })}>
            <FaUsers /> 协同管理平台
          </h1>
          <h2 className={subtitle({ class: "mt-4" })}>
            支持多方实时沟通与数据同步。
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-6 mt-6">
          <Card className="max-w-md p-4">
            <CardHeader>
              <p className="text-md flex items-center gap-2"><FaComments /> 实时通信（模拟）</p>
            </CardHeader>
            <CardBody>
              <Textarea
                isReadOnly
                labelPlacement="outside"
                placeholder="显示沟通记录..."
                defaultValue="管理人: 请补充 XX 材料的异议说明。\n债权人 A: 已上传证据，请查收。"
                className="max-w-xs mb-4"
              />
              <Textarea
                labelPlacement="outside"
                placeholder="输入消息... (如异议标注、证据补充)"
                className="max-w-xs"
              />
            </CardBody>
            <Divider/>
            <CardFooter className="justify-between">
              <AvatarGroup isBordered max={3}>
                <Avatar name="法院" size="sm" />
                <Avatar name="管理人" size="sm" />
                <Avatar name="债权人" size="sm" />
              </AvatarGroup>
              <Button color="primary" size="sm" startContent={<FaPaperPlane />}>发送</Button> {/* Add icon */}
            </CardFooter>
             <p className="text-xs text-default-500 mt-2 px-3">模拟功能：法院、管理人、债权人三方实时通信。</p>
          </Card>

          <Card className="max-w-md p-4">
            <CardHeader>
              <p className="text-md flex items-center gap-2"><FaSync /> 数据同步状态（模拟）</p>
            </CardHeader>
            <CardBody>
              {/* Wrap badges in a flex container for better layout */}
              <div className="flex flex-col gap-3"> { /* Added flex container */}
                <div className="flex items-center gap-4"> { /* Removed mb-3 */}
                  <Badge content="已同步" color="success">
                    <span className="mr-1"><FaCheckCircle /></span>
                    <p className="flex items-center gap-1"><FaBuilding /> 营商办平台</p>
                  </Badge>
                </div>
                <div className="flex items-center gap-4">
                   <Badge content="同步中" color="warning">
                     <span className="mr-1"><FaHourglassHalf /></span>
                     <p className="flex items-center gap-1"><FaLandmark /> 税务局平台</p>
                   </Badge>
                </div>
              </div> { /* Close flex container */}
              <p className="text-xs text-default-500 mt-4">模拟功能：自动同步数据至政府监管平台。</p>
            </CardBody>
          </Card>
        </div>

      </section>
    </DefaultLayout>
  );
}
