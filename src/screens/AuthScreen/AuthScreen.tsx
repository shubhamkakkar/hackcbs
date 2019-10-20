import React from "react";
import Constants from 'expo-constants';
import {LinearGradient} from 'expo-linear-gradient'
import {Animated, TextInput, View, Text, StyleSheet, Image, KeyboardAvoidingView, TouchableOpacity} from "react-native"

type ButtonProps = {
    title: string
    backgroundColor: string
    color: string,
    onPress: () => void
}

type TFormFields = {
    title: string,
    secureTextEntry: boolean
}

let formFields: TFormFields[] = [
    {
        title: "Email",
        secureTextEntry: false
    },
    {
        title: "Password",
        secureTextEntry: true
    },
]

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
    const [isToggle, toggle] = React.useState(false);
    const [_formFields, setFormFields] = React.useState([...formFields]);
    const FormWrapper = React.memo(({children}) => (
        <View style={[s.flex1, s.formWrapper]}>
            {children}
        </View>
    ));
    const ViewOne = React.memo(() => (
        <View style={[s.center, s.flex1, s.alignCenter]}>
            <Image source={{uri: 'https://cdn.dribbble.com/users/4598/screenshots/3706567/flavors.jpg'}}
                   style={{width: 100, height: 100, resizeMode: "contain"}}/>
            <Text style={{color: "#0A10C8", textAlign: "center", fontSize: 22, fontWeight: "bold"}}> Food
                Kart </Text>
        </View>
    ));

    const LoginSigninButton = (({title, backgroundColor, color, onPress}: ButtonProps) => (
        <View style={[s.flex1, s.center, s.alignCenter, {
            borderRadius: 10,
            marginHorizontal: 5,
            padding: 20,
            backgroundColor
        },]}>
            <TouchableOpacity style={{borderRadius: 10}} {...{onPress}} >
                <Text style={{color}}>{title}</Text>
            </TouchableOpacity>
        </View>
    ));

    React.useEffect(() => {
        if (_formFields.length === 3) {

        }
    }, [isToggle])

    return (
        <KeyboardAvoidingView style={[s.flex1, {marginTop: Constants.statusBarHeight}]} behavior="padding" enabled
                              contentContainerStyle={{flexGrow: 1}}>
            <LinearGradient style={s.flex1} colors={["#FFFEFF", "#D7FFFE"]}>
                <ViewOne/>

                {
                    isToggle && (
                        <FormWrapper>
                            <View style={[s.flex2, s.center]}>
                                {
                                    _formFields.map((props: TFormFields, key: number) => (
                                        <FormField {...props} key={key}/>
                                    ))
                                }
                            </View>
                        </FormWrapper>
                    )
                }
                <View style={{
                    flexDirection: "row",
                    justifyContent: "space-around",
                    margin: 10
                }}>
                    <LoginSigninButton onPress={() => {
                        toggle(true);

                        if (_formFields.length === 3) {
                            setFormFields(formFields)
                        }
                    }} title={"Log In"} backgroundColor={"#0A10C8"} color={"white"}/>
                    <LoginSigninButton
                        onPress={() => {
                            toggle(true)
                            let temp = [
                                ...formFields,
                                {
                                    title: "Confirm Password",
                                    secureTextEntry: true
                                }
                            ];
                            setFormFields(temp)
                        }}
                        title={"Sign In"} color={"#0A10C8"} backgroundColor={"white"}/>
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
    },
    formWrapper: {
        padding: 20,
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        backgroundColor: "white"
    }
});
