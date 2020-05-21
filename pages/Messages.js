import React, { useState } from 'react';
import { Container, Header, Title, Content, Right, Body, Text, Form, Textarea, Button, Card, CardItem } from 'native-base';

function Messages() {
  const [message, setMessage] = useState('');
  const [messages, addMessage] = useState([]);

  function handleSubmit() {
    addMessage([...messages, message]);
    setMessage('');
  }

  return (
    <Container>
      <Header>
        <Body>
          <Title>Messages</Title>
        </Body>
        <Right />
      </Header>
      <Content padder>
        <Text>
          Skriv ett meddelande!
        </Text>
        <Form>
          <Textarea rowSpan={5} bordered placeholder="Message" onChangeText={(text) => setMessage(text)} value={message}/>
          <Button info onPress={handleSubmit}><Text>Submit</Text></Button>
        </Form>
        {messages.map((m, i) => {
          return (
            <Card key={i}>
              <CardItem>
                <Body>
                  <Text>
                    {m}
                  </Text>
                </Body>
              </CardItem>
            </Card>
          )
        })}
      </Content>
    </Container>
  );
}

export default Messages;
