import React from "react";
import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/core";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { Dimensions } from 'react-native';
import { useWindowDimensions } from 'react-native';

const DrawerHeader = (props) => {
  const { width: screenWidth } = useWindowDimensions();
    const navigation = useNavigation()
    const imageSize = screenWidth >= 768 ? screenWidth * 0.2 : screenWidth * 0.2;
  return (
    <DrawerContentScrollView {...props}>
      <View style={{padding: 10,
    alignItems: "center"}}>
        {/* User profile show name and level in star */}
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            width: wp("100%"),
            justifyContent: "space-evenly",
            alignItems: "center",
            
          }}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              gap: 8,
              justifyContent: "space-between",
              alignItems: "center",
              
            }}
          >
            <View >
             
              <Image
      source={require('../assets/UserProfile.png')}
      style={{
        width: imageSize,      // Responsive width
        height: imageSize,     // Responsive height to maintain aspect ratio
        borderRadius: imageSize / 2, // Rounded corners
      }}
    />
            </View>
            <View >
              <Text
                style={{ fontSize:  hp(2.5), fontWeight: "700", color: "#3f58c5" }}
              >
                shivam11s
              </Text>
              <Text style={{ fontSize: hp(2.2), fontWeight: "500" }}>
                Total Impacts: 767
              </Text>
            </View>
          </View>
          <View >
            <Image
              source={require("../assets/starplace.png")} // Replace with your profile picture URL
              style={{ height: hp(11), width: wp(17),  }}
            />
          </View>
        </View>

        
{/* wallet balace show container */}
        <Pressable style={{marginTop: 20,        
    width: wp("82%"),
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 10,
    display: "flex",
    flexDirection: "column",
    borderRadius:8,
    elevation:15}}
        onPress={()=>navigation.navigate('MyBalance')}
        >
          
          <View
            style={{
              // backgroundColor:'#000',
              display: "flex",
              flexDirection: "row",
              width: wp("74%"),
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                gap: 5,
                justifyContent: "center",
                alignItems: "center",
                
              }}
            >
              <View>
                <Ionicons name="wallet-outline" size={25} color="black" />
              </View>
              <Pressable 
               onPress={()=>navigation.navigate('MyBalance')}
              >
                <Text style={{fontSize: hp(2.3), fontWeight: "500",}}>My Balance</Text>
              </Pressable>
            </View>
            <View>
              <Text style={{fontSize: hp(2.7),fontWeight: "bold",color: "#000",marginTop: 5,}}>₹100</Text>
            </View>
          </View>
          
          <View style={{flexDirection: "row", justifyContent:"space-between", marginTop: 10, width: wp("77%")}}>
            <Pressable
            onPress={()=>navigation.navigate("ADD CASH")}
              style={{
                display: "flex",
                flexDirection: "row",
                backgroundColor: "#37b469",
                paddingRight: 20,
                paddingLeft: 20,
                padding: 5,
                borderRadius:4,
                // width: wp('23%')

              }}
            >
              <Text style={{marginRight: 20,color: "#fff",fontWeight: "bold", textAlign:'center'}}>+ ADD CASH</Text>
            </Pressable>
            <Pressable
              style={{
                display: "flex",
                flexDirection: "row",
                gap: 8,
                backgroundColor: "#37b469",
                paddingRight: 20,
                paddingLeft: 20,
                padding: 5,
                borderRadius:4,
               
                // width: wp('22%')
              }}
              onPress={()=>navigation.navigate('WITHDRAW')}
            >
              <View>
                <Image
                  source={require("../assets/Withdraw.png")}
                  style={{ width: 20, height: 20 }}
                />
              </View>
              
                <Pressable  style={{ color: "#fff",
    fontWeight: "bold",}}
                
                >
                <Text style={{color:"#fff",}}>WITHDRAW</Text>
                </Pressable>
              
            </Pressable>
          </View>
        </Pressable>
      </View>
      <DrawerItemList {...props} />
      <DrawerItem label="More" onPress={()=>navigation.navigate('More')} />
      <Text style={{ marginTop: 20,textAlign: "center",color: "gray",}}>VERSION 1.22.0</Text>
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
 
});

export default DrawerHeader;