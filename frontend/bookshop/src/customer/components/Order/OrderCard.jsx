import React from 'react'
import { Grid } from '@mui/material'
import AdjustIcon from '@mui/icons-material/Adjust'
import { useNavigate } from 'react-router-dom'

const OrderCard = () => {
  const navigate = useNavigate()
  return (
    <div
      onClick={() => navigate(`/account/order/${5}`)}
      className="p-5 shadow-md shadow-black hover:shadow-2xl border"
    >
      <Grid spacing={2} container sx={{ justifyContent: 'space-between' }}>
        <Grid item xs={6}>
          <div className="flex cursor-pointer">
            <img
              src="https://cdn.fast.vn/tmp/20200703154747-19.jpg"
              className="w-[5rem] h-[5rem] object-cover object-top"
              alt=""
            />
            <div className="ml-5 spacy-y-2">
              <p className="">Sản phẩm test</p>
              <p className="opacity-50 text-xs font-semibold">Size: XL</p>
              <p className="opacity-50 text-xs font-semibold">Color: Pink</p>
            </div>
          </div>
        </Grid>
        <Grid item xs={2}>
          <p>1200đ</p>
        </Grid>
        <Grid item xs={4}>
          {true && (
            <div>
              <p>
                <AdjustIcon
                  sx={{ width: '15px', height: '15px' }}
                  className="text-green-600 p-0 mr-2 text-sm"
                />
                <span> Delivered on 3rd March</span>
              </p>
              <p className="text-xs">Your Item Has Been Delivered</p>
            </div>
          )}
          {false && (
            <p>
              <span> Expected Delivered on 4th March</span>
            </p>
          )}
        </Grid>
      </Grid>
    </div>
  )
}

export default OrderCard
