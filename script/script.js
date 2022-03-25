function turn_graph(id){
    var image = document.getElementById(id);

    if (image.style.display == "block")
        image.style.display = "none";
    else
        image.style.display = "block";
}