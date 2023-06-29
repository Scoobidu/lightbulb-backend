const ideasModel = require("../model");
const usersModel = require("../../users/model");

async function vouchersList(req, res) {
  try {
    let ideas = await ideasModel.find({ ideaID: req.query.ideaID });
    const vouchers = ideas[0].vouches;
    // console.log(vouchers);
    const allVouchers = [];
    if (vouchers.length) {
      for (var index in vouchers) {
        var user = await usersModel.find({
          userId: vouchers[index],
        });
        // console.log(user);
        allVouchers.push(user);
      }
    }
    // console.log(allVouchers);
    return res
      .status(200)
      .send({ code: 200, message: "vouched ideas", data: allVouchers });
  } catch (error) {
    console.log(error);
    return res
      .status(400)
      .send({ code: 400, message: "error getting the vouched ideas" });
  }
}

module.exports = vouchersList;

// const ideasModel = require("../model");
// const usersModel = require("../../users/model");

// async function vouchersList(req, res) {
//   try {
//     let ideas = await ideasModel.find({ ideaID: req.query.ideaID });
//     const vouchers = ideas[0].vouches;
//     // console.log(vouchers);
//     // const allVouchers = [];
//     if (vouchers.length) {
//       var user = await usersModel.find({});
//       //   console.log(user);
//       var filteredItems;
//       for (var index in vouchers) {
//         filteredItems = user.filter((item) => item.userID == vouchers[index]);
//       }
//     }
//     console.log(filteredItems);
//     return res
//       .status(200)
//       .send({ code: 200, message: "vouchers List", data: filteredItems });
//   } catch (error) {
//     console.log(error);
//     return res
//       .status(400)
//       .send({ code: 400, message: "error getting the vouched ideas" });
//   }
// }

// module.exports = vouchersList;
