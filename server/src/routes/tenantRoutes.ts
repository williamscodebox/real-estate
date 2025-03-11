import express from "express";
import {
  getTenant,
  createTenant,
  //updateTenant,
  //getCurrentResidences,
  //addFavoriteProperty,
  //removeFavoriteProperty,
} from "../controllers/tenantControllers";

const router = express.Router();

router.get("/:cognitoId", getTenant);
router.post("/", createTenant);

export default router;
