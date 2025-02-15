import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#5C8374',
        alignItems: 'center',
        justifyContent: 'center',
    },
    Heading : {
        fontSize: 30,
        fontFamily: 'monospace',
        fontWeight: 'bold',
        color: '#092635',
        margin: 15,
        backgroundColor: '#9EC8B9',
        padding: 40,
        borderRadius: 20,
        textAlign: 'center'
    },
    surface: {
        height: 300,
        width: 300,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
      },
}
);

export default styles;