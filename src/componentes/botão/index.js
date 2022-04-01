import React,{Fragment} from 'react';
import {View,Image,Text,TouchableOpacity,StyleSheet} from 'react-native';
import {Ionicons} from '@expo/vector-icons';

    export default function Botao({Logo,texto,cor,Logo2,texto2,cor2}){

        return(
            <View style={estilo.containerBotoes1}>
            <TouchableOpacity style={[estilo.botoes ,{backgroundColor:cor}]}>
            <Ionicons name= {Logo} size={20} color="white"
            
            style= {{marginRight:10}}/>
            <Text style ={estilo.textoBotao} > {texto} </Text>

            </TouchableOpacity>

            <TouchableOpacity TouchableOpacity style={[estilo.botoes ,{backgroundColor:cor2}]}>
            <Ionicons name= {Logo2} size={20} color="white"

            style = {{maginRitght:10}}/>
                <Text style ={estilo.textBotao} > {texto2} </Text>
                
                </TouchableOpacity>
                
                </View>



            
        );

    }
    const estilo = StyleSheet.create({
        containerBotoes1:{
            flexDirection:'row',
            marginBottom: 10,
            justifyContent:"center"

        },
        textBotao:{
            color :'black',
            fontWeight:'bold'
        },
        botoes:{
            padding:5,
            marginHorizontal:10,
            width:'45%',
            alignContent:'center',
            justifyContent:'flex-start',

            frontSize:12,
            color:'white',
            flexDirection:'row',

        }




    })