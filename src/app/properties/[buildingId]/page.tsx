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
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { PageBreadcrumbs } from "@/components/ui/page-breadcrumbs"
import { 
  IconBuilding, 
  IconHome, 
  IconUsers, 
  IconMapPin,
  IconSettings,
  IconPlus,
  IconEye,
  IconEdit,
  IconPhone,
  IconMail,
  IconCalendar,
  IconPool,
  IconHeart,
  IconCar,
  IconTree
} from "@tabler/icons-react"
import Link from "next/link"

// Sample building data (in a real app, this would come from the database)
const sampleBuilding = {
  id: "lana-building",
  name: "Lana Building",
  address: "Dubai Marina, Dubai, UAE",
  type: "apartment",
  status: "active",
  totalUnits: 200,
  occupiedUnits: 185,
  amenities: ["Pool", "Gym", "Spa", "Restaurant", "Concierge", "Valet Parking"],
  managementContact: {
    name: "Ahmed Al Mansouri",
    email: "ahmed@omniyat.com",
    phone: "+971 50 123 4567"
  },
  maintenanceSchedule: {
    frequency: "weekly",
    lastMaintenance: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000),
    nextMaintenance: new Date(Date.now() + 4 * 24 * 60 * 60 * 1000)
  },
  floors: 25,
  yearBuilt: 2020,
  commonAreas: [
    {
      id: "lana-lobby",
      name: "Main Lobby",
      type: "lobby",
      floor: 1,
      size: 2500,
      capacity: 50,
      status: "active",
      operatingHours: {
        open: "00:00",
        close: "23:59",
        days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
      },
      amenities: ["Concierge Desk", "Seating Area", "Security"]
    },
    {
      id: "lana-pool",
      name: "Infinity Pool",
      type: "pool",
      floor: 5,
      size: 800,
      capacity: 30,
      status: "active",
      operatingHours: {
        open: "06:00",
        close: "22:00",
        days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
      },
      amenities: ["Pool Towels", "Lifeguard", "Shower Facilities"]
    },
    {
      id: "lana-gym",
      name: "Fitness Center",
      type: "gym",
      floor: 4,
      size: 1200,
      capacity: 20,
      status: "active",
      operatingHours: {
        open: "05:00",
        close: "23:00",
        days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
      },
      amenities: ["Cardio Equipment", "Weight Training", "Yoga Studio", "Personal Trainers"]
    }
  ],
  apartments: [
    {
      id: "lana-1205",
      number: "1205",
      floor: 12,
      type: "2BR",
      size: 1200,
      bedrooms: 2,
      bathrooms: 2,
      status: "occupied",
      owner: {
        name: "John Doe",
        email: "john@example.com",
        phone: "+971 50 111 1111"
      },
      tenants: [
        {
          name: "John Doe",
          email: "john@example.com",
          phone: "+971 50 111 1111",
          leaseStart: new Date("2024-01-01"),
          leaseEnd: new Date("2024-12-31")
        }
      ]
    },
    {
      id: "lana-1801",
      number: "1801",
      floor: 18,
      type: "penthouse",
      size: 2500,
      bedrooms: 3,
      bathrooms: 3,
      status: "occupied",
      owner: {
        name: "Sarah Ahmed",
        email: "sarah@example.com",
        phone: "+971 50 222 2222"
      },
      tenants: [
        {
          name: "Sarah Ahmed",
          email: "sarah@example.com",
          phone: "+971 50 222 2222",
          leaseStart: new Date("2024-02-01"),
          leaseEnd: new Date("2025-01-31")
        }
      ]
    }
  ]
}

const getStatusColor = (status: string) => {
  switch (status) {
    case "active":
    case "occupied":
      return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
    case "maintenance":
      return "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300"
    case "vacant":
      return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300"
    case "reserved":
      return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300"
    default:
      return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300"
  }
}

const getCommonAreaIcon = (type: string) => {
  switch (type) {
    case "lobby":
      return IconBuilding
    case "gym":
      return IconBuilding
    case "pool":
      return IconPool
    case "garden":
      return IconTree
    case "parking":
      return IconCar
    case "restaurant":
      return IconBuilding
    case "spa":
      return IconHeart
    default:
      return IconBuilding
  }
}

