import React, {useEffect, useState} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] = useState([]);
  const [searchTerm, setSearchTerm] = useState("")

  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then((resp) => resp.json())
      .then((plantsArray) => {
        setPlants(plantsArray);
      });
  }, []);

  function handleAddPlant(newPlant) {
    const updatedPlantArray = [...plants, newPlant];
    setPlants(updatedPlantArray)
  }

  const plantsDisplayed = plants.filter((plant) =>
    plant.name.toLowerCase().includes(searchTerm.toLowerCase()))

  return (
    <main>
      <NewPlantForm onAddPlant={handleAddPlant}/>
      <Search searchTerm={searchTerm} onSearch={setSearchTerm}/>
      <PlantList plants={plantsDisplayed}/>
    </main>
  );
}

export default PlantPage;
