import { Image, Modal, Result } from "antd";
import { useAuthContext } from "../../../context/AppContext";
import { useGameContext } from "../../../context/GameContext";
import celebrate from "../../assets/celebrate.png";
import { Button, SuccessButton } from "../../common";

interface ISuccessModalProps {
  visible: boolean;
  setVisible: (visible: boolean) => void;
}

export const SuccessModal = ({ visible }: ISuccessModalProps) => {
  const { username } = useAuthContext();
  const { attempts, time } = useGameContext();

  const handlePlayAgain = () => {
    window.location.reload();
  };

  const handleCancel = () => {
    localStorage.removeItem("username");
    window.location.href = "/";
  };

  return (
    <Modal
      open={visible}
      onCancel={handlePlayAgain}
      okText="Play Again"
      cancelText="Log Out"
      centered
      footer={[
        <Button
          key="back"
          onClick={handleCancel}
          danger
          children={"Log out"}
        />,
        <SuccessButton
          key="submit"
          onClick={handlePlayAgain}
          children={"Play again!"}
        />,
      ]}
    >
      <Result
        status="success"
        subTitle={`You won with ${attempts} ${
          attempts > 1 ? "mismatches" : "mismatch"
        }. It took you ${time} seconds.`}
        title={`Congratulations ${username}!`}
        icon={<Image src={celebrate} preview={false} width={250} />}
      />
    </Modal>
  );
};
