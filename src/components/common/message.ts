import { message as messageAPI } from "antd";

type MessageType = "success" | "error" | "info" | "warning" | "loading";

export const showMessage = (type: MessageType, message: string) => {
  messageAPI[type](message);
};
