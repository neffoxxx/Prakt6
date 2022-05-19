function changeColor(value)
{
    var color = document.body.style.backgroundColor;
    switch(value)
    {
        case 'b':
            color = "#0000FF";
            break;
        case 'a':
            color = "#00FFFF";
            break;
        case 'g':
            color = "#008000"
            break;
    }
    document.body.style.backgroundColor = color;
}