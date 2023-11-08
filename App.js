import React, { Component } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import HeaderImage from "./images/lagarto_spock.png";
import IconButton from "./components/IconButton";
import ScoreText from "./components/ScoreText";
import Button from "./components/Button";

class PiedraPapelTijeraApp extends Component {
  constructor() {
    super();
    this.state = {
      resultado: "",
      scoreJugador: 0,
      scoreCPU: 0,
      optionJugador: {},
      optionCPU: {},
      isFinRonda: false,
      numRonda: 1,
      isJuegoFinalizado: false,
    };
    this.jugar = this.jugar.bind(this);
    this.getOpciones = this.getOpciones.bind(this);
    this.reiniciarJuego = this.reiniciarJuego.bind(this);
  }

  jugar(opcionUsuario) {
    const opciones = ["piedra", "papel", "tijera", "lagarto", "spock"];
    const opcionAleatoria = opciones[Math.floor(Math.random() * 3)];
    this.setState({ optionJugador: this.getOpciones(opcionUsuario) });
    this.setState({ optionCPU: this.getOpciones(opcionAleatoria) });
    if (this.state.numRonda < 3) {
      if (opcionUsuario === opcionAleatoria) {
        this.setState({ resultado: "EMPATE" });
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
        this.setState({ resultado: "GANASTE LA RONDA" });
        this.setState({ scoreJugador: this.state.scoreJugador + 1 });
      } else {
        this.setState({ resultado: "PERDISTE LA RONDA" });
        this.setState({ scoreCPU: this.state.scoreCPU + 1 });
      }
      this.setState({ numRonda: this.state.numRonda + 1 });
      this.setState({ isFinRonda: true });
    } else {
      this.setState({ isJuegoFinalizado: true });
      if (this.state.scoreJugador > this.state.scoreCPU) {
        this.setState({ resultado: "GANASTE LA PARTIDA" });
      } else if (this.state.scoreJugador < this.state.scoreCPU) {
        this.setState({ resultado: "PERDISTE LA PARTIDA" });
      } else {
        this.setState({ resultado: "PARTIDA EMPATADA" });
      }
    }
  }

  getOpciones(opcionUsuario) {
    switch (opcionUsuario) {
      case "piedra":
        return {
          source: require("./assets/piedra.png"),
          width: 100,
          aspectRatio: 1,
        };
      case "papel":
        return {
          source: require("./assets/papel.png"),
          width: 155,
          aspectRatio: 2,
        };
      case "tijera":
        return {
          source: require("./assets/tijera.png"),
          width: 140,
          aspectRatio: 2,
        };
      case "lagarto":
        return {
          source: require("./assets/lagarto.png"),
          width: 70,
          aspectRatio: 0.6,
        };
      case "spock":
        return {
          source: require("./assets/spock.png"),
          width: 90,
          aspectRatio: 0.7,
        };
      default:
        break;
    }
  }

  reiniciarJuego() {
    this.setState({
      resultado: "",
      scoreJugador: 0,
      scoreCPU: 0,
      optionJugador: {},
      optionCPU: {},
      isFinRonda: false,
      numRonda: 1,
      isJuegoFinalizado: false,
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <ScoreText text="Jugador" value={this.state.scoreJugador} />
          <ScoreText text="CPU" value={this.state.scoreCPU} />
        </View>

        <View style={[styles.flexRow, { gap: 30 }]}>
          {this.state.isFinRonda && (
            <IconButton
              onPress={() => this.jugar("piedra")}
              properties={this.state.optionJugador}
            />
          )}
          <Text style={[styles.texto]}>VS</Text>
          {this.state.isFinRonda && (
            <IconButton
              onPress={() => this.jugar("spock")}
              properties={this.state.optionCPU}
            />
          )}
        </View>
        <Text style={styles.texto}>{this.state.resultado}</Text>
        {this.state.isJuegoFinalizado && (
          <Button action={() => this.reiniciarJuego()} texto="Reiniciar" />
        )}
        <View style={[styles.flexRow, { marginBottom: 90 }]}>
          <IconButton
            onPress={() => this.jugar("piedra")}
            properties={this.getOpciones("piedra")}
          />
          <IconButton
            onPress={() => this.jugar("lagarto")}
            properties={this.getOpciones("lagarto")}
          />
          <IconButton
            onPress={() => this.jugar("spock")}
            properties={this.getOpciones("spock")}
          />
          <IconButton
            onPress={() => this.jugar("papel")}
            properties={this.getOpciones("papel")}
          />
          <IconButton
            onPress={() => this.jugar("tijera")}
            properties={this.getOpciones("tijera")}
          />
        </View>
        <Text style={{ fontSize: 20, marginBottom: 20 }}>
          Ronda: {this.state.numRonda}
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
    backgroundColor: "#EDEDF2",
  },
  header: {
    flex: 1,
    flexDirection: "row",
    marginTop: 40,
  },
  flexRow: {
    flex: 1,
    flexDirection: "row",
    gap: 50,
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
  },
  texto: {
    fontSize: 40,
    fontWeight: "bold",
    marginBottom: 70,
    textAlign: "center",
  },
});

export default PiedraPapelTijeraApp;
