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
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { PageBreadcrumbs } from "@/components/ui/page-breadcrumbs"
import { Property } from "@/types"
import Link from "next/link"
import { 
  IconBuilding, 
  IconHome, 
  IconUsers, 
  IconSearch, 
  IconPlus,
  IconMapPin,
  IconSettings,
  IconEye,
  IconEdit,
  IconTrash,
  IconChevronDown
} from "@tabler/icons-react"

// Extended Property interface for detailed management
interface Building extends Property {
  totalUnits: number
  occupiedUnits: number
  commonAreas: CommonArea[]
  amenities: string[]
  managementContact: {
    name: string
    email: string
    phone: string
  }
  maintenanceSchedule: {
    frequency: 'daily' | 'weekly' | 'monthly' | 'quarterly'
    lastMaintenance: Date
    nextMaintenance: Date
  }
}

interface Apartment {
  id: string
  number: string
  floor: number
  type: 'studio' | '1BR' | '2BR' | '3BR' | 'penthouse'
  size: number // sq ft
  bedrooms: number
  bathrooms: number
  status: 'occupied' | 'vacant' | 'maintenance' | 'reserved'
  owner?: {
    id: string
    name: string
    email: string
    phone: string
  }
  tenants?: {
    id: string
    name: string
    email: string
    phone: string
    leaseStart: Date
    leaseEnd: Date
  }[]
  amenities: string[]
  lastInspection: Date
  nextInspection: Date
}

interface CommonArea {
  id: string
  name: string
  type: 'lobby' | 'gym' | 'pool' | 'garden' | 'parking' | 'restaurant' | 'spa' | 'conference' | 'playground' | 'lounge'
  floor?: number
  size: number // sq ft
  capacity: number
  status: 'active' | 'maintenance' | 'closed'
  operatingHours: {
    open: string
    close: string
    days: string[]
  }
  amenities: string[]
  maintenanceSchedule: {
    frequency: 'daily' | 'weekly' | 'monthly'
    lastMaintenance: Date
    nextMaintenance: Date
  }
  bookings: {
    id: string
    user: string
    date: Date
    time: string
    duration: number
    purpose: string
  }[]
}

// Sample data
const sampleBuildings: Building[] = [
  {
    id: "lana-building",
    name: "Lana Building",
    address: "Dubai Marina, Dubai, UAE",
    type: "apartment",
    status: "active",
    units: 200,
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
        amenities: ["Concierge Desk", "Seating Area", "Security"],
        maintenanceSchedule: {
          frequency: "daily",
          lastMaintenance: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000),
          nextMaintenance: new Date(Date.now() + 1 * 24 * 60 * 60 * 1000)
        },
        bookings: []
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
        amenities: ["Pool Towels", "Lifeguard", "Shower Facilities"],
        maintenanceSchedule: {
          frequency: "daily",
          lastMaintenance: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000),
          nextMaintenance: new Date(Date.now() + 1 * 24 * 60 * 60 * 1000)
        },
        bookings: []
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
        amenities: ["Cardio Equipment", "Weight Training", "Yoga Studio", "Personal Trainers"],
        maintenanceSchedule: {
          frequency: "weekly",
          lastMaintenance: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000),
          nextMaintenance: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000)
        },
        bookings: []
      }
    ]
  },
  {
    id: "obj-tower",
    name: "OBJ Tower",
    address: "Business Bay, Dubai, UAE",
    type: "apartment",
    status: "active",
    units: 150,
    totalUnits: 150,
    occupiedUnits: 142,
    amenities: ["Pool", "Gym", "Business Center", "Restaurant", "Concierge", "Valet Parking"],
    managementContact: {
      name: "Fatima Al Zahra",
      email: "fatima@omniyat.com",
      phone: "+971 50 987 6543"
    },
    maintenanceSchedule: {
      frequency: "weekly",
      lastMaintenance: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000),
      nextMaintenance: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000)
    },
    commonAreas: [
      {
        id: "obj-lobby",
        name: "Main Lobby",
        type: "lobby",
        floor: 1,
        size: 2000,
        capacity: 40,
        status: "active",
        operatingHours: {
          open: "00:00",
          close: "23:59",
          days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
        },
        amenities: ["Concierge Desk", "Business Lounge", "Security"],
        maintenanceSchedule: {
          frequency: "daily",
          lastMaintenance: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000),
          nextMaintenance: new Date(Date.now() + 1 * 24 * 60 * 60 * 1000)
        },
        bookings: []
      }
    ]
  }
]

