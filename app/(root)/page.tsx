import TotalBalanceBox from "@/components/TotalBalanceBox"
import UserSidebar from "@/components/home/UserSidebar"
import HeaderBox from "@/components/layout/HeaderBox"

const Home = () => {
  const loggedInUser = { firstName: "Ahmed" }
  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={loggedInUser.firstName || "Guest"}
            subtext="Access and manage your account and transactions"
          />

          <TotalBalanceBox
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={123.32}
          />
        </header>
        RECENT TRANSACTIONS
      </div>

      <UserSidebar
        user={loggedInUser}
        // transactions={account?.transactions | []}
        // banks={accountsData?.slice(0, 2) || []}
      />
    </section>
  )
}

export default Home
