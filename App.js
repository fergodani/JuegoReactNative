import React, { Component } from 'react';
import { View, Text, Button, StyleSheet, Image } from 'react-native';
import HeaderImage from './images/lagarto_spock.png';

class PiedraPapelTijeraApp extends Component {
  constructor() {
    super();
    this.state = {
      resultado: '',
    };
  }

  jugar(opcionUsuario) {
    const opciones = ['piedra', 'papel', 'tijera','lagarto','spock'];
    const opcionAleatoria = opciones[Math.floor(Math.random() * 3)];
    
    if (opcionUsuario === opcionAleatoria) {
      this.setState({ resultado: 'Empate' });
    } else if (
      ((opcionUsuario === 'piedra' && (opcionAleatoria === 'tijera' || opcionAleatoria === 'lagarto')) ||
      (opcionUsuario === 'papel' && (opcionAleatoria === 'piedra' || opcionAleatoria === 'spock')) ||
      (opcionUsuario === 'tijera' && (opcionAleatoria === 'papel' || opcionAleatoria === 'lagarto')) ||
      (opcionUsuario === 'lagarto' && (opcionAleatoria === 'papel' || opcionAleatoria === 'spock')) ||
      (opcionUsuario ==='spock' && (opcionAleatoria === 'piedra' || opcionAleatoria === 'tijera')))
     ) {
      this.setState({ resultado: 'Ganaste' });
    } else {
      this.setState({ resultado: 'Perdiste' });
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Image source={HeaderImage} style={styles.headerImage} />
        </View>
        <Text>Piedra, papel, tijera, lagarto, spock</Text>
        <Button title="Piedra" onPress={() => this.jugar('piedra')} />
        <Button title="Papel" onPress={() => this.jugar('papel')} />
        <Button title="Tijera" onPress={() => this.jugar('tijera')} />
        <Button title="Lagarto" onPress={() => this.jugar('lagarto')} />
        <Button title="Spock" onPress={() => this.jugar('spock')} />
        <Text>Resultado: {this.state.resultado}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerImage: {
    width: 300,
    height: 300,
    resizeMode: 'cover',
  },
});

export default PiedraPapelTijeraApp;
