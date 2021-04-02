const router = require("express").Router();
const withAuth = require("../../utils/auth");
const { Comment } = require("../../models");

router.post("/", withAuth, async (req, res) => {
  try {
    const newComment = await Comment.create({
      comment: req.body.comment,
      post_id: req.body.post_id,
      user_id: req.session.user_id,
    });
    console.log("Retrieving now");
    res.status(200).json(newComment);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete("/:id", withAuth, async (req, res) => {
  try {
    const commentData = await Comment.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!postData) {
      res.status(404).json({ message: "No comment found" });
      return;
    }

    res.status(200).json(commentData);
  } catch (err) {
    res.status(500).json(err);
  }
});
