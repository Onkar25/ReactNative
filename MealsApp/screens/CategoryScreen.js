import { FlatList } from "react-native";
import CategoryGridTile from "../components/CategoryGridTile";
import { CATEGORIES } from "../data/dummy-data";

function CategoryScreen({ navigation }) {
  function renderCategoryItem(itemData) {
    function pressHandler() {
      navigation.navigate('MealOverview', {
        categoryID: itemData.item.id,
      });
    }
    return <CategoryGridTile
      title={itemData.item.title}
      color={itemData.item.color}
      onPress={pressHandler} />;
  }

  return (
    <FlatList data={CATEGORIES}
      keyExtractor={item => item.id}
      renderItem={renderCategoryItem}
      numColumns={2} />
  );
}

export default CategoryScreen;