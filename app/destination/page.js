"use client";

import { useState } from "react";

import styles from "@/components/destination/destination.module.css";
import PlanetWishlistItem from "@/components/destination/planetWishListItem.js";
import { AddWishlistItem } from "@/components/destination/AddWishlistItem.js";

// TASK - React 1 week 2
// Move this to its own file
// const PlanetWishlistItem = ({
//   name,
//   onRemove,
//   thumbnail,
// }) => {
//   return (
//     <div className={styles.wishlistItem}>
//       <img className={styles.wishlistItemThumbnail} src={thumbnail} alt="" />
//       <b>{name.toUpperCase()}</b>
//       <button onClick={onRemove}>remove</button>
//     </div>
//   );
// }
/* TASK - React 1 week 2 */
export const Destinations = () => {
  const [selectedPlanets, setSelectedPlanets] = useState([]);

  const onAddOrRemovePlanet = (name, thumbnail) => {
    setSelectedPlanets((prev) => {
      const isAlreadySelected = prev.some((planet) => planet.name === name);
      if (isAlreadySelected) {
        return prev.filter((planet) => planet.name !== name);
      } else {
        return [...prev, { name, thumbnail }];
      }
    });
  };

  const numberOfPlanets = selectedPlanets.length;

  const removeFromWishlist = (name) => {
    setSelectedPlanets((prev) => prev.filter((planet) => planet.name !== name));
  };
  const onAddWishlistItem = (name, thumbnail) => {
    onAddOrRemovePlanet(name, thumbnail);
  };

  return (
    <div className="fullBGpicture">
      <main className="mainContent">
        <h1>Travel destinations</h1>
        <section className="card">
          <h2>Wishlist</h2>
          {/* TASK - React 1 week 2 */}
          {/* Display the number Of selected planets */}
          {/* Display the "no planets" message if it is empty! */}
          {numberOfPlanets === 0 ? (
            <p>No planets in wishlist :(</p>
          ) : (
            <p>
              You have {numberOfPlanets} planet{numberOfPlanets > 1 ? "s" : ""}{" "}
              in your wishlist
            </p>
          )}

          <h3>Your current wishlist</h3>
          <div className={styles.wishlistList}>
            {selectedPlanets.map((planet) => (
              <PlanetWishlistItem
                key={planet.name}
                name={planet.name}
                thumbnail={planet.thumbnail}
                onRemove={() => removeFromWishlist(planet.name)}
              />
            ))}
          </div>

          {/* STOP! - this is for week 3!*/}
          {/* TASK - React 1 week 3 */}
          {/* Import the AddWishlistItem react component */}
          {/* <AddWishlistItem /> */}
          {/* TASK - React 1 week 3 */}
          {/* Convert the list, so it is using selectedPlanets.map() to display the items  */}
          {/* Implement the "REMOVE" function */}
          {/* uncomment the following code snippet: */}

          <AddWishlistItem onAddWishlistItem={onAddWishlistItem} />
        </section>
        <section className="card">
          <h2>Possible destinations</h2>
          {/* TASK - React 1 week 2 */}
          {/* Add all 4 planets! Europa, Moon, Mars, Titan  */}
          {/* Use the README.md file for descriptions */}
          {/* Create a <PlanetCard /> component, which accepts the following properties: */}
          {/* name, description, thumbnail, isSelected, onAddOrRemovePlanet */}
          {[
            {
              name: "Europa",
              description: "A moon of Jupiter with a frozen surface.",
              thumbnail: "/destination/image-europa.png",
            },
            {
              name: "Moon",
              description: "Earth's only natural satellite.",
              thumbnail: "/destination/image-moon.png",
            },
            {
              name: "Mars",
              description: "The red planet with a thin atmosphere.",
              thumbnail: "/destination/image-mars.png",
            },
            {
              name: "Titan",
              description: "A moon of Saturn with a thick atmosphere.",
              thumbnail: "/destination/image-titan.png",
            },
          ].map((planet) => {
            const isPlanetSelected = selectedPlanets.includes(planet.name);
            return (
              <div key={planet.name} className={styles.planetCard}>
                <img
                  className={styles.planetThumbnail}
                  src={planet.thumbnail}
                  alt={planet.name}
                />
                <div className={styles.planetDescription}>
                  <h2>
                    {planet.name.toUpperCase()}{" "}
                    {isPlanetSelected ? "- SELECTED" : ""}
                  </h2>
                  <p>{planet.description}</p>
                </div>
                <button
                  className="roundButton"
                  onClick={() =>
                    onAddOrRemovePlanet(planet.name, planet.thumbnail)
                  }
                >
                  {isPlanetSelected ? "REMOVE" : "ADD PLANET"}
                </button>
              </div>
            );
          })}
        </section>
      </main>
    </div>
  );
};

export default Destinations;
