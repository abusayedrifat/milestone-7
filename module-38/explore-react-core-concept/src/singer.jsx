export default function Singer({singer}) {
    console.log(singer);
    return(
        <div>
            <h3>Name: {singer.name} </h3>
            <h3>Age: {singer.age} </h3>
        </div>
    )
}