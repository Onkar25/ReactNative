import { createContext, useState } from "react";

export const FavoriteContext = createContext(
  {
    ids: [],
    addFavorites: (id) => { },
    removeFavorites: (id) => { }
  }
);

function FavrouteContextProvider({ children }) {
  const [favrriteMealIDs, setFavriteMealID] = useState([]);

  function addFavorite(id) {
    setFavriteMealID((currentFavId) => [...currentFavId, id]);
  }

  function removeFavorite(id) {
    setFavriteMealID((currentFavId) => currentFavId.filter(mealId => mealId !== id));
  }

  const value = {
    ids: favrriteMealIDs,
    addFavorites: addFavorite,
    removeFavorites: removeFavorite
  };

  return <FavoriteContext.Provider value={value}>{children}</FavoriteContext.Provider>
}

export default FavrouteContextProvider;