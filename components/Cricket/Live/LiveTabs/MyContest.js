import { Pressable, ScrollView, StyleSheet, Text, View, Dimensions } from 'react-native'
import React from 'react'
import { Octicons,MaterialCommunityIcons,Ionicons,AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


const MyContests = ({setShow,show}) => {
  const navigation = useNavigation();

  const screenWidth = Dimensions.get('window').width;

  // Determine if the device is a tablet or mobile
  const isTablet = screenWidth >= 768
  return (
    <ScrollView style={{width: wp("100%"),padding:10,flexDirection:"column"}}>
      
    <View style={{width: wp("95%"),display:"flex",flexDirection:"row",justifyContent:"flex-end",gap:10}}>
    <Pressable style={{width: wp("30%"),
      display:"flex",
      flexDirection:"row",
      justifyContent:"center",
      gap:10,
      borderRadius:30,
      borderWidth:1,
      opacity:0.7,
      alignItems:"center",
      alignContent:"center",
      height: isTablet ? hp(4) : hp(3.8),}}>
    <View>
     <Octicons name="filter" size={20} color="black" />
     </View>
     <View>
        <Text style={{fontSize: hp(1.5)}}>In Winning Zone</Text>
     </View>
     </Pressable>

    </View>

    <View style={{width: wp('95%'),flexDirection:"column",display:"flex",justifyContent:"center",alignItems:"center",paddingTop:10}}>
    <View style={{width: wp("95%"),display:"flex",flexDirection:"column",justifyContent:"center",gap:10,borderWidth:1,borderRadius:10,borderColor:"#BCBCBC"}}>

<Pressable onPress={()=> setShow(true)} style={{flexDirection:"column",gap:5,padding:10}}>
 <View style={{flexDirection:"row", width: isTablet ? wp('91%') : wp('89%'),display:"flex",justifyContent:"space-between"}}>
      <Text style={{fontSize: hp(1.5)}}>Prize Pool</Text>
      <Text style={{fontWeight:"bold",fontSize: hp(1.5),}}>Sports</Text>
      <Text style={{fontSize: hp(1.5)}}>Entry</Text>
 </View>
 <View style={{flexDirection:"row", width: isTablet ? wp('90%') : wp('88%'),display:"flex",justifyContent:"space-between"}}>
      <Text style={{fontWeight:"bold",fontSize: hp(1.5)}}>₹8 Crores</Text>
      <Text style={{fontSize: hp(1.5)}} >28,89,129 posts</Text>
      <Text style={{fontWeight:"bold",fontSize: hp(1.5)}}>₹39</Text>
 </View>
</Pressable>

<View style={{flexDirection:"column"}}>
<View style={{flexDirection:"row", width:  wp('94%') ,display:"flex",justifyContent:"flex-start",backgroundColor:"#EBEBEB"}}>
  <View style={{flexDirection:"row",width: isTablet ? wp('35%') : wp('58%'),display:"flex",justifyContent:"space-between",paddingLeft:10,height:20}}>
  <View style={{flexDirection:"row",gap:5}}>
   <View style={{borderWidth:1,borderRadius:30,height:20,width:20}}>
     <Text style={{fontSize:hp(1),padding:3}}>1st</Text>
   </View>
   <Text >40Lakhs</Text>
   </View>
   <View style={{flexDirection:"row",gap:5}}>
   <MaterialCommunityIcons name="alpha-m-circle-outline" size={23} color="black" />
   <Text>Upto 20</Text>
   </View>
   <View style={{flexDirection:"row",gap:5}}>
   <Ionicons name="trophy-outline" size={22} color="black" />        
   <Text>62%</Text>
   </View>
  </View>
</View>

<Pressable onPress={()=> navigation.navigate("CaptainandViceCaptain")} 
style={{flexDirection:"row",width:wp("94%"),display:"flex",justifyContent:"space-between",
backgroundColor:"#E4E8FF",alignItems:"center",paddingTop:15,paddingBottom:10}} >

    <View style={{flexDirection:"column",gap:6,paddingLeft:10}}>
     <Text style={{fontWeight:"bold"}}>Shivam 11s</Text>
      <View style={{flexDirection:"row",alignItems:"center",gap:4}}>
      <MaterialCommunityIcons name="party-popper" size={24} color="green" />
      <Text style={{color:"green"}}>In Wining zone</Text>
      </View>
    </View>

    <View style={{flexDirection:"row",gap:5}}>
        
             <View style={{backgroundColor:"#D9D9D9",height:20,width:25,borderRadius:7,alignItems:"center"}}>
             <Text style={{fontWeight:"bold"}}>T1</Text>
             </View>    
             <View>
               <Text style={{fontWeight:'bold'}}>309</Text>
               </View>         
    </View>

    <View style={{flexDirection:"row",gap:5,paddingRight:10}}>
    <AntDesign name="caretup" size={20} color="green" />
    <Text style={{fontSize: hp(2)}}>#1</Text>
    </View>
</Pressable>
</View>
</View>
    </View>
    </ScrollView>
  )
}

export default MyContests

const styles = StyleSheet.create({})