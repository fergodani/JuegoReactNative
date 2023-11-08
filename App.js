import React, { Component } from "react";
import { View, Text, Button, StyleSheet, Image } from "react-native";
import HeaderImage from "./images/lagarto_spock.png";
import IconButton from "./components/IconButton";
import ScoreText from "./components/ScoreText";

class PiedraPapelTijeraApp extends Component {
  constructor() {
    super();
    this.state = {
      resultado: "",
      scoreJugador: 0,
      scoreCPU: 0,
    };
    this.jugar = this.jugar.bind(this);
  }

  jugar(opcionUsuario) {
    const opciones = ["piedra", "papel", "tijera", "lagarto", "spock"];
    const opcionAleatoria = opciones[Math.floor(Math.random() * 3)];

    if (opcionUsuario === opcionAleatoria) {
      this.setState({ resultado: "Empate" });
    } else if (
      (opcionUsuario === "piedra" &&
        (opcionAleatoria === "tijera" || opcionAleatoria === "lagarto")) ||
      (opcionUsuario === "papel" &&
        (opcionAleatoria === "piedra" || opcionAleatoria === "spock")) ||
      (opcionUsuario === "tijera" &&
        (opcionAleatoria === "papel" || opcionAleatoria === "lagarto")) ||
      (opcionUsuario === "lagarto" &&
        (opcionAleatoria === "papel" || opcionAleatoria === "spock")) ||
      (opcionUsuario === "spock" &&
        (opcionAleatoria === "piedra" || opcionAleatoria === "tijera"))
    ) {
      this.setState({ resultado: "Ganaste" });
    } else {
      this.setState({ resultado: "Perdiste" });
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <ScoreText text="Jugador" value={this.state.scoreJugador} />
          <ScoreText text="CPU" value={this.state.scoreCPU} />
        </View>

        <View style={styles.flexRow}>
          <IconButton
            onPress={() => this.jugar("piedra")}
            imageSource={require("./assets/piedra.png")}
            width={100}
            aspectRatio={1}
          />
          <IconButton
            onPress={() => this.jugar("lagarto")}
            imageSource={require("./assets/lagarto.png")}
            width={70}
            aspectRatio={0.6}
          />
          <IconButton
            onPress={() => this.jugar("spock")}
            imageSource={require("./assets/spock.png")}
            width={90}
            aspectRatio={0.7}
          />
          <IconButton
            onPress={() => this.jugar("papel")}
            imageSource={require("./assets/papel.png")}
            width={155}
            aspectRatio={2}
          />
          <IconButton
            onPress={() => this.jugar("tijera")}
            imageSource={require("./assets/tijera.png")}
            width={140}
            aspectRatio={2}
          />
        </View>
        <Text style={{ fontSize: 40, fontWeight: "bold", marginBottom: 20 }}>
          GANASTE LA RONDA
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    flex: 1,
    flexDirection: "row",
  },
  flexRow: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default PiedraPapelTijeraApp;
