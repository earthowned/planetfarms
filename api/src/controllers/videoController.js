const Video = require('../models/videoModel')
const NotFoundError = require('../errors/notFoundError')

const getVideos = async (_req, res) => {
  const videos = await Video.findAll()
  if (!videos) {
    throw new NotFoundError()
  }
  res.status(200).json({
    status: true,
    message: 'fetched all videos successfully',
    data: videos
  })
}

const getVideosById = async (req, res) => {
  const { id } = req.params
  const video = await Video.findOne({ where: { id } })
  if (!video) {
    throw new NotFoundError()
  }
  res.status(200).json({
    status: true,
    message: 'fetched video successfully',
    data: video
  })
}

const addVideo = async (req, res) => {
  const video = await Video.create(req.body)
  console.log(video)
  res.status(201).json({
    status: true,
    message: 'added new video successfully',
    data: video
  })
}

const deleteVideo = async (req, res) => {
  const { id } = req.params
  const video = await Video.destroy({ where: { id } })
  res.status(202).json({
    status: true,
    message: 'Video deleted successfully',
    data: video
  })
}

const updateVideo = async (req, res) => {
  const { id } = req.params
  const video = await Video.update(req.body, {
    where: { id }
  })
  res.status(202).json({
    status: true,
    message: 'Video updated successfully',
    data: video
  })
}

module.exports = {
  getVideos,
  getVideosById,
  addVideo,
  deleteVideo,
  updateVideo
}
