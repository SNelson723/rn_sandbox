import { useEffect } from "react";
import { Text, View } from "react-native";
import { useAppDispatch, useAppSelector } from "../hooks";
import { getDogBreeds } from "../api/dogApi";
import { setBreeds } from "../features/dogSlice";

const DogsScreen = () => {
  const { url, breeds } = useAppSelector((state) => state.dog);
  const dispatch  = useAppDispatch();

  useEffect(() => {
    getDogBreeds(url)
      .then((response) => {
        const j = response.data;
        console.log(j);
        dispatch(setBreeds(j.data));
      })
      .catch((err) => console.log(err));
  }, [url]);

  return (
    <View>
      <Text>This is the dogs screen</Text>
      {breeds.map((breed) => (
        <Text key={breed.id}>{breed.type}</Text>
      ))}
    </View>
  );
};

export default DogsScreen;
