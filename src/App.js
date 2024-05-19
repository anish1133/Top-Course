import React, { useEffect, useState } from "react";
import {apiUrl,filterData} from "./data";
import Navbar from "./components/Navbar";
import Cards from "./components/Cards";
import Filter from "./components/Filter";
import Spinner from "./components/Spinner"; 
import { toast } from "react-toastify";


function App() { 
  const [loading,setLoading]=useState(true);
  const [courses,setCourses]=useState(null);
  const [category,setCategory] = useState(filterData[0].title);

  async function fetchData(){
    setLoading(true);
    try{
      let response = await fetch(apiUrl);
      let output = await response.json();

      setCourses(output.data);
    }
    catch(error){
      toast.error("there is some issue");
    }
    setLoading(false);
  }

  useEffect( () => {
    fetchData();
  },[])

  

  return (
    <div className="min-h-screen flex flex-col bg-gray-500">
      <div>
        <Navbar/>
      </div>

      <div className=" ">
          <div>
            <Filter filterData={filterData}
              category={category}
              setCategory={setCategory}
            />
          </div>
          <div className="w-11/12 max-w-[1200px] mx-auto flex flex-wrap justify-center items-center min-h-[50vh]">
          {
            loading ? (<Spinner/>) : (<Cards courses={courses} category={category}/>)
          }
      </div>

      </div>
      
      
    </div>
  );
}

export default App;
