import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import "./Checkout.css";
import Grid from "@material-ui/core/Grid";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";

const Checkout = () => {
  const { _id } = useParams();
  console.log(_id);
  const [selected, setSelected] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/cards")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setSelected(data);
      });
  }, []);

    // Date and Time
    const [selectedDate, setSelectedDate] = useState({
        orderDate: new Date(),
    });

    const handleDateChange = (date) => {
        const newDate = {...selectedDate};
        newDate.orderDate = date;
        setSelectedDate(newDate);
        console.log(newDate)
    };

  const saveOrder = () => {
   const newOrder = {...selectedDate, ...evenData}
   console.log(newOrder);
    fetch("http://localhost:5000/addOrders", {
      method: "POST",
      headers: {
        "Content-Type": "Application/json"
      },
      body: JSON.stringify(newOrder),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };
  const evenData = selected.find((product) => product?._id === _id);
  console.log(evenData?.name);


  return (
    <div className="container">
      <h1 className="text-muted">CheckOut...</h1>

        <div className="checkout-table d-flex justify-content-between">
            <h5>Description</h5>
            <h5>Quantity</h5>
            <h5>Price</h5>
        </div>
        <hr />
        <div className="d-flex justify-content-between">
            <h4>{evenData?.name}</h4>
            <h4 className="w-25">1</h4>
            <h4>${evenData?.price}</h4>
        </div>
      
      <hr />
      <h4 className="text-end">Total= ${evenData?.price}</h4>

        <div className="checkout-save">
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <Grid container>
                <KeyboardDatePicker
                className="m-3 d-inline"
                disableToolbar
                variant="inline"
                format="dd/MM/yyyy"
                margin="normal"
                id="date-picker-inline"
                value={selectedDate.orderDate}
                onChange={handleDateChange}
                KeyboardButtonProps={{
                    "aria-label": "change date",
                }}
                />
            </Grid>
            </MuiPickersUtilsProvider>

            <button className="checkout-btn" onClick={saveOrder}>
                SAVE
            </button>
        </div>
    </div>
  );
};

export default Checkout;
