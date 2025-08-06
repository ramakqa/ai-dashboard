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
import { Request, RequestStatus, RequestType } from "@/types"

// Sample requests data across all properties
const sampleRequests: Request[] = [
  {
    id: "req-001",
    type: "maintenance",
    status: "pending",
    priority: "high",
    user: { id: "1", name: "John Doe", email: "john@example.com", role: "owner", status: "active" },
    property: { id: "1", name: "Lana Building", address: "Dubai Marina", type: "apartment", status: "active", units: 200 },
    unit: "1205",
    description: "Air conditioning not working properly",
    createdAt: new Date(Date.now() - 30 * 60 * 1000),
    updatedAt: new Date(Date.now() - 30 * 60 * 1000),
  },
  {
    id: "req-002",
    type: "valet",
    status: "in_progress",
    priority: "medium",
    user: { id: "2", name: "Jane Smith", email: "jane@example.com", role: "owner", status: "active" },
    property: { id: "2", name: "OBJ Tower", address: "Business Bay", type: "apartment", status: "active", units: 150 },
    unit: "812",
    description: "Car pickup needed at 3:00 PM",
    createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000),
    updatedAt: new Date(Date.now() - 1 * 60 * 60 * 1000),
    assignedTo: { id: "5", name: "Ahmed Hassan", email: "ahmed@omniyat.com", role: "concierge_staff", status: "active" },
    serviceId: "valet-service-001",
  },
  {
    id: "req-003",
    type: "spa_booking",
    status: "completed",
    priority: "low",
    user: { id: "3", name: "Sarah Ahmed", email: "sarah@example.com", role: "owner", status: "active" },
    property: { id: "1", name: "Lana Building", address: "Dubai Marina", type: "apartment", status: "active", units: 200 },
    unit: "1503",
    description: "Wellness spa appointment for 2 people",
    createdAt: new Date(Date.now() - 24 * 60 * 60 * 1000),
    updatedAt: new Date(Date.now() - 12 * 60 * 60 * 1000),
    completedAt: new Date(Date.now() - 6 * 60 * 60 * 1000),
    serviceId: "spa-service-001",
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
    id: "req-005",
    type: "luggage",
    status: "in_progress",
    priority: "high",
    user: { id: "5", name: "Emma Wilson", email: "emma@example.com", role: "owner", status: "active" },
    property: { id: "1", name: "Lana Building", address: "Dubai Marina", type: "apartment", status: "active", units: 200 },
    unit: "1801",
    description: "Luggage pickup from lobby",
    createdAt: new Date(Date.now() - 45 * 60 * 1000),
    updatedAt: new Date(Date.now() - 30 * 60 * 1000),
    assignedTo: { id: "6", name: "Fatima Ali", email: "fatima@omniyat.com", role: "concierge_staff", status: "active" },
    serviceId: "luggage-service-001",
  },
]

const getStatusColor = (status: RequestStatus) => {
  switch (status) {
    case "pending":
      return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300"
    case "in_progress":
      return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300"
    case "completed":
      return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
    case "cancelled":
      return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300"
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

export default function RequestsPage() {
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
                      { title: "Request Management" },
                    ]}
                  />
                </div>
                
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h1 className="text-3xl font-bold tracking-tight">Request Management</h1>
                    <p className="text-muted-foreground">
                      Manage all service requests across all Omniyat properties
                    </p>
                  </div>
                  <Button>New Request</Button>
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
                      <SelectValue placeholder="All Status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Status</SelectItem>
                      <SelectItem value="pending">Pending</SelectItem>
                      <SelectItem value="in_progress">In Progress</SelectItem>
                      <SelectItem value="completed">Completed</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Card>
                  <CardHeader>
                    <CardTitle>All Requests</CardTitle>
                    <CardDescription>
                      Overview of all service requests across properties with service configuration references
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>ID</TableHead>
                          <TableHead>Type</TableHead>
                          <TableHead>User</TableHead>
                          <TableHead>Property</TableHead>
                          <TableHead>Unit</TableHead>
                          <TableHead>Status</TableHead>
                          <TableHead>Priority</TableHead>
                          <TableHead>Service Config</TableHead>
                          <TableHead>Created</TableHead>
                          <TableHead>Actions</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {sampleRequests.map((request) => (
                          <TableRow key={request.id}>
                            <TableCell className="font-mono">{request.id}</TableCell>
                            <TableCell>
                              <Badge variant="outline" className="capitalize">
                                {request.type.replace("_", " ")}
                              </Badge>
                            </TableCell>
                            <TableCell>{request.user.name}</TableCell>
                            <TableCell>{request.property.name}</TableCell>
                            <TableCell>{request.unit}</TableCell>
                            <TableCell>
                              <Badge className={getStatusColor(request.status)}>
                                {request.status.replace("_", " ")}
                              </Badge>
                            </TableCell>
                            <TableCell>
                              <Badge className={getPriorityColor(request.priority)}>
                                {request.priority}
                              </Badge>
                            </TableCell>
                            <TableCell>
                              {request.serviceId ? (
                                <Badge variant="secondary" className="text-xs">
                                  {request.serviceId}
                                </Badge>
                              ) : (
                                <span className="text-muted-foreground text-xs">None</span>
                              )}
                            </TableCell>
                            <TableCell>
                              {request.createdAt.toLocaleDateString()}
                            </TableCell>
                            <TableCell>
                              <div className="flex gap-2">
                                <Button variant="outline" size="sm">
                                  View
                                </Button>
                                <Button variant="outline" size="sm">
                                  Edit
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