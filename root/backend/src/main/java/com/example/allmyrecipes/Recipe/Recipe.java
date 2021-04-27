package com.example.allmyrecipes.Recipe;

import com.example.allmyrecipes.models.Ingredient;
import com.example.allmyrecipes.models.Instruction;
import com.fasterxml.jackson.annotation.JsonFormat;
import com.sun.istack.NotNull;

import javax.persistence.*;
import javax.validation.constraints.Max;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotEmpty;
import java.time.LocalTime;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "recipe")
public class Recipe {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @NotNull
    @NotEmpty
    @NotBlank
    @Column(unique = true)
    private String title;

    @NotNull
    @NotBlank
    private String description;

    @NotNull
    @NotEmpty
    @OneToMany(
            cascade = CascadeType.ALL,
            fetch = FetchType.LAZY,
            mappedBy = "recipe",
            orphanRemoval = true)
    private List<Ingredient> ingredients = new ArrayList<>();

    @NotNull
    @NotEmpty
    @OneToMany(
            cascade = CascadeType.ALL,
            fetch = FetchType.LAZY,
            mappedBy = "recipe",
            orphanRemoval = true)
    private List<Instruction> instructions = new ArrayList<>();

    @NotNull
    @Min(1)
    @Max(99)
    private Integer servings;

    @NotNull
    @JsonFormat(pattern = "HH:mm")
    @Column(name = "cook_time")
    private LocalTime cookTime;

    @NotNull
    @NotEmpty
    @NotBlank
    @Column(name = "food_type")
    private String foodType;

    @NotNull
    @NotEmpty
    @NotBlank
    private String visibility;

    public Recipe() {}

    public Recipe(String title, String description, List<Ingredient> ingredients,
                  List<Instruction> instructions, Integer servings, LocalTime cookTime,
                  String foodType, String visibility) {
        this.title = title;
        this.description = description;
        this.ingredients = ingredients;
        this.instructions = instructions;
        this.servings = servings;
        this.cookTime = cookTime;
        this.foodType = foodType;
        this.visibility = visibility;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public List<Ingredient> getIngredients() {
        return ingredients;
    }

    public void setIngredients(List<Ingredient> ingredients) {
        this.ingredients = ingredients;
        ingredients.forEach(ing -> ing.setRecipe(this));
    }

    public List<Instruction> getInstructions() {
        return instructions;
    }

    public void setInstructions(List<Instruction> instructions) {
        this.instructions = instructions;
        instructions.forEach(inst -> inst.setRecipe(this));
    }

    public Integer getServings() {
        return servings;
    }

    public void setServings(Integer servings) {
        this.servings = servings;
    }

    public LocalTime getCookTime() {
        return cookTime;
    }

    public void setCookTime(LocalTime cookTime) {
        this.cookTime = cookTime;
    }

    public String getFoodType() {
        return foodType;
    }

    public void setFoodType(String foodType) {
        this.foodType = foodType;
    }

    public String getVisibility() {
        return visibility;
    }

    public void setVisibility(String visibility) {
        this.visibility = visibility;
    }

    @Override
    public String toString() {
        return "Recipe{" +
                "id=" + id +
                ", title='" + title + '\'' +
                ", description='" + description + '\'' +
                ", ingredients=" + ingredients +
                ", instructions=" + instructions +
                ", servings=" + servings +
                ", cookTime=" + cookTime +
                ", foodType='" + foodType + '\'' +
                ", visibility='" + visibility + '\'' +
                '}';
    }
}
