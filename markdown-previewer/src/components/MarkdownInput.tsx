import styled from "styled-components";

const InputContainer = styled.div`
  width: 100%;
  padding: 1rem;
`;

const StyledTextArea = styled.textarea`
  width: 100%;
  height: 500%;
  font-family: "Arial", sans-serif;
  font-size: 1rem;
  background-color: white;
  color: black;
  border: none;
`;

interface MarkdownInputProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const MarkdownInput: React.FC<MarkdownInputProps> = ({ value, onChange }) => {
  return (
    <InputContainer>
      <StyledTextArea value={value} onChange={onChange} />
    </InputContainer>
  );
};

export default MarkdownInput;