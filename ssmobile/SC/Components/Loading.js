import React from 'react';
import {
    Image,
    StyleSheet,
    FlatList,
    View,
    Dimensions,
    Text,
    TouchableOpacity,
    Platform,
    StatusBar,
    I18nManager,
    ActivityIndicator
} from 'react-native';

export default class Loading extends React.Component {
    constructor(props){
        super(props);
        
    }
    
   
   
    render() {
        return(
            <>
            {(this.props.isLoading?
                    <View style={styles.container}>
                        <ActivityIndicator style={styles.loadingCircle} size="large" color="black" />
                        
                    </View>
                    :
                    <>
                    </>
                    )}
            </>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      width:'100%',
      height:'100%',
      justifyContent:'center',
      backgroundColor:'#D5DCE6',
      opacity:0.5,
      position:'absolute',
      zIndex:10000
    },
    loadingCircle:{
        paddingBottom:10
    },
    text:{
        width:'100%',
        textAlign:'center'
    }
  });
