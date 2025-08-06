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
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { PageBreadcrumbs } from "@/components/ui/page-breadcrumbs"
import { Request } from "@/types"

// Sample pending requests data
const samplePendingRequests: Request[] = [
  {
    id: "req-001",
    type: "maintenance",
    status: "pending",
    priority: "high",
    user: { id: "1", name: "John Doe", email: "john@example.com", role: "owner", status: "active" },
    property: { id: "1", name: "Lana Building", address: "Dubai Marina", type: "apartment", status: "active", units: 200 },
    unit: "1205",
    description: "Air conditioning not working",
    createdAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000),
    updatedAt: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000),
    serviceId: "maintenance-service-001",
  },
  {
    id: "req-004",
    type: "restaurant_booking",
    status: "pending",
    priority: "medium",
    user: { id: "4", name: "Mike Johnson", email: "mike@example.com", role: "owner", status: "active" },
    property: { id: "2", name: "OBJ Tower", address: "Business Bay", type: "apartment", status: "active", units: 150 },
    unit: "1102",
    description: "Dinner reservation for 4 people",
    createdAt: new Date(Date.now() - 1 * 60 * 60 * 1000),
    updatedAt: new Date(Date.now() - 1 * 60 * 60 * 1000),
    serviceId: "restaurant-service-001",
  },
  {
    id: "req-006",
    type: "spa_booking",
    status: "pending",
    priority: "low",
    user: { id: "6", name: "Emma Wilson", email: "emma@example.com", role: "owner", status: "active" },
    property: { id: "1", name: "Lana Building", address: "Dubai Marina", type: "apartment", status: "active", units: 200 },
    unit: "1801",
    description: "Couple's massage appointment",
    createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000),
    updatedAt: new Date(Date.now() - 2 * 60 * 60 * 1000),
    serviceId: "spa-service-001",
  },
]

const getStatusColor = (status: string) => {
  switch (status) {
    case "pending":
      return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300"
    case "in_progress":
      return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300"
    case "completed":
      return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
    default:
      return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300"
  }
}

const getPriorityColor = (priority: string) => {
  switch (priority) {
    case "urgent":
      return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300"
    case "high":
      return "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300"
    case "medium":
      return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300"
    case "low":
      return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
    default:
      return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300"
  }
}

export default function PendingRequestsPage() {
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
                      { title: "Request Management", href: "/requests" },
                      { title: "Pending Requests" },
                    ]}
                  />
                </div>
                
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h1 className="text-3xl font-bold tracking-tight">Pending Requests</h1>
                    <p className="text-muted-foreground">
                      Manage all pending service requests across properties
                    </p>
                  </div>
                  <Button>Assign Requests</Button>
                </div>

                {/* Filters */}
                <div className="flex gap-4 mb-6">
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
                      <SelectItem value="maintenance">Maintenance</SelectItem>
                      <SelectItem value="valet">Valet</SelectItem>
                      <SelectItem value="spa_booking">Spa Booking</SelectItem>
                      <SelectItem value="restaurant_booking">Restaurant</SelectItem>
                      <SelectItem value="luggage">Luggage</SelectItem>
                    </SelectContent>
                  </Select>
                  
                  <Select defaultValue="all">
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="All Priority" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Priority</SelectItem>
                      <SelectItem value="urgent">Urgent</SelectItem>
                      <SelectItem value="high">High</SelectItem>
                      <SelectItem value="medium">Medium</SelectItem>
                      <SelectItem value="low">Low</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Card>
                  <CardHeader>
                    <CardTitle>Pending Requests ({samplePendingRequests.length})</CardTitle>
                    <CardDescription>
                      Requests awaiting assignment or action
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Request ID</TableHead>
                          <TableHead>Type</TableHead>
                          <TableHead>User</TableHead>
                          <TableHead>Property</TableHead>
                          <TableHead>Priority</TableHead>
                          <TableHead>Created</TableHead>
                          <TableHead>Actions</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {samplePendingRequests.map((request) => (
                          <TableRow key={request.id}>
                            <TableCell className="font-mono">{request.id}</TableCell>
                            <TableCell>
                              <Badge className="bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300">
                                {request.type.replace("_", " ")}
                              </Badge>
                            </TableCell>
                            <TableCell>
                              <div>
                                <div className="font-medium">{request.user.name}</div>
                                <div className="text-sm text-muted-foreground">{request.unit}</div>
                              </div>
                            </TableCell>
                            <TableCell>
                              <div>
                                <div className="font-medium">{request.property.name}</div>
                                <div className="text-sm text-muted-foreground">{request.property.address}</div>
                              </div>
                            </TableCell>
                            <TableCell>
                              <Badge className={getPriorityColor(request.priority)}>
                                {request.priority}
                              </Badge>
                            </TableCell>
                            <TableCell>
                              {request.createdAt.toLocaleDateString()}
                            </TableCell>
                            <TableCell>
                              <div className="flex gap-2">
                                <Button variant="outline" size="sm">
                                  Assign
                                </Button>
                                <Button variant="outline" size="sm">
                                  View Details
                                </Button>
                              </div>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
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