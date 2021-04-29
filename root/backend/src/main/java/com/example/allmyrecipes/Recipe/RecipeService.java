package com.example.allmyrecipes.Recipe;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.rest.webmvc.ResourceNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalTime;
import java.util.List;
import java.util.NoSuchElementException;

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
                .orElseThrow(() -> new ResourceNotFoundException("Recipe not found with id : " + recipeId));
    }

    // create recipe
    public void createRecipe(Recipe recipe) {
        recipeRepository.save(recipe);
    }


    @Transactional
    public void updateRecipe(Long recipeId, Recipe newRecipe) {
            Recipe recipe = recipeRepository.findById(recipeId)
                    .orElseThrow(() -> new NoSuchElementException("Resource not found with id : " + recipeId));

            recipe.setTitle(newRecipe.getTitle());
            recipe.setDescription(newRecipe.getDescription());
            recipe.setIngredients(newRecipe.getIngredients());
            recipe.setInstructions(newRecipe.getInstructions());
            recipe.setServings(newRecipe.getServings());
            recipe.setCookTime(newRecipe.getCookTime());
            recipe.setFoodType(newRecipe.getFoodType());
            recipe.setVisibility(newRecipe.getVisibility());
            recipeRepository.save(recipe);
    }

    // delete recipe
    public void deleteRecipe(Long recipeId) {
        Recipe recipe = recipeRepository.findById(recipeId)
                .orElseThrow(() -> new ResourceNotFoundException("Recipe not found with id : " + recipeId));
        recipeRepository.delete(recipe);
    }
}
