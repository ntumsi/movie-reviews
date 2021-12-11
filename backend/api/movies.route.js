import express from "express";
import MoviesController from "./movies.controller.js";
import ReviewsController from "./reviews.controller.js"

const router = express.Router()

router.route('/').get(MoviesController.apiGetMovies)

router.route("/reviews")
      .post(ReviewsController.apiPostReview)
      .delete(ReviewsController.apiDeleteReview)
      .put(ReviewsController.apiUdateReview)
router.route("/id/:id").get(MoviesController.apiGetMovieById)
router.route("/ratings").get(MoviesController.apiGetRatings)
export default router