<div style="text-align: center; margin: 30px 0;">
  <!-- The Button -->
  <button class="md-button md-button--primary" onclick="pickRandomMeal()">🎲 Pick for me!</button>
  
  <!-- The Hidden Box (it uses your cute love-note style!) -->
  <div id="meal-result" class="love-note" style="display: none; margin-top: 20px;"></div>
</div>

<script>
  /* 1. Put all your food options inside these quotes, separated by commas! */
  const meals = [
    "Eggs and Toast 🍳",
    "Pancakes 🥞",
    "Cereal 🥣",
    "Yogurt and Fruit 🍓",
    "Avocado Toast 🥑"
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


# Breakfast Menu 🍳

Let's see what we are feeling for brekkies!

??? note "With Eggs 🥚"
    * Eggs on toast
        * Scrambled
        * Sunny side up
        * Boiled
    * Egg + Avo on toast

??? note "Cereals 🥣"
    * Squilos
    * Coco pops
    * Future life

??? note "Smoothies 🥤"
    * **Baba Special:** Banana + berries + apple + cinnamon + future life + chia seeds + milk
    * **Banana Citrus:** Banana + half orange + 1/3 yogurt + 1/4 water + some honey
    * **Berry Vibe:** Berries + banana + half orange + 1 cup milk + chia seeds + honey
    * **Chocolate Peanut Butter Smoothie:** banana + 1 tsp vanilla extract + 1 1/2 cup almond milk + 2 tbsp cacao powder + 2 tbsp peanut butter
    * **Raspberry Protein Smoothie:** raspberries + almond milk + 1/4 cup yogurt + 1 tbsp almond butter + 1 tbsp honey

??? note "Pancakes 🥞"
    * Homemade:
        * 1 1/2 all-purpose flour
        * 3 1/2 baking powder
        * 1 tbsp sugar
        * 1/4 salt
        * 1 1/4 milk
        * 3 tbsp butter (melted)
        * 1 large egg
    * *OR pancake mix*

<div class="bear-footer" markdown>
[🔙 Back](meal.md)
</div>