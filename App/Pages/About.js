import React from 'react';
import { View, Text } from 'react-native';
import { Card, Button, Icon } from 'react-native-elements';

import Layout from '../Components/Layout';

class About extends React.Component {
  render() {
    return (
      <Layout>
        <View>
          <Card
            title="HAKKIMIZDA"
            image={{ uri: 'https://support.content.office.net/tr-tr/media/461a7a87-5e61-4318-8642-8a84df7b498d.jpg' }}
          >
            <Text style={{ marginBottom: 10, color : '#777' }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ex mi, elementum vel tincidunt quis,
              lobortis ut orci. Donec at finibus felis. Praesent in aliquam sapien. Ut auctor felis nec neque dignissim
              cursus id quis lacus.
            </Text>
            <Text style={{ marginBottom: 10, color : '#777' }}>
              Nam consequat dictum mauris vel finibus. Fusce consectetur tortor nec tellus dapibus consequat in a elit.
              Ut et tempor lacus. Donec quis bibendum ligula, nec tristique felis. Suspendisse lacinia erat id nisi
              blandit dignissim vel et metus. Quisque in sapien ipsum. Etiam tempor ipsum vitae metus tincidunt
              consectetur. Suspendisse scelerisque lacinia purus, eu venenatis dolor
            </Text>
            <Button
              icon={<Icon name="code" color="#ffffff" />}
              buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
              title="İletişim "
              iconRight
            />
          </Card>
        </View>
      </Layout>
    );
  }
}

export default About;
