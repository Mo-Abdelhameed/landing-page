let navBarList = document.querySelector('#navbar__list');
let iteration = 1;
let section4 = document.createElement('section');
let section5 = document.createElement('section');

document.querySelector('html').style.scrollBehavior = 'smooth';

section4.id = 'section4';
section4.setAttribute('data-nav', 'Section 4');
section4.innerHTML = `
<div>
<h2>Section 4</h2>

  <p>This is a new section that was added by me and was not oraiginally in the provided html.</p>
</div>`;


section5.id = 'section5';
section5.setAttribute('data-nav', 'Section 5');
section5.innerHTML = `<div>
<h2>Section 5</h2>
  <p>This is the fifth section.</p>
</div>`;

// Inserting new sections in place.
let main = document.querySelector('main');
main.insertAdjacentElement('beforeend', section4);
main.insertAdjacentElement('beforeend', section5);

// Building nav
let sections = document.querySelectorAll('section');
for(let i of sections){
    let li = document.createElement('li');
    li.innerHTML = 'Section ' + iteration++;
    navBarList.appendChild(li);
    li.addEventListener('click', function(event){
        i.scrollIntoView();
    });
}

// Setting the active section property. 
function activeSection(sectionsLocations){
  let minimum = Infinity;
  let res;
  for(let i of sections){
    let currentSection = Math.abs(i.getBoundingClientRect().y);
    if(minimum > currentSection){
      minimum = currentSection;
      res = i;
    }
  }
  return res;
}
// Changing the active section after scrolling.
document.addEventListener('scroll', function(){
  let active = activeSection();
  document.querySelector('.your-active-class').removeAttribute('class');
  active.setAttribute('class', 'your-active-class');
});


