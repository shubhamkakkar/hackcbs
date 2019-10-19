import React from "react";
import {TextInput, View, Text} from "react-native"

type ButtonProps = {
    title: string
}

type TFormFields = {
    title: string,
    secureTextEntry: boolean

}

function FormField({title, secureTextEntry}: TFormFields) {
    return (
        <>
            <View>
                <Text>
                    {title}
                </Text>
            </View>
            <View>
                <TextInput
                    blurOnSubmit={true}
                    clearTextOnFocus={true}
                    style={[{
                        borderBottomWidth: 1,
                        marginBottom: 7.5,
                        padding: 0
                    },]}

                />
            </View>
        </>
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
        <View style={{flex: 1}}>
            {
                loginFormFields.map((props: TFormFields) => (
                    <FormField {...props} />
                ))
            }
        </View>
    )
}