const sampleApartments: Apartment[] = [
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
      id: "owner-1",
      name: "John Doe",
      email: "john@example.com",
      phone: "+971 50 111 1111"
    },
    tenants: [
      {
        id: "tenant-1",
        name: "John Doe",
        email: "john@example.com",
        phone: "+971 50 111 1111",
        leaseStart: new Date("2024-01-01"),
        leaseEnd: new Date("2024-12-31")
      }
    ],
    amenities: ["Balcony", "Sea View", "Fully Furnished"],
    lastInspection: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000),
    nextInspection: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000)
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
      id: "owner-2",
      name: "Sarah Ahmed",
      email: "sarah@example.com",
      phone: "+971 50 222 2222"
    },
    tenants: [
      {
        id: "tenant-2",
        name: "Sarah Ahmed",
        email: "sarah@example.com",
        phone: "+971 50 222 2222",
        leaseStart: new Date("2024-02-01"),
        leaseEnd: new Date("2025-01-31")
      }
    ],
    amenities: ["Private Pool", "Terrace", "Panoramic View", "Private Elevator"],
    lastInspection: new Date(Date.now() - 15 * 24 * 60 * 60 * 1000),
    nextInspection: new Date(Date.now() + 45 * 24 * 60 * 60 * 1000)
  }
]

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
    case "closed":
      return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300"
    default:
      return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300"
  }
}



