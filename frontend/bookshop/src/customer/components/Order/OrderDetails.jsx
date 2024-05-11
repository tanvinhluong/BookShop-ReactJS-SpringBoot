import React from 'react'
import AddressCard from '../AddressCard/AddressCard'
import OrderTraker from './OrderTraker'
import { Grid, Box, Button } from '@mui/material'
import { deepPurple } from '@mui/material/colors'
import StarIcon from '@mui/icons-material/Star'

const OrderDetails = () => {
  return (
    <div className="px-5 lg:px-20">
      <div>
        <h1 className="font-bold text-lg py-7">Delivery Address</h1>
        <AddressCard />
      </div>
      <div className="py-20">
        <OrderTraker activeStep={3} />
      </div>
      <Grid className="space-y-5" container>
        {[1, 1, 1, 1, 1].map((item) => (
          <Grid
            item
            container
            className="shadow-xl rouded-md p-5 border"
            sx={{ alignItems: 'center', justifyContent: 'space-between' }}
          >
            <Grid item xs={6}>
              <div className="flex  items-center ">
                <img
                  className="w-[5rem] h-[5rem] object-cover object-top"
                  src="https://cdn.fast.vn/tmp/20200703154747-19.jpg"
                  alt=""
                />
                <div className="ml-5 space-y-2">
                  <p>San pham test</p>
                  <p className="opacity-50 text-xs font-semibold space-x-5">
                    <span>Color: pink</span>
                    <span>Size: M</span>
                  </p>
                  <p>Seller: Vinh Luong</p>
                  <p>20.000 đồng</p>
                </div>
              </div>
            </Grid>
            <Grid item>
              {
                <Box
                  sx={{ color: deepPurple[500] }}
                  className="flex items-center cursor-pointer"
                >
                  <StarIcon
                    sx={{ fontSize: '2rem' }}
                    className="px-2 text-5xl"
                  />
                  <span>Rate & Review Product</span>
                </Box>
              }
            </Grid>
          </Grid>
        ))}
      </Grid>
    </div>
  )
}

export default OrderDetails
