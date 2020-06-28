class Form {
    constructor(){
        
    }
    display(){
       

        var input1 = createInput("Name")
        var input2 = createInput("Email ID")

        input1.position(1000,20)
        input2.position(1000,50)

        var subtitle1 = createElement("h2")
        fill('black');
        textSize(25);
        textFont('Candara')
        text('Q1.Do you want to donate something for the migrant workers',0,100);
        subtitle1.position(190,250)

        var yesButton = createButton("YES")
        yesButton.position(390,230)

        var noButton = createButton("NO")
        noButton.position(500,230)

        var submitButton = createButton("SUBMIT SURVEY")
        submitButton.position(600,600)

        var title = createElement("h2");
        fill('red');
        textSize(30);
        text('A Survey To Support Migrant Labour',0,50);      
        title.position(500,30)

        var subtitle2 = createElement("h2");
        fill('black');
        textSize(25);
        text('Q2.What do you want to donate?',0,200);      
        subtitle2.position(500,30)
        
        var subtitle3 = createElement("h2");
        fill('black');
        textSize(25);
        text('Q3.Are you able to hand it over to school or to your residential society?',0,300);      
        subtitle3.position(500,30)

        var subtitle4 = createElement("h2");
        fill('black');
        textSize(25);
        text('Q4.How much stars will you give to rate this survey?',0,400);      
        subtitle4.position(500,30)

        var society = createButton("SOCIETY ")
        society.position(390,430)

        var school = createButton("SCHOOL")
        school.position(530,430)

        var money = createButton("MONEY")
        money.position(390,330)

        var clothes = createButton("CLOTHES")
        clothes.position(550,330)

        var food = createButton("FOOD")
        food.position(720,330)

        var star1 = createButton("*")
        star1.position(390,530)

        var star2 = createButton("**")
        star2.position(500,530)

        var star3 = createButton("***")
        star3.position(620,530)

        var star4 = createButton("****")
        star4.position(740,530)

        var star5 = createButton("*****")
        star5.position(870,530)

        submitButton.mousePressed(function(){
            submitButton.hide()
        })

        yesButton.mousePressed(function(){
            noButton.hide()

            YES+=1
        })

        noButton.mousePressed(function(){
            yesButton.hide()

            NO+=1
        })
        money.mousePressed(function(){
            food.hide()
            clothes.hide()
            MONEY+=1
        })
        
        food.mousePressed(function(){
            money.hide()
            clothes.hide()
            FOOD+=1
        })

        clothes.mousePressed(function(){
            money.hide()
            food.hide()
            CLOTHES+=1
        })

        school.mousePressed(function(){
            society.hide()
            SCHOOL+=1
        })

        society.mousePressed(function(){
            school.hide()
            SOCIETY+=1
        })
        star1.mousePressed(function(){
            star2.hide()
            star3.hide()
            star4.hide()
            star5.hide()
            STAR1+=1
        })

        star2.mousePressed(function(){
            star1.hide()
            star3.hide()
            star4.hide()
            star5.hide()
            STAR2+=1
        })

        star3.mousePressed(function(){
            star1.hide()
            star2.hide()
            star4.hide()
            star5.hide()
            STAR1+=1
        })

        star4.mousePressed(function(){
            star1.hide()
            star2.hide()
            star3.hide()
            star5.hide()
            STAR2+=1
        })

        star5.mousePressed(function(){
            star1.hide()
            star2.hide()
            star3.hide()
            star4.hide()
            STAR2+=1
        })

        submitButton.mousePressed(function(){
            submitButton.hide()
            fill('red');
            textSize(30);
            text('Thank you!Your Survey has been submitted.',100,550); 
            STAR2+=1
        })
    }
}
