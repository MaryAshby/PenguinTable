//creation of requested data//
var picture=function(penguin)
{var obj=
    {picture: penguin.picture};
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

var testGrade=funtion(test)
{return test.grade;}

var meanTests=function(penguin)
{var pq=penguin.test.map(testGrade);
 var answer=d3.mean(pq);
 return answer;}

var finGrade=function(penguin)
    {var obj=(meanFinal*0.35)+(meanTests*0.3)+(meanQuiz*0.2)+(meanHW*0.15);
        return obj;}

var penguinTableInformation=[picture, meanQuiz, meanHW, meanTests, finGrade]
//push of new info to penguins//

classroom.push(penguinTableInformation);



//set banner for promise//
var setBanner = function(message)
{
    d3.select("#banner").text(message);
}







//promise//
var penguinPromise = d3.json("classData.json")

penguinPromise.then(function(penguin)
{
 setBanner("Pretty Pompous Penguins");
 drawImages(penguin);
},
function(err)
{
 setBanner("Penguins Have Left the Building");
});
