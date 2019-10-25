
//set banner for promise retrieval//

var setBanner = function(message)
     {
       d3.select("#banner").text(message);
     }


//promise//

var penguinPromise = d3.json("penguin/classData.json")

penguinPromise.then(function(penguin)
     {
      setBanner("Pretty Pompous Penguins");
     },
function(err)
     {
      setBanner("Penguins Have Left the Building");
     });

//creation of requested data//

var picture=function(penguin)
    {var obj=picture: penguin.picture;
     return obj;}

var getGrade=function(quiz) 
     {return quiz.grade;}

var meanQuiz = function(penguin)
     {var pq=penguin.quizes.map(getGrade);
      var answer=d3.mean(pq);
      return answer;}

var hwGrade=function(homework)
     {return answer;}

var meanHW=function(penguin)
     {var pq=penguin.homework.map(hwGrade);
      var answer=d3.mean(pq);
      return answer;}

var testGrade=function(test)
     {return test.grade;}

var meanTests=function(penguin)
     {var pq=penguin.test.map(testGrade);
      var answer=d3.mean(pq);
      return answer;}

var final=function(final)
     {return final.grade;}

var finGrade=function(penguin)
    {var obj=(final*0.35)+(meanTests*0.3)+(meanQuiz*0.2)+(meanHW*0.15);
        return obj;}

//push of new info to penguins//


var penguinTableInformation=[picture, meanQuiz, meanHW, meanTests, finGrade]

classroom.push(penguinTableInformation);

//Buttons//
      
var setButtons = function(penguins)
     {
      d3.select("#all").on("click",function()
                       {
                        makeTable(penguins,"all")
                       });
    
    d3.select("passing").on("click",function()
                        {
                        makeTable(penguins,"passing")
                        });
    
    d3.select("#poor").on("click",function()
                        {
                         makeTable(planets,"poor")
                        });
     }

var filterPenguins = function(penguins,mode)
{
    if(mode=="all")
    {
        return penguins;       
    }
    else if (mode == "passing")
    {
        return penguins.filter(function(penguins)
           {
           return penguins.finGrade=>70;                      
           })
    }
    else if (mode == "poor")
    {
        return penguins.filter(function(penguins)
        {
            return penguin.finGrade<70;                      
        })
    }
    else
    {
        console.error("UNKNOWN fitler Type",mode);    
        return undefined;
    }
}

   
                   

    
//TABLE//
    //where col=column and accessor =getters and setters//
    
 var sortColumn=function(picture,col,accessor)
 {
    d3.select(col)
        .on("click",function()
    {
        penguin.sort(function(a,b) 
        { 
            return (accessor(a)-accessor(b));
        })
        makeTable(penguin,"all");
    })
}
 
 var tableHeader = function(penguins)
 {
     d3.select("#quiz")
               .on("click", function()
                   {
         makeTable(penguins.sort(function(a,b)
                                 {return a-b}), "all")
     }
           
    sortColumn(planets,"#homework",function(p){return p.meanHW});
    sortColumn(planets,"#test",function(p){return p.meanTests});
    sortColumn(planets,"#final",function(p){return p.finGrade});
      
  var addCol = function(rows,fcn)
{
    rows.append("td").text(fcn);
}

var makeTable = function(penguins,mode)
{
    d3.selectAll("tbody *").remove();
  
    var rows = d3.select("tbody")
    .selectAll("tr")
    .data(filterPenguins(penguins,mode))
    .enter()
    .append("tr");
    
    
    addCol(rows,function(penguins){return penguin.meanQuiz})
    
    rows.append("td")
        .append("img")
        .attr("src",function(penguins)
        {
            return penguins.img;
        })
        .attr("alt",function(penguins)
        {
            return "One Fine Penguin "+penguins.name;
        })
           
    addCol(rows,function(penguins){return penguins.meanHW})
    addCol(rows,function(penguins){return penguins.meanTests})
    addCol(rows,function(penguins){return penguins.finGrade})
  
}


    
      
