import Container from "../components/Container";
import Logo from "../components/Logo";
import Spacer from "../components/Spacer";
import Switch from "../components/Switch";
import Timer from "../components/Timer";

export default function Home() {
  return (
    <Container>
      <Spacer
        axis="vertical"
        size={32}
        when={{
          tabletAndUp: 80,
          desktopAndUp: 48,
        }}
      />
      <Logo />
      <Spacer
        axis="vertical"
        size={45}
        when={{
          tabletAndUp: 55,
        }}
      />
      <Switch style={{ zIndex: 3 }} />
      <Spacer
        axis="vertical"
        size={48}
        when={{
          tabletAndUp: 109,
          desktopAndUp: 45,
        }}
      />
      <Timer style={{ zIndex: 1 }} />
    </Container>
  );
}
