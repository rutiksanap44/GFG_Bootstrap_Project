// const toggleLines = document.getElementsByClassName('toggle-lines')[0];
// const navbarLinks = document.getElementsByClassName('navbar-links')[0];

// toggleLines.addEventListener('click',function(){
//     navbarLinks.classList.toggle('active');
// });

const addAlbumbtn = document.getElementById('addAlbum');

const albums = document.getElementsByClassName('albums')[0];

addAlbumbtn.addEventListener('click', function(e){
    e.preventDefault();

    const imgURL = document.getElementById('imageurl').value;
    console.log(imgURL);

    const description = document.getElementById("desc").value;
    console.log(description);

    const createalbumvar = createAlbum(imgURL, description);
    albums.appendChild(createalbumvar);
});

function createAlbum(imageURL, description){
    const mainclassDiv = document.createElement('div');
    mainclassDiv.className = 'mainclass';
    console.log(mainclassDiv);

    const thumbDiv = document.createElement('div');
    thumbDiv.className = "thumbnail";
    console.log(thumbDiv);

    const image = document.createElement('img');
    image.setAttribute('src',imageURL);
    thumbDiv.appendChild(image);
    console.log(image);

    const maintextDiv = document.createElement('div');
    maintextDiv.className = 'main-text';
    console.log(maintextDiv);

    const para = document.createElement('p');
    para.textContent = description;
    console.log(para);

    maintextDiv.appendChild(para);

    const mainFooter = document.createElement('div');
    mainFooter.className = 'main-footer';
    console.log(mainFooter);

    const footerButton = document.createElement('div');
    footerButton.className = 'main-footer-buttons';
    console.log(footerButton);

    const span1 = document.createElement('span');
    const button1  = document.createElement('button');
    button1.textContent = 'view';
    span1.appendChild(button1);
    console.log(span1);
    console.log(button1);

    const span2 = document.createElement('span');
    const button2  = document.createElement('button');
    button2.textContent = 'Edit';
    span2.appendChild(button2);
    console.log(span2);
    console.log(button2);

    footerButton.appendChild(span1);
    footerButton.appendChild(span2);

    const timediv = document.createElement('div');
    timediv.textContent = '9 mins';
    console.log(timediv);

    mainFooter.appendChild(footerButton);
    mainFooter.appendChild(timediv);

    mainclassDiv.appendChild(thumbDiv);
    mainclassDiv.appendChild(maintextDiv);
    mainclassDiv.appendChild(mainFooter);

    
    return mainclassDiv;
}
