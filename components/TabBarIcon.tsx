import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { useColorScheme } from 'react-native';
import Colors from '@/constants/Colors';

export type TabBarIconProps = {
    name: React.ComponentProps<typeof Ionicons>['name'];
    color: string;
};

export function TabBarIcon(props: TabBarIconProps) {
    const colorScheme = useColorScheme();
    return (
        <Ionicons
            size={28}
            style={{ marginBottom: -3 }}
            {...props}
            color={props.color || Colors[colorScheme ?? 'light'].tabIconDefault}
        />
    );
}