import React, { useEffect, useState } from "react";
import { BsImage } from "react-icons/bs";
import { Create, messageClear } from "../Store/Reducer/ContactReducer";
import { useSelector, useDispatch } from "react-redux";
import toast from "react-hot-toast";
import { PropagateLoader } from "react-spinners";
import { overrideStyle } from "../Utils/utils";

function AddContact() {
  const dispatch = useDispatch();
  const { successMessage, errorMessage, loader } = useSelector(
    (state) => state.contact
  );
  const [imageShow, setImage] = useState("");
  const [state, setState] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const inputHandle = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const imageHandle = (e) => {
    let files = e.target.files;
    if (files.length > 0) {
      setImage(URL.createObjectURL(files[0]));
      setState({
        ...state,
        image: files[0],
      });
    }
  };

  const add = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", state.name);
    formData.append("email", state.email);
    formData.append("phone", state.phone);
    formData.append("address", state.address);

    dispatch(Create(formData));
  };

  useEffect(() => {
    if (errorMessage) {
      toast.error(errorMessage);
      dispatch(messageClear());
    }

    if (successMessage) {
      toast.success(successMessage);
      dispatch(messageClear());
      setState({
        name: "",
        email: "",
        phone: "",
        address: "",
      });

      setImage([]);
    }
  }, [successMessage, errorMessage]);

  return (
    <div className="container mx-auto p-8">
      <div className="flex justify-center">
        <button className="bg-green-500 text-white font-semibold px-4 py-3 rounded-lg">
          Add Contact
        </button>
      </div>

      <form onSubmit={add} className="mt-4">
        {/* Name and Email Fields */}
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex flex-col w-full mb-3">
            <label className="text-black font-semibold font-serif" htmlFor="name">
              Name
            </label>
            <input
              onChange={inputHandle}
              value={state.name}
              className='px-4 py-2 bg-slate-500 border-solid rounded-md font-serif'
              type="text"
              placeholder="Name"
              name="name"
              id="name"
            />
          </div>
          <div className="flex flex-col w-full mb-3">
            <label className="text-black font-semibold font-serif" htmlFor="email">
              Email
            </label>
            <input
              onChange={inputHandle}
              value={state.email}
              className='px-4 py-2 bg-slate-500 border-solid rounded-md font-serif'
              type="text"
              placeholder="Email"
              name="email"
              id="email"
            />
          </div>
        </div>

        {/* Phone and Address Fields */}
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex flex-col w-full mb-3">
            <label className="text-black font-semibold font-serif" htmlFor="phone">
              Phone Number
            </label>
            <input
              onChange={inputHandle}
              value={state.phone}
              className='px-4 py-2 bg-slate-500 border-solid rounded-md font-serif'
              type="text"
              placeholder="Phone Number"
              name="phone"
              id="phone"
            />
          </div>
          <div className="flex flex-col w-full mb-3">
            <label className="text-black font-semibold font-serif" htmlFor="address">
              Address
            </label>
            <input className='px-4 py-2 bg-slate-500 border-solid rounded-md font-serif'
              onChange={inputHandle}
              value={state.address}
              type="text"
              placeholder="Address"
              name="address"
              id="address"
            />
          </div>
        </div>

        {/* Image Upload */}
        <div className="flex items-center mt-4">
          <label
            className="image-upload-label cursor-pointer border border-dashed w-[250px] h-[250px] border-black hover:border-indigo-500"
            htmlFor="image"
          >
            {imageShow ? (
              <img className="w-full h-full" src={imageShow} alt="Selected" />
            ) : (
              <>
                <span className="text-4xl ">
                  <BsImage />
                </span>
                <span>Select Image</span>
              </>
            )}
          </label>
          <input
            onChange={imageHandle}
            className="hidden"
            type="file"
            name="image"
            id="image"
            required
          />
        </div>

        {/* Submit Button */}
        <div className="mt-4">
          <button
            disabled={loader}
            className="bg-blue-500 hover:shadow-lg text-white rounded-md px-[100px] py-2 mb-3"
          >
            {loader ? (
              <PropagateLoader color="#fff" cssOverride={overrideStyle} />
            ) : (
              "Submit"
            )}
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddContact;
