import { Image, Modal, Result } from "antd";
import { useAuthContext } from "../../../context/AppContext";
import { useGameContext } from "../../../context/GameContext";
import celebrate from "../../assets/celebrate.png";

interface ISuccessModalProps {
  visible: boolean;
  setVisible: (visible: boolean) => void;
}

export const SuccessModal = ({ visible }: ISuccessModalProps) => {
  const { username } = useAuthContext();
  const { attempts, time } = useGameContext();
  const handleOk = () => {
    window.location.reload();
  };

  const handleCancel = () => {
    localStorage.removeItem("username");
    window.location.href = "/";
  };

  return (
    <Modal
      open={visible}
      onOk={handleOk}
      onCancel={handleCancel}
      okText="Play Again"
      cancelText="Log Out"
      centered
    >
      <Result
        status="success"
        subTitle={`You won in ${attempts} attempts and ${time} seconds`}
        title={`Congratulations ${username}!`}
        icon={<Image src={celebrate} preview={false} width={250} />}
      />
    </Modal>
  );
};
