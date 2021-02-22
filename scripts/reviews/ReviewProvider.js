import { bakeryAPI } from "../Settings.js"

let reviews = []

export const useReviews = () => {
  //added return
  return reviews.slice()
}

export const getReviews = () => {
  return fetch(`${bakeryAPI.baseURL}/reviews`)
    .then(response => response.json())
    .then(reviewsArray => {
      reviews = reviewsArray
    })
}

export const saveReview = entry => {
  return fetch (`${bakeryAPI.baseURL}/reviews`, {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(entry)
})
}

const reviewForm = () => {
  
}