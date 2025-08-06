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
import { IconCar, IconHome, IconHeart, IconHammer } from "@tabler/icons-react"
import Link from "next/link"
import { PageBreadcrumbs } from "@/components/ui/page-breadcrumbs"

// Service configuration overview data
const serviceCategories = [
  {
    id: "concierge",
    name: "Concierge Services",
    description: "Valet, luggage, laundry, access cards",
    icon: IconCar,
    totalServices: 4,
    activeServices: 4,
    properties: ["Lana Building", "OBJ Tower"],
    url: "/concierge",
    color: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300"
  },
  {
    id: "restaurants",
    name: "Restaurant Services",
    description: "Dining establishments and menu management",
    icon: IconHome,
    totalServices: 3,
    activeServices: 3,
    properties: ["Lana Building", "OBJ Tower"],
    url: "/restaurants",
    color: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
  },
  {
    id: "wellness",
    name: "Spa & Wellness",
    description: "Spa treatments and wellness programs",
    icon: IconHeart,
    totalServices: 5,
    activeServices: 4,
    properties: ["Lana Building"],
    url: "/wellness",
    color: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300"
  },
  {
    id: "maintenance",
    name: "Maintenance Services",
    description: "Property maintenance and repairs",
    icon: IconHammer,
    totalServices: 6,
    activeServices: 6,
    properties: ["Lana Building", "OBJ Tower"],
    url: "/maintenance",
    color: "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300"
  }
]

export default function ServicesPage() {
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
                      { title: "Service Configuration" },
                    ]}
                  />
                </div>
                
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h1 className="text-3xl font-bold tracking-tight">Service Configuration</h1>
                    <p className="text-muted-foreground">
                      Manage all complimentary service configurations across properties
                    </p>
                  </div>
                  <Button>Add New Service Category</Button>
                </div>

                {/* Service Category Overview Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                  {serviceCategories.map((category) => (
                    <Card key={category.id} className="cursor-pointer hover:shadow-md transition-shadow">
                      <CardHeader className="pb-3">
                        <div className="flex items-center justify-between">
                          <category.icon className="h-8 w-8 text-muted-foreground" />
                          <Badge className={category.color}>
                            {category.activeServices}/{category.totalServices}
                          </Badge>
                        </div>
                        <CardTitle className="text-lg">{category.name}</CardTitle>
                        <CardDescription className="text-sm">
                          {category.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="pt-0">
                        <div className="space-y-2">
                          <div className="text-sm text-muted-foreground">
                            Properties: {category.properties.join(", ")}
                          </div>
                          <Link href={category.url}>
                            <Button 
                              variant="outline" 
                              size="sm" 
                              className="w-full"
                            >
                              Manage Services
                            </Button>
                          </Link>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {/* Property Filter */}
                <div className="flex gap-4 mb-6">
                  <Select defaultValue="all">
                    <SelectTrigger className="w-[200px]">
                      <SelectValue placeholder="Filter by Property" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Properties</SelectItem>
                      <SelectItem value="lana">Lana Building</SelectItem>
                      <SelectItem value="obj">OBJ Tower</SelectItem>
                    </SelectContent>
                  </Select>
                  
                  <Select defaultValue="all">
                    <SelectTrigger className="w-[200px]">
                      <SelectValue placeholder="Filter by Status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Status</SelectItem>
                      <SelectItem value="active">Active</SelectItem>
                      <SelectItem value="inactive">Inactive</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Service Configuration Summary Table */}
                <Card>
                  <CardHeader>
                    <CardTitle>Service Configuration Summary</CardTitle>
                    <CardDescription>
                      Overview of all service configurations across properties
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Service Category</TableHead>
                          <TableHead>Total Services</TableHead>
                          <TableHead>Active Services</TableHead>
                          <TableHead>Properties</TableHead>
                          <TableHead>Service Level</TableHead>
                          <TableHead>Last Updated</TableHead>
                          <TableHead>Actions</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {serviceCategories.map((category) => (
                          <TableRow key={category.id}>
                            <TableCell>
                              <div className="flex items-center gap-3">
                                <category.icon className="h-5 w-5 text-muted-foreground" />
                                <div>
                                  <div className="font-medium">{category.name}</div>
                                  <div className="text-sm text-muted-foreground">{category.description}</div>
                                </div>
                              </div>
                            </TableCell>
                            <TableCell>
                              <Badge variant="outline">{category.totalServices}</Badge>
                            </TableCell>
                            <TableCell>
                              <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300">
                                {category.activeServices}
                              </Badge>
                            </TableCell>
                            <TableCell>
                              <div className="flex gap-1">
                                {category.properties.map((prop) => (
                                  <Badge key={prop} variant="outline" className="text-xs">
                                    {prop}
                                  </Badge>
                                ))}
                              </div>
                            </TableCell>
                            <TableCell>
                              <Badge className="bg-gold-100 text-gold-800 dark:bg-gold-900 dark:text-gold-300">
                                Complimentary
                              </Badge>
                            </TableCell>
                            <TableCell>
                              <span className="text-sm text-muted-foreground">
                                {new Date().toLocaleDateString()}
                              </span>
                            </TableCell>
                            <TableCell>
                              <div className="flex gap-2">
                                <Link href={category.url}>
                                  <Button variant="outline" size="sm">
                                    Configure
                                  </Button>
                                </Link>
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