import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ViewStyle, TextStyle } from 'react-native';

interface ButtonProps {
    onPress: () => void;
    title: string;
    style?: ViewStyle;
    textStyle?: TextStyle;
    disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ onPress, title, style, textStyle, disabled }) => (
    <TouchableOpacity
        style={[styles.button, style, disabled && styles.disabled]}
        onPress={onPress}
        disabled={disabled}
    >
        <Text style={[styles.text, textStyle]}>{title}</Text>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#007AFF',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
    },
    disabled: {
        backgroundColor: '#cccccc',
    },
    text: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default Button;