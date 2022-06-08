import React from "react";
import { View, StyleSheet, TextInput } from "react-native";

export default ({
    placeholder,
    keyboardType,
    editable,
    value,
    onChangeText,
    maxLength,
}) => {

    return (
        <View style={styles.inputArea}>
            <TextInput
                style={styles.textInput}
                placeholder={placeholder}
                keyboardType={keyboardType}
                selectionColor="#000000"
                editable={editable}
                onChangeText={onChangeText}
                value={value}
                maxLength={maxLength}
            />
        </View>
    );
};

const styles =
    StyleSheet.create({
        inputArea: {
            width: "100%",
            height: 35,
            backgroundColor: "#FFFFFF",
            flexDirection: "row",
            borderRadius: 5,
            alignItems: "center",
            marginBottom: 15,
            borderColor: "#999999",
            borderWidth: 1,
        },
        textInput: {
            flex: 1,
            fontSize: 14,
            color: "#000000",
            paddingLeft: 10,
            opacity: 0.5,
        },
    });
