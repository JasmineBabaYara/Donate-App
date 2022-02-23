import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  Dimensions,
  TouchableWithoutFeedback,
  StyleSheet,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

export default class DonationScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };
  }

  show = () => {
    this.setState({ show: true });
  };

  close = () => {
    this.setState({ show: false });
  };

  render() {
    let { show } = this.state;

    return (
      <View>
        <Modal
          animationType="slide"
          transparent={true}
          visible={show}
          onRequestClose={this.close}
        >
          <View style={{ flex: 1, justifyContent: "flex-end" }}>
            <View style={styles.slidein}>
              <LinearGradient
                colors={["#AEA4E7", "#AEA4E7", "#AEA4E7", "#fff", "#fff"]}
                start={{ x: 0, y: 0.8 }}
                end={{ x: 1.2, y: 0.4 }}
                style={styles.lineargradient}
              >
                <TouchableOpacity onPress={() => this.close()}>
                  <View style={styles.dash} />
                </TouchableOpacity>
                <View style={styles.amount}>
                  <Text style={styles.dollarsign}>$</Text>
                  <Text style={styles.amounttext}>0</Text>
                </View>
                <View style={styles.numbers}>
                  <View style={styles.firstrow}>
                    <Text style={styles.rowtext}>1</Text>
                    <Text style={styles.rowtext}>2</Text>
                    <Text style={styles.rowtext}>3</Text>
                  </View>
                  <View style={styles.secondrow}>
                    <Text style={styles.rowtext}>4</Text>
                    <Text style={styles.rowtext}>5</Text>
                    <Text style={styles.rowtext}>6</Text>
                  </View>
                  <View style={styles.thirdrow}>
                    <Text style={styles.rowtext}>7</Text>
                    <Text style={styles.rowtext}>8</Text>
                    <Text style={styles.rowtext}>9</Text>
                  </View>
                  <View style={styles.fourthrow}>
                    <Text style={styles.rowtext2}>.</Text>
                    <Text style={styles.rowtext}>0</Text>
                    <MaterialIcons
                      name="clear"
                      size={24}
                      color="#310062"
                      style={styles.rowicon}
                    />
                  </View>
                </View>
                <View style={styles.bottomcontainer}>
                  <TouchableOpacity style={styles.onetimecontainer}>
                    <Text style={styles.onetimetext}>One-time</Text>
                  </TouchableOpacity>

                  <TouchableOpacity style={styles.onetimecontainer}>
                    <Text style={styles.onetimetext}>Monthly</Text>
                  </TouchableOpacity>
                </View>
              </LinearGradient>
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({

  slidein:{
    position:'absolute',
    top:'35%',
    width:'100%',
    height:'100%'
  },

  lineargradient: {
    borderRadius: 30,
    overflow: "hidden",
    width: "100%",
    backgroundColor: "transparent",
    height:'100%',
  },
  dash: {
    alignSelf: "center",
    justifyContent: "center",
    marginTop: 10,
    width: 50,
    height: 3,
    backgroundColor: "#b0c4de",
    borderWidth: 1,
    borderColor: "#b0c4de",
    borderRadius: 2,
  },

  amount: {
    flexDirection: "row",
    alignSelf: "center",
    marginTop: 60,
  },
  dollarsign: {
    color: "#310062",
    fontWeight: "bold",
    fontSize: 45,
  },
  amounttext: {
    fontSize: 85,
    color: "#310062",
    fontWeight: "500",
  },
  numbers: {
    justifyContent:'space-evenly',
    marginTop: 30,
  },
  firstrow: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  secondrow: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 45,
  },
  thirdrow: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 40,
  },
  fourthrow: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 40,
    marginLeft: 10,
  },
  rowtext: {
    color: "#310062",
    fontSize: 25,
    fontWeight: "500",
  },
  rowtext2: {
    color: "#310062",
    fontSize: 35,
    fontWeight: "500",
    marginTop: -13,
  },
  rowicon: {
    marginTop: 6,
  },

  bottomcontainer: {
    justifyContent: "space-evenly",
    flexDirection: "row",
  },

  onetimecontainer: {
    width: 150,
    borderWidth: 1,
    borderRadius: 40,
    height: 46,
    padding: 12,
    marginTop: 55,
    backgroundColor: "#fff",
    borderColor: "#fff",
    shadowColor: "#310062",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 1,
  },

  onetimetext: {
    alignSelf: "center",
    color: "#310062",
    fontSize: 15,
    textAlign: "center",
    fontWeight: "500",
  },
});
