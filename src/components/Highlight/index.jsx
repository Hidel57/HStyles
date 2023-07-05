import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
// import SyntaxHighlighter from 'react-syntax-highlighter';
// import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const Highlight = ({language, codeString}) => {
    return (
      <SyntaxHighlighter language={language} style={atomDark}>
        {codeString}
      </SyntaxHighlighter>  
    );
}
 
export default Highlight;