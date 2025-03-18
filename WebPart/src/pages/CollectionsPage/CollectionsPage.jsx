import { useEffect, useState } from "react";
import Product from "../../components/Product";


export default function CollectionsPage() {
  const [data,setData] = useState([]);

  useEffect(()=>{
    fetch("http://localhost:5000/collections")
    .then((response)=>{
      if(response){
        return response.json();
      }else{
        throw new Error("Erreur lors de la récupération des données");
      }
    }).then((data)=>{
      setData(data);
    }).catch((error)=>{
      console.log(error);
    })
  },[]);
  return (
    <>
      <h1>
        ALL COLLECTIONS
      </h1>
      <select>
        <option value="">
          Sort by: Price : Low To High
        </option>
        <option value="">
          Sort by: Price : High To Low
        </option>
        <option value="">
          {" "}
          Sort by: Alphabetical : A To Z
        </option>
        <option value="">
          Sort by: Alphabetical : Z To A
        </option>
        <option value="">
          Sort by: Date: Old To Recent
        </option>
        <option value="">
          Sort by: Date: Recent To Old
        </option>
      </select>
      <div>
        {console.log(data)} 
        {data.map((collection)=>(
          <Product key={collection.id_collection} price="50">{collection.name}</Product>
        ))}
      </div>
    </>
  );
}
