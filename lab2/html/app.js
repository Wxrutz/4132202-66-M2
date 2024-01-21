
    var num = 10;
    let name = "warut"
    age = 21
    const year = 2002

    console.log(year)

    fruit = ["banana","apple","orange"];

    console.log(fruit);

    plant = {fruit:"banana",car:"nissan",color: "orange"}

    console.log(plant);

    dataJson = {
        employee:[{name: "warut"},{age: 21},{year: 2002}],
    };

    console.log(dataJson.employee[0].name);

    let msg = name +" "+ year;
    msg = `${name} ${year}`;
    
    console.log(msg);

    document.getElementById('title').innerHTML=msg;

    $(function(){
        $("#title")
        .html(msg+"jQuery")
        .addClass("red");
    });

</script>