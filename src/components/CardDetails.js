import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../css/cardDetails.css";
import { Audio } from "react-loader-spinner";

const CardDetails = () => {
    const { id } = useParams();
    const [recipeData, setRecipeData] = useState(null);

    const API_URL = `https://dummyjson.com/recipes/${id}`;

    const getDetails = async () => {
        try {
            const response = await fetch(API_URL);
            const data = await response.json();
            setRecipeData(data);
        } catch (err) {
            console.error("Error fetching recipe data:", err);
        }
    };

    useEffect(() => {
        getDetails();
    }, [id]);

    if (!recipeData) {
        return (
            <div className="audio-wrapper">
                <Audio
                    height="55vh"
                    width="80"
                    color="#4fa94d"
                    ariaLabel="audio-loading"
                    wrapperStyle={{}}
                    wrapperClass="wrapper-class"
                    visible={true}
                />
            </div>
        );
    }

    return (
        <div className="recipe-card">
            <div className="recipe-image">
                <img src={recipeData.image} alt={recipeData.name} />
            </div>
            <div className="recipe-info">
                <h1 className="recipe-title">{recipeData.name}</h1>
                <p className="recipe-meta">
                    <span>Difficulty: {recipeData.difficulty}</span> |{" "}
                    <span>Cuisine: {recipeData.cuisine}</span> |{" "}
                    <span>Servings: {recipeData.servings}</span> |{" "}
                    <span>Calories: {recipeData.caloriesPerServing}</span>
                </p>

                <div className="recipe-section">
                    <h2>Ingredients</h2>
                    <ul>
                        {recipeData?.ingredients?.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </div>

                <div className="recipe-section">
                    <h2>Instructions</h2>
                    <ol>
                        {recipeData.instructions.map((step, index) => (
                            <li key={index}>{step}</li>
                        ))}
                    </ol>
                </div>

                <div className="recipe-tags">
                    {recipeData.tags.map((tag, index) => (
                        <span key={index} className="tag">
                            {tag}
                        </span>
                    ))}
                </div>

                <div className="recipe-rating">
                    <span>⭐ {recipeData.rating} ({recipeData.reviewCount} reviews)</span>
                </div>

                <div className="recipe-meal-type">
                    <strong>Meal Type:</strong> {recipeData.mealType.join(", ")}
                </div>
            </div>
        </div>
    );
};

export default CardDetails;