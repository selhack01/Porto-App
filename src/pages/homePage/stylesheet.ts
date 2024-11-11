import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        backgroundColor: "#e3e3e3",
        flex: 1,
    },
    headerContainer: {
        backgroundColor: "#ffffff",
        width: "100%",
        padding: 20
    },
    contentContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    carousel: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    card: {
        flex: 1,
        backgroundColor: "#ffffff",
        padding: 25,
        margin: 10,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "space-between"
    },
    cardImage: {
        width: 250,
        height: 250,
    },
    cardHeader: {
        alignItems: 'flex-start',
        padding: 10,
        width: '100%',
    },
    cardButtons: {
        padding: 10,
        width: '100%',
        flexDirection: "row-reverse"
    },
    footerContainer: {
        backgroundColor: "#ffffff",
        padding: 20,
        borderTopRightRadius: 40,
        borderTopLeftRadius: 40,
        alignItems: "center",
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
});