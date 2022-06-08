import { View, Text } from "react-native";
import React from "react";
import { Divider } from "react-native-elements/dist/divider/Divider";
import About from "../components/restaurantDetail/About";
import MenuItems from "../components/restaurantDetail/MenuItems";
import ViewCart from "../components/restaurantDetail/ViewCart";

const foods = [
    {
        title: "Lasanha",
        description:
            "Lasanha com carne moída, acompanhada de temperos especiais",
        price: "$13.50",
        image: "https://www.thespruceeats.com/thmb/-YUYSXc4T2H4P8o2JBApzJ3F5rw=/2069x2069/smart/filters:no_upscale()/white-and-red-sauce-lasagna-recipe-995925-hero-1-fb2c2142b39042069f0c50310047256d.jpg",
    },
    {
        title: "Tomato",
        description:
            "Tomates orgânicos, acompanhado azeite de oliva e sal",
        price: "$7.60",
        image: "https://static.tuasaude.com/media/article/cd/dd/beneficios-do-tomate_14243_l.jpg",
    },
    {
        title: "Filé Mignon",
        description:
            "Lasanha com carne moída, acompanhada de temperos especiais",
        price: "$28.96",
        image: "https://media.istockphoto.com/photos/fresh-raw-prime-black-angus-beef-steaks-on-wooden-board-picture-id587953150?k=20&m=587953150&s=612x612&w=0&h=wzjtxcTKBxjF5Y7upBKeZj62yZhpv-2718rTyEJTJqU=",
    },
    {
        title: "Pasta",
        description:
            "Massa com molho de tomate, acompanhada de temperos verdes",
        price: "$21.62",
        image: "https://assetcdn.buhlergroup.com/image/874601345621/1f9a88a855e0452cbb353b224459e4b7/-FJPG-C3252x1830%2C0%2C197-S3200x1800",
    },
    {
        title: "Sushi",
        description:
            "Sushi, acompanhado de frutos do mar",
        price: "$15.25",
        image: "https://www.ufrgs.br/laranjanacolher/wp-content/uploads/2021/08/1.png",
    },
    {
        title: "Lasanha",
        description:
            "Lasanha com carne moída, acompanhada de temperos especiais",
        price: "$13.50",
        image: "https://www.thespruceeats.com/thmb/-YUYSXc4T2H4P8o2JBApzJ3F5rw=/2069x2069/smart/filters:no_upscale()/white-and-red-sauce-lasagna-recipe-995925-hero-1-fb2c2142b39042069f0c50310047256d.jpg",
    },
    {
        title: "Tomato",
        description:
            "Lasanha com carne moída, acompanhada de temperos especiais",
        price: "$7.60",
        image: "https://static.tuasaude.com/media/article/cd/dd/beneficios-do-tomate_14243_l.jpg",
    },
    {
        title: "Filé Mignon",
        description:
            "Lasanha com carne moída, acompanhada de temperos especiais",
        price: "$28.96",
        image: "https://media.istockphoto.com/photos/fresh-raw-prime-black-angus-beef-steaks-on-wooden-board-picture-id587953150?k=20&m=587953150&s=612x612&w=0&h=wzjtxcTKBxjF5Y7upBKeZj62yZhpv-2718rTyEJTJqU=",
    },
    {
        title: "Pasta",
        description:
            "Massa com molho de tomate, acompanhada de temperos verdes",
        price: "$21.62",
        image: "https://assetcdn.buhlergroup.com/image/874601345621/1f9a88a855e0452cbb353b224459e4b7/-FJPG-C3252x1830%2C0%2C197-S3200x1800",
    },
    {
        title: "Sushi",
        description:
            "Sushi, acompanhado de frutos do mar",
        price: "$15.25",
        image: "https://www.ufrgs.br/laranjanacolher/wp-content/uploads/2021/08/1.png",
    },
];

export default function RestaurantDetail({ route, navigation }) {
    return (
        <View>
            <About route={route} />
            <Divider width={1.8} style={{ marginTop: 20 }} />
            <MenuItems restaurantName={route.params.name} foods={foods} />
            <ViewCart navigation={navigation} />
        </View>
    );
}
