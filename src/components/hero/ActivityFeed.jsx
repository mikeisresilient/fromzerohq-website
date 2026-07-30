import FloatingCard from "./FloatingCard";
import { heroActivities } from "../../data/hero";

function ActivityFeed() {
  return (
    <FloatingCard className="p-6">
      <h3 className="font-semibold">Recent Activity</h3>

      <div className="mt-5 space-y-4">
        {heroActivities.map((activity) => (
          <div key={activity.time} className="flex items-start gap-4">
            <div className="mt-2 h-2.5 w-2.5 rounded-full bg-green-400" />

            <div>
              <p className="text-sm text-green-400">{activity.time}</p>

              <p className="text-gray-300">{activity.text}</p>
            </div>
          </div>
        ))}
      </div>
    </FloatingCard>
  );
}

export default ActivityFeed;
