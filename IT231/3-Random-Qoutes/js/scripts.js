const quotes =  [
"“Just know, when you truly want success, you’ll never give up on it. No matter how bad the situation may get.” — Unknown",
"“Accept responsibility for your life. Know that it is you who will get you where you want to go, no one else.” –Les Brown",
"“I don’t regret the things I’ve done, I regret the things I didn’t do when I had the chance.” — Unknown",
"“Challenges are what make life interesting and overcoming them is what makes life meaningful.” — Joshua J. Marine",
"“Its hard to wait around for something you know might never happen; but its harder to give up when you know its everything you want.” — Unknown",
"“One of the most important keys to Success is having the discipline to do what you know you should do, even when you dont feel like doing it.” — Unknown", 
"“Good things come to those who wait… greater things come to those who get off their ass and do anything to make it happen.” — Unknown", 
]

const usedIndexes = new Set(); 
const quotesElement = document.getElementById('quote'); 

function generateQuote(){ 
    if(usedIndexes.size >= quotes.length){
        usedIndexes.clear(); 
    }
    while(true){ 
        const randomIdx = Math.floor(Math.random() * quotes.length); 
        if (usedIndexes.has(randomIdx))
            continue;
                const quote = quotes[randomIdx]; 
                quotesElement.innerHTML = quote; 
                usedIndexes.add(randomIdx);
                break;
        
    }
}