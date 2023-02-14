const searchBook = () => {
    const searchText = document.getElementById('search-feild');
    const searchValue = searchText.value;

    searchText.value = '';

    const url = ` https://openlibrary.org/search.json?q=${searchValue}`;

    fetch(url)
        .then(res => res.json())
        .then(data => displayBooks(data.docs))
}

const displayBooks = books => {
    const searchResult = document.getElementById('search-result');
    searchResult.textContent = '';
    books.forEach(book => {
        const searchDiv = document.createElement('div')
        searchDiv.classList.add('col');
        const imgUrl = `https://covers.openlibrary.org/b/id/${book.cover_i
            }-M.jpg`;
        searchDiv.innerHTML = `
        <div class="card">
        <img src=${imgUrl} class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${book.title_suggest}</h5>
            <p class="card-text">Author Name : ${book.author_name}</p>
            <p class="card-text">First publish : ${book.first_publish_year}</p>
        </div>
    </div>
        
        `;
        console.log(book)
        searchResult.appendChild(searchDiv);
    })
}