import Header from '../comps/header'
const Layout = ({children}) => {
  return (
    <>
      <Header/>
      {children}     
    </>
  );
}
 
export default Layout;