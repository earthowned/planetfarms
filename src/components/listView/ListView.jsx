import CardLayout from '../../layout/cardLayout/CardLayout'
import useSizeFinder from '../../utils/sizeFinder'
import ListViewCardComponent from './ListViewCardComponent'
import './ListView.scss'

const ListView = ({ data, title, setModalActive, modalActive }) => {
  const windowWidth = useSizeFinder()
  return (
    <>
      <div className='listview-container'>
        <h4>{title}</h4>
        {windowWidth > 1000 ? (
          data &&
          data.map((item) => {
            return (
              <ListViewCardComponent
                item={item}
                modalActive={modalActive}
                setModalActive={setModalActive}
              />
            )
          })
        ) : (
          <CardLayout data={data}>
            {data &&
              data.map((item) => {
                return (
                  <ListViewCardComponent
                    item={item}
                    modalActive={modalActive}
                    setModalActive={setModalActive}
                    key={item.id}
                  />
                )
              })}
          </CardLayout>
        )}
      </div>
    </>
  )
}

export default ListView
