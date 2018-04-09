const navItems = [
    {
      label: 'Recipes',
      link: '#Recipes'
    },
    {
      label: 'Reviews',
      link: '#Reviews'
    },
    {
      label: 'Delivery',
      link: '#Delivery'
    },
    {
      label: 'Contact Us',
      link: '#contactus'
    }
    
    ];


const fakeContent = [
  {
    header: 'Contact Us',
    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio maiores adipisci quibusdam repudiandae dolor vero placeat esse sit! Quibusdam saepe aperiam explicabo placeat optio, consequuntur nihil voluptatibus expedita quia vero perferendis, deserunt et incidunt eveniet temporibus doloremque possimus facilis. Possimus labore, officia dolore! Eaque ratione saepe, alias harum laboriosam deserunt laudantium blanditiis eum explicabo placeat reiciendis labore iste sint. Consectetur expedita dignissimos, non quos distinctio, eos rerum facilis eligendi. Asperiores laudantium, rerum ratione consequatur, culpa consectetur possimus atque ab tempore illum non dolor nesciunt. Neque, rerum. A vel non incidunt, quod doloremque dignissimos necessitatibus aliquid laboriosam architecto at cupiditate commodi expedita in, quae blanditiis. Deserunt labore sequi, repellat laboriosam est, doloremque culpa reiciendis tempore excepturi. Enim nostrum fugit itaque vel corporis ullam sed tenetur ipsa qui rem quam error sint, libero. Laboriosam rem, ratione. Autem blanditiis laborum neque repudiandae quam, cumque, voluptate veritatis itaque, placeat veniam ad nisi. Expedita, laborum reprehenderit ratione soluta velit natus, odit mollitia. Corporis rerum minima fugiat in nostrum. Assumenda natus cupiditate hic quidem ex, quas, amet ipsum esse dolore facilis beatae maxime qui inventore, iste? Maiores dignissimos dolore culpa debitis voluptatem harum, excepturi enim reiciendis, tempora ab ipsam illum aspernatur quasi qui porro saepe iure sunt eligendi tenetur quaerat ducimus quas sequi omnis aperiam suscipit! Molestiae obcaecati officiis quo, ratione eveniet, provident pariatur. Veniam quasi expedita distinctio, itaque molestiae sequi, dolorum nisi repellendus quia facilis iusto dignissimos nam? Tenetur fugit quos autem nihil, perspiciatis expedita enim tempore, alias ab maiores quis necessitatibus distinctio molestias eum, quidem. Delectus impedit quidem laborum, fugit vel neque quo, ipsam, quasi aspernatur quas odio nihil? Veniam amet reiciendis blanditiis quis reprehenderit repudiandae neque, ab ducimus, odit excepturi voluptate saepe ipsam. Voluptatem eum error voluptas porro officiis, amet! Molestias, fugit, ut! Tempore non magnam, amet, facere ducimus accusantium eos veritatis neque.'
  }
]

const logoText = document.querySelector('.logo');
logoText.innerHTML = `Mantra <br /> Diners`

const nav = document.querySelector('.site-nav');
nav.innerHTML = "";

const markup = `<ul>
                ${navItems.map(navItem => `<li><a href="${navItem.link}">${navItem.label}</a></li>`).join('')}
                </ul>`;
nav.innerHTML = markup;
nav.firstChild.querySelector('li').classList.add('active');

const links = nav.querySelectorAll('a');
const linkListItems = nav.querySelectorAll('li');

for (let i=0; i<links.length; i++){
  links[i].addEventListener('click', function(){
  removeClass();
  this.parentNode.classList.add('active');
  })
}
function removeClass(){
      for (let i=0; i<linkListItems.length; i++){
        linkListItems[i].classList.remove('active');
      }
}

 

let topOfNav = nav.offsetTop;

window.addEventListener('scroll',fixNav);

function fixNav(){
  if(window.scrollY >= topOfNav){
    document.body.style.paddingTop = nav.offsetHeight + 'px';
    document.body.classList.add('fixed-nav'); 
  }
  else{
    document.body.classList.remove('fixed-nav');
    document.body.style.paddingTop = 0;
  }
}



// const sitewrap = document.querySelector('.site-wrap');
// const navTest = document.querySelectorAll('#main ul li a');
// for (let i=0; i<navTest.length; i++){
//   navTest[i].addEventListener('click', prepContent)
// }

// function prepContent(e){
//   if (this.hash == "#contactus"){
//     console.log('here')
//     const header = fakeContent[0].header;
//     const content = fakeContent[0].content;
//     sitewrap.innerHTML = `
//       <h2>${header}</h2>
//       <p>${content}</p>
//     `;
//     e.preventDefault();
//   }
// }


