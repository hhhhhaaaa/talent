import allLearners from '../data/mergeHelper';

const router = require('express').Router();

router.use('/learners', (req, res) => {
  res.json(allLearners);
});

export default router;
