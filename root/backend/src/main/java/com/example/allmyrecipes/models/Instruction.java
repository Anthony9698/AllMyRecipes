package com.example.allmyrecipes.models;

import com.example.allmyrecipes.Recipe.Recipe;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.sun.istack.NotNull;

import javax.persistence.*;
import javax.validation.constraints.Min;

@Entity
public class Instruction {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @NotNull
    private String description;

    @NotNull
    @Min(1)
    private Integer step;

    @ManyToOne
    private Recipe recipe;

    public Instruction() {}

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Integer getStep() {
        return step;
    }

    public void setStep(Integer step) {
        this.step = step;
    }

    @JsonIgnore
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
                ", step=" + step +
                '}';
    }
}
