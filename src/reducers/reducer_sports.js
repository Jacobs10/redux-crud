var arr = [
    { title: "Track & Field", description: "Running" },
    { title: "Squash", description: "Indoor" },
    { title: "Tennis", description: "Outdoor" },
    { title: "Cross Country", description: "Running long distance" }
  ]

export default function(state= arr, action){
  switch(action.type){
    case 'SPORT_DELETED':
      arr = arr.filter(function(x){ return x.title !== action.payload.title})
      console.log(action.payload);
      return arr
    case 'ADD_SPORT':
    var arr2 = arr.concat([{title: action.payload[0], description: action.payload[1]}])
      return arr2
    case 'EDIT_SPORT':
    var editedSport = arr.concat([{title: action.payload[0], description: action.payload[1]}])
      var sports = arr.slice()
      var id = 2//
      sports.splice(id-1,1,product)

  }
  return arr
}

// export default function(){
//   return [
//     { title: "Track & Field" },
//     { title: "Squash" },
//     { title: "Tennis" },
//     { title: "Cross Country" }
//   ]
// }
