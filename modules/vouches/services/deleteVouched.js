// const vouchesModel = require("../model");

// async function deleteVouched(req, res) {
//   try {
//     const ideaId = req.query.ideaId;
//     const userID = req.query.userID;

//     // Delete the vouched item from the database
//     const deletedItem = await vouchesModel.findOneAndDelete({
//       ideaID: ideaId,
//       userID: userID,
//     });

//     res.status(204).json({
//       code: 200,
//       message: "Idea Unvouched",
//       data: deletedItem,
//     });
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({ message: "Error deleting vouched item" });
//   }
// }

// module.exports = deleteVouched;

const vouchesModel = require("../model");

async function deleteVouched(req, res) {
  try {
    const ideaID = req.query.ideaID;
    const userID = req.query.userID;

    const deletedItem = await vouchesModel.deleteOne({
      ideaID: ideaID,
      userID: userID,
    });
    res.status(204).send({
      code: 200,
      message: "Vouched item deleted successfully",
    });
    // .json({
    //     code: 200,
    //     message: "Vouched item deleted successfully",
    //     data: deletedItem,
    // });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error deleting vouched item" });
  }
}

module.exports = deleteVouched;
