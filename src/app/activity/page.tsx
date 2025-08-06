import { AppSidebar } from "@/components/layout/app-sidebar"
import { SiteHeader } from "@/components/layout/site-header"
import {
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { PageBreadcrumbs } from "@/components/ui/page-breadcrumbs"
import { Activity } from "@/types"
import { IconSearch, IconFilter } from "@tabler/icons-react"

// Extended sample activities for the full activity log
const sampleActivities: Activity[] = [
  {
    id: "1",
    type: "request_created",
    title: "New maintenance request - Lana Building",
    description: "Air conditioning not working in Unit 1205",
    timestamp: new Date(Date.now() - 30 * 60 * 1000),
    user: { id: "1", name: "John Doe", email: "john@example.com", role: "owner", status: "active" },
    property: { id: "1", name: "Lana Building", address: "Dubai Marina", type: "apartment", status: "active", units: 200 },
  },
  {
    id: "2",
    type: "request_completed",
    title: "Valet booking confirmed - OBJ Tower",
    description: "Car pickup scheduled for Unit 812",
    timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000),
    user: { id: "2", name: "Jane Smith", email: "jane@example.com", role: "owner", status: "active" },
    property: { id: "2", name: "OBJ Tower", address: "Business Bay", type: "apartment", status: "active", units: 150 },
  },
  {
    id: "3",
    type: "request_updated",
    title: "Spa appointment updated - Lana Building",
    description: "Wellness appointment rescheduled",
    timestamp: new Date(Date.now() - 4 * 60 * 60 * 1000),
    user: { id: "3", name: "Sarah Ahmed", email: "sarah@example.com", role: "owner", status: "active" },
    property: { id: "1", name: "Lana Building", address: "Dubai Marina", type: "apartment", status: "active", units: 200 },
  },
  {
    id: "4",
    type: "service_configured",
    title: "New restaurant service added",
    description: "Fine dining restaurant configured for Lana Building",
    timestamp: new Date(Date.now() - 6 * 60 * 60 * 1000),
    property: { id: "1", name: "Lana Building", address: "Dubai Marina", type: "apartment", status: "active", units: 200 },
  },
  {
    id: "5",
    type: "user_registered",
    title: "New resident registered - OBJ Tower",
    description: "Welcome to Omniyat community",
    timestamp: new Date(Date.now() - 8 * 60 * 60 * 1000),
    user: { id: "4", name: "Mike Johnson", email: "mike@example.com", role: "owner", status: "active" },
    property: { id: "2", name: "OBJ Tower", address: "Business Bay", type: "apartment", status: "active", units: 150 },
  },
  {
    id: "6",
    type: "request_assigned",
    title: "Maintenance request assigned",
    description: "Request assigned to technician Ahmed Hassan",
    timestamp: new Date(Date.now() - 12 * 60 * 60 * 1000),
    user: { id: "1", name: "John Doe", email: "john@example.com", role: "owner", status: "active" },
    property: { id: "1", name: "Lana Building", address: "Dubai Marina", type: "apartment", status: "active", units: 200 },
  },
  {
    id: "7",
    type: "service_updated",
    title: "Valet service hours updated",
    description: "Extended valet service hours for Lana Building",
    timestamp: new Date(Date.now() - 24 * 60 * 60 * 1000),
    property: { id: "1", name: "Lana Building", address: "Dubai Marina", type: "apartment", status: "active", units: 200 },
  },
  {
    id: "8",
    type: "feedback_received",
    title: "New feedback received",
    description: "Positive feedback for spa services",
    timestamp: new Date(Date.now() - 36 * 60 * 60 * 1000),
    user: { id: "3", name: "Sarah Ahmed", email: "sarah@example.com", role: "owner", status: "active" },
    property: { id: "1", name: "Lana Building", address: "Dubai Marina", type: "apartment", status: "active", units: 200 },
  },
]

const getActivityIcon = (type: string) => {
  switch (type) {
    case "request_created":
      return "📋"
    case "request_completed":
      return "✅"
    case "request_updated":
      return "🔄"
    case "request_assigned":
      return "👤"
    case "service_configured":
      return "⚙️"
    case "service_updated":
      return "🔧"
    case "user_registered":
      return "👋"
    case "feedback_received":
      return "💬"
    default:
      return "📝"
  }
}

const getActivityColor = (type: string) => {
  switch (type) {
    case "request_created":
      return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300"
    case "request_completed":
      return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
    case "request_updated":
      return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300"
    case "request_assigned":
      return "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300"
    case "service_configured":
      return "bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-300"
    case "service_updated":
      return "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300"
    case "user_registered":
      return "bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-300"
    case "feedback_received":
      return "bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-300"
    default:
      return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300"
  }
}

