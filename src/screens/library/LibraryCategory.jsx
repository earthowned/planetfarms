import { useState, useEffect } from 'react'
import useGetFetchData from '../../utils/useGetFetchData'
import { GET_LIBRARY } from '../../utils/urlConstants'
import Pagination from '../../components/pagination/Pagination'
import ListView from '../../components/listView/ListView'

const LibraryCategory = ({
  title,
  search,
  setNewCollection,
  modalActive,
  setModalActive
}) => {
  const [pageNumber, setPageNumber] = useState(1)
  useEffect(() => {
    setPageNumber(1)
  }, [search])
  const { data: libraryData, isLoading } = useGetFetchData(
    'LIBRARY_CATEGORY_DATA',
    GET_LIBRARY +
      '?pageNumber=' +
      pageNumber +
      '&category=' +
      title.toLowerCase() +
      '&search=' +
      (search || ''),
    { title, pageNumber, search }
  )
  if (isLoading) {
    return <div>Loading...</div>
  }
  return libraryData?.data?.length > 0 ? (
    <>
      <ListView
        title={title}
        data={libraryData?.data}
        setNewCollection={setNewCollection}
        modalActive={modalActive}
        setModalActive={setModalActive}
      />
      <Pagination
        pageNumber={pageNumber}
        setPageNumber={setPageNumber}
        resourceList={libraryData}
      />
    </>
  ) : (
    <></>
  )
}

export default LibraryCategory
