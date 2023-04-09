import React, { useState, useEffect } from 'react';
import { Text, View } from 'react-native';

const Cronometro = (props) => {
  const [horas, setHoras] = useState(0);
  const [minutos, setMinutos] = useState(0);
  const [segundos, setSegundos] = useState(0);
  const [reset, setReset] = useState(false);

  useEffect(() => {
    if (props.reset) {
      setSegundos(0);
      setMinutos(0);
      setHoras(0);
      setReset(false);
    }
  }, [props.reset]);

  useEffect(() => {
    const interval = setInterval(() => {
      setSegundos((prevSegundos) => prevSegundos + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [reset]);

  useEffect(() => {
    if (segundos === 60) {
      setSegundos(0);
      setMinutos((prevMinutos) => prevMinutos + 1);
    }
  }, [segundos, reset]);

  useEffect(() => {
    if (minutos === 60) {
      setMinutos(0);
      setHoras((prevHoras) => prevHoras + 1);
    }
  }, [minutos, reset]);

  // useEffect(() => {
  //   if (horas > 0 || minutos > 0 || segundos > 0) {
  //     setReset(false);
  //   }
  // }, [horas, minutos, segundos]);

  const totalSegundos = horas * 3600 + minutos * 60 + segundos;
  const tempoFormatado = new Date(totalSegundos * 1000).toISOString().substr(11, 8);

  return (
    <View>
      <Text>Tempo: {tempoFormatado}</Text>
    </View>
  );
}

export default Cronometro;
