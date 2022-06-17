import React from 'react';
import { StyleSheet } from 'react-native';
import { View, Button } from 'native-base';

export default function Home({ navigation }) {
    return (
        <View
            height={'100%'}
            alignItems={'center'}
            justifyContent={'center'}
            style={styles.container}
        >
            <Button
                bgColor={'primary.400'}
                width={'300px'}
                height={'300px'}
                borderRadius={'50%'}
                fontSize={'10rem'}
                onPress={() => navigation.navigate('GotCovid')}
            >
                Got Covid?
            </Button>
            <Button
                colorScheme={'primary'}
                borderRadius={300}
                onPress={() => navigation.navigate('Login')}
            >
                Login
            </Button>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
    },
});
