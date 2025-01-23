import ContactModal from "./components/modal"
import ContactList from "./containers/contactList"
import Header from "./containers/header"
import { GlobalStyle } from "./style"

function App() {


  return (
    <>
      <GlobalStyle />
      <Header />
      <ContactList />
      <ContactModal />
    </>
  )
}

export default App
