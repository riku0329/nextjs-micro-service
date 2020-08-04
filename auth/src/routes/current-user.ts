import express from 'express';
import { currentUser } from '../middlewares/current-user';
import { requireAuth } from '../middlewares/request-auth';

const router = express.Router();

router.get('/api/users/currentuser', currentUser, requireAuth, (req, res) => {
  res.send({ currentuser: req.currentUser || null });
});

export { router as currentUserRouter };
