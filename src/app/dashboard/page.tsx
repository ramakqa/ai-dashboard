import { AppSidebar } from "@/components/layout/app-sidebar"
import { SiteHeader } from "@/components/layout/site-header"
import { QuickActions } from "@/components/dashboard/quick-actions"
import { RecentActivity } from "@/components/dashboard/recent-activity"
import { StatsCards } from "@/components/dashboard/stats-cards"
import {
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar"
import { Activity, DashboardStats } from "@/types"

// Sample data for concierge-level management
const sampleStats: DashboardStats = {
  pendingRequests: 12,
  inProgressRequests: 8,
  completedRequests: 45,
  totalUsers: 156,
  totalProperties: 2,
  totalRevenue: 1250000,
  growthRate: 4.5,
  propertyStats: {
    "lana": {
      pendingRequests: 7,
      inProgressRequests: 5,
      completedRequests: 28,
      totalUsers: 89,
    },
    "obj": {
      pendingRequests: 5,
      inProgressRequests: 3,
      completedRequests: 17,
      totalUsers: 67,
    }
  }
}

const sampleActivities: Activity[] = [
  {
    id: "1",
    type: "request_created",
    title: "New maintenance request - Lana Building",
    description: "Air conditioning not working in Unit 1205",
    timestamp: new Date(Date.now() - 30 * 60 * 1000), // 30 minutes ago
    user: { id: "1", name: "John Doe", email: "john@example.com", role: "owner", status: "active" },
    request: {
      id: "req-001",
      type: "maintenance",
      status: "pending",
      priority: "high",
      user: { id: "1", name: "John Doe", email: "john@example.com", role: "owner", status: "active" },
      property: { id: "1", name: "Lana Building", address: "Dubai Marina", type: "apartment", status: "active", units: 200 },
      unit: "1205",
      description: "Air conditioning not working",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  },
  {
    id: "2",
    type: "request_completed",
    title: "Valet booking confirmed - OBJ Tower",
    description: "Car pickup scheduled for Unit 812",
    timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000), // 2 hours ago
    user: { id: "2", name: "Jane Smith", email: "jane@example.com", role: "owner", status: "active" },
  },
  {
    id: "3",
    type: "request_updated",
    title: "Spa appointment updated - Lana Building",
    description: "Wellness appointment rescheduled",
    timestamp: new Date(Date.now() - 4 * 60 * 60 * 1000), // 4 hours ago
    user: { id: "3", name: "Sarah Ahmed", email: "sarah@example.com", role: "owner", status: "active" },
  },
  {
    id: "4",
    type: "service_configured",
    title: "New restaurant service added",
    description: "Fine dining restaurant configured for Lana Building",
    timestamp: new Date(Date.now() - 6 * 60 * 60 * 1000), // 6 hours ago
    property: { id: "1", name: "Lana Building", address: "Dubai Marina", type: "apartment", status: "active", units: 200 },
  },
  {
    id: "5",
    type: "user_registered",
    title: "New resident registered - OBJ Tower",
    description: "Welcome to Omniyat community",
    timestamp: new Date(Date.now() - 8 * 60 * 60 * 1000), // 8 hours ago
    user: { id: "4", name: "Mike Johnson", email: "mike@example.com", role: "owner", status: "active" },
  },
]

export default function DashboardPage() {
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
              {/* Dashboard Header */}
              <div className="px-4 lg:px-6">
                <div className="mb-6">
                  <h1 className="text-3xl font-bold tracking-tight">Concierge Dashboard</h1>
                  <p className="text-muted-foreground">
                    Holistic management of all Omniyat properties and services
                  </p>
                </div>
              </div>
              
              <StatsCards stats={sampleStats} />
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 px-4 lg:px-6">
                <QuickActions />
                <RecentActivity activities={sampleActivities} />
              </div>
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
} 