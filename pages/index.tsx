import { Link } from "@heroui/link";
import { button as buttonStyles } from "@heroui/theme";
import { Card, CardHeader, CardBody } from "@heroui/card"; // Import Card components
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
// Remove GithubIcon if not used anymore
// import { GithubIcon } from "@/components/icons";
import DefaultLayout from "@/layouts/default";
// Import icons for features
import { FaFileUpload, FaSyncAlt, FaFileContract, FaBalanceScale, FaUsers } from "react-icons/fa";
import React from "react"; // Needed for mapping
import NextLink from "next/link"; // Import NextLink

// Define feature descriptions and icons
const features = [
  {
    name: "材料智能上传",
    href: "/upload",
    description: "支持多格式批量上传，自动清洗与归一化。",
    icon: <FaFileUpload className="text-blue-500" />,
  },
  {
    name: "实时处理追踪",
    href: "/tracking",
    description: "动态展示分类进度，可视化模型注意力。",
    icon: <FaSyncAlt className="text-green-500" />,
  },
  {
    name: "智能结果展示",
    href: "/results",
    description: "自动生成审查报告，高亮异常风险材料。",
    icon: <FaFileContract className="text-purple-500" />,
  },
  {
    name: "决策辅助工具",
    href: "/decision",
    description: "关联法律条款生成建议，提供相似案例参考。",
    icon: <FaBalanceScale className="text-yellow-500" />,
  },
  {
    name: "协同管理平台",
    href: "/collaboration",
    description: "支持多方实时通信，自动同步监管数据。",
    icon: <FaUsers className="text-teal-500" />,
  },
];

export default function IndexPage() {
  return (
    <DefaultLayout>
      {/* Initial Introduction Section */}
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-2xl text-center justify-center">
          <h1 className={title()}>欢迎使用</h1>
          <h1 className={title({ color: "violet" })}>破产事务管理系统演示</h1>
          <br />
          <h2 className={subtitle({ class: "mt-4" })}>
            本网站旨在演示破产事务管理系统的核心功能，包括材料智能上传、实时处理追踪、智能结果展示、决策辅助工具和协同管理平台。
          </h2>
        </div>

        <div className="flex gap-3">
          <Link
            className={buttonStyles({
              color: "primary",
              radius: "full",
              variant: "shadow",
            })}
            href="/upload" // Link to the first feature page
          >
            开始探索
          </Link>
          {/* Remove GitHub link if desired */}
          {/* <Link
            isExternal
            className={buttonStyles({ variant: "bordered", radius: "full" })}
            href={siteConfig.links.github}
          >
            <GithubIcon size={20} />
            GitHub
          </Link> */}
        </div>
      </section>

      {/* New Features Overview Section - Corrected Structure */}
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="text-center">
          <h2 className={title({ size: "sm" })}>核心功能概览</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6 max-w-4xl">
          {features.map((feature) => (
            // Wrap Card with NextLink
            <NextLink key={feature.href} href={feature.href} passHref>
              <Card isPressable isHoverable className="h-full"> {/* Add h-full for consistent height if needed */}
                <CardHeader className="flex gap-3">
                  <div className="text-2xl">{feature.icon}</div>
                  <div className="flex flex-col">
                    <p className="text-md font-semibold">{feature.name}</p>
                  </div>
                </CardHeader>
                <CardBody>
                  <p className="text-sm text-default-600">{feature.description}</p>
                  {/* Remove the inner Link */}
                  {/* <Link href={feature.href} className="text-sm text-primary mt-2">了解更多 →</Link> */}
                </CardBody>
              </Card>
            </NextLink>
          ))}
        </div>
      </section>
    </DefaultLayout>
  );
}
