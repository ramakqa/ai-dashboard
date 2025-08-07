"use client"

import * as React from "react"
import {
  IconBuilding,
  IconCar,
  IconClipboardList,
  IconDashboard,
  IconHeart,
  IconHome,
  IconMessage,
  IconSearch,
  IconSettings,
  IconTools,
  IconUsers,
  IconHammer,
  IconPlus,
  IconSettings as IconCog,
  IconActivity,
} from "@tabler/icons-react"

import { NavMain } from "./nav-main"
import { NavSecondary } from "./nav-secondary"
import { NavUser } from "./nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { UserRole } from "@/types"

interface AppSidebarProps extends React.ComponentProps<typeof Sidebar> {
  userRole?: UserRole
}

// Hierarchical navigation structure with proper parent-child relationships
const navigationItems = {
  concierge_admin: [
    // HIGH FREQUENCY - Daily Operations
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: IconDashboard,
    },
    
    // REQUEST MANAGEMENT SECTION - Parent with children
    {
      title: "Request Management",
      url: "/requests",
      icon: IconClipboardList,
      children: [
        {
          title: "Pending Requests",
          url: "/requests/pending",
          icon: IconClipboardList,
        },
        {
          title: "In Progress",
          url: "/requests/in-progress",
          icon: IconClipboardList,
        },
        {
          title: "Completed",
          url: "/requests/completed",
          icon: IconClipboardList,
        },
      ]
    },
    
    // SERVICE CONFIGURATION SECTION - Parent with children
    {
      title: "Service Configuration",
      url: "/services",
      icon: IconCog,
      children: [
        {
          title: "Concierge Services",
          url: "/concierge",
          icon: IconCar,
        },
        {
          title: "Restaurant Services",
          url: "/restaurants",
          icon: IconHome,
        },
        {
          title: "Spa & Wellness",
          url: "/wellness",
          icon: IconHeart,
        },
        {
          title: "Maintenance Services",
          url: "/maintenance",
          icon: IconHammer,
        },
      ]
    },
    
    // PROPERTY MANAGEMENT
    {
      title: "Properties",
      url: "/properties",
      icon: IconBuilding,
      children: [
        {
          title: "Buildings",
          url: "/properties",
          icon: IconBuilding,
        },
        {
          title: "Apartments",
          url: "/properties?view=apartments",
          icon: IconHome,
        },
      ]
    },
    
    // ACTIVITY & MONITORING
    {
      title: "Activity",
      url: "/activity",
      icon: IconActivity,
    },
    
    // ADMINISTRATIVE
    {
      title: "Feedback & Complaints",
      url: "/feedback",
      icon: IconMessage,
    },
    {
      title: "User Management",
      url: "/users",
      icon: IconUsers,
    },
    {
      title: "Settings",
      url: "/settings",
      icon: IconSettings,
    },
  ],
  property_manager: [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: IconDashboard,
    },
    {
      title: "Request Management",
      url: "/requests",
      icon: IconClipboardList,
      children: [
        {
          title: "Pending Requests",
          url: "/requests/pending",
          icon: IconClipboardList,
        },
        {
          title: "In Progress",
          url: "/requests/in-progress",
          icon: IconClipboardList,
        },
        {
          title: "Completed",
          url: "/requests/completed",
          icon: IconClipboardList,
        },
      ]
    },
    {
      title: "Properties",
      url: "/properties",
      icon: IconBuilding,
      children: [
        {
          title: "Buildings",
          url: "/properties",
          icon: IconBuilding,
        },
        {
          title: "Apartments",
          url: "/properties?view=apartments",
          icon: IconHome,
        },
      ]
    },
    {
      title: "Maintenance Services",
      url: "/maintenance",
      icon: IconHammer,
    },
    {
      title: "Activity",
      url: "/activity",
      icon: IconActivity,
    },
    {
      title: "Feedback & Complaints",
      url: "/feedback",
      icon: IconMessage,
    },
  ],
  maintenance_team: [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: IconDashboard,
    },
    {
      title: "Maintenance Requests",
      url: "/maintenance",
      icon: IconHammer,
    },
    {
      title: "Tools & Equipment",
      url: "/tools",
      icon: IconTools,
    },
    {
      title: "Activity",
      url: "/activity",
      icon: IconActivity,
    },
  ],
  concierge_staff: [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: IconDashboard,
    },
    {
      title: "Request Management",
      url: "/requests",
      icon: IconClipboardList,
      children: [
        {
          title: "Pending Requests",
          url: "/requests/pending",
          icon: IconClipboardList,
        },
        {
          title: "In Progress",
          url: "/requests/in-progress",
          icon: IconClipboardList,
        },
        {
          title: "Completed",
          url: "/requests/completed",
          icon: IconClipboardList,
        },
      ]
    },
    {
      title: "Concierge Services",
      url: "/concierge",
      icon: IconCar,
      children: [
        {
          title: "Valet Parking",
          url: "/concierge/valet",
          icon: IconCar,
        },
        {
          title: "Luggage Services",
          url: "/concierge/luggage",
          icon: IconClipboardList,
        },
      ]
    },
    {
      title: "Activity",
      url: "/activity",
      icon: IconActivity,
    },
  ],
  restaurant_admin: [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: IconDashboard,
    },
    {
      title: "Request Management",
      url: "/requests",
      icon: IconClipboardList,
      children: [
        {
          title: "Pending Requests",
          url: "/requests/pending",
          icon: IconClipboardList,
        },
        {
          title: "In Progress",
          url: "/requests/in-progress",
          icon: IconClipboardList,
        },
        {
          title: "Completed",
          url: "/requests/completed",
          icon: IconClipboardList,
        },
      ]
    },
    {
      title: "Restaurant Services",
      url: "/restaurants",
      icon: IconHome,
      children: [
        {
          title: "Menu Management",
          url: "/restaurants/menu",
          icon: IconClipboardList,
        },
      ]
    },
    {
      title: "Activity",
      url: "/activity",
      icon: IconActivity,
    },
  ],
  spa_admin: [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: IconDashboard,
    },
    {
      title: "Request Management",
      url: "/requests",
      icon: IconClipboardList,
      children: [
        {
          title: "Pending Requests",
          url: "/requests/pending",
          icon: IconClipboardList,
        },
        {
          title: "In Progress",
          url: "/requests/in-progress",
          icon: IconClipboardList,
        },
        {
          title: "Completed",
          url: "/requests/completed",
          icon: IconClipboardList,
        },
      ]
    },
    {
      title: "Spa & Wellness",
      url: "/wellness",
      icon: IconHeart,
      children: [
        {
          title: "Appointments",
          url: "/wellness/appointments",
          icon: IconClipboardList,
        },
      ]
    },
    {
      title: "Activity",
      url: "/activity",
      icon: IconActivity,
    },
  ],
}

const secondaryItems = [
  {
    title: "Settings",
    url: "/settings",
    icon: IconSettings,
  },
  {
    title: "Search",
    url: "/search",
    icon: IconSearch,
  },
]

const data = {
  user: {
    name: "Asset Management Admin",
    email: "admin@omniyat.com",
    avatar: "/avatars/admin.jpg",
  },
}

export function AppSidebar({ userRole = "concierge_admin", ...props }: AppSidebarProps) {
  const items = navigationItems[userRole] || navigationItems.concierge_admin

  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="data-[slot=sidebar-menu-button]:!p-1.5"
            >
              <a href="/dashboard">
                <IconBuilding className="!size-5" />
                <span className="text-base font-semibold">Omniyat Asset Management</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={items} />
        <NavSecondary items={secondaryItems} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  )
} 