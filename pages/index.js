import styled from "styled-components";

import Container from "../components/Container";
import Logo from "../components/Logo";
import SettingsButton from "../components/Settings";
import Spacer from "../components/Spacer";
import Switch from "../components/Switch";
import Timer from "../components/Timer";

import { useGlobalState, useUpdateGlobalState } from "../state/GlobalState";
import { FAMILIES } from "../constants";

export default function Home() {
  const { mode, font, color } = useGlobalState();
  const dispatch = useUpdateGlobalState();

  return (
    <Container style={{ "--font-family": font, "--color-highlight": color }}>
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
      <Spacer
        axis="vertical"
        size={79}
        when={{
          tabletAndUp: 144,
          desktopAndUp: 63,
        }}
      />
      <SettingsButton />
    </Container>
  );
}
