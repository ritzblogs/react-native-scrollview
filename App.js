import React from 'react';
import { StyleSheet, Header, HEIGHT, Styles, SafeAreaView, StatusBar, ScrollView, Dimensions, KeyboardAvoidingView, TouchableOpacity, Keyboard, Text, View, Button, TextInput, Alert, ImageBackground } from 'react-native';
import { Card } from 'react-native-elements';

class App extends React.Component {
  render() {
    return (

      <SafeAreaView style={styles.container}>

        <ScrollView>

          <Card
            containerStyle={{
              backgroundColor: "white",
              paddingLeft: 10,
              paddingRight: 10,
              paddingTop: 10,
              marginTop: 50,
              borderRadius: 10,
              justifyContent: "center",
              alignContent: "center",
              width: "90%",
            }}>

            <Card
              containerStyle={{
                backgroundColor: "translucent",
                padding: 10,
              }}>
              <Text style={{ fontSize: 15 }}>React Native is a open-source framework that lets you build mobile applications with native look and feel using JavaScript Programming language i.e you can work on two operating systems using a single platform. It is based on React Js, a JavaScript Framework for building user interfaces but instead of web here it targets the mobile platform and unlike other cross platforms it isn't about rendering web components in webview instead it uses real native components and real native APIs to interact with the code. React Native makes it easy to simultaneously develop for both Android and iOS because most of the code you write can be shared between platforms.

              Native applications are written using JavaScript and XML-esque markup, this XML-based construct is called JSX. React Native uses JSX, an XML markup for developing UIs which replaces HTML and CSS. All the views or say UI is compiled to native views hence resulting fast and is close to native apps.

              React Native ha evolved as the most preferred cross-platform solution for creating Android and iOS apps respectively. React Native provides
              Special components
              Native components
              Access to native platform APIs for e.g it device camera, location
              Flexibility to connect JavaScript to native platform code Code Reusability
              The biggest benefit of React Native is Code Reusability, developers now can write one code and use in both the platforms without having a need to write separate code for each platform which saves lot of time and cost on the apps.
              Cost Effective Solution
              With the benefit of code reusability the cost of the project and having to invest on large team can be squeezed up and mange by a smaller team without having to maintain team and code of two separate platforms.

</Text>
            </Card>



          </Card>
        </ScrollView>
      </SafeAreaView>



    );
  }
}
export default App;
const styles = StyleSheet.create({
  containerInput: {
    justifyContent: 'center',
    width: "100%",
    alignContent: 'center',
    alignItems: "center",
    alignSelf: 'center',
  },

  backgroundImage: {
    width: "100%",
    flex: 1,
  },
  viewStyle: {

    width: "90%", flexDirection: 'row',
    height: 40, borderColor: 'black', borderRadius: 25,
    backgroundColor: 'rgba(255,255,255,.2)',
    paddingLeft: 10, margin: 10,
  },
  loginBtn: {
    width: "90%",
    backgroundColor: "#EAB15A",
    borderRadius: 25,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    marginBottom: 10
  },

  textStyle: {
    color: "white",
    fontSize: 16,
    width: "80%",
    height: 40,
    padding: 10,
    textAlign: "center",
  },
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: '#282C34',
    flexDirection: "column",
    justifyContent: "center"
  },

});