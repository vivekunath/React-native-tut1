import React from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';

function Header(){
    return(
        <View style={styles.header}>
            <Image>
                source={require('')}
                style={styles.cart}
            </Image>
            <Text style={styles.logo}></Text>
        </View>
    );
}

export default Header;

const styles = StyleSheet.create({
    header:{
        width: "100%",
        height: "100%",
        flexDirection: "row",
        alignItems:"center",
        justifyContent:"centre"
    },
    logo:{

    },
    cart:{

    }
});
