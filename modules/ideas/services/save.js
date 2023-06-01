const ideasModel = require("../model");
const { v4: uuidv4 } = require("uuid");
const AWS = require("aws-sdk");
require("dotenv").config();

async function saveIdea(req, res) {
  req.body["ideaID"] = uuidv4();
  try {
    AWS.config.update({
      accessKeyId: process.env.AWS_ACCESS_KEY_ID,
      secretAccessKey: process.env.AWS_ACCESS_KEY_SECRET,
      region: "ap-south-1",
    });

    const s3 = new AWS.S3();
    const { data } = req.files;

    const uploadPromises = data.map((file) => {
      const params = {
        Bucket: "lightbulb-assets",
        Key: file.name,
        Body: file.data,
        ContentType: file.mimetype,
        ACL: "public-read",
      };
      return s3.upload(params).promise();
    });

    const results = await Promise.all(uploadPromises);
    const locations = results.map((r) => r.Location);

    const idea = new ideasModel({
      userID: req.body.userID,
      ideaID: uuidv4(),
      images: locations,
      title: req.body.title,
      description: req.body.description,
      category: req.body.category,
    });
    idea.save();

    return res.status(200).send({
      response_code: 200,
      response_message: "success",
      response_data: { data: idea },
    });
  } catch (error) {
    console.log(error);
    return res
      .status(400)
      .send({ code: 400, message: "error saving the idea" });
  }
}

module.exports = saveIdea;
