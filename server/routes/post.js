import express from "express";
import { getFeedPosts, getUserPosts, likePost} from "../controller/post";
import { verifyToken } from "../middleware/auth";

const router = express.Router();

router.get("/",verifyToken, getFeedPosts);
router.get("/:userId/posts",verifyToken,getUserPosts);
router.patch("/:id/likes",verifyToken,likePost);

export default router;