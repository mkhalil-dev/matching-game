import { Image, Result } from "antd";
import { Button } from "../components/common";
import { useNavigate } from "react-router-dom";
import celebrate from "../components/assets/celebrate.png";
import { AppLayout } from "../components/common/Layout/Layout";
import { useGameContext } from "../context/GameContext";

export const Success = () => {
  const navigate = useNavigate();
  const { attempts, setAttempts, time } = useGameContext();

  return (
    <AppLayout>
      <Result
        status="success"
        title="Congratulations, you won!"
        subTitle={`You found all the matching cards in ${attempts} attempts. It took you ${time} seconds to complete the game.`}
        icon={<Image src={celebrate} preview={false} width={300} />}
        extra={[
          <Button
            key="home"
            type="primary"
            danger
            onClick={() => {
              setAttempts(0);
              navigate("/home");
            }}
          >
            Play again
          </Button>,
        ]}
      />
    </AppLayout>
  );
};
