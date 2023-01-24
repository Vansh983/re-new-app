import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import React, { useEffect, useState } from "react";
import {
  useFonts,
  Montserrat_600SemiBold,
  Montserrat_400Regular_Italic,
} from "@expo-google-fonts/montserrat";
import CategoryCard from "../components/home/CategoryCard";
import { Button, Image, ListItem, Overlay } from "@rneui/base";
import History from "../components/common/History";
import InProgress from "../components/home/InProgress";
import Completed from "../components/home/Completed";
import { useSelector, useDispatch } from "react-redux";
import { setStage } from "../src/store/user";
import { Camera } from "expo-camera";
import axios from "axios";
import { ButtonGroup, Input } from "@rneui/themed";
import Ionicons from "react-native-vector-icons/Ionicons";

const Home = ({ navigation }) => {
  const { user } = useSelector((state) => state?.user);
  const dispatch = useDispatch();

  let formD = new FormData();

  // const [formd, setFormd] = useState({
  //   user: "janedoe",
  //   caption: "test",
  // });

  console.log(user);

  const handlePress = (text) => {
    navigation.push("Task", { id: text });
  };

  const [startCamera, setStartCamera] = React.useState(false);
  const [previewVisible, setPreviewVisible] = useState(false);
  const [capturedImage, setCapturedImage] = useState<any>(null);
  const [showCaption, setShowCaption] = useState(false);
  const [caption, setCaption] = useState("");
  const [cameraType, setCameraType] = React.useState(
    Camera.Constants.Type.back
  );
  const [flashMode, setFlashMode] = React.useState("off");
  let camera: Camera;

  const __startCamera = async () => {
    const { status } = await Camera.requestPermissionsAsync();
    if (status === "granted") {
      // do something
      setStartCamera(true);
    } else {
      console.log(0);
    }
  };

  const __takePicture = async () => {
    if (!camera) return;
    const photo = await camera.takePictureAsync({ base64: true });
    console.log(photo);
    setPreviewVisible(true);
    setCapturedImage(photo);
  };

  const __retakePicture = () => {
    setCapturedImage(null);
    setPreviewVisible(false);
    __startCamera();
  };
  const __switchCamera = () => {
    if (cameraType === "back") {
      setCameraType("front");
    } else {
      setCameraType("back");
    }
  };
  const __handleFlashMode = () => {
    if (flashMode === "on") {
      setFlashMode("off");
    } else if (flashMode === "off") {
      setFlashMode("on");
    } else {
      setFlashMode("auto");
    }
  };
  const __savePhoto = async () => {
    setStartCamera(false);
    setPreviewVisible(false);
    setShowCaption(true);
    formD.append("image", capturedImage.base64);
    formD.append("user", "janedoe");
    formD.append("caption", "test");
    //@ts-ignore
    // setFormd({ ...formd, image: capturedImage.base64 });
    await dispatch(setStage(2));
    // await axios
    //   .post("http://100.65.172.210:105/upload", formD)
    //   .then((res) => {
    //     console.log("====================================");
    //     console.log(res.data.data);
    //     console.log("====================================");
    //   })
    //   .catch((e) => console.log(e));
  };
  // useEffect(() => {
  //   const handleSubmit = async () => {};
  //   handleSubmit();
  // }, [formd]);

  const toggleCaption = () => {
    setShowCaption(!showCaption);
  };

  const CameraPreview = ({ photo }: any) => {
    console.log("sdsfds", photo);
    return (
      <View
        style={{
          backgroundColor: "transparent",
          flex: 1,
          width: "100%",
          height: "100%",
        }}
      >
        <ImageBackground
          source={{ uri: photo && photo.uri }}
          style={{
            flex: 1,
          }}
        >
          <View
            style={{
              flex: 1,
              flexDirection: "column",
              padding: 15,
              justifyContent: "flex-end",
            }}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <TouchableOpacity
                onPress={__retakePicture}
                style={{
                  width: 130,
                  height: 40,

                  alignItems: "center",
                  borderRadius: 4,
                }}
              >
                <Text
                  style={{
                    color: "#fff",
                    fontSize: 20,
                  }}
                >
                  Re-take
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={__savePhoto}
                style={{
                  width: 130,
                  height: 40,

                  alignItems: "center",
                  borderRadius: 4,
                }}
              >
                <Text
                  style={{
                    color: "#fff",
                    fontSize: 20,
                  }}
                >
                  save photo
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
      </View>
    );
  };

  let [fontsLoaded] = useFonts({
    Montserrat_600SemiBold,
    Montserrat_400Regular_Italic,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
      {previewVisible && capturedImage ? (
        <CameraPreview
          photo={capturedImage}
          savePhoto={__savePhoto}
          retakePicture={__retakePicture}
        />
      ) : (
        <>
          {startCamera ? (
            <Camera
              style={{ flex: 1 }}
              ref={(r) => {
                camera = r;
              }}
            >
              <View
                style={{
                  flex: 1,
                  width: "100%",
                  backgroundColor: "transparent",
                  flexDirection: "row",
                }}
              >
                <View
                  style={{
                    position: "absolute",
                    bottom: 0,
                    flexDirection: "row",
                    flex: 1,
                    width: "100%",
                    padding: 20,
                    justifyContent: "space-between",
                  }}
                >
                  <View
                    style={{
                      alignSelf: "center",
                      flex: 1,
                      alignItems: "center",
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <Text onPress={() => setStartCamera(false)}>Cancel</Text>
                    <TouchableOpacity
                      onPress={__takePicture}
                      style={{
                        width: 70,
                        height: 70,
                        bottom: 0,
                        borderRadius: 50,
                        backgroundColor: "#fff",
                      }}
                    />
                    <TouchableOpacity
                      onPress={__switchCamera}
                      style={{
                        marginTop: 20,
                        borderRadius: "50%",
                        height: 25,
                        width: 25,
                      }}
                    >
                      <Text
                        style={{
                          fontSize: 20,
                        }}
                      >
                        {cameraType === "front" ? "switch" : "switch"}
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </Camera>
          ) : (
            <ScrollView style={styles.container}>
              <Text style={styles.heading}>Hello, Jane!</Text>
              <Text style={styles.subhead}>
                "Started from the bottom now we here" - Aubrey Graham
              </Text>
              <Image
                source={{
                  uri: "https://res.cloudinary.com/ddhqwgq8k/image/upload/v1674331124/re-new/Group_9_fou4a4.png",
                }}
                style={styles.img}
              />
              {user.stage === 0 && <CategoryCard handlePress={handlePress} />}
              {user.stage === 1 && <InProgress __startCamera={__startCamera} />}
              {user.stage === 3 && (
                <Completed photo={capturedImage} caption={caption} />
              )}
              {user.stage === 2 && (
                <View style={styles.card}>
                  <View
                    style={{
                      flexDirection: "row",
                      borderBottomColor: "#ddd",
                      paddingBottom: 10,
                      borderBottomWidth: 1,
                    }}
                  >
                    <Text style={styles.name}>
                      Write a caption for your accomplishment!
                    </Text>
                  </View>
                  {/* <Image
                      source={{ uri: capturedImage?.uri }}
                      style={styles.image}
                    /> */}
                  <Input
                    style={styles.caption}
                    onChangeText={(value) => setCaption(value)}
                  />
                  <View style={{ flexDirection: "row" }}>
                    <Button
                      title={"Cancel"}
                      buttonStyle={{
                        borderColor: "rgba(78, 116, 289, 1)",
                      }}
                      type="outline"
                      titleStyle={{ color: "rgba(78, 116, 289, 1)" }}
                      containerStyle={{
                        width: 100,
                        marginVertical: 10,
                        marginLeft: 10,
                      }}
                      onPress={() => dispatch(setStage(1))}
                    />
                    <Button
                      title="Save"
                      buttonStyle={{
                        backgroundColor: "rgba(78, 116, 289, 1)",
                        borderRadius: 3,
                      }}
                      containerStyle={{
                        width: 100,
                        marginLeft: 60,
                        marginVertical: 10,
                      }}
                      onPress={() => dispatch(setStage(3))}
                    />
                  </View>
                </View>
              )}
              {user.stage > 0 && user.stage !== 2 && (
                <Image
                  onPress={() => dispatch(setStage(0))}
                  source={{
                    uri: "https://res.cloudinary.com/ddhqwgq8k/image/upload/v1674388244/re-new/Group_14-3_wqjdfn.png",
                  }}
                  style={styles.bannerC}
                />
              )}
              {user.stage !== 2 && <History />}
            </ScrollView>
          )}
        </>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 40,
    backgroundColor: "#F8F2FE",
    paddingHorizontal: "10%",
  },
  heading: {
    fontFamily: "Montserrat_600SemiBold",
    fontSize: 40,
  },
  subhead: {
    fontFamily: "Montserrat_400Regular_Italic",
    fontSize: 12,
    color: "#6b6b6b",
  },
  img: {
    flex: 1,
    width: "100%",
    height: 150,
    resizeMode: "contain",
  },
  bannerC: {
    flex: 1,
    width: "100%",
    height: 150,
    resizeMode: "contain",
    borderRadius: 15,
  },
  card: {
    marginBottom: 2,
    backgroundColor: "#fff",
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderRadius: 15,
    shadowColor: "#eeeeee",
    shadowOpacity: 5,
  },

  name: {
    fontSize: 15,
    fontFamily: "Montserrat_600SemiBold",
    marginTop: 5,
  },
  caption: {
    marginHorizontal: 0,
    marginTop: 15,
    fontFamily: "Montserrat_400Regular",
    fontSize: 11,
  },
  image: {
    width: "100%",
    height: 250,
    resizeMode: "cover",
  },
  button: {
    color: "#000",
  },
});

export default Home;
