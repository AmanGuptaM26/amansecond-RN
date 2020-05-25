import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Colors from '../constants/Colors';

const Header = props => {
    return (<View style={headerStyles.headerView}>
        <Text style={headerStyles.headerText} >
            {props.title}
        </Text>
    </View>
    )
};

const headerStyles = StyleSheet.create({
    headerView: {
        width: '100%',
        height: 90,
        paddingTop: 36,
        backgroundColor: Colors.headerbackground,
        alignItems: 'center',
        justifyContent: 'center'
    },
    headerText: {
        color: 'black',
        fontSize: 18
    }
});

export default Header;