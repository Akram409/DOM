
var val = 0;
document.getElementById('input-btn').addEventListener('click',function(){
  const input = document.getElementById('input-value').value

  document.getElementById('input-value').value = ""

  
  const parent = document.getElementById('content-container')
  val++;
  const tr = document.createElement('tr')
  tr.innerHTML = `
    <td>${val}</td>
    <td>${input}</td>
    <td>
      <button class="btn btn-danger dlt-btn">Delete</button>
      <button id="done" class="btn btn-primary">Done</button>
    </td>
  `
  parent.appendChild(tr)

  const dlt = document.querySelectorAll(".dlt-btn")

    for(const val of dlt)
      val.addEventListener('click',function(event){
        event.target.parentNode.parentNode.style.display = "none"
      })
})
