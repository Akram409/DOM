document.getElementById('review-btn').addEventListener('click',function(){
  const text = document.getElementById('floatingTextarea2').value
  
  const list = document.createElement('li')
  list.innerText = text
  
  document.getElementById('commnet-container').appendChild(list)
  document.getElementById('commnet-container').style.listStyle = 'none'

 document.getElementById('floatingTextarea2').value = ""
})