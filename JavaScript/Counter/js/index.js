let countEl = document.getElementById('count-el')
let saveEl = document.getElementById('save-el')
let sumEl = document.getElementById('sum-el')

let count = 0
let previous_score = 0
function increment() {
  count += 1
  countEl.textContent = count
}

function save() {
  saveEl.textContent += ' ' + count + ' -'
  console.log(count)
  let score = previous_score + count
  sumEl.textContent = 'Sum of people entered: ' + score
  previous_score = score
  count = 0
  countEl.textContent = count
}

function cleard() {
  console.log('UIN')
  saveEl.textContent = 'Previous entres: '
  count = 0
  countEl.textContent = count
  sumEl.textContent = 'Sum of people entered: '
  previous_score = 0
}
