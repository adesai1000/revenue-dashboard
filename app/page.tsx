import {
  DashboardCard,
  DashboardCardContent,
} from "@/components/dashboard-card";
import UserDataCard, { userDataProps } from "@/components/user-data-card";
import { db } from "@/lib/db";
import { formatDistanceToNow } from "date-fns";

import {
  Calendar,
  DollarSign,
  PersonStanding,
  UserPlus,
  UserRoundCheck,
} from "lucide-react";

export default async function Dashboard() {
  //Function to fetch Recent Users
  const recentUsers = await db.user.findMany({
    orderBy: {
      createdAt: "desc",
    },
    take: 7,
  });

  const UserData: userDataProps[] = recentUsers.map((account) => ({
    name: account.name || "Unknown User",
    email: account.email || "Unknown User Email",
    image: account.image || "./mesh.png",
    time: formatDistanceToNow(new Date(account.createdAt), { addSuffix: true }),
  }));

  return (
    <div className="flex flex-col gap-5 w-full">
      <h1 className="text-2xl text-center pt-10 mt-4">Dashboard</h1>
      <div className="container mx-auto py-8">
        <div className="flex flex-col gap-5 w-full">
          <section className="grid w-full grid-cols-1 gap-4 gap-x-8 transition-all sm:grid-cols-2 xl:grid-cols-4">
            <DashboardCard
              label={"Total Revenue"}
              Icon={DollarSign}
              amount="12345"
              description="This total revenue generated this month."
            />
            <DashboardCard
              label={"Total Paid Customers"}
              Icon={Calendar}
              amount="12345"
              description="All Time"
            />
            <DashboardCard
              label={"Total Users"}
              Icon={PersonStanding}
              amount="12345"
              description="All Time"
            />
            <DashboardCard
              label={"Users This Month"}
              Icon={UserPlus}
              amount="12345"
              description="This Month"
            />
          </section>
          <section className="grid grid-cols-1 gap-4 transition-all lg:grid-cols-2">
            <DashboardCardContent>
              <section className="flex justify-between gap-2 pb-2">
                <p>Recent Users</p>
                <UserRoundCheck className="h-4 w-4" />
              </section>
              {UserData.map((data, index) => (
                <UserDataCard
                  key={index}
                  name={data.name}
                  email={data.email}
                  image={data.image}
                  time={data.time}
                />
              ))}
            </DashboardCardContent>
          </section>
        </div>
      </div>
    </div>
  );
}
