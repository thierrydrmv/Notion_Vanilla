const content = document.getElementById('content')
// const modal = document.getElementById('modal')
// const divs = document.getElementsByTagName('div')
var data = []
var line = ''
var id = 0
var position = 0

function open(event) {
  line += event.key
  if (event.key == 'Backspace') {
    line = line.slice(0, -10)
    console.log(line)
  }
  if (event.key == 'Enter') {
    newElement(line)
  }
}

function newElement(line) {
  if (line.slice(line.length - 10) == 'Backspace') console.log('back')
  // line.slice(0, line.length - 11)
  if (line == 'ArrowUp') {
    position -= 1
  }
  var createItem = line.split('Enter')
  data.push({ id: (id += 1), tag: 'p', text: createItem[id - 1] })
  console.log(data)
  // data = data[data.length - 1]
}
// function input() {
//   var tags = Array.from(divs)
//   for (let index = 0; index < tags.length; index++) {
//     if (getData(index)) {
//       if (getData(index).includes('/')) {
//         openModal(index)
//       }
//     }
//   }
// }
// function createH1(index) {
//   removeModal()
//   var text = divs[index].innerText.replace('/1', '')
//   divs[
//     index
//   ].innerHTML = `<h1 contentEditable=true data-text="Heading 1" id="h1">${text}</h1>`
// }
// function getData(index) {
//   return divs[index]?.childNodes[0]?.data
// }
// function openModal(index) {
//   const modal = document.getElementById('modal')
//   var data = getData(index)
//   if (data.includes('/1') && !modal) {
//     content.innerHTML += `
//       <div onkeydown="keyCode(event)" contenteditable="false" id="modal" class="popup">
//         <strong>Add Blocks</strong>
//         <p>Keep typing to filter, or escape to exit</p>
//         <p>Filtering keyword 1️⃣</p>
//         <button id="focus" onClick="createH1(${index})" class="options">
//           <img src="https://super.so/icon/dark/type.svg" alt="" />
//           <div class="block">
//             <strong>Heading 1</strong>
//             <p class="margin">Shortcut: type # + space</p>
//           </div>
//         </button>
//         <button onClick="createH1(${index})" class="options">
//           <img src="https://super.so/icon/dark/type.svg" alt="" />
//           <div class="block">
//             <strong>Expandable Heading 1</strong>
//             <p class="margin">Shortcut: type >># + space</p>
//           </div>
//         </button>
//       </div>
//     `
//     const focus = document.getElementById('focus').focus()
//   }
// }
// function keyCode(event) {
//   if (event.key != 'Enter') {
//     removeModal()
//   }
// }
// function removeModal() {
//   const modal = document.getElementById('modal')
//   modal.remove()
// }

content.addEventListener('keyup', open)
