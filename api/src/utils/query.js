const paginate = ({ page, pageSize }) => {
  const offset = page * pageSize
  const limit = offset + pageSize
  return {
    offset,
    limit
  }
}

const paginatedResponse = ({ data, pageSize, pageNumber = 1 }) => {
  const totalPages = Math.ceil(data.count / pageSize)

  return {
    data: data.rows,
    totalItems: data.count,
    page: pageNumber,
    pageSize,
    totalPages
  }
}

module.exports = { paginate, paginatedResponse }
