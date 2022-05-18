let mylibrary = [];

function Book (title,author,pages,read) {
          this.title=title;
          this.author=author;
          this.pages=pages;
          this.read=read;
};

function addBookToLibrary(bookobj){
    mylibrary.push(bookobj);
}


//adding form//
let addBook = document.querySelector(".addBook");
let Popupform = document.querySelector(".Popupform");
let booksdiv = document.querySelector(".books");
let header = document.querySelector(".header");

let submit = document.querySelector(".submit");
let reset = document.querySelector(".reset");
let title = document.querySelector("#title");
let author = document.querySelector("#author");
let pages = document.querySelector("#pages");
let read = document.querySelector("#read");
let notread = document.querySelector("#notRead");

addBook.addEventListener("click", PopupForm);

function PopupForm() {
     if(Popupform.style.display==="none"){    
      Popupform.style.display="block";
     }
     else {
         Popupform.style.display="none";
     }
}

//linking form with page with js
submit.addEventListener("click", linkInfo);

function displayBook(newbookobj) {
        let carddiv = document.createElement("div");
        carddiv.classList.add("card");
        let titlediv = document.createElement("div");
        titlediv.classList.add("title");
        let pagesdiv = document.createElement("div");
        pagesdiv.classList.add("pages");
        let authordiv = document.createElement("div");
        authordiv.classList.add("author");
        let ratingdiv = document.createElement("div");
        ratingdiv.classList.add("rating");
        let Editcarddiv = document.createElement("div");
        Editcarddiv.classList.add("Editcard");
        let statusbutton = document.createElement("button");
        statusbutton.classList.add("status");
        let removebutton = document.createElement("button");
        removebutton.classList.add("removeBook");


        statusbutton.textContent=`${newbookobj.read}`;
        removebutton.textContent="remove";
        titlediv.textContent = `${newbookobj.title}`
        pagesdiv.textContent = `Pages: ${newbookobj.pages}`;
        authordiv.textContent = `Author: ${newbookobj.author}`;
        ratingdiv.textContent = `Rating: `;

        Editcarddiv.appendChild(statusbutton);
        Editcarddiv.appendChild(removebutton);

        carddiv.appendChild(titlediv);
        carddiv.appendChild(pagesdiv);
        carddiv.appendChild(authordiv);
        carddiv.appendChild(ratingdiv);
        carddiv.appendChild(Editcarddiv);
        console.log(carddiv);
        booksdiv.appendChild(carddiv);

        removebutton.addEventListener("click", removebook)
        function removebook() {
            booksdiv.removeChild(carddiv);
            let j =0;
            for(let i of mylibrary){
                j=j+1;
                 if(newbookobj.title===i.title){
                     mylibrary.splice(j-1,1);
                 }
            }
        }

        statusbutton.addEventListener("click",ChangeStaus);
        function ChangeStaus() {
            let j =0;
            for(let i of mylibrary){
                j=j+1;
                 if(newbookobj.title===i.title){
                     break;
                 }
            }
            if(newbookobj.read==="read"){
                statusbutton.textContent = "not read";
                mylibrary[j-1].read = "not read"; 
                carddiv.style["background-color"]="green";
            }
            else {
                statusbutton.textContent = "read";
                mylibrary[j-1].read = "read";
                carddiv.style["background-color"]="#FFF4BD";
            }
        }
}

function linkInfo() {
        let booktitle = title.value;
        let bookauthor = author.value;
        let bookpages = pages.value;
        let status;
        if(read.checked){
            status="read";
        }
        else if(notread.checked){
            status="not read";   
        }

        let newBook = new Book(booktitle,bookauthor,bookpages,status); 
        console.log(newBook);
        addBookToLibrary(newBook);
        displayBook(newBook);
        reset.click();
}
