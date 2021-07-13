import React from 'react';
import { TextInput, View } from 'react-native';

const InputField = ({ error, touched, ...otherProps }) => {
    const corValidacao = !touched ? '#1c2247' : error ? '#f00' : '#1c2247';
    return (
        <View style={{
            flexDirection: 'row',
            alignItems: 'center',
            borderColor: corValidacao,
            borderWidth: 1,
        }}>
            <View style={{ flex: 1 }}>
                <TextInput
                    {...otherProps} />
            </View>
        </View>
    );
};

export default InputField;