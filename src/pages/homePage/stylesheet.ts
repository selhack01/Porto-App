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
        justifyContent: "space-between",
        shadowColor: "#000000",
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 0.8,
        shadowRadius: 10,
        elevation: 10
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
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        alignItems: "center",
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
});