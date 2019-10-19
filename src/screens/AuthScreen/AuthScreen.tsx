import React from "react";
import Constants from 'expo-constants';
import {LinearGradient} from 'expo-linear-gradient'
import {TextInput, View, Text, StyleSheet, Image, KeyboardAvoidingView, TouchableOpacity} from "react-native"

type ButtonProps = {
    title: string
}

type TFormFields = {
    title: string,
    secureTextEntry: boolean
}

function FormField({title, secureTextEntry}: TFormFields) {
    return (
        <View>
            <View>
                <Text style={{color: "#303f9f"}}>
                    {title}
                </Text>
            </View>
            <TextInput
                {...{secureTextEntry}}
                blurOnSubmit={true}
                clearTextOnFocus={true}
                style={[{
                    borderBottomWidth: 1,
                    marginBottom: 7.5,
                    borderBottomColor: "#303f9f"
                }]}
            />
        </View>
    )
}

export default function AuthScreen() {

    const Button = React.memo(({title}: ButtonProps) =>
        <button>
            {title}
        </button>
    )

    const loginFormFields = React.useMemo((): TFormFields[] => ([
        {
            title: "Email",
            secureTextEntry: false
        },
        {
            title: "Password",
            secureTextEntry: true
        },
    ]), []);

    return (
        <KeyboardAvoidingView style={s.flex1} behavior="padding" enabled contentContainerStyle={{flexGrow: 1}}>
            <LinearGradient colors={["#fff", "#e9defa"]}
                            style={{flex: 1, padding: 10, marginTop: Constants.statusBarHeight}}>
                <View style={[s.center, s.flex1, s.alignCenter]}>
                    <Image source={{uri: 'https://cdn.dribbble.com/users/4598/screenshots/3706567/flavors.jpg'}}
                           style={{width: 100, height: 100, resizeMode: "contain"}}/>
                    <Text style={{color: "#0A10C8", textAlign: "center", fontSize: 22, fontWeight: "bold"}}> Food
                        Kart </Text>
                </View>
                <View style={[s.flex2, s.center]}>
                    {
                        loginFormFields.map((props: TFormFields, key: number) => (
                            <FormField {...props} key={key}/>
                        ))
                    }
                </View>
                <View>
                    <TouchableOpacity>
                        <Text>shubham</Text>
                    </TouchableOpacity>
                </View>
            </LinearGradient>
        </KeyboardAvoidingView>
    )
}


const s = StyleSheet.create({
    flex1: {
        flex: 1,
    },
    flex2: {
        flex: 2,
    },
    center: {
        justifyContent: "center",
    },
    alignCenter: {
        alignItems: "center"
    }
});
