package com.example.allmyrecipes.Recipe;

import com.example.allmyrecipes.models.Ingredient;
import com.example.allmyrecipes.models.Instruction;
import com.fasterxml.jackson.annotation.JsonFormat;

import javax.persistence.*;
import java.time.LocalTime;
import java.util.ArrayList;
import java.util.List;

@Entity
public class Recipe {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    private String title;

    private String description;

    @OneToMany(cascade = CascadeType.ALL,
                mappedBy = "ingredient", orphanRemoval = true)
    private List<Ingredient> ingredients = new ArrayList<>();


    @OneToMany(cascade = CascadeType.ALL,
                mappedBy = "instruction", orphanRemoval = true)
    private List<Instruction> instructions = new ArrayList<>();

    private int servings;

    @JsonFormat(pattern = "HH:mm")
    @Column(name = "cook_time")
    private LocalTime cookTime;

    @Column(name = "food_type")
    private String foodType;

    private String visibility;

    public Recipe() {}

    public Recipe(String title, String description, List<Ingredient> ingredients,
                  List<Instruction> instructions, int servings, LocalTime cookTime,
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

    public long getId() {
        return id;
    }

    public void setId(long id) {
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
    }

    public List<Instruction> getInstructions() {
        return instructions;
    }

    public void setInstructions(List<Instruction> instructions) {
        this.instructions = instructions;
    }

    public int getServings() {
        return servings;
    }

    public void setServings(int servings) {
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
