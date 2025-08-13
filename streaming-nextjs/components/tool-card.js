import { use } from "react";
const ToolCard = ({ toolPromise }) => {
  const tool = use(toolPromise);
  return <IconCard tool={tool} />;
};
export default ToolCard;
