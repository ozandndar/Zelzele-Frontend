import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import Layout from '../Components/Layout';
import { Card } from 'react-native-elements';

class Earthquake extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      region: {
        latitude: parseFloat(this.props.data.markerLat),
        longitude: parseFloat(this.props.data.markerLong),
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421
      },
      isVisible: true
    };
  }

  toggleCard = () => {
    this.setState({ isVisible: !this.state.isVisible });
  };

  render() {
    const { data } = this.props;
    const { isVisible } = this.state;
    const latlong = {
      latitude: parseFloat(data.markerLat),
      longitude: parseFloat(data.markerLong)
    };

    return (
      <Layout>
        <View style={{ flex: 1 }}>
          <MapView style={{ flex: 1 }} region={this.state.region} maxZoomLevel={11} minZoomLevel={5}>
            <Marker coordinate={latlong} onPress={() => this.toggleCard()}>
              <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                {isVisible && (
                  <View style={{ flex: 1, minWidth: 250 }}>
                    <Card title={`${data.markerLabelText} / ${data.sehir} `}>
                      <View>
                        <View style={styles.row}>
                          <Text style={styles.bold}>Büyüklük:</Text>
                          <Text style={styles.normal}>{data.buyukluk}</Text>
                        </View>
                        <View style={styles.row}>
                          <Text style={styles.bold}>Derinlik:</Text>
                          <Text style={styles.normal}>{data.derinlik}</Text>
                        </View>
                        <View style={styles.row}>
                          <Text style={styles.bold}>Saat:</Text>
                          <Text style={styles.normal}>{data.saat}</Text>
                        </View>
                        <View style={styles.row}>
                          <Text style={styles.bold}>Tarih:</Text>
                          <Text style={styles.normal}>{data.tarih}</Text>
                        </View>
                      </View>
                    </Card>
                  </View>
                )}
                <Image source={require('../Assets/images/marker.png')} style={styles.marker} />
              </View>
            </Marker>
          </MapView>
        </View>
      </Layout>
    );
  }
}

const styles = StyleSheet.create({
  marker: {
    width: 50,
    height: 50,
    resizeMode: 'contain'
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  bold: {
    fontWeight: 'bold',
    textAlign: 'center',
    paddingRight: 5,
    flex: 1
  },
  normal: {
    fontWeight: 'normal',
    textAlign: 'center',
    flex: 1
  }
});

export default Earthquake;