export default function PropertiesPage({
  searchParams,
}: {
  searchParams?: { view?: string }
}) {
  const currentView = searchParams?.view || "buildings"
  
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
                      { title: "Properties" },
                    ]}
                  />
                </div>
                
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h1 className="text-3xl font-bold tracking-tight">Property Management</h1>
                    <p className="text-muted-foreground">
                      Manage buildings, apartments, and common areas across all Omniyat properties
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline">
                      <IconPlus className="mr-2 h-4 w-4" />
                      Add Building
                    </Button>
                    <Button>
                      <IconPlus className="mr-2 h-4 w-4" />
                      Add Apartment
                    </Button>
                  </div>
                </div>

                {/* Property Overview Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                  <Card>
                    <CardHeader className="pb-3">
                      <div className="flex items-center justify-between">
                        <IconBuilding className="h-8 w-8 text-muted-foreground" />
                        <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300">
                          {sampleBuildings.length}
                        </Badge>
                      </div>
                      <CardTitle className="text-lg">Total Buildings</CardTitle>
                      <CardDescription className="text-sm">
                        Active properties managed
                      </CardDescription>
                    </CardHeader>
                  </Card>

                  <Card>
                    <CardHeader className="pb-3">
                      <div className="flex items-center justify-between">
                        <IconHome className="h-8 w-8 text-muted-foreground" />
                        <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300">
                          {sampleBuildings.reduce((sum, building) => sum + building.totalUnits, 0)}
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
                        <Badge className="bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300">
                          {sampleBuildings.reduce((sum, building) => sum + building.occupiedUnits, 0)}
                        </Badge>
                      </div>
                      <CardTitle className="text-lg">Occupied Units</CardTitle>
                      <CardDescription className="text-sm">
                        Currently occupied residences
                      </CardDescription>
                    </CardHeader>
                  </Card>

                  <Card>
                    <CardHeader className="pb-3">
                      <div className="flex items-center justify-between">
                        <IconMapPin className="h-8 w-8 text-muted-foreground" />
                        <Badge className="bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300">
                          {sampleBuildings.reduce((sum, building) => sum + building.commonAreas.length, 0)}
                        </Badge>
                      </div>
                      <CardTitle className="text-lg">Common Areas</CardTitle>
                      <CardDescription className="text-sm">
                        Shared facilities and amenities
                      </CardDescription>
                    </CardHeader>
                  </Card>
                </div>

                {/* Property Type Selector */}
                <div className="mb-6">
                  <Select defaultValue={currentView}>
                    <SelectTrigger className="w-[200px]">
                      <SelectValue placeholder="Select Property Type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="buildings">Buildings</SelectItem>
                      <SelectItem value="apartments">Apartments</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {currentView === "buildings" ? (
                  /* Buildings View */
                  <Card>
                    <CardHeader>
                      <CardTitle>Building Management</CardTitle>
                      <CardDescription>
                        Overview of all buildings and their key metrics
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead>Building</TableHead>
                            <TableHead>Address</TableHead>
                            <TableHead>Units</TableHead>
                            <TableHead>Occupancy</TableHead>
                            <TableHead>Management</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead>Actions</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {sampleBuildings.map((building) => (
                            <TableRow key={building.id}>
                              <TableCell>
                                <div>
                                  <div className="font-medium">{building.name}</div>
                                  <div className="text-sm text-muted-foreground">
                                    {building.amenities.slice(0, 3).join(", ")}
                                  </div>
                                </div>
                              </TableCell>
                              <TableCell>{building.address}</TableCell>
                              <TableCell>
                                <div>
                                  <div className="font-medium">{building.totalUnits}</div>
                                  <div className="text-sm text-muted-foreground">
                                    Total units
                                  </div>
                                </div>
                              </TableCell>
                              <TableCell>
                                <div>
                                  <div className="font-medium">{building.occupiedUnits}</div>
                                  <div className="text-sm text-muted-foreground">
                                    {Math.round((building.occupiedUnits / building.totalUnits) * 100)}% occupied
                                  </div>
                                </div>
                              </TableCell>
                              <TableCell>
                                <div>
                                  <div className="font-medium">{building.managementContact.name}</div>
                                  <div className="text-sm text-muted-foreground">
                                    {building.managementContact.email}
                                  </div>
                                </div>
                              </TableCell>
                              <TableCell>
                                <Badge className={getStatusColor(building.status)}>
                                  {building.status}
                                </Badge>
                              </TableCell>
                              <TableCell>
                                <div className="flex gap-2">
                                  <Button variant="outline" size="sm" asChild>
                                    <Link href={`/properties/${building.id}`}>
                                      <IconEye className="h-4 w-4" />
                                    </Link>
                                  </Button>
                                  <Button variant="outline" size="sm">
                                    <IconEdit className="h-4 w-4" />
                                  </Button>
                                  <Button variant="outline" size="sm">
                                    <IconSettings className="h-4 w-4" />
                                  </Button>
                                </div>
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </CardContent>
                  </Card>
                ) : (
                  /* Apartments View */
                  <Card>
                    <CardHeader>
                      <CardTitle>Apartment Management</CardTitle>
                      <CardDescription>
                        Detailed view of all apartments across all buildings
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead>Unit</TableHead>
                            <TableHead>Building</TableHead>
                            <TableHead>Type</TableHead>
                            <TableHead>Size</TableHead>
                            <TableHead>Owner</TableHead>
                            <TableHead>Tenants</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead>Actions</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {sampleApartments.map((apartment) => (
                            <TableRow key={apartment.id}>
                              <TableCell>
                                <div>
                                  <div className="font-medium">{apartment.number}</div>
                                  <div className="text-sm text-muted-foreground">
                                    Floor {apartment.floor}
                                  </div>
                                </div>
                              </TableCell>
                              <TableCell>Lana Building</TableCell>
                              <TableCell>
                                <Badge variant="outline">
                                  {apartment.type} • {apartment.bedrooms}BR
                                </Badge>
                              </TableCell>
                              <TableCell>
                                <div>
                                  <div className="font-medium">{apartment.size} sq ft</div>
                                  <div className="text-sm text-muted-foreground">
                                    {apartment.bathrooms} bathrooms
                                  </div>
                                </div>
                              </TableCell>
                              <TableCell>
                                {apartment.owner ? (
                                  <div>
                                    <div className="font-medium">{apartment.owner.name}</div>
                                    <div className="text-sm text-muted-foreground">
                                      {apartment.owner.email}
                                    </div>
                                  </div>
                                ) : (
                                  <span className="text-muted-foreground">No owner</span>
                                )}
                              </TableCell>
                              <TableCell>
                                {apartment.tenants && apartment.tenants.length > 0 ? (
                                  <div>
                                    <div className="font-medium">{apartment.tenants[0].name}</div>
                                    <div className="text-sm text-muted-foreground">
                                      {apartment.tenants.length} tenant(s)
                                    </div>
                                  </div>
                                ) : (
                                  <span className="text-muted-foreground">No tenants</span>
                                )}
                              </TableCell>
                              <TableCell>
                                <Badge className={getStatusColor(apartment.status)}>
                                  {apartment.status}
                                </Badge>
                              </TableCell>
                              <TableCell>
                                <div className="flex gap-2">
                                  <Button variant="outline" size="sm">
                                    <IconEye className="h-4 w-4" />
                                  </Button>
                                  <Button variant="outline" size="sm">
                                    <IconEdit className="h-4 w-4" />
                                  </Button>
                                  <Button variant="outline" size="sm">
                                    <IconSettings className="h-4 w-4" />
                                  </Button>
                                </div>
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </CardContent>
                  </Card>
                )}
              </div>
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
} 