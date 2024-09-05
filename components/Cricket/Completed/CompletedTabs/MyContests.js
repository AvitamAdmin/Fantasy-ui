import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  Pressable,
  View,
  Dimensions
} from "react-native";
import React from "react";
import { Octicons,MaterialCommunityIcons,Ionicons,AntDesign } from '@expo/vector-icons';
import { LinearGradient } from "expo-linear-gradient";
import LottieView from "lottie-react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const MyContests = () => {
  const screenWidth = Dimensions.get('window').width;

  const isTablet = screenWidth >= 768;

  return (
    <><LottieView
    source={require("../../../../assets/Congratulations.json")}
    style={{ width: wp("100%"), height: hp("100%"), position: "absolute", top: 0,zIndex:1000 }}
    autoPlay
    loop={false}
    speed={0.9}
  />
    <ScrollView
      style={{
        width: wp("100%"),
        padding: 15,
        flexDirection: "column",
        height: hp("100%"),
      }}
    >
      
      <View
        style={{
          width: wp("97%"),
          flexDirection: "column",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View
          style={{
            width: wp("95%"),
            flexDirection: "row",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <LinearGradient
            style={{
              flex: 1,
              borderRadius: 10,
            }}
            colors={["#3951B5", "#2D3F8F", "#1F2B61"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
          >
            <View
              style={{
                width: wp("93%"),
                flexDirection: "row",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: 10,
              }}>
              <View style={{ flexDirection: "row", gap: 14 }}>
                <View>
                  <Image
                    source={require("../../../../assets/WinningsTrophy.png")}
                    style={{ height: 50, width: 50 }}
                  />
                </View>
                <View style={{ flexDirection: "column" }}>
                  <Text style={{ color: "#fff", fontWeight: "bold" , fontSize:hp(1.4)}}>
                    Congratulations !
                  </Text>
                  <Text style={{ color: "#fff", fontSize:hp(1.4) }}>You’ve won in 1 Contest</Text>
                </View>
              </View>

              <View>
                <Text
                  style={{ color: "#fff", fontWeight: "bold", fontSize: hp(2.7) }}>
                  ₹1000
                </Text>
              </View>
            </View>
          </LinearGradient>
        </View>
      </View>

     
      <View style={{width: wp("100%"),padding:10,flexDirection:"column"}}>
      
      
  
      <View style={{width: wp('94%'),flexDirection:"column",display:"flex",justifyContent:"center",alignItems:"center",paddingTop:10}}>
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
      <Text style={{fontSize: hp(1.6)}}>-#1000</Text>
      </View>
  </Pressable>
  </View>
  </View>
      </View>

      </View>
    </ScrollView>
    </>
  );
};

export default MyContests;

const styles = StyleSheet.create({});