const formatTimestamp = (timestamp: Date) => {
  const now = new Date()
  const diffInMinutes = Math.floor((now.getTime() - timestamp.getTime()) / (1000 * 60))
  
  if (diffInMinutes < 1) return "Just now"
  if (diffInMinutes < 60) return `${diffInMinutes}m ago`
  
  const diffInHours = Math.floor(diffInMinutes / 60)
  if (diffInHours < 24) return `${diffInHours}h ago`
  
  const diffInDays = Math.floor(diffInHours / 24)
  if (diffInDays < 7) return `${diffInDays}d ago`
  
  return timestamp.toLocaleDateString()
}

export default function ActivityPage() {
  return (
    <SidebarProvider
      style={
        {
          "--sidebar-width": "calc(var(--spacing) * 72)",
          "--header-height": "calc(var(--spacing) * 12)",
        } as React.CSSProperties
      }
    >
      <AppSidebar variant="inset" />
      <SidebarInset>
        <SiteHeader />
        <div className="flex flex-1 flex-col">
          <div className="@container/main flex flex-1 flex-col gap-2">
            <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
              <div className="px-4 lg:px-6">
                {/* Breadcrumbs */}
                <div className="mb-4">
                  <PageBreadcrumbs
                    items={[
                      { title: "Dashboard", href: "/dashboard" },
                      { title: "Activity" },
                    ]}
                  />
                </div>
                
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h1 className="text-3xl font-bold tracking-tight">Activity Log</h1>
                    <p className="text-muted-foreground">
                      Comprehensive view of all activities across Omniyat properties
                    </p>
                  </div>
                  <Button>Export Activity</Button>
                </div>

                {/* Filters and Search */}
                <div className="flex flex-col lg:flex-row gap-4 mb-6">
                  <div className="relative flex-1">
                    <IconSearch className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      placeholder="Search activities..."
                      className="pl-10"
                    />
                  </div>
                  
                  <div className="flex gap-4">
                    <Select defaultValue="all">
                      <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="All Properties" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Properties</SelectItem>
                        <SelectItem value="lana">Lana Building</SelectItem>
                        <SelectItem value="obj">OBJ Tower</SelectItem>
                      </SelectContent>
                    </Select>
                    
                    <Select defaultValue="all">
                      <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="All Types" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Types</SelectItem>
                        <SelectItem value="request_created">Request Created</SelectItem>
                        <SelectItem value="request_completed">Request Completed</SelectItem>
                        <SelectItem value="request_updated">Request Updated</SelectItem>
                        <SelectItem value="request_assigned">Request Assigned</SelectItem>
                        <SelectItem value="service_configured">Service Configured</SelectItem>
                        <SelectItem value="service_updated">Service Updated</SelectItem>
                        <SelectItem value="user_registered">User Registered</SelectItem>
                        <SelectItem value="feedback_received">Feedback Received</SelectItem>
                      </SelectContent>
                    </Select>
                    
                    <Select defaultValue="all">
                      <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="All Time" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Time</SelectItem>
                        <SelectItem value="today">Today</SelectItem>
                        <SelectItem value="week">This Week</SelectItem>
                        <SelectItem value="month">This Month</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Activity List */}
                <Card>
                  <CardHeader>
                    <CardTitle>Recent Activities ({sampleActivities.length})</CardTitle>
                    <CardDescription>
                      Chronological list of all system activities and user interactions
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {sampleActivities.map((activity) => (
                        <div
                          key={activity.id}
                          className="flex items-start gap-4 p-4 rounded-lg border hover:bg-muted/50 transition-colors"
                        >
                          <div className="flex-shrink-0">
                            <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-lg">
                              {getActivityIcon(activity.type)}
                            </div>
                          </div>
                          
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 mb-1">
                              <h3 className="font-medium text-sm">{activity.title}</h3>
                              <Badge className={getActivityColor(activity.type)}>
                                {activity.type.replace("_", " ")}
                              </Badge>
                            </div>
                            <p className="text-sm text-muted-foreground mb-2">
                              {activity.description}
                            </p>
                            <div className="flex items-center gap-4 text-xs text-muted-foreground">
                              {activity.user && (
                                <span>User: {activity.user.name}</span>
                              )}
                              {activity.property && (
                                <span>Property: {activity.property.name}</span>
                              )}
                              <span>{formatTimestamp(activity.timestamp)}</span>
                            </div>
                          </div>
                          
                          <div className="flex-shrink-0">
                            <Button variant="outline" size="sm">
                              View Details
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
} 