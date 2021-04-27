package com.example.allmyrecipes.Recipe;

import com.example.allmyrecipes.models.Ingredient;
import com.example.allmyrecipes.models.Instruction;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.time.LocalTime;
import java.util.List;
import java.util.NoSuchElementException;
import java.util.Optional;


@RestController
@RequestMapping("/api/recipes")
public class RecipeController {
    private final RecipeService recipeService;

    @Autowired
    public RecipeController(RecipeService recipeService) {
        this.recipeService = recipeService;
    }

    @GetMapping
    public List<Recipe> getAllRecipes() {
        return recipeService.getAllRecipes();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Recipe> getRecipeById(@PathVariable("id") Long recipeId) {
        try {
            Recipe recipe = recipeService.getRecipeById(recipeId);
            return new ResponseEntity<>(HttpStatus.OK);
        } catch (NoSuchElementException e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @PostMapping
    public void createRecipe(@RequestBody @Validated Recipe recipe) {
        recipeService.createRecipe(recipe);
    }

    @PutMapping("/{id}")
    public void updateRecipe(
            @PathVariable("id") Long recipeId,
            @RequestParam(required = false) String title,
            @RequestParam(required = false) String description,
            @RequestParam(required = false) List<Ingredient> ingredients,
            @RequestParam(required = false) List<Instruction> instructions,
            @RequestParam(required = false) Integer servings,
            @RequestParam(required = false) LocalTime cookTime,
            @RequestParam(required = false) String foodType,
            @RequestParam(required = false) String visibility) {
        recipeService.updateRecipe(recipeId, title, description, ingredients,
                instructions, servings, cookTime, foodType, visibility);
    }

    @DeleteMapping("/{id}")
    public void deleteRecipe(
            @PathVariable("id") Long recipeId) {
        recipeService.deleteRecipe(recipeId);
    }
}
