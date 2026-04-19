import { Router } from "express";
import authRouter from "./auth";
import diagnosticsRouter from "./diagnostics";
import geoContentRouter from "./geo-content";
import settingsRouter from "./settings";

const router = Router();

router.use("/auth", authRouter);
router.use("/diagnostics", diagnosticsRouter);
router.use("/geo-content", geoContentRouter);
router.use("/settings", settingsRouter);

export default router;
