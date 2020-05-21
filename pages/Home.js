import React from 'react';
import { Container, Header, Title, Content, Right, Body, Text } from 'native-base';
import SyntaxHighlighter from 'react-native-syntax-highlighter';

function Home() {
  const codeString = `
    const obj = {
      a: 'a',
      b: 'b',
      c: 'c'
    }

    function Hello() {
      return 1 + 1
    }
  `
  return (
    <Container>
      <Header>
        <Body>
          <Title>Home</Title>
        </Body>
        <Right />
      </Header>
      <Content padder>
        <Text>
          Lite kod med syntax highlighting!
        </Text>
        <SyntaxHighlighter 
            language='javascript' 
            highlighter={"prism" || "hljs"}
          >
          {codeString}
        </SyntaxHighlighter>
      </Content>
    </Container>
  );
}

export default Home;
