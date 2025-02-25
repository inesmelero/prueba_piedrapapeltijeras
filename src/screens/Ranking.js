import { SafeAreaView, StyleSheet, Text, TouchableOpacity,Image } from 'react-native';


export default function ranking({navigation}) {

    return(

        <SafeAreaView style={styles.container}>

            <Text style= {styles.texto}>ESTOY EN RANKING</Text>

            <TouchableOpacity style={styles.botonvolver} onPress={()=>{navigation.navigate('Pantalla Inicial')}}>
                <Text style={styles.textovolver}>VOLVER A JUEGO</Text>
            </TouchableOpacity>

        </SafeAreaView>

    )

}


const styles = StyleSheet.create({


    container: {
        flex: 1,
        backgroundColor: 'blue',
        alignItems: 'center',
        
      },

      texto:{
        fontSize:50,
        color:'white'
      },

      botonvolver:{
        backgroundColor:'green',
        width:200,
        height:40,
        borderRadius:10,
        justifyContent:'center',
        marginTop:80,
      },

      textovolver:{
        color:'white',
        fontSize:20,
        textAlign:'center',
        fontWeight:'bold',
      }
    
})
