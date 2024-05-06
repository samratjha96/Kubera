import HeaderBox from '@/components/HeaderBox'
import RightSidebar from '@/components/RightSidebar';
import TotalBalanceBox from '@/components/TotalBalanceBox';
import React from 'react'

const Home = () => {
  const loggedIn = { firstName: "Samrat", lastName: "Jha", email: "contact@samratjha.com" };
  return (
    <section className="home">
        <div className='home-content'>
            <header className="home-header">
                <HeaderBox 
                  type="greeting"
                  title="Welcome"
                  user={loggedIn?.firstName || 'Guest'}
                  subtext="Access and manage your account and transactions securely"
                  />

                  <TotalBalanceBox 
                    accounts={[]}
                    totalBanks={1}
                    totalCurrentBalance={1200.35}
                  />
            </header>
        </div>
        <RightSidebar user={loggedIn} transactions={[]} banks={[
          {}, {}
        ]} />
    </section>
  )
}

export default Home