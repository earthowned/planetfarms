const db = require('../models')
const NotFoundError = require('../errors/notFoundError')
const { changeFormat } = require('../helpers/filehelpers')
const CircularJSON = require('circular-json')

const getVideos = async (_req, res) => {
  const videos = await db.Video.findAll()
  if (!videos) {
    throw new NotFoundError()
  }
  const data = {
    videos: videos.map((video) => ({
      ...video.dataValues,
      videoCover: changeFormat(video.videoCover)
    }))
  }
  res.status(200).json({
    status: true,
    message: 'fetched all videos successfully',
    data: data.videos
  })
}

const getVideosById = async (req, res) => {
  const { id } = req.params
  const video = await db.Video.findOne({ where: { id } })
  if (!video) {
    throw new NotFoundError()
  }
  const videoCover = changeFormat(video?.dataValues?.videoCover)
  const videoData = video.dataValues
  const data = Object.assign({
    ...video,
    dataValues: { ...videoData, videoCover }
  })
  const str = JSON.parse(CircularJSON.stringify(data))
  res.status(200).json({
    status: true,
    message: 'fetched video successfully',
    data: str.dataValues
  })
}

const addVideo = async (req, res) => {
  let videoCover = ''
  let videoResource = ''
  if (req.files) {
    if (req.files.videoCover) {
      videoCover = req.files.videoCover[0].filename
    }
    if (req.files.videoResource) {
      videoResource = req.files.videoResource[0].filename
    }
  }
  
  const video = await db.Video.create({
    ...req.body,
    videoCover,
    videoResource
  })

  res.status(201).json({
    status: true,
    message: 'added new video successfully',
    data: video
  })
}

const deleteVideo = async (req, res) => {
  const { id } = req.params
  const video = await db.Video.destroy({ where: { id } })
  res.status(202).json({
    status: true,
    message: 'Video deleted successfully',
    data: video
  })
}

const updateVideo = async (req, res) => {
  const { id } = req.params
  const video = await db.Video.findOne({
    where: { id }
  })
    
  let videoCover = ''
  let videoResource = ''

  if(req.files.videoCover === undefined) {
    videoCover = video.dataValues.videoCover
    videoResource = video.dataValues.videoResource
  } else {
    if (req.files.videoCover) {
      videoCover = req.files.videoCover[0].filename
    }
    if (req.files.videoResource) {
      videoResource = req.files.videoResource[0].filename
    }
  }

  await db.Video.update({...req.body, videoCover, videoResource}, {where: {id}})

  res.status(202).json({
    status: true,
    message: 'Video updated successfully',
  })
}

module.exports = {
  getVideos,
  getVideosById,
  addVideo,
  deleteVideo,
  updateVideo
}
