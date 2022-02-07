import React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import { Divider } from "react-native-elements/dist/divider/Divider";

const foods = [
    {
        title: "Lasanha",
        description:
            "Lasanha com carne moída, acompanhada de temperos especiais",
        price: "R$13,50",
        image: "https://www.thespruceeats.com/thmb/-YUYSXc4T2H4P8o2JBApzJ3F5rw=/2069x2069/smart/filters:no_upscale()/white-and-red-sauce-lasagna-recipe-995925-hero-1-fb2c2142b39042069f0c50310047256d.jpg",
    },
    {
        title: "Tomate",
        description:
            "Lasanha com carne moída, acompanhada de temperos especiais",
        price: "R$13,50",
        image: "https://static.tuasaude.com/media/article/cd/dd/beneficios-do-tomate_14243_l.jpg",
    },
    {
        title: "Beef",
        description:
            "Lasanha com carne moída, acompanhada de temperos especiais",
        price: "R$13,50",
        image: "https://media.istockphoto.com/photos/fresh-raw-prime-black-angus-beef-steaks-on-wooden-board-picture-id587953150?k=20&m=587953150&s=612x612&w=0&h=wzjtxcTKBxjF5Y7upBKeZj62yZhpv-2718rTyEJTJqU=",
    },
];

const styles = StyleSheet.create({
    menuItemStyle: {
        flexDirection: "row",
        justifyContent: "space-between",
        margin: 20,
    },

    titleStyle: {
        fontSize: 19,
        fontWeight: "600",
    },
});

export default function MenuItems() {
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            {foods.map((food, index) => (
                <View key={index}>
                    <View style={styles.menuItemStyle}>
                        <FoodInfo food={food} />
                        <FoodImage food={food} />
                    </View>
                    <Divider
                        width={0.5}
                        orientation="vertical"
                        style={{ marginHorizontal: 20 }}
                    />
                </View>
            ))}
        </ScrollView>
    );
}

const FoodInfo = (props) => (
    <View style={{ width: 240, justifyContent: "space-evenly" }}>
        <Text style={styles.titleStyle}>{props.food.title}</Text>
        <Text>{props.food.description}</Text>
        <Text>{props.food.price}</Text>
    </View>
);

const FoodImage = ({ marginLeft, ...props }) => (
    <View>
        <Image
            source={{ uri: props.food.image }}
            style={{
                width: 100,
                height: 100,
                borderRadius: 8,
                marginLeft: marginLeft,
            }}
        />
    </View>
);
