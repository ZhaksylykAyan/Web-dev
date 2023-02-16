const destination = document.getElementById("list");
const input = document.getElementById("input");
function add(){
    let text = input.value;
    if (text == ""){
        return;
    }
    input.value = "";
    destination.innerHTML += `<div class="listItem"><input class="cbox" type="checkbox" onclick="cross(this)"><p>${text}<p>
                 <div class = "pic"><img class="del" onclick="del(this);" src="https://www.iconpacks.net/icons/1/free-trash-icon-347-thumb.png" width="20px"><div><\div>`;
}
function del(element){
    return element.parentNode.parentNode.remove();
}
function cross(element){
    let crossed = element.parentNode.childNodes[1];
    return (element.checked) ? crossed.style.textDecoration = "line-through" : crossed.style.textDecoration = "none";
}