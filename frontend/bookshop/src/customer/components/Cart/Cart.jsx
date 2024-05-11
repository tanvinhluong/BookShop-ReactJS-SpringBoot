import React from 'react'
import CartItem from './CartItem'
import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'
const Cart = () => {
  const navigate = useNavigate()
  const handleCheckout = () => {
    navigate('/checkout?step=2')
  }
  return (
    <div>
      <div className="lg:grid grid-cols-3 lg:px-16 relative">
        <div className="col-span-2 lg:px-5 bg-white">
          {[1, 1, 1, 1].map((item) => (
            <CartItem />
          ))}
        </div>
        <div className="px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0">
          <div className="border  p-5 bg-white shadow-lg rounded-md">
            <p className="uppercase font-bold opacity-60 pb-4">
              Billing Details
            </p>
            <hr />
            <div className="space-y-3 font-semibold mb-10">
              <div className="flex justify-between pt-3 text-black">
                <span>Price</span>
                <span>4700$</span>
              </div>

              <div className="flex justify-between pt -3 text-black">
                <span>Discount</span>
                <span className="text-green-600">- 4700$</span>
              </div>

              <div className="flex justify-between pt-3 text-black">
                <span>Delivery Charges</span>
                <span className="text-green-600">Free</span>
              </div>

              <div className="flex justify-between pt-3 text-black">
                <span className="font-bold">Total Amount</span>
                <span className="font-bold ">4700$</span>
              </div>
            </div>
            <Button
              onClick={handleCheckout}
              variant="contained"
              className="w-full mt-5"
              sx={{
                padding: '.8rem 2rem',
                marginTop: '2rem',
                width: '100%',
                bgcolor: '#9155fd',
              }}
            >
              Check Out
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
