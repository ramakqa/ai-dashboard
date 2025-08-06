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
import { ConciergeService } from "@/types"

// Sample concierge services data for HNWI (Complimentary)
const sampleConciergeServices: ConciergeService[] = [
  {
    id: "valet-service-001",
    name: "Premium Valet Service",
    type: "valet",
    description: "24/7 complimentary valet parking with car wash and detailing",
    isActive: true,
    properties: ["lana", "obj"],
    availability: {
      daysOfWeek: [0, 1, 2, 3, 4, 5, 6], // All days
      startTime: "00:00",
      endTime: "23:59",
      maxBookingsPerDay: 100,
      advanceBookingDays: 7
    },
    staff: [
      { id: "1", name: "Ahmed Hassan", email: "ahmed@omniyat.com", role: "concierge_staff", status: "active" },
      { id: "2", name: "Mohammed Ali", email: "mohammed@omniyat.com", role: "concierge_staff", status: "active" }
    ]
  },
  {
    id: "luggage-service-001",
    name: "Luggage Handling Service",
    type: "luggage",
    description: "Professional luggage pickup, delivery, and storage service",
    isActive: true,
    properties: ["lana"],
    availability: {
      daysOfWeek: [0, 1, 2, 3, 4, 5, 6],
      startTime: "06:00",
      endTime: "22:00",
      maxBookingsPerDay: 50
    },
    staff: [
      { id: "3", name: "Fatima Ali", email: "fatima@omniyat.com", role: "concierge_staff", status: "active" }
    ]
  },
  {
    id: "laundry-service-001",
    name: "Premium Laundry Service",
    type: "laundry",
    description: "Express laundry and dry cleaning service",
    isActive: true,
    properties: ["lana", "obj"],
    availability: {
      daysOfWeek: [1, 2, 3, 4, 5, 6], // Monday to Saturday
      startTime: "08:00",
      endTime: "18:00",
      maxBookingsPerDay: 30
    }
  },
  {
    id: "access-card-service-001",
    name: "Access Card Management",
    type: "access_card",
    description: "Guest access card issuance and management",
    isActive: true,
    properties: ["lana", "obj"],
    availability: {
      daysOfWeek: [0, 1, 2, 3, 4, 5, 6],
      startTime: "00:00",
      endTime: "23:59"
    }
  }
]

const getServiceTypeColor = (type: string) => {
  switch (type) {
    case "valet":
      return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300"
    case "luggage":
      return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
    case "laundry":
      return "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300"
    case "access_card":
      return "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300"
    default:
      return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300"
  }
}

export default function ConciergeServicesPage() {
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
                      { title: "Service Configuration", href: "/services" },
                      { title: "Concierge Services" },
                    ]}
                  />
                </div>
                
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h1 className="text-3xl font-bold tracking-tight">Concierge Services</h1>
                    <p className="text-muted-foreground">
                      Manage complimentary concierge services for HNWI residents
                    </p>
                  </div>
                  <Button>Add New Service</Button>
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
                      <SelectItem value="valet">Valet</SelectItem>
                      <SelectItem value="luggage">Luggage</SelectItem>
                      <SelectItem value="laundry">Laundry</SelectItem>
                      <SelectItem value="access_card">Access Card</SelectItem>
                    </SelectContent>
                  </Select>
                  
                  <Select defaultValue="all">
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="All Status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Status</SelectItem>
                      <SelectItem value="active">Active</SelectItem>
                      <SelectItem value="inactive">Inactive</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Card>
                  <CardHeader>
                    <CardTitle>Complimentary Service Configurations</CardTitle>
                    <CardDescription>
                      Manage concierge service configurations, availability, and staff assignment for HNWI residents
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Service ID</TableHead>
                          <TableHead>Name</TableHead>
                          <TableHead>Type</TableHead>
                          <TableHead>Properties</TableHead>
                          <TableHead>Status</TableHead>
                          <TableHead>Service Level</TableHead>
                          <TableHead>Availability</TableHead>
                          <TableHead>Staff</TableHead>
                          <TableHead>Actions</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {sampleConciergeServices.map((service) => (
                          <TableRow key={service.id}>
                            <TableCell className="font-mono">{service.id}</TableCell>
                            <TableCell>
                              <div>
                                <div className="font-medium">{service.name}</div>
                                <div className="text-sm text-muted-foreground">{service.description}</div>
                              </div>
                            </TableCell>
                            <TableCell>
                              <Badge className={getServiceTypeColor(service.type)}>
                                {service.type.replace("_", " ")}
                              </Badge>
                            </TableCell>
                            <TableCell>
                              <div className="flex gap-1">
                                {service.properties.map((prop) => (
                                  <Badge key={prop} variant="outline" className="text-xs">
                                    {prop === "lana" ? "Lana" : "OBJ"}
                                  </Badge>
                                ))}
                              </div>
                            </TableCell>
                            <TableCell>
                              <Badge className={service.isActive ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}>
                                {service.isActive ? "Active" : "Inactive"}
                              </Badge>
                            </TableCell>
                            <TableCell>
                              <Badge className="bg-gold-100 text-gold-800 dark:bg-gold-900 dark:text-gold-300">
                                Complimentary
                              </Badge>
                            </TableCell>
                            <TableCell>
                              {service.availability ? (
                                <div className="text-sm">
                                  <div>{service.availability.startTime} - {service.availability.endTime}</div>
                                  <div className="text-muted-foreground">
                                    {service.availability.maxBookingsPerDay ? `${service.availability.maxBookingsPerDay}/day` : "Unlimited"}
                                  </div>
                                </div>
                              ) : (
                                <span className="text-muted-foreground">24/7</span>
                              )}
                            </TableCell>
                            <TableCell>
                              {service.staff ? (
                                <div className="text-sm">
                                  {service.staff.length} staff assigned
                                </div>
                              ) : (
                                <span className="text-muted-foreground">None</span>
                              )}
                            </TableCell>
                            <TableCell>
                              <div className="flex gap-2">
                                <Button variant="outline" size="sm">
                                  Edit
                                </Button>
                                <Button variant="outline" size="sm">
                                  Configure
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