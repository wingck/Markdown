import styled from "styled-components";
import ReactMarkdown from "react-markdown";

const OutputContainer = styled.div`
  width: 100%;
  border-radius: 5px;
  border-left: 1px solid black
  background-color: white;
  color: black;
`;

interface MarkdownOutputProps {
  markdown: string;
}

const MarkdownOutput: React.FC<MarkdownOutputProps> = ({ markdown }) => {
  return (
    <OutputContainer>
      <ReactMarkdown>{markdown}</ReactMarkdown>
    </OutputContainer>
  );
};

export default MarkdownOutput;