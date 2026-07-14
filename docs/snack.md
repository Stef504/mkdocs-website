<div style="text-align: center; margin: 30px 0;">
  <!-- The Button -->
  <button class="md-button md-button--primary" onclick="pickRandomMeal()">🎲 Pick for me!</button>
  
  <!-- The Hidden Box (it uses your cute love-note style!) -->
  <div id="meal-result" class="love-note" style="display: none; margin-top: 20px;"></div>
</div>

<script>
  /* 1. Put all your food options inside these quotes, separated by commas! */
  const meals = [
    "Toasties 🥪",
    "Popcorn 🍿",
    "Chips 🍟",
    "Cake and Tea 🍰"
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

# Snackies

Click the button below to see what is on the menu!

??? note "Toasties 🥪"
    * Ham + Cheese
    * Ham + Cheese + Tomato
    * Cheese + Jam

??? note "Popcorn 🍿"
    * Salt 
    * Salt & Vinger
    * Butter

??? note "Chips 🍟"
    *You can pair it with cream cheese*
    
    * Trigz Chutney
    * Salted 
    * Thai Sweet Chili
    * Caribbean Onion & Balsamic Vinegar
    * Sour Cream & Onion

??? note "Cake and Tea 🍰"
    *Any type of tea and we can make/ buy the cake*
    
    * Chocolate Cake
    * Carrot Cake
    * Sponge Cake
    * Milk Tart

<div class="bear-footer" markdown>

[🔙 Choose a meal](feed.md)

</div>