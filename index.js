$( document ).ready(function() {
  const quoteList = [
    "There is beauty at the top of the mountain and in the sunlit plains just as there is beauty in the valley and the deep shadows.",
    "Look at what is on your plate. Take a moment to appreciate its little details. Where did your food come from? Who were the people who made the ingredients? Put yourself in their shoes. Be thankful. Then eat."
  ]
  const numberOfQuotes = quoteList.length
  //alert(Math.random())
  //alert(quoteList[Math.floor(Math.random()*numberOfQuotes)])
  const randomQuote = quoteList[Math.floor(Math.random()*numberOfQuotes)]
  //console.log(randomQuote)
  $("#quoteContent").text(randomQuote)
});
