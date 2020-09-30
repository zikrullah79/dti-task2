var idx = 0;
function changeBackground(sum){
    idx = (idx + sum) % 3;
    switch (idx) {
        case 1:
            $("#img-figure").html('<circle cx="50" cy="50" r="40"  stroke-width="3" stroke="#17a1b8" fill="white" />')  
            $("#form").html(' <div class="form-group"> <label for="r">Radius Lingkaran : </label> <input id="r" type="number" onchange="calcCirc()" class="form-control" placeholder="Radius" > </div> <div id="info" class="alert alert-info invisible" role="alert"> </div>');
            break;
        case 2:
            $("#img-figure").html('<polygon  points="50,0 0,100 100,100" stroke-width="3" stroke="#17a1b8" fill="white"/>')
            $("#form").html('<div class="form-group"> <label for="s1">Sisi 1 : </label> <input id="s1" type="number" onchange="calcTri()" class="form-control" placeholder="Sisi 1" > </div> <div class="form-group"> <label for="s2">Sisi 2 : </label> <input id="s2" type="number" onchange="calcTri()" class="form-control" placeholder="Sisi 2" > </div> <div class="form-group"> <label for="s3">Sisi 3 : </label> <input id="s3" type="number" onchange="calcTri()" class="form-control" placeholder="Sisi 3" > </div> <div id="info" class="alert alert-info invisible" role="alert"> </div>');
            break;
        default:
            $("#img-figure").html('<rect width="100" height="100" stroke-width="3" stroke="#17a1b8" fill="white" />')
            $("#form").html('<div class="form-group"> <label for="p">Panjang Persegi : </label> <input id="p" type="number" class="form-control" onchange="calcRect()" placeholder="Panjang" > </div> <div class="form-group"> <label for="l">Lebar Persegi : </label> <input id="l" type="number" class="form-control" onchange="calcRect()" placeholder="Lebar" > </div> <div id="info" class="alert alert-info invisible" role="alert"> </div>')
            break;
    }
}