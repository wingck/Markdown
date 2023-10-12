import styled from "styled-components";

const GuideContainer = styled.div`
  border: 1px solid #e0e0e0;
  border-radius: 5px;
  background-color: #f7f7f7;
  color: black;
`;

const MarkdownGuide: React.FC = () => {
  return (
    <GuideContainer>
      <p>
        <code>#</code> Header 1
      </p>
      <p>
        <code>##</code> Header 2
      </p>
      <p>
        <code>###</code> Header 3
      </p>
      <p>
        <code>**bold**</code> or <code>__bold__</code>
      </p>
      <p>
        <code>*italic*</code> or <code>_italic_</code>
      </p>
      <p>
        <code>[Link](url)</code>
      </p>
      <p>
        <code>![Image](url)</code>
      </p>
      <p>
        <code>`code`</code>
      </p>
      <p>
        <code>```block code```</code>
      </p>
      <p>
        <code>-</code> or <code>*</code> for bullet points
      </p>
      <p>
        <code>1.</code> for numbered list
      </p>
      <p>
        <code>&gt;</code> for blockquote
      </p>
    </GuideContainer>
  );
};

export default MarkdownGuide;