import React, { useEffect, useState } from 'react'
import { addProduct, editProduct } from '../api/product';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useLocation, useNavigate } from 'react-router-dom';

export default function ProductCreateEdit() {
  const navigate = useNavigate();
  const location = useLocation();
  const queryClient = useQueryClient();

  const productToEdit = location.state?.product;   

  const [formData, setFormData] = useState({
    name: '',
    writer: '',
    description: '',
    price: '',
    img: ''
  });

  useEffect((() => {
    if(productToEdit) {
      setFormData(productToEdit);
    }
  }), [productToEdit])

  const addMutation = useMutation({
    mutationFn: addProduct,
    onSuccess: () => {
      queryClient.invalidateQueries(["products"]);
      alert("Product added successfully");
      setFormData({
        name: '',
        writer: '',
        description: '',
        price: '',
        img: ''
      });
      navigate('/dashboard');
    },
    onError: (error) => {
      alert("Failed to add the product")
      console.error(error);
      
    }
  });

  const editMutation = useMutation({
    mutationFn: ({id, data}) => editProduct(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries(["products"]);
      alert("Product Updated Successfully");
      navigate('/dashboard');
    },
    onError: (error) => {
      alert("Failed to edit the product")
      console.error(error);
    }
  })

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData((prev) => ({
      ...prev, 
      [name]: value
    }));
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(productToEdit) {
      editMutation.mutate({id: productToEdit.id, data: formData})
    } else {
      addMutation.mutate(formData)
    }
  }

  return (
    <div>
      <div className='mt-2'>
        <h1 className='uppercase text-center font-semibold text-6xl tracking-wider text-[#393280]'>{productToEdit? 'edit' : 'create'} product</h1>
        <form action="" onSubmit={handleSubmit} className='mt-20 flex flex-col justify-self-center gap-y-14 bg-[linear-gradient(90deg,#FCECEC_0%,#F6FFFE_100%)] py-4 px-2'>
          <h2 className='capitalize text-center font-medium text-5xl text-[#ED553B]'>{productToEdit? 'edit' : 'create'} book</h2>
          <div className='grid grid-cols-2 gap-y-5 gap-x-10'>
          <span className='flex flex-col gap-y-2'>
            <label htmlFor="book-name" className='capitalize cursor-pointer text-[#393280] font-semibold'> book name </label>
            <input type="text" onChange={handleChange} name="name" value={formData.name} id="book-name" placeholder='Enter book name ...' className='outline-none border-b focus:border-b-2 scale-100 focus:scale-105 transition-all duration-300' />
          </span>
          <span className='flex flex-col gap-y-2'>
            <label htmlFor="book-writer" className='capitalize cursor-pointer'> writer name </label>
            <input type="text" onChange={handleChange} name="writer" value={formData.writer} id="book-writer" placeholder='Enter book writer ...' className='outline-none border-b focus:border-b-2 scale-100 focus:scale-105 transition-all duration-300' />
          </span>
          <span className='flex flex-col gap-y-2'>
            <label htmlFor="book-description" className='capitalize cursor-pointer'> book description </label>
            <input type="text" onChange={handleChange} name="description" value={formData.description} id="book-description" placeholder='Enter book description ...' className='outline-none border-b focus:border-b-2 scale-100 focus:scale-105 transition-all duration-300' />
          </span>
          <span className='flex flex-col gap-y-2'>
            <label htmlFor="book-price" className='capitalize cursor-pointer'> book price </label>
            <input type="number" onChange={handleChange} name="price" value={formData.price} id="book-price" placeholder='Enter book price ...' className='outline-none border-b focus:border-b-2 scale-100 focus:scale-105 transition-all duration-300' />
          </span>
          <span className='flex flex-col gap-y-2 col-span-2'>
            <label htmlFor="book-image" className='capitalize cursor-pointer'> book imgage </label>
            <input type="text" onChange={handleChange} name="img" value={formData.img} id="book-image" placeholder='Enter book image ...' className='outline-none border-b focus:border-b-2 scale-100 focus:scale-105 transition-all duration-300' />
          </span>
          </div>
          <button className='uppercase' type='submit'>{productToEdit? 'edit' : 'add'}</button>
        </form>
      </div>
    </div>
  )
}
