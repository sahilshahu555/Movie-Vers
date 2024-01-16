const Pagination = ({page,setPage,TotalPage}) => {
    let total=Math.ceil(TotalPage/5)
  return <div className="pagination flex justify-around items-center mt-5">
    <button disabled={page===1} style={{backgroundColor:"red"}} onClick={()=>{setPage(-1)}}>Previous</button>
    <button className="bgGreen" style={{backgroundColor:"green"}}>{page}</button>
    <button disabled={page===total} style={{backgroundColor:"red"}} onClick={()=>{setPage(1)}}>Next</button>

  </div>;
};

export default Pagination;