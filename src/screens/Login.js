import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import InputBox from '../components/InputBox'

import { signInWithEmailAndPassword, getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import { firebaseConfig } from '../firebase/firebase'
import { initializeApp } from '@firebase/app'

export default function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const app = initializeApp(firebaseConfig)
    const auth = getAuth(app)

    const handleCreateAccount = () => {
        createUserWithEmailAndPassword(email, password)
            .then((userCredential) => {
                console.log('Account created')
                const user = userCredential.user;
                console.log(user)
            })
            .catch(error => {
                console.log(error)
            })
    }

    async function handleLogin() {
        try {
            signInWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    console.log('Login success')
                    const user = userCredential.user;
                    console.log(user)
                })
                .catch(error => {
                    console.log(error)
                })
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <SafeAreaView style={{ justifyContent: "center", alignItems: 'center', padding: 15, flex: 1, backgroundColor: "#6843" }}>
            <Image style={{ width: "100%" }} source={require('../../assets/images/logo.png')} resizeMode="contain" />
            <View style={{ width: "100%", height: "50%", marginTop: -50 }} >
                <Text style={{ fontSize: 16, fontWeight: 'bold', marginBottom: 5 }}>Login</Text>
                <InputBox onChangeText={(text) => setEmail(text)} placeholder="E-mail" />
                <Text style={{ fontSize: 16, fontWeight: 'bold', marginBottom: 5 }}>Senha</Text>
                <InputBox onChangeText={(text) => setPassword(text)} placeholder="Senha"  />
                <TouchableOpacity
                    style={{
                        width: "auto",
                        height: 35,
                        backgroundColor: "#3FC060",
                        flexDirection: "row",
                        borderRadius: 5,
                        justifyContent: "center",
                        alignItems: "center",
                        marginBottom: 15,
                    }}
                    onPress={() => handleLogin()}
                    activeOpacity={0.7}
                >
                    <Text style={{ fontSize: 16, fontWeight: 'bold', color: "#FFF" }}>Acessar</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{
                        width: "auto",
                        height: 35,
                        backgroundColor: "#000000",
                        flexDirection: "row",
                        borderRadius: 5,
                        justifyContent: "center",
                        alignItems: "center",
                        marginBottom: 15,
                    }}
                    onPress={() => handleCreateAccount()}
                    activeOpacity={0.7}
                >
                    <Text style={{ fontSize: 16, fontWeight: 'bold', color: "#FFF" }}>Cadastrar</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}
