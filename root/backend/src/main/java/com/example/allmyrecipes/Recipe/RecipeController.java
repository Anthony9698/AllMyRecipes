package com.example.allmyrecipes.Recipe;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;


@RestController
@CrossOrigin("http://localhost:3000")
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
    public Recipe getRecipeById(@PathVariable("id") Long recipeId) {
        return recipeService.getRecipeById(recipeId);
    }

    @PostMapping
    public void createRecipe(@RequestBody @Validated Recipe recipe) {
        recipeService.createRecipe(recipe);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Recipe> updateRecipe(
            @PathVariable(value = "id") Long recipeId, @Valid @RequestBody Recipe newRecipe) {
            recipeService.updateRecipe(recipeId, newRecipe);
            return new ResponseEntity<>(recipeService.getRecipeById(recipeId), HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public void deleteRecipe(
            @PathVariable("id") Long recipeId) {
        recipeService.deleteRecipe(recipeId);
    }
}
