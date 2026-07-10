<div style="text-align: center; margin: 30px 0;">
  <!-- The Button -->
  <button class="md-button md-button--primary" onclick="pickRandomMeal()">🎲 Pick for me!</button>
  
  <!-- The Hidden Box (it uses your cute love-note style!) -->
  <div id="meal-result" class="love-note" style="display: none; margin-top: 20px;"></div>
</div>

<script>
  /* 1. Put all your food options inside these quotes, separated by commas! */
  const meals = [
    "Chicken 🍗",
    "Meat 🥩",
    "Pasta 🍝",
    "Exotic 🫓"
  ];

  /* 2. The magic math that picks a random option */
  function pickRandomMeal() {
    // Pick a random item from the list above
    const randomItem = meals[Math.floor(Math.random() * meals.length)];
    
    // Find the love-note box
    const resultBox = document.getElementById("meal-result");
    
    // Change the text inside the box
    resultBox.innerHTML = "How about... <br><br><strong>" + randomItem + "</strong> 😋";
    
    // Make the box visible!
    resultBox.style.display = "block";
  }
</script>


# Dinner Menu 🍽️

Let's see what we are feeling tonight!

??? note "Chicken 🍗"
    * Chicken + rice
    * Chicken + steamed veg
    * Chicken schnitzel + chips

??? note "Meat 🥩"
    * Meat and salad
    * Spare Ribs
    * Gyro

??? note "Pasta 🍝"
    * Lasagna
    * Pasta with tomato sauce
    * Pasta with cheese sauce
    * Pesto Pasta
        * Cold with lettuce, tomato, and chicken
        * Warm with pesto sauce

??? note "Exotic 🫓"
    * Butter Chicken with Naan
    * Chicken Stir Fry
    * Noodles
  

!!! tip "Leftover Hack 😉"
    These meals can be used for Lunch the next day!

<div class="bear-footer" markdown>
[🔙 Back](meal.md)
</div>