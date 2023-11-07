import React, { Component } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

class PiedraPapelTijeraApp extends Component {
  constructor() {
    super();
    this.state = {
      resultado: '',
    };
  }

  jugar(opcionUsuario) {
    const opciones = ['piedra', 'papel', 'tijera'];
    const opcionAleatoria = opciones[Math.floor(Math.random() * 3)];
    
    if (opcionUsuario === opcionAleatoria) {
      this.setState({ resultado: 'Empate' });
    } else if (
      (opcionUsuario === 'piedra' && opcionAleatoria === 'tijera') ||
      (opcionUsuario === 'papel' && opcionAleatoria === 'piedra') ||
      (opcionUsuario === 'tijera' && opcionAleatoria === 'papel')
    ) {
      this.setState({ resultado: 'Ganaste' });
    } else {
      this.setState({ resultado: 'Perdiste' });
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Elige: piedra, papel o tijera</Text>
        <Button title="Piedra" onPress={() => this.jugar('piedra')} />
        <Button title="Papel" onPress={() => this.jugar('papel')} />
        <Button title="Tijera" onPress={() => this.jugar('tijera')} />
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
});

export default PiedraPapelTijeraApp;
