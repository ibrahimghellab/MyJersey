import NavBar from "../../components/NavBar";
import Product from "../../components/Product";

export default function CollectionsPage() {
  return (
    <>
      <h1>
        ALL <span>COLLECTIONS</span>
      </h1>
      <select>
        <option value="">
          <span>Sort by:</span> Price : Low To High
        </option>
        <option value="">
          <span>Sort by:</span> Price : High To Low
        </option>
        <option value="">
          {" "}
          <span>Sort by:</span> Alphabetical : A To Z
        </option>
        <option value="">
          <span>Sort by:</span> Alphabetical : Z To A
        </option>
        <option value="">
          <span>Sort by:</span> Date: Old To Recent
        </option>
        <option value="">
          <span>Sort by:</span> Date: Recent To Old
        </option>
      </select>

      <div>
        <Product></Product>
      </div>
    </>
  );
}
