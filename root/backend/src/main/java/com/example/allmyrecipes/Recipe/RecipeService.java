package com.example.allmyrecipes.Recipe;

import com.example.allmyrecipes.models.Ingredient;
import com.example.allmyrecipes.models.Instruction;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalTime;
import java.util.List;
import java.util.NoSuchElementException;
import java.util.Objects;
import java.util.Optional;

@Service
public class RecipeService {

    private RecipeRepository recipeRepository;

    @Autowired
    public RecipeService(RecipeRepository recipeRepository) {
        this.recipeRepository = recipeRepository;
    }

    // get all recipes
    public List<Recipe> getAllRecipes() {
        return recipeRepository.findAll();
    }

    // get recipe by id
    public Recipe getRecipeById(Long recipeId) {
        return recipeRepository.findById(recipeId)
                .orElseThrow(() -> new NoSuchElementException("Recipe not found with id : " + recipeId));
    }

    // create recipe
    public void createRecipe(Recipe recipe) {
        recipeRepository.save(recipe);
    }

    // update recipe
    @Transactional
    public void updateRecipe(Long recipeId, String title, String description, List<Ingredient> ingredients,
                             List<Instruction> instructions, Integer servings, LocalTime cookTime, String foodType,
                             String visibility) {
        Recipe recipe = recipeRepository.findById(recipeId)
                .orElseThrow(() -> new IllegalStateException("Resource not found with id : " + recipeId));

        if (title != null && title.length() > 0 && !Objects.equals(recipe.getTitle(), title)) {
            recipe.setTitle(title);
        }
        if (description != null && description.length() > 0 && !Objects.equals(recipe.getDescription(), description)) {
            recipe.setDescription(description);
        }
        if (ingredients != null && ingredients.size() >= 1 && !Objects.equals(recipe.getIngredients(), ingredients)) {
            recipe.setIngredients(ingredients);
        }
        if (instructions != null && instructions.size() >= 1 && !Objects.equals(recipe.getInstructions(), instructions)) {
            recipe.setInstructions(instructions);
        }
        if (foodType != null && foodType.length() > 0 && !Objects.equals(recipe.getFoodType(), foodType)) {
            recipe.setFoodType(foodType);
        }
        if (visibility != null && visibility.length() > 0 && !Objects.equals(recipe.getVisibility(), visibility)) {
            recipe.setVisibility(visibility);
        }
    }

    // delete recipe
    public void deleteRecipe(Long recipeId) {
        Recipe recipe = recipeRepository.findById(recipeId)
                .orElseThrow(() -> new IllegalStateException("Recipe not found with id : " + recipeId));
        recipeRepository.delete(recipe);
    }
}