export default function BuildingDetailPage({ params }: { params: { buildingId: string } }) {
  const building = sampleBuilding // In real app, fetch by params.buildingId

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
                      { title: "Properties", href: "/properties" },
                      { title: building.name },
                    ]}
                  />
                </div>
                
                {/* Building Header */}
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h1 className="text-3xl font-bold tracking-tight">{building.name}</h1>
                    <p className="text-muted-foreground flex items-center gap-2">
                      <IconMapPin className="h-4 w-4" />
                      {building.address}
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline">
                      <IconEdit className="mr-2 h-4 w-4" />
                      Edit Building
                    </Button>
                    <Button>
                      <IconPlus className="mr-2 h-4 w-4" />
                      Add Apartment
                    </Button>
                  </div>
                </div>

                {/* Building Overview Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                  <Card>
                    <CardHeader className="pb-3">
                      <div className="flex items-center justify-between">
                        <IconHome className="h-8 w-8 text-muted-foreground" />
                        <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300">
                          {building.totalUnits}
                        </Badge>
                      </div>
                      <CardTitle className="text-lg">Total Units</CardTitle>
                      <CardDescription className="text-sm">
                        Apartments and residences
                      </CardDescription>
                    </CardHeader>
                  </Card>

                  <Card>
                    <CardHeader className="pb-3">
                      <div className="flex items-center justify-between">
                        <IconUsers className="h-8 w-8 text-muted-foreground" />
                        <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300">
                          {building.occupiedUnits}
                        </Badge>
                      </div>
                      <CardTitle className="text-lg">Occupied Units</CardTitle>
                      <CardDescription className="text-sm">
                        {Math.round((building.occupiedUnits / building.totalUnits) * 100)}% occupancy rate
                      </CardDescription>
                    </CardHeader>
                  </Card>

                  <Card>
                    <CardHeader className="pb-3">
                      <div className="flex items-center justify-between">
                        <IconBuilding className="h-8 w-8 text-muted-foreground" />
                        <Badge className="bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300">
                          {building.commonAreas.length}
                        </Badge>
                      </div>
                      <CardTitle className="text-lg">Common Areas</CardTitle>
                      <CardDescription className="text-sm">
                        Shared facilities and amenities
                      </CardDescription>
                    </CardHeader>
                  </Card>

                  <Card>
                    <CardHeader className="pb-3">
                      <div className="flex items-center justify-between">
                        <IconSettings className="h-8 w-8 text-muted-foreground" />
                        <Badge className="bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300">
                          {building.floors}
                        </Badge>
                      </div>
                      <CardTitle className="text-lg">Floors</CardTitle>
                      <CardDescription className="text-sm">
                        Total building floors
                      </CardDescription>
                    </CardHeader>
                  </Card>
                </div>

                {/* Building Details and Management */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
                  {/* Building Information */}
                  <Card className="lg:col-span-2">
                    <CardHeader>
                      <CardTitle>Building Information</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="text-sm font-medium text-muted-foreground">Building Type</label>
                          <p className="text-sm">{building.type}</p>
                        </div>
                        <div>
                          <label className="text-sm font-medium text-muted-foreground">Year Built</label>
                          <p className="text-sm">{building.yearBuilt}</p>
                        </div>
                        <div>
                          <label className="text-sm font-medium text-muted-foreground">Status</label>
                          <Badge className={getStatusColor(building.status)}>
                            {building.status}
                          </Badge>
                        </div>
                        <div>
                          <label className="text-sm font-medium text-muted-foreground">Maintenance Schedule</label>
                          <p className="text-sm capitalize">{building.maintenanceSchedule.frequency}</p>
                        </div>
                      </div>
                      
                      <div>
                        <label className="text-sm font-medium text-muted-foreground">Amenities</label>
                        <div className="flex gap-2 mt-2">
                          {building.amenities.map((amenity) => (
                            <Badge key={amenity} variant="outline">
                              {amenity}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Management Contact */}
                  <Card>
                    <CardHeader>
                      <CardTitle>Management Contact</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <label className="text-sm font-medium text-muted-foreground">Manager</label>
                        <p className="text-sm font-medium">{building.managementContact.name}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <IconMail className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">{building.managementContact.email}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <IconPhone className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">{building.managementContact.phone}</span>
                      </div>
                      <Button className="w-full">
                        <IconPhone className="mr-2 h-4 w-4" />
                        Contact Manager
                      </Button>
                    </CardContent>
                  </Card>
                </div>

                {/* Main Content Tabs */}
                <Tabs defaultValue="apartments" className="space-y-6">
                  <TabsList>
                    <TabsTrigger value="apartments">Apartments</TabsTrigger>
                    <TabsTrigger value="common-areas">Common Areas</TabsTrigger>
                    <TabsTrigger value="maintenance">Maintenance</TabsTrigger>
                  </TabsList>

                  {/* Apartments Tab */}
                  <TabsContent value="apartments" className="space-y-6">
                    <Card>
                      <CardHeader>
                        <CardTitle>Apartment Management</CardTitle>
                        <CardDescription>
                          Manage all apartments in {building.name}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                          {building.apartments.map((apartment) => (
                            <Card key={apartment.id} className="hover:shadow-md transition-shadow">
                              <CardHeader className="pb-3">
                                <div className="flex items-center justify-between">
                                  <Badge className={getStatusColor(apartment.status)}>
                                    {apartment.status}
                                  </Badge>
                                  <Badge variant="outline">
                                    {apartment.type}
                                  </Badge>
                                </div>
                                <CardTitle className="text-lg">Unit {apartment.number}</CardTitle>
                                <CardDescription className="text-sm">
                                  Floor {apartment.floor} • {apartment.size} sq ft
                                </CardDescription>
                              </CardHeader>
                              <CardContent className="pt-0">
                                <div className="space-y-3">
                                  <div className="flex justify-between text-sm">
                                    <span className="text-muted-foreground">Bedrooms:</span>
                                    <span>{apartment.bedrooms}</span>
                                  </div>
                                  <div className="flex justify-between text-sm">
                                    <span className="text-muted-foreground">Bathrooms:</span>
                                    <span>{apartment.bathrooms}</span>
                                  </div>
                                  {apartment.owner && (
                                    <div className="text-sm">
                                      <span className="text-muted-foreground">Owner: </span>
                                      <span>{apartment.owner.name}</span>
                                    </div>
                                  )}
                                  <div className="flex gap-2 pt-2">
                                    <Button variant="outline" size="sm" className="flex-1">
                                      <IconEye className="h-4 w-4 mr-1" />
                                      View
                                    </Button>
                                    <Button variant="outline" size="sm" className="flex-1">
                                      <IconEdit className="h-4 w-4 mr-1" />
                                      Edit
                                    </Button>
                                  </div>
                                </div>
                              </CardContent>
                            </Card>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>

                  {/* Common Areas Tab */}
                  <TabsContent value="common-areas" className="space-y-6">
                    <Card>
                      <CardHeader>
                        <CardTitle>Common Areas Management</CardTitle>
                        <CardDescription>
                          Manage shared facilities and their operating schedules
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                          {building.commonAreas.map((area) => {
                            const IconComponent = getCommonAreaIcon(area.type)
                            return (
                              <Card key={area.id} className="hover:shadow-md transition-shadow">
                                <CardHeader className="pb-3">
                                  <div className="flex items-center justify-between">
                                    <IconComponent className="h-6 w-6 text-muted-foreground" />
                                    <Badge className={getStatusColor(area.status)}>
                                      {area.status}
                                    </Badge>
                                  </div>
                                  <CardTitle className="text-lg">{area.name}</CardTitle>
                                  <CardDescription className="text-sm">
                                    Floor {area.floor} • {area.size} sq ft
                                  </CardDescription>
                                </CardHeader>
                                <CardContent className="pt-0">
                                  <div className="space-y-3">
                                    <div className="flex justify-between text-sm">
                                      <span className="text-muted-foreground">Capacity:</span>
                                      <span>{area.capacity} people</span>
                                    </div>
                                    <div className="flex justify-between text-sm">
                                      <span className="text-muted-foreground">Hours:</span>
                                      <span>{area.operatingHours.open} - {area.operatingHours.close}</span>
                                    </div>
                                    <div className="flex gap-1 flex-wrap">
                                      {area.amenities.slice(0, 2).map((amenity, index) => (
                                        <Badge key={index} variant="outline" className="text-xs">
                                          {amenity}
                                        </Badge>
                                      ))}
                                      {area.amenities.length > 2 && (
                                        <Badge variant="outline" className="text-xs">
                                          +{area.amenities.length - 2}
                                        </Badge>
                                      )}
                                    </div>
                                    <div className="flex gap-2 pt-2">
                                      <Button variant="outline" size="sm" className="flex-1">
                                        <IconEye className="h-4 w-4 mr-1" />
                                        View
                                      </Button>
                                      <Button variant="outline" size="sm" className="flex-1">
                                        <IconEdit className="h-4 w-4 mr-1" />
                                        Edit
                                      </Button>
                                    </div>
                                  </div>
                                </CardContent>
                              </Card>
                            )
                          })}
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>

                  {/* Maintenance Tab */}
                  <TabsContent value="maintenance" className="space-y-6">
                    <Card>
                      <CardHeader>
                        <CardTitle>Maintenance Schedule</CardTitle>
                        <CardDescription>
                          Track maintenance activities and schedules
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div className="flex items-center justify-between p-4 border rounded-lg">
                            <div className="flex items-center gap-3">
                              <IconCalendar className="h-5 w-5 text-muted-foreground" />
                              <div>
                                <p className="font-medium">Last Maintenance</p>
                                <p className="text-sm text-muted-foreground">
                                  {building.maintenanceSchedule.lastMaintenance.toLocaleDateString()}
                                </p>
                              </div>
                            </div>
                            <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300">
                              Completed
                            </Badge>
                          </div>
                          
                          <div className="flex items-center justify-between p-4 border rounded-lg">
                            <div className="flex items-center gap-3">
                              <IconCalendar className="h-5 w-5 text-muted-foreground" />
                              <div>
                                <p className="font-medium">Next Maintenance</p>
                                <p className="text-sm text-muted-foreground">
                                  {building.maintenanceSchedule.nextMaintenance.toLocaleDateString()}
                                </p>
                              </div>
                            </div>
                            <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300">
                              Scheduled
                            </Badge>
                          </div>
                          
                          <div className="flex items-center justify-between p-4 border rounded-lg">
                            <div className="flex items-center gap-3">
                              <IconSettings className="h-5 w-5 text-muted-foreground" />
                              <div>
                                <p className="font-medium">Frequency</p>
                                <p className="text-sm text-muted-foreground capitalize">
                                  {building.maintenanceSchedule.frequency}
                                </p>
                              </div>
                            </div>
                            <Button variant="outline" size="sm">
                              <IconEdit className="h-4 w-4 mr-1" />
                              Update Schedule
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>
                </Tabs>
              </div>
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
} 