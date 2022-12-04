function fetchBooks(){
    fetch(`https://anapioficeandfire.com/api/books`)
    .then(res => res.json())
    .then((data) => console.log(data))
}