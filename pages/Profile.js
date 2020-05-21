import React, { useState, useEffect } from 'react';
import { Image, View } from 'react-native';
import { Container, Header, Title, Content, Right, Body, Text, Button } from 'native-base';
import missing_avatar from '../assets/images/missing_avatar.png';
import ImagePicker from 'react-native-image-picker';

function Profile() {
  const [profileImage, setProfileImage] = useState(missing_avatar);

  const options = {
    title: 'Select Profile Picture'
  };

  function handleClick() {
    ImagePicker.showImagePicker(options, (response) => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        const source = { uri: response.uri };

        // You can also display the image using data:
        // const source = { uri: 'data:image/jpeg;base64,' + response.data };

        setProfileImage(source);
      }
    });
  }

  return (
    <Container>
      <Header>
        <Body>
          <Title>Profile</Title>
        </Body>
        <Right />
      </Header>
      <Content contentContainerStyle={{ alignItems: 'center', flex: 1, paddingTop: 30 }}>
        {!profileImage ?
          (
            <Image
              source={missing_avatar}
              style={{
                width: 150,
                height: 150
              }}
            />
          )
          :
          (
            <Image
              source={profileImage}
              style={{
                width: 150,
                height: 150
              }}
            />
          )
        }
        <Button
          primary
          onPress={handleClick}
        >
          <Text>Take profile picture!</Text>
        </Button>
      </Content>
    </Container>
  );
}

export default Profile;
