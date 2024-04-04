// export default function toDO({task}) {
//     return(
//       <li>Tasks : {task} </li>
//     )
// }
//-------------------------------------------

//conditional rendering : option-1

// export default function toDO({task, isDone}) {
//    if (isDone === true) {
//     return <li>Finished : {task}</li>
//    }
//     else {
//     return <li>Work on: {task}</li>
//    }
// }

//-----------------------------------------------

//conditional rendering : option-2(ternary)

// export default function toDo({task, isDone}) {
//   return(
//     <li> {isDone ? 'finished' :'work on'} : {task} </li>
//   )
// }

//-------------------------------------------------

//rendering option-3 :&&
// export default function toDo({task, isDone}) {
//   return(
//     <li>  {task} {isDone && ': done'}  </li>
//   )
// }

//----------------------------------------------

//rendering option-3 :&&
export default function toDo({task, isDone}) {
  return(
    <li>  {task} {isDone || ': do it'}  </li>
  )
}







