import { View, Text, TouchableOpacity, Modal, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import OrderItem from './OrderItem';
import { db } from '../../firebase/firebase';
import LottieView from 'lottie-react-native'

export default function ViewCart({ navigation }) {
    const [modalVisible, setModalVisible] = useState(false)
    const [loading, setLoading] = useState(false)


    const { items, restaurantName } = useSelector(state => state.cartReducer.selectedItems);

    const total = items
        .map((item) => Number(item.price.replace('$', '')))
        .reduce((prev, curr) => prev + curr, 0);

    const totalUSD = total.toLocaleString('en', { style: 'currency', currency: 'USD' });

    const addOrderToFirebase = () => {
        setLoading(true)
        db.collection('orders').add({
            items: items,
            restaurantName: restaurantName,
        }).then(() => {
            setTimeout(() => {
                setLoading(false)
                navigation.navigate('OrderCompleted');
            }, 2500)
        });
    }

    const styles = StyleSheet.create({
        modalContainer: {
            flex: 1,
            justifyContent: 'flex-end',
            backgroundColor: 'rgba(0,0,0,0.7)',
        },
        modalCheckoutContainer: {
            backgroundColor: 'white',
            padding: 16,
            height: 500,
            borderWidth: 1,
        },
        restaurantName: {
            fontSize: 18,
            marginBottom: 10,
            textAlign: 'center',
            fontWeight: 'bold'
        },
        subtotalContainer: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 15
        },
        subtotalText: {
            textAlign: 'left',
            fontWeight: 'bold',
            fontSize: 15,
            marginBottom: 10
        },
    });

    const checkoutModalContent = () => {
        return (
            <>
                <View style={styles.modalContainer} >
                    <View style={styles.modalCheckoutContainer}>
                        <Text style={styles.restaurantName}>
                            {restaurantName}
                        </Text>
                        {items.map((item, index) => (
                            <OrderItem key={index} item={item} />
                        ))}
                        <View style={styles.subtotalContainer}>
                            <Text style={styles.subtotalText} >Subtotal</Text>
                            <Text>${totalUSD}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                            <TouchableOpacity onPress={() => { addOrderToFirebase(); setModalVisible(false); }} style={{ marginTop: 20, backgroundColor: 'black', alignItems: 'center', padding: 13, width: 300, position: 'relative', borderRadius: 30 }} >
                                <Text style={{ color: 'white', fontSize: 20 }} >Checkout</Text>
                                <Text style={{ position: 'absolute', right: 20, color: 'white', fontSize: 15, top: 17 }} >{total ? "$" + totalUSD : ""}</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                </View>
            </>
        )
    }

    return (
        <>
            <Modal animationType='slide' visible={modalVisible} transparent={true} onRequestClose={() => setModalVisible(false)}>
                {checkoutModalContent()}
            </Modal>

            {total ? (
                <View
                    style={{
                        flex: 1,
                        alignItems: 'center',
                        flexDirection: 'row',
                        position: 'absolute',
                        justifyContent: 'center',
                        bottom: 330,
                        zIndex: 999
                    }}
                >
                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'center',
                            width: "100%"
                        }}
                    >
                        <TouchableOpacity
                            style={{
                                backgroundColor: 'black',
                                alignItems: 'center',
                                flexDirection: 'row',
                                justifyContent: 'center',
                                padding: 15,
                                borderRadius: 30,
                                width: 300,
                                position: 'relative'
                            }}
                            onPress={() => setModalVisible(true)}
                        >
                            <Text
                                style={{
                                    color: 'white',
                                    fontSize: 20,
                                    marginRight: 13
                                }} >
                                View Cart
                            </Text>
                            <Text
                                style={{ color: 'white', fontSize: 20 }}
                            >
                                ${totalUSD}
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            )
                : <></>}
            {loading ? (
                <View style={{ backgroundColor: 'black', position: 'absolute', opacity: 0.6, justifyContent: 'center', alignItems: 'center', height: "100%", width: "100%" }}>

                    <LottieView style={{ height: 200 }} source={require('../../../assets/animations/scanner.json')} autoPlay speed={3} />
                </View>
            ) : (<></>)}
        </>
    )
}