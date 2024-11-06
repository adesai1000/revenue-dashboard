import {
  DashboardCard,
  DashboardCardContent,
} from "@/components/dashboard-card";
import UserDataCard from "@/components/user-data-card";
import {
  Calendar,
  DollarSign,
  PersonStanding,
  UserPlus,
  UserRoundCheck,
} from "lucide-react";

export default async function Dashboard() {
  return (
    <div className="flex flex-col gap-5 w-full">
      <h1 className="text-2xl font-bold text-center mx-6">Dashboard</h1>
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
              <UserDataCard
                name="Jack Hasselblad"
                image="./mesh.jpeg"
                email="jackhasselblad@gmail.com"
                time="2 hours ago"
              />
            </DashboardCardContent>
          </section>
        </div>
      </div>
    </div>
  );
}
