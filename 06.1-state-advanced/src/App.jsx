import { useState } from "react";
import css from "./App.module.css";
import { recipes } from "./data/recipes";
import { List } from "./components/List/List";
import { Cookbook } from "./components/Cookbook/Cookbook";
import { RecipeContext } from "./context/RecipeContext";
import { Recipe } from "./components/Recipe/Recipe";
import { TopBar } from "./components/TopBar/TopBar";
import { LoginContext } from "./context/LoginContext";

function App() {
  const [selectedRecipeId, setSelectedRecipeId] = useState(1);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const selectedRecipe = recipes.find(
    (recipe) => recipe.id === selectedRecipeId
  );

  // const { name, ingredients, description, img } = selectedRecipe;

  return (
    <>
      <LoginContext value={[isLoggedIn, setIsLoggedIn]}>
        <TopBar />
        <div className={css.container}>
          <RecipeContext value={selectedRecipe}>
            <List
              recipes={recipes}
              onSelectRecipe={(id) => setSelectedRecipeId(id)}
            />
            <Cookbook />
          </RecipeContext>
        </div>
        <div className={css.promoted}>
          <RecipeContext value={recipes[3]}>
            <h2>Przepis tygodnia</h2>
            <Recipe />
          </RecipeContext>
        </div>
      </LoginContext>
    </>
  );
}

export default App;
