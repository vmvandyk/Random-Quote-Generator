$( document ).ready(function() {
  const quoteList = [
    "There is beauty at the top of the mountain and in the sunlit plains just as there is beauty in the valley and the deep shadows.",
    "Look at what is on your plate. Take a moment to appreciate its little details. Where did your food come from? Who were the people who made the ingredients? Put yourself in their shoes. Be thankful. Then eat.",
    "What lies behind us and what lies before us are tiny matters, compared to what lies within us. - Ralph Waldo Emerson",
    "Today I am living every moment, including the uncomfortable ones.",
    "Nothing can bring you peace but yourself - Ralph Waldo Emerson",
    "Happiness is a matter of being, not having.",
    "When the power of love overcomes the love of power, the world will know peace. - Jimi Hendrix",
    "Mind always matters.",
    "Do nothing and be brave about it.",
    "You do not need to constantly compare your happiness with that of others. Contentment denies comparison.",
    "The past cannot be changed by you and worrying about the future will only serve to ruin your present.",
    "We need time when we separate ourselves from family and friends and go to new places. It is only by being without what is familiar that we can be open to change.",
    `A friend resigned from his job and I asked him why. He said "Sometimes you just have to leave, even if you don't know where you're going."`,
    `Just as we outgrow favorite clothes, we may also outgrow friends, colleagues, jobs, hobbies - sometimes while they're still in good condition and before we've found replacements.`,
    "A spouse is someone who knows the song in your heart and can sing it back to you when you forget the words.",
    "We live where we love.",
    "Use the bricks people throw at you as the building blocks for your success.",
    "We are what we repeatedly do. Excellence, therefore, is not an act but a habit.",
    "Our friends are the garden in which we plant our trust, our hope, our love, and our faith and in which we give thanks for each blossom, however much time it may take to bloom.",
    "Have a day of slow-tech. Write letters. Wash by hand. Walk. Sweep the floor. Read a little.",
    "Patience is listening to someone talk about himself or herself when you want to talk about yourself.",
    "When you can avoid finishing other people's sentences, you really begin to hear what they have to say.",
    "Computers are incredibly fast, accurate, and stupid; humans are incredibly slow, inaccurate and brilliant; together they are powerful beyond imagination. - Albert Einstein",
    `A Native American grandfather was talking to his grandson about how he felt. He said, "I feel as if I have two wolves fighting in my heart. One wolf is the vengeful, angry one. The other wolf is the loving, compassionate one." The grandson asked him, "Which wolf will win the fight in your heart?" The grandfather answered, "The one I feed."`,
    "Don't always be running to something, or from something. Sometimes just run.",
    "Where you are, with what you have, do what you can.",
    "If we were all comfortable with who we are, we'd only ever have to buy the things we really need and like.",
    "Live your life on all its levels: Your physical life, Your mental life, Your emotional life, And your spiritual life.",
    "You can do small things in a great way.",
    "Those who annoy us most are often our greatest teachers.",
    "When you run out of known paths, the wild country is revealed in its splendor.",
    "When we approve of ourselves, rather than always seeking approval from others, we find happiness.",
    "When one door closes, another opens.",
    "The path to happiness is paved with dreams, but don't forget to admire the beauty of the landscape as you travel.",
    "People in difficult circumstances can be happy, while those who live a life of ease may be miserable.",
    "Be curious about the world around you; try to learn as much as you can about it.",
    "If you're unhappy, don't try to hide it. Express it, then let it go.",
    "Let go of sadness. Don't allow it to become a comfort zone.",
    "It is better to travel than to arrive.",
    "Happiness is meeting an old friend you haven't seen for years, and picking up where you left off.",
    "Sometimes happiness is free; sometimes, it comes at a cost.",
    "Everyone has a different idea of happiness. Follow you own path, not someone else's."
  ]
  const numberOfQuotes = quoteList.length
  //alert(Math.random())
  //alert(quoteList[Math.floor(Math.random()*numberOfQuotes)])
  //const randomQuote = quoteList[Math.floor(Math.random()*numberOfQuotes)]
  //console.log(randomQuote)
  $("#quoteButton").on("click", function() {
    let randomInteger = Math.floor(Math.random()*numberOfQuotes)
    let randomQuote = quoteList[randomInteger]
    $("#quoteContent").text(randomQuote)
  })
})
