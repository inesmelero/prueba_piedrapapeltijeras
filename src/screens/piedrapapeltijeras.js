import { SafeAreaView, StyleSheet, Text, TouchableOpacity,Image } from 'react-native';
import { useState } from 'react';

export default function juego({navigation}) {

    const [toquesPersona1, settoquespersona1] = useState(0)
    const [toquesPersona2, settoquespersona2] = useState(0)

  return (
   <SafeAreaView style={styles.container}>
    <Text style={styles.titulo}> PIEDRA, PAPEL O TIJERAS</Text>

    <Text style={styles.titulo}>PERSONA 1</Text>

        <SafeAreaView style={styles.container2}>

            <TouchableOpacity style={styles.boton} onPress={()=>{settoquespersona1 (1)}}>
                <Text style={styles.textoboton}>PIEDRA</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.boton} onPress={()=>{settoquespersona1(2)}}>
                <Text style={styles.textoboton}>PAPEL</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.boton} onPress={()=>{settoquespersona1(3)}}>
                <Text style={styles.textoboton}>TIJERAS</Text>
            </TouchableOpacity>
            
        </SafeAreaView>


        <Text style={styles.titulo}> SOLUCION:</Text>

        {(toquesPersona1==1 && toquesPersona2==1)|| (toquesPersona1==2 && toquesPersona2==2)|| (toquesPersona1==3 && toquesPersona2==3)?(
          
          <Text style={styles.titulo2}> Habeis empatado</Text>

        ):(
          
          (toquesPersona1==1 && toquesPersona2==2)?(

            <Text style={styles.titulo2}> Gana persona 2 con papel</Text>

          ):(

            (toquesPersona1==1 && toquesPersona2==3)?(

              <Text style={styles.titulo2}> Gana persona 1 con piedra</Text>
  


          ):(

            (toquesPersona1==2 && toquesPersona2==1)?(
              <Text style={styles.titulo2}> Gana persona 1 con papel</Text>


          ):(
            (toquesPersona1==2 && toquesPersona2==3)?(
              <Text style={styles.titulo2}> Gana persona 2 con tijeras</Text>


          ):(
            (toquesPersona1==3 && toquesPersona2==1)?(
              <Text style={styles.titulo2}> Gana persona 2 con piedra</Text>


          ):(
            (toquesPersona1==3 && toquesPersona2==2)?(
              <Text style={styles.titulo2}> Gana persona 1 con tijeras</Text>


          ):(
            <Text style={styles.titulo2}>A JUGAAAR!!</Text>
          )
          )
          )
          )

        )))}

        <TouchableOpacity style={styles.botonreiniciar} onPress={()=>{settoquespersona1(0), settoquespersona2(0)}}>
          <Text style={styles.textoreiniciar}>REINICIAR</Text>
        </TouchableOpacity>


         <SafeAreaView style={styles.container2}>

            <TouchableOpacity style={styles.boton} onPress={()=>{settoquespersona2(1)}}>
                <Text style={styles.textoboton}>PIEDRA</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.boton} onPress={()=>{settoquespersona2(2)}}>
                <Text style={styles.textoboton}>PAPEL</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.boton} onPress={()=>{settoquespersona2(3)}}>
                <Text style={styles.textoboton}>TIJERAS</Text>
            </TouchableOpacity>

            
        </SafeAreaView>

        <Text style={styles.titulo}>PERSONA 2</Text>


        <SafeAreaView style={styles.container3}>

          {toquesPersona1 == 1?(
            <Image style={styles.imagen} source={require('../../assets/favicon.png')}></Image>
          ):(
            <Image style={styles.imagen} source={require('../../assets/icon.png')}></Image>
          )}

            
        </SafeAreaView>

        <TouchableOpacity style={styles.botonRanking} onPress={()=>{navigation.navigate('Pantalla ranking')}}>
          <Text style={styles.textoRanking}>Ver ranking</Text>
        </TouchableOpacity>

   </SafeAreaView>

   


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
    alignItems: 'center',
    
  },

  container2: {
   flexDirection:'row',
   marginTop:50,
           
  },

  container3: {
    marginTop:10,
    width:50,
    height:50
            
   },

   imagen: {
    width:100,
    height:100
            
   },

  titulo:{
    fontWeight:'bold',
    fontSize:25,
    marginTop:50,
    color:'white'
  },

  titulo2:{

    fontWeight:'bold',
    fontSize:25,
    color:'yellow'
    
  },

  boton:{
    backgroundColor: 'orange',
    borderRadius:10,
    width:100,
    height:40,
    marginLeft:10,

    
  },

  textoboton:{
    color:'black',
    textAlign:'center',
    fontWeight:'bold',
    marginTop:10,
    
  },

  botonreiniciar:{
    backgroundColor:'green',
    borderRadius:10,
    width:100,
    height:30,
    marginTop:25,
  },

  textoreiniciar:{
    color:'white',
    fontWeight:'bold',
    textAlign:'center',
    fontSize:20,
  },

  botonRanking:{
    backgroundColor: 'red',
    borderRadius:10,
    width:250,
    height:35,
    marginLeft:10,
    marginTop:70,
  },

  textoRanking:{
    color:'white',
    textAlign:'center',
    fontSize:20,
    fontWeight:'bold'
  }
});
