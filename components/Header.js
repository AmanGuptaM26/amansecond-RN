import React from 'react';
import { StyleSheet, View, Text } from 'react-native';


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
        backgroundColor: '#f7287b',
        alignItems: 'center',
        justifyContent: 'center'
    },
    headerText: {
        color: 'black',
        fontSize: 18
    }
});

export default Header;