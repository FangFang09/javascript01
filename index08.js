const content01 = document.getElementById('content')
const content02 = document.getElementById('date')
const content03 = document.getElementById('time')
const content04 = document.getElementById('addedBtn')
const content05 = document.getElementById('deletedBtn')
const content06 = document.getElementById('list')

const ListContent = []

function render() {
 //渲染頁面的list
 let htmlStr = '' //一開始是空值

 ListContent.forEach(function(abc){
   htmlStr = htmlStr + `
   <div class="item">
     <div>
       <p>內容：${abc.content01}</p>
       <p>時間：${abc.content02} ${abc.content03}</p>
     </div>
   </div>
   `
   //↑用模板語法寫字串，模板語法還可以透過$字號將變數插入字串
   //forEach跑兩次，div的地方就會被組裝兩次，透過htmlStr放入innerHTML

 })

 content06.innerHTML = htmlStr
}

content04.addEventListener('click',function () {
ListContent.unshift({
  content01:content01.value,
  content02:content02.value,
  content03:content03.value
  })

  render()

})

content05.addEventListener('click',function () {
  ListContent.shift()

  render()
})


//pop是從最後面拿取出來;push是從最後面加入;unshift從前面推入;shift是從前面把東西拿出來

//同樣程式碼執行兩次，優化方式：將渲染的邏輯包裝成funciton 使程式碼更簡潔