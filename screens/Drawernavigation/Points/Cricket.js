import {
    Image,
    Pressable,
    ScrollView,
    StyleSheet,
    Text,
    View,
  } from "react-native";
  import React, { useState } from "react";
  import { LinearGradient } from "expo-linear-gradient";
  import { Entypo ,AntDesign} from '@expo/vector-icons';
  import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

  const Cricket = () => {
    const [Drop, setDrop] = useState(false);
    const [bowling, setBowling] = useState(false)
    const [fielding, setFielding] = useState(false)
    const [points, setPoints] = useState(false)

    const [T20, setT20] = useState(true)
    const [OD, setOD] = useState(false)
    const [Test, setTest] = useState(false)
    const [Hundred, setHundred] = useState(false)
    const [Sixty, setSixty] = useState(false)

    const handleT20 = () =>{
      return(
        <>
        {setT20(!T20)}
        {setOD(false)}
        {setTest(false)}
        {setHundred(false)}
        {setSixty(false)}
        </>
      )
    }
    const handleOD = () =>{
      return(
        <>
        {setOD(!OD)}
        {setT20(false)}
        {setTest(false)}
        {setHundred(false)}
        {setSixty(false)}
        </>
      )
    }
    const handleTest = () =>{
      return(
        <>
        {setTest(!Test)}
        {setT20(false)}
        {setOD(false)}       
        {setHundred(false)}
        {setSixty(false)}
        </>
      )
    }
    const handleHundred = () =>{
      return(
        <>
        {setHundred(!Hundred)}        
        {setT20(false)}
        {setOD(false)}       
        {setTest(false)}
        {setSixty(false)}
        </>
      )
    }
    const handleSixty = () =>{
      return(
        <>
        {setSixty(!Sixty)}
        {setT20(false)}
        {setOD(false)}       
        {setTest(false)}
        {setHundred(false)} 
        </>
      )
    }
  
    return (
    
      <View
        style={{
          display: "flex",
          flexDirection: "column",
          width:  wp("100%"),
          // justifyContent: "center",
          alignItems: "center",
          flex:1,
          gap:10 
        }}>
    
     
        <View style={{flexDirection:"row",width: wp("100%"),padding:10,display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                     
                   <Pressable onPress={()=>handleT20()}
                   style={{borderRadius:3,borderWidth:1,width: wp("10%"),flexDirection:"row",display:"flex",justifyContent:"center",alignItems:"center",height:25,borderColor:"#cccc"}}>
                   <Text>T20</Text>
                   </Pressable>
    
                   <Pressable onPress={()=>handleOD()}
                   style={{borderRadius:3,borderWidth:1,width:wp("10%"),flexDirection:"row",display:"flex",justifyContent:"center",alignItems:"center",height:25,borderColor:"#cccc"}}>
                   <Text>OD</Text>
                   </Pressable>
                   <Pressable onPress={()=>handleTest()}
                   style={{borderRadius:3,borderWidth:1,width:wp("10%"),flexDirection:"row",display:"flex",justifyContent:"center",alignItems:"center",height:25,borderColor:"#cccc"}}>
                   <Text>Test</Text>
                   </Pressable>
                   <Pressable onPress={()=>handleHundred()}
                   style={{borderRadius:3,borderWidth:1,width:wp("30%"),flexDirection:"row",display:"flex",justifyContent:"center",alignItems:"center",height:25,borderColor:"#cccc"}}>
                   <Text>The Hundred</Text>
                   </Pressable>
                   <Pressable onPress={()=>handleSixty()}
                   style={{borderRadius:3,borderWidth:1,width:wp("12%"),flexDirection:"row",display:"flex",justifyContent:"center",alignItems:"center",height:25,borderColor:"#cccc"}}>
                   <Text>6ixty</Text>
                   </Pressable>   
               
               </View>
   
      
                  {
                    T20 && <>
                               <View style={{width: wp("94%"),display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
      <LinearGradient
            style={{
              justifyContent: "flex-end",
              alignItems: "center",
              paddingTop: 10,
              borderRadius:20,

            }}
            colors={["#3951B5", "#2D3F8F", "#1F2B61"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
          >
            <Text
              style={{
                color: "#fff",
                fontWeight: "bold",
                textAlign: "center",
                paddingBottom: 10,
              }}
            >
              IMPORTANT FANTASY POINTS
            </Text>
            <View
              style={{
                flexDirection: "row",
                padding: 10,
                borderRadius: 10,
                backgroundColor: "#fff",
                justifyContent: "flex-end",
              }}
            >
              <Image
                source={require("../../../assets/ImportantFantasyPoints 1.png")}
                style={{
                  width: 80,
                  height: 80,
                  resizeMode: "contain",
                  alignItems: "baseline",
                }}
              />
              <View
                style={{
                  flex: 1,
                  marginLeft: 10,
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    marginVertical: 5,
                  }}
                >
                  <Text
                    style={{
                      fontWeight: "bold",
                    }}
                  >
                    Wicket
                  </Text>
                  <Text
                    style={{
                      color: "#00A000",
                      fontWeight: "bold",
                    }}
                  >+25 Pts
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    marginVertical: 5,
                  }}
                >
                  <Text
                    style={{
                      fontWeight: "bold",
                    }}
                  >Runs
                  </Text>
                  <Text
                    style={{
                      color: "#00A000",
                      fontWeight: "bold",
                    }}
                  >+1 Pts
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    marginVertical: 5,
                  }}
                >
                  <Text
                    style={{
                      fontWeight: "bold",
                    }}
                  >Catches
                  </Text>
                  <Text
                    style={{
                      color: "#00A000",
                      fontWeight: "bold",
                    }}>+8 Pts </Text>
                    
                  
                </View>
              </View>
            </View>
          </LinearGradient>
      </View>
      
        <ScrollView style={{width: wp("95%"),height: hp("100%"),flexDirection: "column",
          display: "flex",paddingBottom:10,padding:5
        
        }}>
        
        <View
        style={{
          width:  wp("92%"),
          flexDirection: "column",
          display: "flex",
          justifyContent: "center",
          paddingTop: 10,
          
        }}
      >
        <Pressable
          onPress={() => {
            setDrop(!Drop);
          }}
          style={{
            width: wp("92%"),
            flexDirection: "column",
            display: "flex",
            justifyContent: "center",
            borderWidth: 1.5,
            borderRadius: 5,
            borderColor: "#cccccc",
            
          }}
        >
          <View
            style={{
              width:  wp("92%"),
              flexDirection: "row",
              display: "flex",
              justifyContent: "space-between",
              padding: 10,
            
            }}
          >
            <Text style={{ fontWeight: "bold" }}>Batting</Text>
            <View
              style={{ flexDirection: "row", gap: 5, alignItems: "center" }}
            >
              <Pressable
                onPress={() => {
                  setDrop(!Drop);
                }}
              >
              {Drop ? (
                <Entypo name="chevron-small-up" size={24} color="black" />
              ) : (
                <Entypo name="chevron-small-down" size={24} color="black" />
              )}
              </Pressable>
            </View>
          </View>
          {Drop && (
            <View
              style={{
                width: wp("90%"),
                flexDirection: "column",
                display: "flex",
                alignItems: "center",
                gap: 15,
                paddingBottom: 5,
              }}
            >
            <LinearGradient
            style={{
              
              justifyContent: "center", 
              alignItems: "center",
             width: wp("90%"),
             display:"flex",
             flexDirection: 'column',
             padding:5
            }}
            colors={["#eaeaea", "#e7e7e7", "#f3f3f3","#fff"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
          >
          <View
                style={{
                  width:  wp("85%"),
                  flexDirection: "row",
                 
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <View style={{ width:  wp("40%") }}>
                  <Text style={{ fontWeight: "bold" }}>Run</Text>
                </View>
                <View
                  style={{
                    width: wp("45%"),
                    flexDirection: "row",
                    display: "flex",
                    justifyContent: "flex-end",
                    gap: 5,
                  }}
                >
                  <Text style={{ fontWeight: "bold", color: "#00A000" }}>+1 Pts</Text>
                   
                    
                  
                </View>
              </View>
          </LinearGradient>
  
          <LinearGradient
          style={{
            
            justifyContent: "center", 
            alignItems: "center",
           width: wp("90%"),
           display:"flex",
           flexDirection: 'column',
           padding:5
          }}
          colors={["#eaeaea", "#e7e7e7", "#f3f3f3","#fff"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
        >
        <View
              style={{
                width:  wp("85%"),
                flexDirection: "row",
               
                display: "flex",
                alignItems: "center",
              }}
            >
              <View style={{ width: wp("45%") }}>
                <Text style={{ fontWeight: "bold" }}>Boundary Bonus</Text>
              </View>
              <View
                style={{
                  width: wp("40%"),
                  flexDirection: "row",
                  display: "flex",
                  justifyContent: "flex-end",
                  gap: 5,
                }}
              >
                <Text style={{ fontWeight: "bold", color: "#00A000" }}>+1 Pts</Text>
                 
                  
                
              </View>
            </View>
        </LinearGradient>
  
        <LinearGradient
            style={{
              
              justifyContent: "center", 
              alignItems: "center",
             width: wp("90%"),
             display:"flex",
             flexDirection: 'column',
             padding:5
            }}
            colors={["#eaeaea", "#e7e7e7", "#f3f3f3","#fff"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
          >
          <View
                style={{
                  width: wp("85%"),
                  flexDirection: "row",
                 
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <View style={{ width: wp("45%") }}>
                  <Text style={{ fontWeight: "bold" }}>Six Bonus</Text>
                </View>
                <View
                  style={{
                    width: wp("40%"),
                    flexDirection: "row",
                    display: "flex",
                    justifyContent: "flex-end",
                    gap: 5,
                  }}
                >
                  <Text style={{ fontWeight: "bold", color: "#00A000" }}>+2 Pts</Text>
                   
                    
                  
                </View>
              </View>
          </LinearGradient>
             
          <LinearGradient
            style={{
              
              justifyContent: "center", 
              alignItems: "center",
             width: wp("90%"),
             display:"flex",
             flexDirection: 'column',
             padding:5
            }}
            colors={["#eaeaea", "#e7e7e7", "#f3f3f3","#fff"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
          >
          <View
                style={{
                  width:  wp("85%"),
                  flexDirection: "row",
                 
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <View style={{ width: wp("45%") }}>
                  <Text style={{ fontWeight: "bold" }}>30+ Runs</Text>
                </View>
                <View
                  style={{
                    width: wp("40%"),
                    flexDirection: "row",
                    display: "flex",
                    justifyContent: "flex-end",
                    gap: 5,
                  }}
                >
                  <Text style={{ fontWeight: "bold", color: "#00A000" }}>+4 Pts</Text>
                   
                    
                  
                </View>
              </View>
          </LinearGradient>
  
          <LinearGradient
            style={{
              
              justifyContent: "center", 
              alignItems: "center",
             width: wp("90%"),
             display:"flex",
             flexDirection: 'column',
             padding:5
            }}
            colors={["#eaeaea", "#e7e7e7", "#f3f3f3","#fff"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
          >
          <View
                style={{
                  width:  wp("85%"),
                  flexDirection: "row",
                 
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <View style={{ width: wp("45%") }}>
                  <Text style={{ fontWeight: "bold" }}>Half Century Bonus</Text>
                </View>
                <View
                  style={{
                    width: wp("40%"),
                    flexDirection: "row",
                    display: "flex",
                    justifyContent: "flex-end",
                    gap: 5,
                  }}
                >
                  <Text style={{ fontWeight: "bold", color: "#00A000" }}>+8 Pts</Text>
                   
                    
                  
                </View>
              </View>
          </LinearGradient>
  
          <LinearGradient
          style={{
            
            justifyContent: "center", 
            alignItems: "center",
           width: wp("90%"),
           display:"flex",
           flexDirection: 'column',
           padding:5
          }}
          colors={["#eaeaea", "#e7e7e7", "#f3f3f3","#fff"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
        >
        <View
              style={{
                width:  wp("85%"),
                flexDirection: "row",
               
                display: "flex",
                alignItems: "center",
              }}
            >
              <View style={{ width:  wp("45%") }}>
                <Text style={{ fontWeight: "bold" }}>Century Bonus</Text>
              </View>
              <View
                style={{
                  width: wp("40%"),
                  flexDirection: "row",
                  display: "flex",
                  justifyContent: "flex-end",
                  gap: 5,
                }}
              >
                <Text style={{ fontWeight: "bold", color: "#00A000" }}>+16 Pts</Text>
                 
                  
                
              </View>
            </View>
        </LinearGradient>
  
        <LinearGradient
        style={{
          
          justifyContent: "center", 
          alignItems: "center",
         width: wp("90%"),
         display:"flex",
         flexDirection: 'column',
         padding:5
        }}
        colors={["#eaeaea", "#e7e7e7", "#f3f3f3","#fff"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
      >
      <View
            style={{
              width: wp("85%"),
              flexDirection: "row",
             
              display: "flex",
              alignItems: "center",
            }}
          >
            <View style={{ width: wp("45%") }}>
              <Text style={{ fontWeight: "bold" }}>Dismissed For Duck</Text>
            </View>
            <View
              style={{
                width: wp("40%"),
                flexDirection: "row",
                display: "flex",
                justifyContent: "flex-end",
                gap: 5,
              }}
            >
              <Text style={{ fontWeight: "bold", color: "#ff0000" }}>-2 Pts</Text>
               
                
              
            </View>
          </View>
      </LinearGradient>
  
      <LinearGradient
      style={{
        
        justifyContent: "center", 
        alignItems: "center",
       width: wp("90%"),
       display:"flex",
       flexDirection: 'column',
       padding:5
      }}
      colors={["#eaeaea", "#e7e7e7", "#f3f3f3","#fff"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
    >
    <View
          style={{
            width:  wp("85%"),
            flexDirection: "row",
           
            display: "flex",
            alignItems: "center",
          }}
        >
          <View style={{ width: wp("55%" )}}>
            <Text style={{ fontWeight: "bold" }}>Strick Rate Points(Except Bowler)</Text>
            <Text style={{fontSize: hp(1.6)}}>(Minimum 10 Balls to be Played)</Text>
          </View>
          <View
            style={{
              width: wp("30%"),
              flexDirection: "row",
              display: "flex",
              justifyContent: "flex-end",
              gap: 5,
            }}
          >
            
          </View>
        </View>
    </LinearGradient>
  
    <LinearGradient
        style={{
          
          justifyContent: "center", 
          alignItems: "center",
         width: wp("90%"),
         display:"flex",
         flexDirection: 'column',
         padding:5
        }}
        colors={["#eaeaea", "#e7e7e7", "#f3f3f3","#fff"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
      >
      <View
            style={{
              width: wp("85%"),
              flexDirection: "row",
             
              display: "flex",
              alignItems: "center",
            }}
          >
            <View style={{ width: wp("55%") }}>
              <Text style={{ fontWeight: "bold" }}>Above 170 runs per 100 balls</Text>
            </View>
            <View
              style={{
                width: wp("30%"),
                flexDirection: "row",
                display: "flex",
                justifyContent: "flex-end",
                gap: 5,
              }}
            >
              <Text style={{ fontWeight: "bold", color: "#00A000" }}>+6 Pts</Text>
               
                
              
            </View>
          </View>
      </LinearGradient>
  
      <LinearGradient
        style={{
          
          justifyContent: "center", 
          alignItems: "center",
         width: wp("90%"),
         display:"flex",
         flexDirection: 'column',
         padding:5
        }}
        colors={["#eaeaea", "#e7e7e7", "#f3f3f3","#fff"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
      >
      <View
            style={{
              width: wp("85%"),
              flexDirection: "row",
             
              display: "flex",
              alignItems: "center",
            }}
          >
            <View style={{ width: wp("55%") }}>
              <Text style={{ fontWeight: "bold" }}>Between 150.01 - 170 runs per 100 balls</Text>
            </View>
            <View
              style={{
                width: wp("30%"),
                flexDirection: "row",
                display: "flex",
                justifyContent: "flex-end",
                gap: 5,
              }}
            >
              <Text style={{ fontWeight: "bold", color: "#00A000" }}>+4 Pts</Text>
               
                
              
            </View>
          </View>
      </LinearGradient>
  
      <LinearGradient
        style={{
          
          justifyContent: "center", 
          alignItems: "center",
         width: wp("90%"),
         display:"flex",
         flexDirection: 'column',
         padding:5
        }}
        colors={["#eaeaea", "#e7e7e7", "#f3f3f3","#fff"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
      >
      <View
            style={{
              width: wp("85%"),
              flexDirection: "row",
             
              display: "flex",
              alignItems: "center",
            }}
          >
            <View style={{ width: wp("55%") }}>
              <Text style={{ fontWeight: "bold" }}>Between 130 - 150 runs per 100 balls</Text>
            </View>
            <View
              style={{
                width: wp("30%"),
                flexDirection: "row",
                display: "flex",
                justifyContent: "flex-end",
                gap: 5,
              }}
            >
              <Text style={{ fontWeight: "bold", color: "#00A000" }}>+2 Pts</Text>
               
                
              
            </View>
          </View>
      </LinearGradient>
  
      <LinearGradient
        style={{
          
          justifyContent: "center", 
          alignItems: "center",
         width:wp("90%"),
         display:"flex",
         flexDirection: 'column',
         padding:5
        }}
        colors={["#eaeaea", "#e7e7e7", "#f3f3f3","#fff"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
      >
      <View
            style={{
              width: wp("85%"),
              flexDirection: "row",
             
              display: "flex",
              alignItems: "center",
            }}
          >
            <View style={{ width: wp("55%") }}>
              <Text style={{ fontWeight: "bold" }}>Between 60 - 70 runs per 100 balls</Text>
            </View>
            <View
              style={{
                width: wp("30%"),
                flexDirection: "row",
                display: "flex",
                justifyContent: "flex-end",
                gap: 5,
              }}
            >
              <Text style={{ fontWeight: "bold", color: "#ff0000" }}>-2 Pts</Text>
               
                
              
            </View>
          </View>
      </LinearGradient>
  
      <LinearGradient
      style={{
        
        justifyContent: "center", 
        alignItems: "center",
       width: wp("90%"),
       display:"flex",
       flexDirection: 'column',
       padding:5
      }}
      colors={["#eaeaea", "#e7e7e7", "#f3f3f3","#fff"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
    >
    <View
          style={{
            width: wp("85%"),
            flexDirection: "row",
           
            display: "flex",
            alignItems: "center",
          }}
        >
          <View style={{ width: wp("55%") }}>
            <Text style={{ fontWeight: "bold" }}>Between 50 - 59.99 runs per 100 balls</Text>
          </View>
          <View
            style={{
              width: wp("30%"),
              flexDirection: "row",
              display: "flex",
              justifyContent: "flex-end",
              gap: 5,
            }}
          >
            <Text style={{ fontWeight: "bold", color: "#ff0000" }}>-4 Pts</Text>
             
              
           
          </View>
        </View>
    </LinearGradient>
  
    <LinearGradient
    style={{
      
      justifyContent: "center", 
      alignItems: "center",
     width: wp("90%"),
     display:"flex",
     flexDirection: 'column',
     padding:5
    }}
    colors={["#eaeaea", "#e7e7e7", "#f3f3f3","#fff"]}
    start={{ x: 0, y: 0 }}
    end={{ x: 1, y: 0 }}
  >
  <View
        style={{
          width: wp("85%"),
          flexDirection: "row",
         
          display: "flex",
          alignItems: "center",
        }}
      >
        <View style={{ width: wp("55%") }}>
          <Text style={{ fontWeight: "bold" }}>Below 50 runs 100 balls</Text>
        </View>
        <View
          style={{
            width: wp("30%"),
            flexDirection: "row",
            display: "flex",
            justifyContent: "flex-end",
            gap: 5,
          }}
        >
          <Text style={{ fontWeight: "bold", color: "#ff0000" }}>-6 Pts</Text>
           
            
          
        </View>
      </View>
  </LinearGradient>
            </View>
          )}
        </Pressable>
      </View>
      
      <View
      style={{
        width: "100%",
        flexDirection: "column",
        display: "flex",
        justifyContent: "center",
        paddingTop: 10,
        
      }}
    >
      <Pressable
        onPress={() => {
          setBowling(!bowling);
        }}
        style={{
          width: "100%",
            flexDirection: "column",
            display: "flex",
            justifyContent: "center",
            borderWidth: 1.5,
            borderRadius: 5,
            borderColor: "#cccccc",
         
        }}
      >
        <View
          style={{
            width: "100%",
            flexDirection: "row",
            display: "flex",
            justifyContent: "space-between",
            padding: 10,
          
          }}
        >
          <Text style={{ fontWeight: "bold" }}>Bowling</Text>
          <View
            style={{ flexDirection: "row", gap: 5, alignItems: "center" }}
          >
            <Pressable
              onPress={() => {
                setBowling(!bowling);
              }}
            >
            {bowling ? (
              <Entypo name="chevron-small-up" size={24} color="black" />
            ) : (
              <Entypo name="chevron-small-down" size={24} color="black" />
            )}
            </Pressable>
          </View>
        </View>
        {bowling && (
          <View
            style={{
              width: "100%",
              flexDirection: "column",
              display: "flex",
              alignItems: "center",
              gap: 15,
              paddingBottom: 5,
            }}
          >
          <LinearGradient
          style={{
            
            justifyContent: "center", 
            alignItems: "center",
           width:"100%",
           display:"flex",
           flexDirection: 'column',
           padding:5
          }}
          colors={["#eaeaea", "#e7e7e7", "#f3f3f3","#fff"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
        >
        <View
              style={{
                width: "95%",
                flexDirection: "row",
               
                display: "flex",
                alignItems: "center",
              }}
            >
              <View style={{ width: "50%" }}>
                <Text style={{ fontWeight: "bold" }}>Wickets<Text>(Excluding Run Out)</Text></Text>
              </View>
              <View
                style={{
                  width: "50%",
                  flexDirection: "row",
                  display: "flex",
                  justifyContent: "flex-end",
                  gap: 5,
                }}
              >
                <Text style={{ fontWeight: "bold", color: "#00A000" }}>+25 Pts</Text>
                 
                  
               
              </View>
            </View>
        </LinearGradient>
  
        <LinearGradient
        style={{
          
          justifyContent: "center", 
          alignItems: "center",
         width:"100%",
         display:"flex",
         flexDirection: 'column',
         padding:5
        }}
        colors={["#eaeaea", "#e7e7e7", "#f3f3f3","#fff"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
      >
      <View
            style={{
              width: "95%",
              flexDirection: "row",
             
              display: "flex",
              alignItems: "center",
            }}
          >
            <View style={{ width: "50%" }}>
              <Text style={{ fontWeight: "bold" }}>Bonus <Text>(LBW/Bowled)</Text></Text>
            </View>
            <View
              style={{
                width: "50%",
                flexDirection: "row",
                display: "flex",
                justifyContent: "flex-end",
                gap: 5,
              }}
            >
              <Text style={{ fontWeight: "bold", color: "#00A000" }}>+8 Pts</Text>
               
                
              
            </View>
          </View>
      </LinearGradient>
  
      <LinearGradient
          style={{
            
            justifyContent: "center", 
            alignItems: "center",
           width:"100%",
           display:"flex",
           flexDirection: 'column',
           padding:5
          }}
          colors={["#eaeaea", "#e7e7e7", "#f3f3f3","#fff"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
        >
        <View
              style={{
                width: "95%",
                flexDirection: "row",
               
                display: "flex",
                alignItems: "center",
              }}
            >
              <View style={{ width: "50%" }}>
                <Text style={{ fontWeight: "bold" }}>3 Wicket Bonus</Text>
              </View>
              <View
                style={{
                  width: "50%",
                  flexDirection: "row",
                  display: "flex",
                  justifyContent: "flex-end",
                  gap: 5,
                }}
              >
                <Text style={{ fontWeight: "bold", color: "#00A000" }}>+4 Pts</Text>
                 
                  
                
              </View>
            </View>
        </LinearGradient>
           
        <LinearGradient
          style={{
            
            justifyContent: "center", 
            alignItems: "center",
           width:"100%",
           display:"flex",
           flexDirection: 'column',
           padding:5
          }}
          colors={["#eaeaea", "#e7e7e7", "#f3f3f3","#fff"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
        >
        <View
              style={{
                width: "95%",
                flexDirection: "row",
               
                display: "flex",
                alignItems: "center",
              }}
            >
              <View style={{ width: "50%" }}>
                <Text style={{ fontWeight: "bold" }}>4 Wicket Bonus</Text>
              </View>
              <View
                style={{
                  width: "50%",
                  flexDirection: "row",
                  display: "flex",
                  justifyContent: "flex-end",
                  gap: 5,
                }}
              >
                <Text style={{ fontWeight: "bold", color: "#00A000" }}>+8 Pts</Text>
                 
                  
                
              </View>
            </View>
        </LinearGradient>
  
        <LinearGradient
          style={{
            
            justifyContent: "center", 
            alignItems: "center",
           width:"100%",
           display:"flex",
           flexDirection: 'column',
           padding:5
          }}
          colors={["#eaeaea", "#e7e7e7", "#f3f3f3","#fff"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
        >
        <View
              style={{
                width: "95%",
                flexDirection: "row",
               
                display: "flex",
                alignItems: "center",
              }}
            >
              <View style={{ width: "50%" }}>
                <Text style={{ fontWeight: "bold" }}>5 Wicket Bonus</Text>
              </View>
              <View
                style={{
                  width: "50%",
                  flexDirection: "row",
                  display: "flex",
                  justifyContent: "flex-end",
                  gap: 5,
                }}
              >
                <Text style={{ fontWeight: "bold", color: "#00A000" }}>+16 Pts</Text>
                 
                  
                
              </View>
            </View>
        </LinearGradient>
  
        <LinearGradient
        style={{
          
          justifyContent: "center", 
          alignItems: "center",
         width:"100%",
         display:"flex",
         flexDirection: 'column',
         padding:5
        }}
        colors={["#eaeaea", "#e7e7e7", "#f3f3f3","#fff"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
      >
      <View
            style={{
              width: "95%",
              flexDirection: "row",
             
              display: "flex",
              alignItems: "center",
            }}
          >
            <View style={{ width: "50%" }}>
              <Text style={{ fontWeight: "bold" }}>Maiden Over</Text>
            </View>
            <View
              style={{
                width: "50%",
                flexDirection: "row",
                display: "flex",
                justifyContent: "flex-end",
                gap: 5,
              }}
            >
              <Text style={{ fontWeight: "bold", color: "#00A000" }}>+12 Pts</Text>
               
                
              
            </View>
          </View>
      </LinearGradient>
  
      <LinearGradient
      style={{
        
        justifyContent: "center", 
        alignItems: "center",
       width:"100%",
       display:"flex",
       flexDirection: 'column',
       padding:5
      }}
      colors={["#eaeaea", "#e7e7e7", "#f3f3f3","#fff"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
    >
    <View
          style={{
            width: "95%",
            flexDirection: "row",
           
            display: "flex",
            alignItems: "center",
          }}
        >
          <View style={{ width: "50%" }}>
            <Text style={{ fontWeight: "bold" }}>Economy Rate Points</Text>
            <Text style={{fontSize:10}}>(Minimum 2 Overs to be Bowled)</Text>
          </View>
          <View
            style={{
              width: "50%",
              flexDirection: "row",
              display: "flex",
              justifyContent: "flex-end",
              gap: 5,
            }}
          >
            <Text style={{ fontWeight: "bold", color: "#ff0000" }}>-2 Pts</Text>
             
              
           
          </View>
        </View>
    </LinearGradient>
  
    
  
  <LinearGradient
      style={{
        
        justifyContent: "center", 
        alignItems: "center",
       width:"100%",
       display:"flex",
       flexDirection: 'column',
       padding:5
      }}
      colors={["#eaeaea", "#e7e7e7", "#f3f3f3","#fff"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
    >
    <View
          style={{
            width: "95%",
            flexDirection: "row",
           
            display: "flex",
            alignItems: "center",
          }}
        >
          <View style={{ width: "50%" }}>
            <Text style={{ fontWeight: "bold" }}>Below 5 Runs per over</Text>
          </View>
          <View
            style={{
              width: "50%",
              flexDirection: "row",
              display: "flex",
              justifyContent: "flex-end",
              gap: 5,
            }}
          >
            <Text style={{ fontWeight: "bold", color: "#00A000" }}>+6 Pts</Text>
             
              
            
          </View>
        </View>
    </LinearGradient>
  
    <LinearGradient
      style={{
        
        justifyContent: "center", 
        alignItems: "center",
       width:"100%",
       display:"flex",
       flexDirection: 'column',
       padding:5
      }}
      colors={["#eaeaea", "#e7e7e7", "#f3f3f3","#fff"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
    >
    <View
          style={{
            width: "95%",
            flexDirection: "row",
           
            display: "flex",
            alignItems: "center",
          }}
        >
          <View style={{ width: "50%" }}>
            <Text style={{ fontWeight: "bold" }}>Between 5 - 5.99 per over</Text>
          </View>
          <View
            style={{
              width: "50%",
              flexDirection: "row",
              display: "flex",
              justifyContent: "flex-end",
              gap: 5,
            }}
          >
            <Text style={{ fontWeight: "bold", color: "#00A000" }}>+4 Pts</Text>
             
             
            
          </View>
        </View>
    </LinearGradient>
  
    <LinearGradient
      style={{
        
        justifyContent: "center", 
        alignItems: "center",
       width:"100%",
       display:"flex",
       flexDirection: 'column',
       padding:5
      }}
      colors={["#eaeaea", "#e7e7e7", "#f3f3f3","#fff"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
    >
    <View
          style={{
            width: "95%",
            flexDirection: "row",
           
            display: "flex",
            alignItems: "center",
          }}
        >
          <View style={{ width: "50%" }}>
            <Text style={{ fontWeight: "bold" }}>Between 6 - 7 per overs</Text>
          </View>
          <View
            style={{
              width: "50%",
              flexDirection: "row",
              display: "flex",
              justifyContent: "flex-end",
              gap: 5,
            }}
          >
            <Text style={{ fontWeight: "bold", color: "#00A000" }}>+2 Pts</Text>
             
              
            
          </View>
        </View>
    </LinearGradient>
  
    <LinearGradient
      style={{
        
        justifyContent: "center", 
        alignItems: "center",
       width:"100%",
       display:"flex",
       flexDirection: 'column',
       padding:5
      }}
      colors={["#eaeaea", "#e7e7e7", "#f3f3f3","#fff"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
    >
    <View
          style={{
            width: "95%",
            flexDirection: "row",
           
            display: "flex",
            alignItems: "center",
          }}
        >
          <View style={{ width: "50%" }}>
            <Text style={{ fontWeight: "bold" }}>Between 10 - 11 per over</Text>
          </View>
          <View
            style={{
              width: "50%",
              flexDirection: "row",
              display: "flex",
              justifyContent: "flex-end",
              gap: 5,
            }}
          >
            <Text style={{ fontWeight: "bold", color: "#ff0000" }}>-2 Pts</Text>
             
             
            
          </View>
        </View>
    </LinearGradient>
  
    <LinearGradient
    style={{
      
      justifyContent: "center", 
      alignItems: "center",
     width:"100%",
     display:"flex",
     flexDirection: 'column',
     padding:5
    }}
    colors={["#eaeaea", "#e7e7e7", "#f3f3f3","#fff"]}
    start={{ x: 0, y: 0 }}
    end={{ x: 1, y: 0 }}
  >
  <View
        style={{
          width: "95%",
          flexDirection: "row",
         
          display: "flex",
          alignItems: "center",
        }}
      >
        <View style={{ width: "50%" }}>
          <Text style={{ fontWeight: "bold" }}>Between 11.01 - 12 run per over</Text>
        </View>
        <View
          style={{
            width: "50%",
            flexDirection: "row",
            display: "flex",
            justifyContent: "flex-end",
            gap: 5,
          }}
        >
          <Text style={{ fontWeight: "bold", color: "#ff0000" }}>-4 Pts</Text>
           
            
          
        </View>
      </View>
  </LinearGradient>
  
  <LinearGradient
  style={{
    
    justifyContent: "center", 
    alignItems: "center",
   width:"100%",
   display:"flex",
   flexDirection: 'column',
   padding:5
  }}
  colors={["#eaeaea", "#e7e7e7", "#f3f3f3","#fff"]}
  start={{ x: 0, y: 0 }}
  end={{ x: 1, y: 0 }}
  >
  <View
      style={{
        width: "95%",
        flexDirection: "row",
       
        display: "flex",
        alignItems: "center",
      }}
    >
      <View style={{ width: "50%" }}>
        <Text style={{ fontWeight: "bold" }}>Above 12 runs per over</Text>
      </View>
      <View
        style={{
          width: "50%",
          flexDirection: "row",
          display: "flex",
          justifyContent: "flex-end",
          gap: 5,
        }}
      >
        <Text style={{ fontWeight: "bold", color: "#ff0000" }}>-6 Pts</Text>
         
          
        
      </View>
    </View>
  </LinearGradient>
          </View>
        )}
      </Pressable>
    </View>
  
  
  
    <View
    style={{
      width: "100%",
      flexDirection: "column",
      display: "flex",
      justifyContent: "center",
      paddingTop: 10,
      
    }}
    >
      <Pressable
        onPress={() => {
          setFielding(!fielding);
        }}
        style={{
          width: "100%",
          flexDirection: "column",
          display: "flex",
          justifyContent: "center",
          borderWidth: 1.5,
          borderRadius: 5,
          borderColor: "#cccccc",
        }}
      >
        <View
          style={{
           width: "100%",
            flexDirection: "row",
            display: "flex",
            justifyContent: "space-between",
            padding: 10,
          }}
        >
          <Text style={{ fontWeight: "bold" }}>Fielding</Text>
          <View
            style={{ flexDirection: "row", gap: 5, alignItems: "center" }}
          >
            <Pressable
              onPress={() => {
                setFielding(!fielding);
              }}
            >
              {fielding ? (
                <Entypo name="chevron-small-up" size={24} color="black" />
              ) : (
                <Entypo name="chevron-small-down" size={24} color="black" />
              )}
            </Pressable>
          </View>
        </View>
        {fielding && (
          <View
            style={{
              width: "100%",
              flexDirection: "column",
              display: "flex",
              alignItems: "center",
              gap: 15,
              paddingBottom: 5,
            }}
          >
          <LinearGradient
          style={{
            
            justifyContent: "center", 
            alignItems: "center",
           width:"100%",
           display:"flex",
           flexDirection: 'column',
           padding:5
          }}
          colors={["#eaeaea", "#e7e7e7", "#f3f3f3","#fff"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
        >
        <View
              style={{
                width: "95%",
                flexDirection: "row",
               
                display: "flex",
                alignItems: "center",
              }}
            >
              <View style={{ width: "50%" }}>
                <Text style={{ fontWeight: "bold" }}>Catch</Text>
              </View>
              <View
                style={{
                  width: "50%",
                  flexDirection: "row",
                  display: "flex",
                  justifyContent: "flex-end",
                  gap: 5,
                }}
              >
                <Text style={{ fontWeight: "bold", color: "#00A000" }}>+8 Pts</Text>
                 
                 
                
              </View>
            </View>
        </LinearGradient>
  
        <LinearGradient
        style={{
          
          justifyContent: "center", 
          alignItems: "center",
         width:"100%",
         display:"flex",
         flexDirection: 'column',
         padding:5
        }}
        colors={["#eaeaea", "#e7e7e7", "#f3f3f3","#fff"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
      >
      <View
            style={{
              width: "95%",
              flexDirection: "row",
             
              display: "flex",
              alignItems: "center",
            }}
          >
            <View style={{ width: "50%" }}>
              <Text style={{ fontWeight: "bold" }}>3 Catch Bonus </Text>
            </View>
            <View
              style={{
                width: "50%",
                flexDirection: "row",
                display: "flex",
                justifyContent: "flex-end",
                gap: 5,
              }}
            >
              <Text style={{ fontWeight: "bold", color: "#00A000" }}>+4 Pts</Text>
               
                
             
            </View>
          </View>
      </LinearGradient>
  
      <LinearGradient
          style={{
            
            justifyContent: "center", 
            alignItems: "center",
           width:"100%",
           display:"flex",
           flexDirection: 'column',
           padding:5
          }}
          colors={["#eaeaea", "#e7e7e7", "#f3f3f3","#fff"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
        >
        <View
              style={{
                width: "95%",
                flexDirection: "row",
               
                display: "flex",
                alignItems: "center",
              }}
            >
              <View style={{ width: "50%" }}>
                <Text style={{ fontWeight: "bold" }}>Stumping</Text>
              </View>
              <View
                style={{
                  width: "50%",
                  flexDirection: "row",
                  display: "flex",
                  justifyContent: "flex-end",
                  gap: 5,
                }}
              >
                <Text style={{ fontWeight: "bold", color: "#00A000" }}>+12 Pts</Text>
                 
                 
               
              </View>
            </View>
        </LinearGradient>
           
        <LinearGradient
          style={{
            
            justifyContent: "center", 
            alignItems: "center",
           width:"100%",
           display:"flex",
           flexDirection: 'column',
           padding:5
          }}
          colors={["#eaeaea", "#e7e7e7", "#f3f3f3","#fff"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
        >
        <View
              style={{
                width: "95%",
                flexDirection: "row",
               
                display: "flex",
                alignItems: "center",
              }}
            >
              <View style={{ width: "50%" }}>
                <Text style={{ fontWeight: "bold" }}>Run out (Direct hit)</Text>
              </View>
              <View
                style={{
                  width: "50%",
                  flexDirection: "row",
                  display: "flex",
                  justifyContent: "flex-end",
                  gap: 5,
                }}
              >
                <Text style={{ fontWeight: "bold", color: "#00A000" }}>+12 Pts</Text>
                 
                 
               
              </View>
            </View>
        </LinearGradient>
  
        <LinearGradient
          style={{
            
            justifyContent: "center", 
            alignItems: "center",
           width:"100%",
           display:"flex",
           flexDirection: 'column',
           padding:5
          }}
          colors={["#eaeaea", "#e7e7e7", "#f3f3f3","#fff"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
        >
        <View
              style={{
                width: "95%",
                flexDirection: "row",
               
                display: "flex",
                alignItems: "center",
              }}
            >
              <View style={{ width: "50%" }}>
                <Text style={{ fontWeight: "bold" }}>Run out (Not a direct hit)</Text>
              </View>
              <View
                style={{
                  width: "50%",
                  flexDirection: "row",
                  display: "flex",
                  justifyContent: "flex-end",
                  gap: 5,
                }}
              >
                <Text style={{ fontWeight: "bold", color: "#00A000" }}> +6 Pts</Text>
                 
                 
                
              </View>
            </View>
        </LinearGradient>
  
      
    
          </View>
        )}
      </Pressable>
    </View>
  
  
  
    <View
      style={{
        width: "100%",
        flexDirection: "column",
        display: "flex",
        justifyContent: "center",
        paddingTop: 10,
      }}
    >
      <Pressable
        onPress={() => {
          setPoints(!points);
        }}
        style={{
          width: "100%",
          flexDirection: "column",
          display: "flex",
          justifyContent: "center",
          borderWidth: 1.5,
          borderRadius: 5,
          borderColor: "#cccccc",
        }}
      >
        <View
          style={{
            width: "100%",
            flexDirection: "row",
            display: "flex",
            justifyContent: "space-between",
            padding: 10,
          }}
        >
          <Text style={{ fontWeight: "bold" }}>Additional Points</Text>
          <View
            style={{ flexDirection: "row", gap: 5, alignItems: "center" }}
          >
            <Pressable
              onPress={() => {
                setPoints(!points);
              }}
            >
            {points ? (
              <Entypo name="chevron-small-up" size={24} color="black" />
            ) : (
              <Entypo name="chevron-small-down" size={24} color="black" />
            )}
            </Pressable>
          </View>
        </View>
        {points && (
          <View
            style={{
              width: "100%",
              flexDirection: "column",
              display: "flex",
              alignItems: "center",
              gap: 15,
              paddingBottom: 5,
            }}
          >
          <LinearGradient
          style={{
            
            justifyContent: "center", 
            alignItems: "center",
           width:"100%",
           display:"flex",
           flexDirection: 'column',
           padding:5
          }}
          colors={["#eaeaea", "#e7e7e7", "#f3f3f3","#fff"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
        >
        <View
              style={{
                width: "95%",
                flexDirection: "row",
               
                display: "flex",
                alignItems: "center",
              }}
            >
              <View style={{ width: "50%" }}>
                <Text style={{ fontWeight: "bold" }}>Captain Points</Text>
              </View>
              <View
                style={{
                  width: "50%",
                  flexDirection: "row",
                  display: "flex",
                  justifyContent: "flex-end",
                  gap: 5,
                }}
              >
                <Text style={{ fontWeight: "bold", color: "#00A000" }}>2X</Text>
                 
               
              </View>
            </View>
        </LinearGradient>
  
        <LinearGradient
        style={{
          
          justifyContent: "center", 
          alignItems: "center",
         width:"100%",
         display:"flex",
         flexDirection: 'column',
         padding:5
        }}
        colors={["#eaeaea", "#e7e7e7", "#f3f3f3","#fff"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
      >
      <View
            style={{
              width: "95%",
              flexDirection: "row",
             
              display: "flex",
              alignItems: "center",
            }}
          >
            <View style={{ width: "50%" }}>
              <Text style={{ fontWeight: "bold" }}>Vice Captain Points </Text>
            </View>
            <View
              style={{
                width: "50%",
                flexDirection: "row",
                display: "flex",
                justifyContent: "flex-end",
                gap: 5,
              }}
            >
              <Text style={{ fontWeight: "bold", color: "#00A000" }}>1.5X</Text>
            </View>
          </View>
      </LinearGradient>
  
      <LinearGradient
          style={{
            
            justifyContent: "center", 
            alignItems: "center",
           width:"100%",
           display:"flex",
           flexDirection: 'column',
           padding:5
          }}
          colors={["#eaeaea", "#e7e7e7", "#f3f3f3","#fff"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
        >
        <View
              style={{
                width: "95%",
                flexDirection: "row",
               
                display: "flex",
                alignItems: "center",
              }}
            >
              <View style={{ width: "50%" }}>
                <Text style={{ fontWeight: "bold" }}>In Announced LineUp</Text>
              </View>
              <View
                style={{
                  width: "50%",
                  flexDirection: "row",
                  display: "flex",
                  justifyContent: "flex-end",
                  gap: 5,
                }}
              >
                <Text style={{ fontWeight: "bold", color: "#00A000" }}>+4 Pts</Text>
              </View>
            </View>
        </LinearGradient>
           
        <LinearGradient
          style={{
            
            justifyContent: "center", 
            alignItems: "center",
           width:"100%",
           display:"flex",
           flexDirection: 'column',
           padding:5
          }}
          colors={["#eaeaea", "#e7e7e7", "#f3f3f3","#fff"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
        >
        <View
              style={{
                width: "95%",
                flexDirection: "row",
               
                display: "flex",
                alignItems: "center",
              }}
            >
              <View style={{ width: "50%" }}>
                <Text style={{ fontWeight: "bold" }}>Playing Substitute</Text>
              </View>
              <View
                style={{
                  width: "50%",
                  flexDirection: "row",
                  display: "flex",
                  justifyContent: "flex-end",
                  gap: 5,
                }}
              >
                <Text style={{ fontWeight: "bold", color: "#00A000" }}>+4 Pts</Text>
              </View>
            </View>
        </LinearGradient>
          </View>
        )}
      </Pressable>
    </View>
    
        </ScrollView>
                    </>
                  }
                  {
                    OD && <Text>OD</Text>
                  }
                  {
                    Test && <Text>Test</Text>
                  }
                  {
                    Hundred && <Text>Hundred</Text>
                  }
                  {
                    Sixty && <Text>Sixty</Text>
                  }
   
  
      </View>
      
    );
  };
  
  export default Cricket;
  
  const styles = StyleSheet.create({
    FilterText: {
      fontSize: 10,
      paddingTop: 10,
      paddingBottom: 10,
      color: "#000",
    },
    FilterContainer: {
      width: "100%",
      borderRadius: 4,
      alignItems: "center",
      borderWidth:1,
      borderColor:"#E6E6E6",
      flexDirection:"row",
      justifyContent:"center",
      
    },
  });