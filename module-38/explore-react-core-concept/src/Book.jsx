export default function Book({book}) {
    const {name, price} = book
    return(
        <div>
            <h3>Book Name: {book.name}</h3>
            <p>Price: {book.price}</p>
        </div>
    )
}