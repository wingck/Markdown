import styled from "styled-components";

const HeaderContainer = styled.div`
  background-color: black;
  height: 100px;
  display: flex;
`;

const Title = styled.h1`
  font-size: 24px;
  color: #white;
  margin: 0;
`;

const Button = styled.button`
  background-color: white;
  color: black;
  border: none;
  border-radius: 4px;
  margin-left: auto;
  &:hover {
    background-color: #0056b3;
  }
`;

interface HeaderProps {
  onToggleGuide: () => void;
}

const Header: React.FC<HeaderProps> = ({ onToggleGuide }) => {
  return (
    <HeaderContainer>
      <Title>Markdown Previewer</Title>
      <Button onClick={onToggleGuide}>Markdown Cheatsheet</Button>
    </HeaderContainer>
  );
};

export default Header;