import { Typography } from "antd";
import Game from "../components/Home/Game";
import { SubMenu } from "../components/Home/SubMenu/SubMenu";
import { AppLayout } from "../components/common/Layout/Layout";
import { useGameContext } from "../context/GameContext";
import { SuccessModal } from "../components/Home/SuccessModal/SuccessModal";

const Home = () => {
  const { attempts, visible, setVisible } = useGameContext();

  return (
    <>
      <SuccessModal visible={visible} setVisible={setVisible} />
      <AppLayout>
        <Typography.Title
          level={3}
          style={{
            textAlign: "center",
          }}
        >
          Matching Cards
        </Typography.Title>
        <SubMenu attempts={attempts} />
        <Game attempts={attempts} />
      </AppLayout>
    </>
  );
};

export default Home;
