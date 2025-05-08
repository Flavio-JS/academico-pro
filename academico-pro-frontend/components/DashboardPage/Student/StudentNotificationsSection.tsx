import { Card } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { cn } from "@/lib/utils";
import { notifications } from "./mocks/notifications.mocks";

export const StudentNotificationsSection = () => {
  return (
    <section>
      <h2 className="text-xl font-semibold mb-4 text-neutral-700">
        Notificações Recentes
      </h2>
      <Card>
        <ScrollArea className="h-[200px]">
          {notifications.map((notification) => (
            <div
              key={notification.id}
              className="p-4 border-b border-neutral-100 last:border-0"
            >
              <div className="flex items-start gap-3">
                <FontAwesomeIcon
                  icon={notification.icon}
                  className={cn(
                    "mt-1",
                    notification.type === "grade"
                      ? "text-yellow-500"
                      : "text-blue-500"
                  )}
                  width={18}
                />
                <div>
                  <p className="text-neutral-900 font-medium">
                    {notification.message}
                  </p>
                  <p className="text-sm text-neutral-600">
                    {notification.date}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </ScrollArea>
      </Card>
    </section>
  );
};
