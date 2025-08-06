import { IconClock } from "@tabler/icons-react"

import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Activity } from "@/types"

interface RecentActivityProps {
  activities: Activity[]
}

export function RecentActivity({ activities }: RecentActivityProps) {
  const formatTimeAgo = (date: Date) => {
    const now = new Date()
    const diffInMinutes = Math.floor((now.getTime() - date.getTime()) / (1000 * 60))
    
    if (diffInMinutes < 60) {
      return `${diffInMinutes}m ago`
    } else if (diffInMinutes < 1440) {
      return `${Math.floor(diffInMinutes / 60)}h ago`
    } else {
      return `${Math.floor(diffInMinutes / 1440)}d ago`
    }
  }

  const getActivityIcon = (type: Activity['type']) => {
    switch (type) {
      case 'request_created':
        return '🔔'
      case 'request_updated':
        return '✏️'
      case 'request_completed':
        return '✅'
      case 'user_registered':
        return '👤'
      case 'property_added':
        return '🏢'
      default:
        return '📝'
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <IconClock className="h-5 w-5" />
          Recent Activity
        </CardTitle>
        <CardDescription>
          Latest updates and activities across the system
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {activities.map((activity) => (
          <div key={activity.id} className="flex items-start gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors">
            <div className="text-lg">
              {getActivityIcon(activity.type)}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <p className="text-sm font-medium truncate">
                  {activity.title}
                </p>
                <Badge variant="secondary" className="text-xs">
                  {formatTimeAgo(activity.timestamp)}
                </Badge>
              </div>
              <p className="text-sm text-muted-foreground">
                {activity.description}
              </p>
              {activity.user && (
                <p className="text-xs text-muted-foreground mt-1">
                  by {activity.user.name}
                </p>
              )}
            </div>
          </div>
        ))}
        
        {activities.length === 0 && (
          <div className="text-center py-8 text-muted-foreground">
            <IconClock className="h-8 w-8 mx-auto mb-2 opacity-50" />
            <p>No recent activity</p>
          </div>
        )}
      </CardContent>
    </Card>
  )
} 