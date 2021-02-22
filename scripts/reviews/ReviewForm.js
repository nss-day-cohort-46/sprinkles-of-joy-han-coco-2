import { saveReview } from "./ReviewProvider.js"
import { authHelper } from "../auth/authHelper.js"
import { useProducts, getProducts } from "../products/ProductList.js"

const eventHub = document.querySelector("#container")
const contentTarget = document.querySelector(".newReview")

export const reviewForm = () => {
    getProducts()
        .then(() => {
            const arrayOfProducts = useProducts()
            render(arrayOfProducts)
        })
}

const render = (arrayOfProducts) => {
    contentTarget.innerHTML = `
    
    `
}