import React, { Fragment } from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
import { Header, ListItem } from 'react-native-elements';
import { Button, Drawer } from 'native-base';
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/FontAwesome';

class Layout extends React.Component {
  constructor(props) {
    super(props);
  }

  closeDrawer = () => {
    this.drawer._root.close();
  };

  openDrawer = () => {
    this.drawer._root.open();
  };

  render() {
    return (
      <Drawer
        ref={(ref) => {
          this.drawer = ref;
        }}
        content={
          <View style={{ backgroundColor: '#fff', height: '100%' }}>
            <View
              style={{
                flex: 1.5,
                backgroundColor: '#fff',
                padding: 15,
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <Image
                source={require('../Assets/images/logo_horizontal.png')}
                style={{ width: '80%', height: 200, resizeMode: 'contain' }}
              />
            </View>
            <View style={{ flex: 4 }}>
              <ListItem title="Ana Sayfa" bottomDivider chevron onPress={() => Actions.home()} />
              <ListItem title="Giderler" bottomDivider chevron onPress={() => Actions.about()} />
              <ListItem title="Gelirler" bottomDivider chevron onPress={() => Actions.about()} />
              <ListItem title="Diğer Giderler" bottomDivider chevron onPress={() => Actions.about()} />
              <ListItem title="Wallet App" bottomDivider chevron onPress={() => Actions.about()} />
              <View style={styles.bottom}>
                {/* <Button
                  title="Çıkış "
                  icon={<Icon name="arrow-right" size={15} color="white" />}
                  iconRight
                  
                  onPress={() => Actions.login()}
                /> */}
                <Button
                  style={{ display: 'flex', alignSelf: 'center', width: '100%' }}
                  danger
                  block
                  //  onPress={() => this.onSubmit()}
                >
                  <Text onPress={() => Actions.home()}> Çıkış</Text>
                </Button>
              </View>
            </View>
          </View>
        }
        onClose={() => this.closeDrawer()}
      >
        <Header backgroundColor="#fff">
          <Fragment>
            <Text
              onPress={() => this.openDrawer()}
              style={{
                color: 'black',
                paddingLeft: '3%',
                fontWeight: 'bold',
                transform: [ { translateY: -15 }, { scaleX: 2 }, { scaleY: 1.5 } ]
              }}
            >
              ☰
            </Text>
          </Fragment>
          <CenterComponent />
          <LeftComponent />
        </Header>
        {this.props.children}
      </Drawer>
    );
  }
}

export default Layout;

const LeftComponent = () => {
  return <View />;
};

const CenterComponent = () => {
  return (
    <Fragment>
      <Image
        style={{ width: 125, height: 40, transform: [ { scaleX: 1.5 }, { scaleY: 1.5 }, { translateY: -10 } ] }}
        source={require('../Assets/images/logo.png')}
      />
    </Fragment>
  );
};

// const RightComponent = () => {
//   return (
//     <Fragment>
//       <View style={{ translateY: -30, position: 'relative' }}>
//         <Text
//           onPress={() => closeDrawer()}
//           style={{ color: 'black', paddingRight: 10, fontWeight: 'bold', transform: [ { scaleX: 2, scaleY: 1.5 } ] }}
//         >
//           ☰
//         </Text>
//       </View>
//     </Fragment>
//   );
// };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10
  },
  bottom: {
    paddingHorizontal: 30,
    position: 'absolute',
    bottom: 20,
    width: '100%'
  }
});
