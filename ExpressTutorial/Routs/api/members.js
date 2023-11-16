const express = require("express");
const uuid = require("uuid");
const router = express.Router();
const members = require("../../Members");

// Get All Members
router.get("/", (req, res) => res.json(members));

// Get Single Member
router.get("/:id", (req, res) => {
  const found = members.some((member) => member.id === parseInt(req.params.id));

  if (found) {
    res.json(members.filter((member) => member.id === parseInt(req.params.id)));
  } else {
    res.status(400).json({ msg: `No member with id of ${req.params.id}` });
  }

  // res.send(req.params.id);
});

// Create Member
router.post("/", (req, res) => {
  const newMember = {
    id: uuid.v4(),
    name: req.body.name,
    email: req.body.email,
    status: "active",
  };
  // res.send(req.body);

  if (!newMember.name || !newMember.email) {
    return res.status(400).json({ msg: "please include name and email" });
  }

  members.push(newMember);
  // res.json(members);
  res.redirect('/');
});

// Update Member
router.put("/:id", (req, res) => {
  const found = members.some((member) => member.id === parseInt(req.params.id));

  if (found) {
    const UpdMamber = req.body;
    members.forEach((member) => {
      if (member.id === parseInt(req.params.id)) {
        member.name = UpdMamber.name ? UpdMamber.name : member.name;
        member.email = UpdMamber.email ? UpdMamber.email : member.email;

        res.json({ msg: "Member Updated", member });
      }
    });
  } else {
    res.status(400).json({ msg: `No member with id of ${req.params.id}` });
  }

  // res.send(req.params.id);
});

// Delete Member
router.delete("/:id", (req, res) => {
  const found = members.some((member) => member.id === parseInt(req.params.id));

  if (found) {
    res.json({
      msg: "Member Deletetd",
      members: members.filter(
        (member) => member.id !== parseInt(req.params.id)
      ),
    });
  } else {
    res.status(400).json({ msg: `No member with id of ${req.params.id}` });
  }

  // res.send(req.params.id);
});

module.exports = router;
