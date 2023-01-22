import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import React, { useState } from "react";
import {
  useFonts,
  Montserrat_600SemiBold,
  Montserrat_400Regular_Italic,
} from "@expo-google-fonts/montserrat";
import CategoryCard from "../components/home/CategoryCard";
import { Button, Image, ListItem } from "@rneui/base";
import History from "../components/common/History";
import InProgress from "../components/home/InProgress";
import Completed from "../components/home/Completed";
import { useSelector, useDispatch } from "react-redux";
import { setStage } from "../src/store/user";
import { Camera } from "expo-camera";

const Home = ({ navigation }) => {
  const { user } = useSelector((state) => state?.user);
  const dispatch = useDispatch();

  console.log(user);

  const handlePress = (text) => {
    navigation.push("Task", { id: text });
  };

  const [startCamera, setStartCamera] = React.useState(false);
  const [previewVisible, setPreviewVisible] = useState(false);
  const [capturedImage, setCapturedImage] = useState<any>(null);
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
    const photo = await camera.takePictureAsync();
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
  const __savePhoto = () => {
    setStartCamera(false);
    setPreviewVisible(false);
    dispatch(setStage(2));
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
              {user.stage === 2 && <Completed photo={capturedImage} />}
              {user.stage > 0 && (
                <Image
                  onPress={() => dispatch(setStage(0))}
                  source={{
                    uri: "https://res.cloudinary.com/ddhqwgq8k/image/upload/v1674351297/re-new/Group_14-2_tdgafl.png",
                  }}
                  style={styles.bannerC}
                />
              )}
              <History />
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
});

export default Home;
