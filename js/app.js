
function add_element() {
  const divv = document.createElement('div');
  const li = document.createElement('li');
  var span1 = document.createElement("SPAN");
  const val = document.querySelector('input[type="text"]').value;
  var span2 = document.createElement("SPAN");
  var x = document.createElement("i");
  var a = document.createElement("a");
  var y = document.createElement("i");
  var z = document.createElement("i");
divv.className = "row first-row"
span1.className="col xl10 l9 m8 s6 name"
span2.className = 'col xl2 l3 m4 s6 icon'
  x.className = 'material-icons btn btn-small gray tooltipped checked'
  a.className='modal-trigger';
  y.className = 'material-icons btn btn-small gray tooltipped update'
  z.className = 'material-icons btn btn-small gray tooltipped delete'
  span1.textContent = val;
  x.textContent = 'check_circle_outline'
  y.textContent = 'create'
  z.textContent = 'delete'
x.setAttribute('data-position','top');
x.setAttribute('data-tooltip','Check');

y.setAttribute('data-position','top');
y.setAttribute('data-tooltip','Edit');

z.setAttribute('data-position','top');
z.setAttribute('data-tooltip','Delete');

a.setAttribute('href','#modal-edit');
a.appendChild(y);

span2.appendChild(x);
span2.appendChild(a);
span2.appendChild(z);

li.appendChild(span1);
li.appendChild(span2);
divv.appendChild(li);

if (val === '') {
  alert("You must write something!");
} else {
  document.getElementById("unordered-list").appendChild(divv);
}
var del = document.getElementsByClassName("delete");
var i;
for (i = 0; i < del.length; i++) {
  del[i].onclick = function() {
    var div = this.parentElement.parentElement.parentElement;
    div.style.display = "none";
  }
}
var checkBox = document.getElementsByClassName('checked');
for (var i = 0, len = checkBox.length; i < len; i++)
{
    (function(index){
        checkBox[i].onclick = function(){
{
        var text = checkBox[index].innerHTML;
        if (text === 'check_circle_outline')
        {
          checkBox[index].innerHTML = 'check_circle'
          checkBox[index].setAttribute('data-tooltip','Checked');
         
        } else 
        {
          checkBox[index].innerHTML = 'check_circle_outline';
          checkBox[index].setAttribute('data-tooltip','Check');
        }
}
        }
    })(i);
}

$(document).ready(function(){
  $('.tooltipped').tooltip()
  $('.modal').modal()
});
var g = document.getElementsByClassName('edit');
var updateLi = document.getElementsByTagName('li');
var placeholder = document.getElementById('wtf');
var ps= document.getElementById('update-item')
for (var i = 0, len = g.length; i < len; i++)
{
    (function(index){
        g[i].onclick = function(){
              
              var d = updateLi[index];
              document.querySelector('input[class="wtf"]').value = d.firstElementChild.innerText;
              ps.onclick = function() {
              if (document.querySelector('input[class="wtf"]').value === '')
              {
                  alert('You must write something');
              }
              else{
                  d.firstElementChild.innerHTML = document.querySelector('input[class="wtf"]').value;
        }
    }
        }
    })(i);
}    
}
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var a = document.createElement("i");
  var aa = document.createElement("a");
  var b = document.createElement("i");
  var c = document.createElement("i");
  a.textContent = 'check_circle_outline'
  b.textContent = 'create'
  c.textContent = 'delete_outline'
  span.className = 'col xl2 l3 m4 s6 icon'
  a.className = 'material-icons btn btn-small gray tooltipped checked' 
  aa.className='modal-trigger';
  b.className = 'material-icons btn btn-small gray tooltipped edit'
  c.className = 'material-icons btn btn-small gray tooltipped delete'
a.setAttribute('data-position','top');
a.setAttribute('data-tooltip','Check');


b.setAttribute('data-position','top');
b.setAttribute('data-tooltip','Edit');


c.setAttribute('data-position','top');
c.setAttribute('data-tooltip','Delete');

aa.setAttribute('href','#modal-edit');
aa.appendChild(b);
span.appendChild(a);
span.appendChild(aa);
span.appendChild(c);
myNodelist[i].appendChild(span);
}
   var del = document.getElementsByClassName("delete");
   var i;
   for (i = 0; i < del.length; i++) {
     del[i].onclick = function() {
       var div = this.parentElement.parentElement.parentElement;
       div.style.display = "none";
     }
   }
var checkBox = document.getElementsByClassName('checked');
for (var i = 0, len = checkBox.length; i < len; i++)
{
    (function(index){
        checkBox[i].onclick = function(){
{
        var text = checkBox[index].innerHTML;
        if (text === 'check_circle_outline')
        {
          checkBox[index].innerHTML = 'check_circle'
          checkBox[index].setAttribute('data-tooltip','Checked');
         
        } else 
        {
          checkBox[index].innerHTML = 'check_circle_outline';
          checkBox[index].setAttribute('data-tooltip','Check');
        }

}
        }
    })(i);
}
var g = document.getElementsByClassName('edit');
var updateLi = document.getElementsByTagName('li');
var placeholder = document.getElementById('wtf');
var ps= document.getElementById('update-item')
for (var i = 0, len = g.length; i < len; i++)
{
    (function(index){
        g[i].onclick = function(){              
              var d = updateLi[index];
              document.querySelector('input[class="wtf"]').value = d.firstElementChild.innerText;
              ps.onclick = function() {
              if (document.querySelector('input[class="wtf"]').value === '')
              {
                  alert('Pls write something');
              }
              else{
                  d.firstElementChild.innerHTML = document.querySelector('input[class="wtf"]').value;
        }
    }
        }
    })(i);
}