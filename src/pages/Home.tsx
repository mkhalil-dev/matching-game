import { Typography } from "antd";
import Game from "../components/Home/Game";
import { SubMenu } from "../components/Home/SubMenu/SubMenu";
import { AppLayout } from "../components/common/Layout/Layout";
import { useGameContext } from "../context/GameContext";

const Home = () => {
  const { attempts } = useGameContext();

  return (
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
  );
};

export default Home;
