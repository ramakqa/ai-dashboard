export interface User {
  id: string
  name: string
  email: string
  role: UserRole
  avatar?: string
  property?: string
  status: 'active' | 'inactive'
  lastLogin?: Date
}

export type UserRole = 
  | 'concierge_admin'  // Main asset management admin managing all properties
  | 'property_manager'
  | 'maintenance_team'
  | 'concierge_staff'
  | 'restaurant_admin'
  | 'spa_admin'
  | 'owner'
  | 'family'

export interface Property {
  id: string
  name: string
  address: string
  type: 'apartment' | 'villa' | 'penthouse'
  status: 'active' | 'inactive'
  units: number
  price?: number
  currency?: 'AED' | 'USD'
  conciergeServices?: ConciergeService[]
  restaurants?: RestaurantService[]
  spaServices?: SpaService[]
}

export interface Request {
  id: string
  type: RequestType
  status: RequestStatus
  priority: 'low' | 'medium' | 'high' | 'urgent'
  user: User
  property: Property
  unit: string
  description: string
  images?: string[]
  assignedTo?: User
  createdAt: Date
  updatedAt: Date
  completedAt?: Date
  remarks?: string[]
  serviceId?: string // Reference to specific service configuration
}

export type RequestType = 
  | 'maintenance'
  | 'valet'
  | 'luggage'
  | 'laundry'
  | 'access_card'
  | 'restaurant_booking'
  | 'spa_booking'
  | 'property_inquiry'
  | 'feedback'
  | 'complaint'
  | 'concierge_service'

export type RequestStatus = 
  | 'pending'
  | 'in_progress'
  | 'completed'
  | 'cancelled'

// Service Configuration Types for HNWI (Complimentary Services)
export interface ConciergeService {
  id: string
  name: string
  type: 'valet' | 'luggage' | 'laundry' | 'access_card' | 'guest_services'
  description: string
  isActive: boolean
  properties: string[] // Property IDs where this service is available
  availability?: ServiceAvailability
  staff?: User[]
  // No pricing - all services are complimentary for HNWI
}

export interface RestaurantService {
  id: string
  name: string
  restaurantName: string
  description: string
  isActive: boolean
  properties: string[] // Property IDs where this restaurant is available
  cuisine: string
  menu?: MenuItem[]
  operatingHours?: OperatingHours
  // No pricing - dining is complimentary for HNWI
}

export interface SpaService {
  id: string
  name: string
  spaName: string
  description: string
  isActive: boolean
  properties: string[] // Property IDs where this spa is available
  services: SpaTreatment[]
  therapists?: User[]
  operatingHours?: OperatingHours
  // No pricing - wellness services are complimentary for HNWI
}

export interface ServiceAvailability {
  daysOfWeek: number[] // 0-6 (Sunday-Saturday)
  startTime: string // HH:MM format
  endTime: string // HH:MM format
  maxBookingsPerDay?: number
  advanceBookingDays?: number
}

export interface OperatingHours {
  monday?: { open: string; close: string }
  tuesday?: { open: string; close: string }
  wednesday?: { open: string; close: string }
  thursday?: { open: string; close: string }
  friday?: { open: string; close: string }
  saturday?: { open: string; close: string }
  sunday?: { open: string; close: string }
}

export interface MenuItem {
  id: string
  name: string
  description: string
  category: string
  isAvailable: boolean
  // No price - complimentary dining
}

export interface SpaTreatment {
  id: string
  name: string
  description: string
  duration: number // in minutes
  isAvailable: boolean
  // No price - complimentary wellness services
}

export interface DashboardStats {
  pendingRequests: number
  inProgressRequests: number
  completedRequests: number
  totalUsers: number
  totalProperties: number
  totalRevenue?: number
  growthRate?: number
  // Property-specific stats
  propertyStats?: {
    [propertyId: string]: {
      pendingRequests: number
      inProgressRequests: number
      completedRequests: number
      totalUsers: number
    }
  }
}

export interface Activity {
  id: string
  type: 'request_created' | 'request_updated' | 'request_completed' | 'request_assigned' | 'user_registered' | 'property_added' | 'service_configured' | 'service_updated' | 'feedback_received'
  title: string
  description: string
  timestamp: Date
  user?: User
  request?: Request
  property?: Property
  service?: ConciergeService | RestaurantService | SpaService
}

// Extended request types for specific services
export interface ValetRequest extends Request {
  carDetails: {
    make: string
    model: string
    color: string
    plateNumber: string
  }
  pickupTime: Date
  returnTime?: Date
  location: string
  serviceId: string // Reference to valet service configuration
}

export interface RestaurantBooking extends Request {
  restaurantId: string // Reference to restaurant service
  date: Date
  time: string
  guests: number
  specialRequests?: string
  menuItems?: string[] // Selected menu items
}

export interface SpaBooking extends Request {
  spaId: string // Reference to spa service
  treatmentId: string // Specific treatment
  date: Date
  time: string
  therapistId?: string
  specialRequests?: string
} 