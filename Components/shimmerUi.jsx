export const Shimmer=()=>{

        
            return(
                <>
                <div className="shimmerUi">
{
     Array(10).fill('').map((e, index)=>(<div className='box'key={index}> </div>))
}
                </div>
                </>
            )
            
        

   
}