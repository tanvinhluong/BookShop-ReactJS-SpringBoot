import { Avatar, Box, Grid, Rating } from '@mui/material'
import React from 'react'

function ProductReviewCard({ item }) {
  // Check if item is defined
  if (!item) {
    return null // Render nothing if the item is undefined
  }

  // Function to format createdAt date
  const formatCreatedAt = (createdAt) => {
    const options = { month: 'short', day: '2-digit', year: 'numeric' } // Change '2-digit' to 'numeric' for full year
    return new Date(createdAt).toLocaleDateString(undefined, options)
  }

  return (
    <div className="">
      <Grid container spacing={2} gap={3}>
        <Grid item xs={1}>
          <Box>
            <Avatar
              className="text-white"
              sx={{ width: 56, height: 56, bgcolor: '#9155fd' }}
              alt={item.user?.firstName}
            >
              {item.user?.firstName ? item.user.firstName[0].toUpperCase() : ''}
            </Avatar>
          </Box>
        </Grid>

        <Grid item xs={9}>
          <div className="space-y-2">
            <div className="">
              <p className="text-lg font-semibold">{item.user?.firstName}</p>
              <p className="opacity-60">
                {formatCreatedAt(item?.createdAt)}
              </p>{' '}
              {/* Format createdAt date */}
            </div>

            <div>
              <Rating
                value={item?.rating || 4} // Make sure to handle undefined rating
                readOnly
              />
            </div>
            <p>{item.review}</p>
          </div>
        </Grid>
      </Grid>
    </div>
  )
}

export default ProductReviewCard
