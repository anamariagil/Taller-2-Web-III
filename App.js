import React,{useState}  from 'react';
import {Image, Picker, StyleSheet, Text, TextInput, TouchableOpacity, View, CheckBox} from 'react-native';

export default function Simulador() {
    const [id, setId] = useState('');
    const [nombre, setNombre] = useState('');
    const [destino, setDestino] = useState('');
    const [personas, setPersonas] = useState('');
    const [dias, setDias] = useState('');
    const [barco, setBarco] = useState(false);
    const [discoteca, setDiscoteca] = useState(false);
    const [total, setTotal] = useState('');

    const onLimpiar = () => {
      setId('');
      setNombre('');
      setDestino('');
      setPersonas('');
      setDias('');
      setTotal('')
    }

    const onBoton = () => {
      let res = 0;
      let resValor = 0;
      let resTotal = 0;
      if (id=='' || nombre=='' || destino=='' || personas=='' || dias==''){
          alert('Debe ingresar todos los datos')
      }else{
        if (personas<10){
            switch (destino){
                case '1':
                    res = (parseFloat(personas)*300000)*parseFloat(dias);
                break;
                case '2':
                    res = (parseFloat(personas)*250000)*parseFloat(dias);
                break;
                case '3':
                    res = (parseFloat(personas)*200000)*parseFloat(dias);
                break;
            }
            barco ? res=res+(100000*parseFloat(personas)) : resTotal = res
            discoteca ? res=res+(120000*parseFloat(personas)) : resTotal = res
            resTotal = res 
        }
        if(personas>10){
            alert("Ya que son más de 10 personas, tienen un descuento del 10%")
            switch (destino){
                case '1':
                    res = (parseFloat(personas)*300000)*parseFloat(dias);
                break;
                case '2':
                    res = (parseFloat(personas)*250000)*parseFloat(dias);
                break;
                case '3':
                    res = (parseFloat(personas)*200000)*parseFloat(dias);
                break;
            }
            barco ? res=res+(100000*parseFloat(personas)) : resTotal = res
            discoteca ? res=res+(120000*parseFloat(personas)) : resTotal = res
            resTotal = res - ((res*10)/100) 
        }
    setTotal(resTotal)
      }
        
    };
  return (
    <View>
      <View>
        <Text>{"\n"}</Text>
        <Text>{"\n"}</Text>
        <Text style={{alignSelf: 'center', fontFamily: 'Segoe UI', fontSize: 40, color: '#9B00FF'}}>Agencia de turismo</Text>
        <Text>{"\n"}</Text>
        <Image source={require('./images/Rick&Morty.jpg')} style={{width:200,height:100,borderRadius:10,flex: 1, alignSelf: "center"}} />
        <Text>{"\n"}</Text>
        <Text>{"\n"}</Text>
      </View>
      <View style={styles.cuadro}>
        <Text style={styles.textos}>Identificación:    </Text>
        <TextInput type="number" style={styles.espacios} onChangeText={id =>setId(id)} value={id}></TextInput>
      </View>
      <Text>{"\n"}</Text>
      <View style={styles.cuadro}>
        <Text style={styles.textos}>Nombre:    </Text>
        <TextInput type="text" style={styles.espacios} onChangeText={nombre =>setNombre(nombre)} value={nombre}></TextInput>
      </View>
      <Text>{"\n"}</Text>
      <View style={styles.cuadro}>
        <Text style={styles.textos}>Destino     </Text>
        <Picker selectedValue={destino} onValueChange={(itemValue, itemIndex) => setDestino(itemValue)} style={{backgroundColor:'#E1B3FF', borderRadius:2, borderWidth:2, color:'black'}}>
          <Picker.Item value="1" label="Cartagena" />
          <Picker.Item value="2" label="Santa Marta" />
          <Picker.Item value="3" label="San Andrés" />
        </Picker>
      </View>
      <Text>{"\n"}</Text>
      <View style={styles.cuadro}>
        <Text style={styles.textos}>Número de personas:    </Text>
        <TextInput type="number" style={styles.espacios} onChangeText={personas =>setPersonas(personas)} value={personas}></TextInput>
        <Text>{"\n"}</Text>
      </View>
      <Text>{"\n"}</Text>
      <View style={styles.cuadro}>
        <Text style={styles.textos}>Número de días:    </Text>
        <TextInput type="number" style={styles.espacios} onChangeText={dias =>setDias(dias)} value={dias}></TextInput>
        <Text>{"\n"}</Text>
      </View>
      <Text>{"\n"}</Text>
        <View style={styles.cuadro}>
            <Text style={styles.textos}>Adicionales     </Text>
            <View style={styles.cuadro2}>
                <View style={{flexDirection:'row'}}>    
                    <CheckBox value={barco} onValueChange={setBarco} style={{borderRadius:5, borderWidth:0.2, color:'black'}}/>
                    <Text style={styles.textos2}>  Barco</Text>
                </View>
                <View style={{flexDirection:'row'}}>
                    <CheckBox value={discoteca} onValueChange={setDiscoteca} style={{borderRadius:5, borderWidth:0.2, color:'black'}}/>
                    <Text style={styles.textos2}>  Discoteca</Text>
                </View>
            </View>        
        </View>
      <Text>{"\n"}</Text>
      <View style={styles.cuadro}>
        <Text style={styles.textos}>Total a pagar:    </Text>
        <TextInput type="number" placeholder={setTotal} style={styles.espacios} onChangeText={total =>setTotal(total)} value={total}></TextInput>
      </View>
      <Text>{"\n"}</Text>
      <Text>{"\n"}</Text>
      <View style={styles.cuadro}>
        <TouchableOpacity style={styles.boton} onPress={()=>onBoton()}>
          <Text style={styles.textos}>
            Calcular
          </Text>
        </TouchableOpacity>
        <Text>             </Text>
        <TouchableOpacity style={styles.boton} onPress={()=>onLimpiar()}>
          <Text style={styles.textos}>
            Limpiar
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  espacios: {
      borderRadius:2,
      borderBottomWidth:2,
      color:'black'
  },
  cuadro: {
      alignSelf: 'center',
      flexDirection:'row', 
      flexWrap:'wrap'
  },
  cuadro2: {
    alignSelf: 'center',
    flexDirection:'column', 
    flexWrap:'wrap'
  },
  textos: {
      fontFamily: 'Segoe UI',
      fontSize : 20,
  },
  textos2: {
    fontFamily: 'Segoe UI',
    fontSize : 16,
  },
  boton: {
    backgroundColor:'#E1B3FF',
    padding:5,
    borderRadius:5,
    margin:1,
    borderWidth:1,
    borderColor:'black',
  },
})
