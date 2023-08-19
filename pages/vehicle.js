import React, { useEffect, useState } from "react";
import Image from "next/image";
import rightBgElement from "../public/assets/002.svg";
import rightBgBallElement from "../public/assets/blobanimation.svg";
import SEO from "../components/SEO";
import Sidebar from "../components/Sidebar";
import { RxCrossCircled } from "react-icons/rx";
import API from "../helper/request";
import { useSelector, useDispatch } from "react-redux";
import Swal from "sweetalert2";

const Vehicle = () => {
  const [showModal, setShowModal] = useState(false);
  const [showMobileSide, setShowMobileSide] = useState(false);
  const [vehicleList, setVehicleList] = useState([]);
  const [selectedBrand, setSelectedBrand] = useState(null); // Add this state
  const [selectedFuelType, setSelectedFuelType] = useState(null);
  const [selectedModel, setSelectedModel] = useState(null);
  const [selectedPower, setSelectedPower] = useState(null);
  const profile = useSelector((state) => state.profile);

  const [allBrands, setAllBrands] = useState([]);
  const [allModels, setAllModels] = useState([]);
  const [allPowers, setAllPowers] = useState([]);

  const getAllVehicles = () => {
    API.get("user-vehicles", profile.token).then((res) => {
      // Filter the vehicles to get only the ones matching the user ID
      const userVehicles = res.data?.user_vehicles?.filter(
        (vehicle) => vehicle.user_id === profile.user.id
      );

      setVehicleList(userVehicles);
    });
  };
  console.log(vehicleList);

  useEffect(() => {
    getAllBrands();
    getBrandModels();
    getAllPowers();
    getAllVehicles();
  }, []);
  const successAlert = () => {
    Swal.fire({
      icon: "success",
      title: "Your vehicle has been saved!!",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  const getAllBrands = () => {
    API.get("brands", profile.token).then((res) => {
      console.log(res.data.brands);
      setAllBrands(res.data.brands);
    });
  };
  const getBrandModels = () => {
    API.get("vehicle-models", profile.token).then((res) => {
      console.log(res.data.vehicle_models);
      setAllModels(res.data.vehicle_models);
    });
  };

  const getAllPowers = () => {
    API.get("vehicle-powers", profile.token).then((res) => {
      console.log(res.data.vehicle_powers);
      setAllPowers(res.data.vehicle_powers);
    });
  };
  const handleAddVehicle = () => {
    setShowModal(true);
  };

  // const handleSaveVehicle = (vehicleData) => {
  //   // Add the vehicle data to the list
  //   console.log(vehicleData);
  //   setVehicleList([...vehicleList, vehicleData]);
  //   setShowModal(false);
  // };
  const handleUserVehicle = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const vehicleData = {
      user_id: profile.user.id, // Replace with the actual user ID
      brand_id: formData.get("brand"),
      power_id: formData.get("power"),
      model_id: formData.get("model"),
      fuel_type: selectedFuelType, // Use the selectedFuelType state
    };

    console.log("vehicleData:", vehicleData);

    API.post("user-vehicles", vehicleData, profile.token)
      .then((res) => {
        console.log(res.data);
        successAlert();
        getAllVehicles();
      })
      .catch((error) => {
        console.log("Error:", error.response.data);
        // Handle error response here if needed
      });
  };

  const handleDelete = (id) => {
    // Remove the vehicle from the list based on the index
    API.delete(`user-vehicles/delete/${id}`, profile.token).then((res) => {
      console.log(res.data);
      getAllVehicles();
    });
  };

  return (
    <>
      <SEO />
      <div className="bg-main p-5 md:p-10 h-screen">
        <div className="backdrop-blur-sm shadow-sm border rounded-3xl overflow-hidden border-white h-full text-slate-200 relative">
          <Image
            className="absolute top-[190px] right-0 w-[250px] -z-10"
            src={rightBgBallElement}
            alt="element"
          />
          <Image
            className="absolute top-[200px] right-0 w-[200px] -z-10"
            src={rightBgElement}
            alt="element"
          />
          <div className="grid grid-cols-12 relative h-full">
            <div
              className={`fixed md:static top-0 ${
                showMobileSide ? "left-0" : "-left-[220px]"
              } md:col-span-3 h-full backdrop-blur shadow p-3 bg-gradient-to-br from-white to-white md:to-transparent rounded-3xl transition-all duration-300 z-50`}
            >
              <Sidebar
                showMobileSide={showMobileSide}
                setShowMobileSide={setShowMobileSide}
              />
            </div>
            <div className="col-span-12 md:col-span-9 bg-primary text-black">
              <div className=" px-5 py-8 md:px-10 md:py-10 overflow-y-scroll overflow-x-hidden h-[calc(100vh-82px)] hide-scroll">
                <div className="flex flex-col">
                  {!vehicleList?.length && !showModal ? (
                    // No vehicles and form is not shown
                    <>
                      <h1 className="lg:text-4xl text-xl font-semibold text-center lg:mb-5 mb-2">
                        A <span className="text-beta-900">Vehicle</span> is not
                        included
                      </h1>
                      <p className="text-center mb-10 lg:text-base text-xs">
                        Please feel free to talk to us if you have any
                        questions.
                        <br />
                        We endeavor to answer within 24 hours.
                      </p>
                      <div className="flex justify-center items-center mb-2 mt-2">
                        <button
                          className="newMorfPurple px-8 md:px-16 py-2 text-white"
                          onClick={handleAddVehicle}
                        >
                          <span className="flex gap-2 items-center justify-center">
                            Add Vehicle
                          </span>
                        </button>
                      </div>
                    </>
                  ) : (
                    // Vehicle list or form is shown
                    <div>
                      {showModal && (
                        // Show modal
                        <div className="inset-0 flex items-center justify-center z-50">
                          <div className=" rounded-3xl max-w-full px-4 sm:px-20 md:py-4 flex flex-col md:flex-row justify-center items-center">
                            <div className="flex justify-around items-center">
                              <div className="loginGlass px-5 py-5 md:py-2">
                                <div className="flex justify-between">
                                  <div className="flex flex-col">
                                    <h1 className="text-2xl sm:text-4xl text-left font-semibold text-black mt-2">
                                      Add your vehicle
                                    </h1>
                                    <p className="text-[12px] md:text-sm text-left mb-0 text-black">
                                      Details of your vehicle
                                    </p>
                                  </div>
                                  <div
                                    className="absolute top-0 right-0 mt-2 mr-2 cursor-pointer"
                                    onClick={() => setShowModal(false)}
                                  >
                                    <RxCrossCircled size={24} />
                                  </div>
                                </div>
                                {/* Form */}
                                <form
                                  className="pt-3 flex flex-col justify-center w-full items-center"
                                  onSubmit={handleUserVehicle}
                                >
                                  <select
                                    className={`outline-none my-2 w-full h-[45px] px-[27px] py-1 formGlassInput text-black`}
                                    onChange={(e) => {
                                      setSelectedBrand(e.target.value || null);
                                      getBrandModels(e.target.value || 1);
                                    }}
                                    value={selectedBrand}
                                    name="brand"
                                  >
                                    <option value={null}>Choose Brand</option>
                                    {allBrands.map((opt, i) => (
                                      <option key={i} value={opt.id}>
                                        {opt.name}
                                      </option>
                                    ))}
                                  </select>

                                  <div className="sm:flex gap-2 w-full">
                                    <span className="block w-full">
                                      <select
                                        className={`outline-none my-2 w-full h-[45px] px-[27px] py-1 formGlassInput text-black`}
                                        value={selectedModel}
                                        name="model"
                                      >
                                        <option value={null}>
                                          Choose Model
                                        </option>
                                        {allModels.map((opt, i) => (
                                          <option key={i} value={opt.id}>
                                            {opt.name}
                                          </option>
                                        ))}
                                      </select>
                                    </span>

                                    <span className="block w-full">
                                      <input
                                        type="number"
                                        inputMode="numeric"
                                        className={`my-2 w-full h-[45px] px-[27px] py-1 formGlassInput text-black hide-number-buttons`}
                                        name="year"
                                        placeholder="Year"
                                      />
                                    </span>
                                  </div>

                                  <div className="sm:flex sm:gap-2 w-full">
                                    <select
                                      className={`outline-none my-2 w-full h-[45px] px-[27px] py-1 formGlassInput text-black`}
                                      onChange={(e) => {
                                        setSelectedPower(
                                          e.target.value || null
                                        );
                                        getAllPowers(e.target.value || 1);
                                      }}
                                      value={selectedPower}
                                      name="power"
                                    >
                                      <option value={null}>
                                        Choose Vehicle CC
                                      </option>
                                      {allPowers.map((opt, i) => (
                                        <option key={i} value={opt.id}>
                                          {opt.cc_number}
                                        </option>
                                      ))}
                                    </select>

                                    <span>
                                      <select
                                        className={`outline-none my-2 w-full h-[45px] px-[27px] py-1 formGlassInput text-black`}
                                        onChange={(e) =>
                                          setSelectedFuelType(e.target.value)
                                        }
                                        value={selectedFuelType}
                                        name="fuel_type"
                                      >
                                        <option value={null}>
                                          Select Fuel Type
                                        </option>
                                        <option value="Petrol">Petrol</option>
                                        <option value="Diesel">Diesel</option>
                                        <option value="Electric">
                                          Electric
                                        </option>
                                        <option value="Electric">Hybrid</option>
                                        <option value="Electric">CNG</option>
                                        {/* Add more options as needed */}
                                      </select>
                                    </span>
                                  </div>

                                  <div className="w-full">
                                    <span className="w-full block relative">
                                      <input
                                        type="text"
                                        className={`my-2 w-full h-[45px] px-[27px] py-1 formGlassInput text-black`}
                                        name="registration_number"
                                        placeholder="Registration Number"
                                      />
                                    </span>
                                  </div>

                                  <div className="flex justify-center items-center my-3">
                                    <button className="newMorfPurple px-8 py-2 text-white">
                                      <span className="flex gap-2 items-center justify-center">
                                        Add
                                      </span>
                                    </button>
                                  </div>
                                </form>

                                {/* End of Form */}
                              </div>
                            </div>
                          </div>
                        </div>
                      )}

                      {vehicleList.length > 0 && !showModal && (
                        // Show vehicle list
                        <div className="relative bg-main rounded-md shadow-md mt-8 px-4">
                          <table className="w-full text-sm text-left  text-black px-5 py-5 md:py-2">
                            <thead className="text-xs uppercase   text-black">
                              <tr>
                                <th className="px-4 py-4">Brand</th>
                                <th className="px-4 py-4">Model</th>
                                <th className="px-4 py-4">Year</th>
                                <th className="px-4 py-4">Vehicle CC</th>
                                <th className="px-4 py-4">Fuel Type</th>
                                <th className="px-4 py-4">Registration</th>
                                <th className="px-4 py-4">Action</th>
                              </tr>
                            </thead>
                            <tbody>
                              {vehicleList.map((vehicle, index) => (
                                <tr key={index}>
                                  <td className="px-4 py-4">
                                    {vehicle.brand.name}
                                  </td>
                                  <td className="px-4 py-4">
                                    {vehicle.model.name}
                                  </td>
                                  <td className="px-4 py-4">
                                    {new Date(
                                      vehicle.model.created_at
                                    ).toLocaleDateString()}
                                  </td>
                                  <td className="px-4 py-4">
                                    {vehicle.power.cc_number}
                                  </td>
                                  <td className="px-4 py-4">
                                    {vehicle.fuel_type}
                                  </td>
                                  <td className="px-4 py-4">{vehicle.id}</td>
                                  <td className="px-4 py-4">
                                    <button
                                      className="text-red-500"
                                      onClick={() => handleDelete(vehicle.id)}
                                    >
                                      Delete
                                    </button>
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                          <div className="flex justify-center items-center  mt-2">
                            <button
                              className="newMorfPurple px-8 md:px-16 py-2 mb-4 text-white"
                              onClick={handleAddVehicle}
                            >
                              <span className="flex gap-2 items-center justify-center">
                                Add Vehicle
                              </span>
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Vehicle;
