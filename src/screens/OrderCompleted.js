import { View, Text } from 'react-native'
import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux';
import { SafeAreaView } from 'react-native-safe-area-context';
import LottieView from 'lottie-react-native'
import MenuItems from '../components/restaurantDetail/MenuItems';
import { db } from '../firebase/firebase';
import { ScrollView } from 'react-native-gesture-handler';

export default function OrderCompleted() {
    const [lastOrder, setLastOrder] = useState({
        items: [
            {
                title: "Bologna",
                price: "$15.00",
                description: "Bologna is a city in Italy, located on the Adriatic coast. Bologna is the second-largest city in Italy, after Milan.",
                image: "https://www.thespruceeats.com/thmb/-YUYSXc4T2H4P8o2JBApzJ3F5rw=/2069x2069/smart/filters:no_upscale()/white-and-red-sauce-lasagna-recipe-995925-hero-1-fb2c2142b39042069f0c50310047256d.jpg",
            }
        ]
    });
    const { items, restaurantName } = useSelector(state => state.cartReducer.selectedItems);

    const total = items
        .map((item) => Number(item.price.replace('$', '')))
        .reduce((prev, curr) => prev + curr, 0);

    const totalUSD = total.toLocaleString('en', { style: 'currency', currency: 'USD' });

    useEffect(() => {
        const unsubscribe = db.collection("orders").orderBy('restaurantName', 'asc').onSnapshot((snapshot) => {
            snapshot.docs.map((doc) => {
                setLastOrder(doc.data());
            })
        })

        return () => unsubscribe();
    }, [])

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white', }} >
            <View style={{ margin: 10, alignItems: 'center', height: "100%" }} >
                <LottieView
                    style={{ height: 100, alignSelf: 'center', marginBottom: 30 }}
                    source={require('../../assets/animations/check-mark.json')}
                    autoPlay
                    speed={0.5}
                    loop={false}
                />
                <Text style={{ fontSize: 20, fontWeight: 'bold' }} >Your order at {restaurantName} has been placed for ${totalUSD}</Text>
                <ScrollView>
                    <MenuItems foods={lastOrder.items} hideCheckbox />
                    <LottieView
                        style={{ height: 200, alignSelf: 'center', marginBottom: 30 }}
                        source={require('../../assets/animations/cooking.json')}
                        autoPlay
                        speed={0.5}
                        loop
                    />
                </ScrollView>
            </View>
        </SafeAreaView>
    )
}