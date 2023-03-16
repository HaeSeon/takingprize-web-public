import { Sidebar } from "./SideBar";
import { useVisibleToggle } from "../../hooks/useVisibleToggle";
import { HamburgerIcon } from "../image/Hamburger";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 48px;
  padding: 0 8px
`

export function Header() {
  const { visible, toggleVisible } = useVisibleToggle()

  return (
    <Container>
      <HamburgerIcon onClick={toggleVisible} />
      <Sidebar
        isOpen={visible}
        setIsOpen={toggleVisible}
      />
    </Container>
  );
}