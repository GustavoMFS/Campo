import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import Flag from "./Flag";
import Cronometro from "./Cronometro";
import listaRecordes from "./Recordes";


const Header = (props) => {
    const [reset, setReset] = useState(false);
    const [recordes, setRecordes] = useState([]);

    const handleNewGame = () => {
        setReset(true)
        setTimeout(() => {
            setReset(false)
        }, 100)
        props.onNewGame();
    };
   
    const adicionarRecorde = (recorde) => {
          setRecordes([...recordes, recorde]);
        };
    

    return (
        <View style={styles.container}>
            <View style={styles.flagContainer}>
                <TouchableOpacity onPress={props.onFlagPress}
                    style={styles.flagButton}>
                        <Flag bigger/>
                    </TouchableOpacity>
                    <Text style={styles.flagsLeft}>= {props.flagsLeft}</Text>
            </View>
            <TouchableOpacity style={styles.button} onPress={props.onRecordes}>
                <Text style={styles.buttonLabel}>Recordes</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={handleNewGame}>
                <Text style={styles.buttonLabel}>Novo Jogo</Text>
                <Cronometro reset={reset}/>
            </TouchableOpacity>
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#EEE',
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingTop: 20,
        paddingHorizontal: 20,
    },
    flagContainer: {
        flexDirection: 'row',
    },
    flagButton: {
        marginTop: 10,
        minWidth: 30,
    },
    flagsLeft: {
        fontSize: 30,
        fontWeight: 'bold',
        paddingTop: 5,
        marginLeft: 20,
    },
    button: {
        backgroundColor: '#999',
        padding: 5,
    },
    buttonLabel: {
        fontSize: 20,
        color: '#DDD',
        fontWeight: 'bold'
    },

});

export default Header;