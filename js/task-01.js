const itemsRef = document.querySelectorAll('.item')
console.log('Number of categories: ', itemsRef.length)

itemsRef.forEach((item) => {
  let titleRef = item.querySelector('h2')
  let categoryItemsRef = item.querySelectorAll('li')
  console.log('Category: ', titleRef.textContent)
  console.log('Elements: ', categoryItemsRef.length)
})
