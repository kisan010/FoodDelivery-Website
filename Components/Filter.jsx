


export const Filter=(searchDish,Alldishes)=>{
  
 const filtering=   Alldishes.filter((items)=>{
  return(
    items?.food_name?.toLowerCase().includes(searchDish.toLowerCase())
  )
})
     console.log(filtering);
   return filtering;

}