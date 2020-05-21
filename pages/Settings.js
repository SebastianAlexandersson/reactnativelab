import React, { useState, useEffect } from 'react';
import { Container, Header, Title, Content, Right, Body, Text, Spinner, ListItem, CheckBox } from 'native-base';
import * as Location from 'expo-location';
import * as Network from 'expo-network';

function Settings() {
  const [checkOne, setCheckOne] = useState(false);
  const [checkTwo, setCheckTwo] = useState(false);
  const [checkThree, setCheckThree] = useState(false);
  const [ip, setIp] = useState('');
  const [loc, setLoc] = useState('');

  useEffect(() => {
    Network.getIpAddressAsync()
      .then(ipAdress => setIp(ipAdress));

    Location.requestPermissionsAsync()
      .then(() => Location.getCurrentPositionAsync({}))
      .then(location => setLoc(JSON.stringify(location)));
  })

  return (
    <Container>
      <Header>
        <Body>
          <Title>Settings</Title>
        </Body>
        <Right />
      </Header>
      <Content>
        <Text>
          {'Diverse saker för att fylla ut kraven :)'}
        </Text>
        <Spinner /> 
        <ListItem>
          <CheckBox checked={checkOne} onPress={() => setCheckOne(!checkOne)} />
          <Body>
            <Text>Daily Stand Up</Text>
          </Body>
        </ListItem>
        <ListItem>
          <CheckBox checked={checkTwo} onPress={() => setCheckTwo(!checkTwo)} />
          <Body>
            <Text>Discussion with Client</Text>
          </Body>
        </ListItem>
        <ListItem>
          <CheckBox checked={checkThree} color="green" onPress={() => setCheckThree(!checkThree)}/>
          <Body>
            <Text>Finish list Screen</Text>
          </Body>
        </ListItem>
      </Content>
      <Text>IP-adress: {ip}</Text>
      <Text>Location: {loc}</Text>
    </Container>
  );
}

export default Settings;
