import { Container } from "react-bootstrap";
import jQuery from "jquery";
import styled from "styled-components";
const Button = styled.button`
  display: block;
  padding: 20px;
  margin-left: auto;
`;
function AppHeader() {
  return (
    <Container>
      <Button className="btn fa-solid fa-sitemap"></Button>
    </Container>
  );
}
export default AppHeader;
