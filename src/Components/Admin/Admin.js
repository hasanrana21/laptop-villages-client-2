import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import './Admin.css';

const Admin = () => {
    const { register, handleSubmit, errors } = useForm();
    const [cardImage, setCardImage] = useState(null);
    
    const onSubmit = data => {
        const cardData = {
            name: data.name,
            company: data.company,
            price: data.price,
            image: cardImage,
        }
        console.log(cardData)
        fetch('http://localhost:5000/addCardDetails', {
            method: 'POST',
            headers: {
                'Content-type': 'Application/json'
            },
            body: JSON.stringify(cardData)
        })
        .then(res => res.json())
        .then(data => console.log(data))
    };

    const handleImageUpload = (event) => {
        console.log(event.target.files[0])
        const imageData = new FormData();
        imageData.set('key', 'd743345ed836835ea8ba69731659d88a');
        imageData.append('image', event.target.files[0]);

        axios.post('https://api.imgbb.com/1/upload',imageData)
          .then(function (response) {
            console.log(response.data.data.display_url);
            setCardImage(response.data.data.display_url);
          })
          .catch(function (error) {
            console.log(error);
          });

    }

    return (
        <div className="row">
            <div className="sideBar col-md-3">
                <div className="d-flex align-items-start">
                    <div className="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                        <button className="nav-link" id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home" aria-selected="false">Manage Product</button>
                        <button className="nav-link active" id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="true">Add Product</button>
                        <button className="nav-link" id="v-pills-messages-tab" data-bs-toggle="pill" data-bs-target="#v-pills-messages" type="button" role="tab" aria-controls="v-pills-messages" aria-selected="false">Edit Product</button>
                    </div>
                </div>
            </div>

            <div className="col-md-9">
                <div className="tab-content" id="v-pills-tabContent">
                    <div className="tab-pane fade" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">Manage Option is Under the Construction</div>
                    <div className="tab-pane fade show active" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">
                        
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <label>Add Name</label>
                            <input name="name" placeholder="Product Name" ref={register} />

                            <label>Add Company</label>
                            <input name="company" placeholder="Product Company" ref={register({ required: true, maxLength: 10 })}/>
                            {errors.exampleRequired && <p>This field is required</p>}
                            
                            <label>Add Price</label>
                            <input name="price" placeholder="Product Price" ref={register} />

                            <label>Upload Image</label>
                            <input name="exampleRequired" type="file" onChange={handleImageUpload}/>


                            <input type="submit" value="Save" />
                        </form>
                        

                    </div>
                    <div className="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">Edit</div>
                </div>
            </div>
        </div>
    );
};

export default Admin;