import ListViewCardComponent from './ListViewCardComponent'
const CardView = ({ data, setModalActive, modalActive }) => {
  return (
    <>
      {data &&
        data?.map((item) => {
          return (
            <ListViewCardComponent
              item={item}
              modalActive={modalActive}
              setModalActive={setModalActive}
              key={item.id}
            />
          )
        })}
    </>
  )
}
export default CardView
