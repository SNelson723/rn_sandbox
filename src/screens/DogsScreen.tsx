import { useEffect } from "react";
import { Text, View } from "react-native";
import { useAppSelector } from "../hooks";
import { getDogBreeds } from "../api/dogApi";

const DogsScreen = () => {
  const { url } = useAppSelector((state) => state.dog);

  useEffect(() => {
    getDogBreeds(url)
      .then((response) => {
        const j = response.data;
        console.log(j);
      })
      .catch((err) => console.log(err));
  }, [url]);

  return (
    <View>
      <Text>This is the dogs screen</Text>
    </View>
  );
};

export default DogsScreen;
