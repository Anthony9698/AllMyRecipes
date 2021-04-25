package com.example.allmyrecipes.models;

import com.example.allmyrecipes.Recipe.Recipe;

import javax.persistence.*;

@Entity
public class Instruction {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    private String description;

    @ManyToOne
    @JoinColumn(name="recipe_id")
    private Recipe recipe;

    public Instruction() {}

    public Instruction(String description, Recipe recipe) {
        this.description = description;
        this.recipe = recipe;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Recipe getRecipe() {
        return recipe;
    }

    public void setRecipe(Recipe recipe) {
        this.recipe = recipe;
    }

    @Override
    public String toString() {
        return "Instruction{" +
                "id=" + id +
                ", description='" + description + '\'' +
                ", recipe=" + recipe +
                '}';
    }
}
