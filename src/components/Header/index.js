import Nav from '../Nav';

function Header() {
  return (
    <header>
      <div className='headerContent'>
        <h1 className='title'>Jonathan Thompson</h1>
        <p className='underTitle'>Full Stack Web Developer</p>
      </div>
      <Nav></Nav>
    </header>
  )
}

export default Header;