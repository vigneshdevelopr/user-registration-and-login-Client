import React from "react";
import Base from "../Components/Base";
import pizza from "../assets/food-pizza.jpg";
import { useHistory } from "react-router-dom";
import TopReviews from "../Components/TopReviews";

function Dashboard() {
  const history = useHistory();
  return (
    <Base>
      <div className="flex flex-auto md:mt-[50px]">
        <div className=" float-right md:w-xs md:min-h-fit  w-1/4 md:mt-0 mt-[120px] mr-7 rounded-lg ">
          <img src={pizza} alt="pizza" />
        </div>
        <div class=" text-white items-center py-40">
          <div className="text-pink-400 right-8 font-bassy md:text-7xl text-3xl ">
            <h1>Food Ordering Made Easy !</h1>
          </div>
          <button
            className="flex m-auto mt-20 bg-yellow-600 font-medium p-2 rounded-lg"
            onClick={() => history.push("/restaurant")}
          >
            Order Now !
          </button>
        </div>

      </div>
      <div className="text-white">
<TopReviews />

</div>
    </Base>
  );
}

export default Dashboard;
