import React from "react";
import recipes from "../recipes";

const Menu = () => {

    const handleOrder = (id) => {
        console.log(id, "id is clieked");
        Swal.fire ({
            title: "Are you sure?",
            text: "You won't be able to rever this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, order it",           
        }).then((result) => {
            if (result.isConfirmed){
                Swal.fire(
                    "Ordered",
                    "Your order has been processing.",
                    "success"
                )
            }
        })


    }
    return(
        <div className="menu-container">
            <div className="menu-header">
                <h2>This week specialist</h2>
                <button>Order Menu</button>
            </div>

            {/* Menu cards */}
            <div className="cards">
               {
                recipes.map(recipe => <div key={recipe.id} className="menu-items">
                        <img src={recipe.img} alt=""/>
                        <div className="menu-content">
                            <div className="heading">
                                <h5>{recipe.title}</h5>
                                <p>{recipe.price}</p>
                            </div>
                            <p>{recipe.description}</p>
                            <button className="orderbtn" onClick={() => handleOrder (recipe.id)}>Order Now</button>
                        </div>
                    </div>)
               } 
            </div>
        </div>
   );
};

export default Menu;