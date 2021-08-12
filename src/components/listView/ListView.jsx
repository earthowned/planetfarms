import CardLayout from '../../layout/cardLayout/CardLayout'
import useSizeFinder from '../../utils/sizeFinder'
import CardView from './CardView'
import './ListView.scss'

const ListView = ({ data, title, setModalActive, modalActive }) => {
  const windowWidth = useSizeFinder()
  return (
    <>
      <div className='listview-container'>
        <h4>{title}</h4>
        {windowWidth > 1000 ? (
          <CardView
            data={data}
            modalActive={modalActive}
            setModalActive={setModalActive}
          />
        ) : (
          <CardLayout data={data}>
            <CardView
              data={data}
              modalActive={modalActive}
              setModalActive={setModalActive}
            />
          </CardLayout>
        )}
      </div>
    </>
  )
}

export default ListView
