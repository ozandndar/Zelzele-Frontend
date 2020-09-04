import React from 'react';
import { View, Text, SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import axios from 'axios';
import { Actions } from 'react-native-router-flux';
import { ListItem, Icon } from 'react-native-elements';

//Local components
import Loading from '../Components/Loading';
import Layout from '../Components/Layout';

class Homepage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      data: []
    };
  }

  componentDidMount() {
    var url = 'http://192.168.171.1:4000/api';
    axios
      .get(url)
      .then((response) => {
        console.log(`response -> ${response}`);
        this.setState({ data: response.data, loading: false });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    const { data, loading } = this.state;
    console.log(data);
    // if (loading) return <Loading />;
    // else
      return (
        <Layout>
          <View style={styles.container}>
            <ScrollView>
              {/* {data.map((r, i) => (
                <View key={i}>
                  {i < 50 && (
                    // <Text onPress={() => Actions.earthquake({ data: r })} style={styles.item}>
                    //   {r.markerLabelText}
                    // </Text>
                    <ListItem
                      onPress={() => Actions.earthquake({ data: r })}
                      title={r.markerLabelText}
                      bottomDivider
                      chevron={{ color: '#517ca3', size : 25  }}
                    />
                  )}
                </View>
              ))} */}
            </ScrollView>
          </View>
        </Layout>
      );
  }
}

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    margin: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    backgroundColor: '#aaa'
  },
  container: {
    backgroundColor: '#555'
  }
});

export default Homepage;
