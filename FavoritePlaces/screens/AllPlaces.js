import { useIsFocused } from "@react-navigation/native";
import { useEffect, useState } from "react";
import PlacesList from '../components/Places/PlacesList';
function AllPlaces({ route }) {
  const [loadPlaces, setLoadPlace] = useState([]);
  const isFocus = useIsFocused();
  useEffect(() => {
    if (isFocus && route.params) {
      setLoadPlace(curtPlace => [...curtPlace, route.params.place]);
    }
  }, [isFocus, route]);

  return (
    <PlacesList places={loadPlaces} />
  );
}

export default AllPlaces;