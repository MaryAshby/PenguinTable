var setBanner = function(message)
{
    d3.select("#banner").text(message);
}








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
