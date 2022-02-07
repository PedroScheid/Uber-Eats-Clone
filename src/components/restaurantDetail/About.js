import { View, Text, Image } from "react-native";
import React from "react";

const yelpRestaurantInfo = {
    name: "Farmhouse kitchen thai cuisine",
    image: "https://www.ndtv.com/cooks/images/tossed-mixed-salad-620.jpg",
    price: "$$",
    reviews: "15023",
    rating: "4,5 ",
    categories: [{ title: "Thai" }, { title: "Comfort Food" }],
};

const image = "https://www.ndtv.com/cooks/images/tossed-mixed-salad-620.jpg";

const title = "Farmhouse kitchen thai cuisine";
const description = "Thai confourt º 4,5 ";

export default function About() {
    return (
        <View>
            <RestaurantImage image={image} />
            <RestaurantTitle title={title} />
            <RestaurantDescription description={description} />
        </View>
    );
}

const RestaurantImage = (props) => (
    <Image
        source={{ uri: props.image }}
        style={{ width: "100%", height: 180 }}
    />
);

const RestaurantTitle = (props) => (
    <Text
        style={{
            fontSize: 29,
            fontWeight: "bold",
            marginTop: 10,
            marginHorizontal: 15,
        }}
    >
        {props.title}
    </Text>
);

const RestaurantDescription = (props) => (
    <Text style={{ marginTop: 10, marginHorizontal: 15, fontSize: 15.5 }}>
        {props.description}
    </Text>
);
