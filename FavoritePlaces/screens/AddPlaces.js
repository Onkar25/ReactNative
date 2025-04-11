import PlaceForm from "../components/Places/PlaceForm";
import { InsertPlace } from "../util/database";

function AddPlace({ navigation }) {
  async function createPlaceHandler(place) {
    try {
      console.log('createPlaceHandler START');
      const val = await InsertPlace(place);
      console.log('createPlaceHandler END');
      navigation.navigate('AllPlaces', { place: place });
    } catch (error) {
      console.log('createPlaceHandler ERROR');
      console.log(error);
    }

  }
  return (
    <PlaceForm onCreatePlace={createPlaceHandler} />
  );
}

export default AddPlace;