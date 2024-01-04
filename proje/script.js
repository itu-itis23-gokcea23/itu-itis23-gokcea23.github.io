document.addEventListener('DOMContentLoaded', () => {
    const gamePlace = document.getElementById("game-place");
    const puan = document.getElementById("score");
    const startButton = document.getElementById("startb");
    const restartButton = document.getElementById("restartb");
    var  sayi  = 1;
    var mixedOrder = [1,2,3,4,5]
    function mixOrder() {
        let kartSirasi = [1, 2, 3, 4, 5];
        for (let i = kartSirasi.length - 1; i > 0; i--) {
            const k  = Math.floor(Math.random() * (1 + i));
            [kartSirasi[i], kartSirasi[k]] = [kartSirasi[k], kartSirasi[i]];
        }
        return kartSirasi; 
    }
    
    function starter() 
    {
        
        sayi = 1;
        puan.innerHTML = 0
        mixedOrder = mixOrder();
        
        displayCards(mixedOrder);
      
    }
    startButton.addEventListener('click', () => {
        starter()
    });
    restartButton.addEventListener('click', () => {
        starter()
    });

    
    firstDisplayCards(mixedOrder)
    function firstDisplayCards(){
        gamePlace.innerHTML = "";

        for (let i = 0; i < 5; i++) {
            let klaskart = document.createElement("div");
            klaskart.classList.add("card");
            klaskart.style.backgroundImage = `url('letters/${mixedOrder[i]}.svg')`; 
            gamePlace.appendChild(klaskart);
        }
    }
   
    function displayCards(order) {
        gamePlace.innerHTML = "";

        for (let i = 0; i < 5; i++) {
            let klaskart = document.createElement("div");
            klaskart.classList.add("card");
            klaskart.style.backgroundImage = `url('letters/${mixedOrder[i]}.svg')`; 
            klaskart.alt = `Card ${i}`;
            klaskart.setAttribute("index",i);
            gamePlace.appendChild(klaskart);

    
    
        }
        setTimeout(() => {
            gamePlace.innerHTML = "";

            for (let i = 0; i < 5; i++) {
                let klaskart = document.createElement("div");
                klaskart.classList.add("card");
                klaskart.style.backgroundColor = "red";
                klaskart.alt = `Card ${i}`;
                klaskart.addEventListener('click', gameSet);
                klaskart.setAttribute("index", i);
                gamePlace.appendChild(klaskart);
            }
        }, 2000);

    }

    function gameSet(kart) {
        const hedefkart = kart.target
        const tiklananKart = Number(hedefkart.getAttribute("index"));

        if (sayi == mixedOrder[tiklananKart]){
           
            hedefkart.style.backgroundImage = `url('letters/${mixedOrder[tiklananKart]}.svg')`; 
            puan.innerHTML = (sayi)*20
            sayi++;
            

        }
        else{
            
            gamePlace.innerHTML = "";

           
        }
        

    }
 

    

});