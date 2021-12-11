import './App.css'
import Header from './Components/Header'
import Data from './Components/Data'
import Main from './Components/Main'
import BdayCrad from './Components/BdayCrad'
import Footer from './Components/Footer'

function App() {
  const studentDatas = Data.map(data => {
    return (
        <Main
        key={data.id}
        {...data}
        />
    )
  })

  const birthDay = Data.map(data => {
    let today = new Date()
    let thisDate = today.getDate()
    let thisMonth = today.getMonth() + 1
    return (
      data.day === thisDate && data.month === thisMonth ? 
      <BdayCrad
        key={data.id}
        {...data}
        /> : ""
    )
    // if (data.day === thisDate && data.month === thisMonth) {
    //   return (
    //     <BdayCrad
    //     key={data.id}
    //     {...data}
    //     />
    //   )
    // }
  })

  return (
    <div className="App">
      <Header/>
      <div className="Bday--container">
        {birthDay}
      </div>
      <hr />
      <div className="Main--container">
        {studentDatas}
      </div>
      <Footer />
    </div>
  );
}

export default App;


