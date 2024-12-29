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
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
    },
    carousel: {
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
    },
    card: {
        backgroundColor: "#ffffff",
        justifyContent: "space-between",
        alignItems: "center",
        borderRadius: 10,
        padding: 25,
        margin: 10,
        flex: 1,
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
        height: 250,
        width: 250,
    },
    cardHeader: {
        alignItems: 'flex-start',
        width: '100%',
        padding: 10,
    },
    cardButtons: {
        flexDirection: "row-reverse",
        width: '100%',
        padding: 10,
    },
    footerContainer: {
        justifyContent: 'space-between',
        backgroundColor: "#ffffff",
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        flexDirection: 'row',
        alignItems: "center",
        padding: 20,
    }
});