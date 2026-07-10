<div style="text-align: center; margin: 30px 0;">
  <!-- The Button -->
  <button class="md-button md-button--primary" onclick="pickRandomMeal()">🎲 Pick for me!</button>
  
  <!-- The Hidden Box (it uses your cute love-note style!) -->
  <div id="meal-result" class="love-note" style="display: none; margin-top: 20px;"></div>
</div>

<script>
  /* 1. Put all your food options inside these quotes, separated by commas! */
  const meals = [
    "Pizza 🍕",
    "Burgers 🍔",
    "Wraps 🌯",
    "Seafood 🍤"
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


# Lunch Menu 🍔

Let's see what we are feeling for lunch!

??? note "Pizza 🍕"
    * Bird and Co special
    * Homemade: from Checkers

??? note "Burgers 🍔"
    * Homemade: Burger patties + buns + lettuce + tomato + melted cheese + chips
    * Bird and Co
    * Wowza
    * Nandos

??? note "Wraps 🌯"
    * Homemade: chicken/meat + wrap + lettuce + tomato + bell peppers + pineapple
    * KFC
    * Mc Ds
    * Nandos

??? note "Seafood 🍤"
    * Prawns
    * Fish fingers
    * Sea Harvest Oven Crisp Lightly Seasoned Froxen Crumbed Fish Fillet Portions (*from Checkers*)
  

<div class="bear-footer" markdown>
[🔙 Back](meal.md)
</div>