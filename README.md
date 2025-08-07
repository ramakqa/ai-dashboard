# Omniyat Asset Management Admin Portal

A comprehensive concierge-level admin portal for managing luxury residential properties, services, and resident requests across all Omniyat properties. Built with Next.js 14, TypeScript, and shadcn/ui components.

## 🏗️ Project Overview

The Omniyat Asset Management Admin Portal is designed for **concierge-level management** of all properties holistically, specifically tailored for **High Net Worth Individuals (HNWI)** with complimentary services. It provides centralized control over multiple properties while allowing granular filtering and service configuration management.

## ✨ Key Features

### 🎯 **Concierge-Level Management**
- **Holistic Property View**: Manage all properties from a single dashboard
- **Property Filtering**: Filter requests, services, and data by specific properties
- **Centralized Request Management**: All requests (maintenance, concierge, spa, restaurant) come through one system
- **Service Configuration**: Configure and manage complimentary services across properties

### 📊 **Dashboard & Analytics**
- **Unified Dashboard**: Overview of ALL properties combined
- **Property-Specific Stats**: Individual property metrics with filtering
- **Real-time Activity Feed**: Cross-property activity monitoring
- **Quick Actions**: Common tasks across all properties

### 🔧 **Service Management Architecture**
- **Request Management**: Central hub for ALL requests across properties
- **Service Configuration**: Individual service setup and management
  - **Concierge Services** → Configure Valet, Luggage, Laundry, Access Cards
  - **Restaurant Services** → Configure Restaurants, Menus, Operating Hours
  - **Spa Services** → Configure Spa Treatments, Therapists, Availability
  - **Maintenance** → Configure Maintenance Categories, Staff Assignment

### 🏢 **Property Management**
- **Multi-Property Support**: Lana Building, OBJ Tower, and more
- **Property-Specific Services**: Different services available per property
- **Unified User Management**: Residents across all properties
- **Cross-Property Analytics**: Compare performance across properties

### 💎 **HNWI-Focused Features**
- **Complimentary Services**: All concierge services are free for residents
- **Premium Service Quality**: Focus on excellence rather than pricing
- **Personalized Experience**: Tailored services for high-net-worth individuals
- **Discrete Service Delivery**: Privacy-focused service management

## 🛠️ Technology Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Icons**: Tabler Icons
- **Charts**: Recharts (for future analytics)
- **State Management**: React Context + Zustand (planned)
- **Database**: Prisma + PostgreSQL (planned)
- **Authentication**: NextAuth.js (planned)

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd ai-dashboard
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
```bash
npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
ai-dashboard/
├── src/
│   ├── app/
│   │   ├── dashboard/          # Main concierge dashboard
│   │   ├── requests/           # Central request management
│   │   ├── concierge/          # Concierge service configuration
│   │   ├── restaurants/        # Restaurant service configuration
│   │   ├── wellness/           # Spa service configuration
│   │   ├── maintenance/        # Maintenance management
│   │   ├── properties/         # Property management
│   │   ├── feedback/           # Feedback & complaints
│   │   ├── users/              # User management
│   │   └── settings/           # System settings
│   ├── components/
│   │   ├── ui/                 # shadcn/ui components
│   │   ├── layout/             # Layout components
│   │   └── dashboard/          # Dashboard-specific components
│   ├── types/                  # TypeScript type definitions
│   └── lib/                    # Utility functions
├── public/                     # Static assets
└── docs/                       # Documentation
```

## 👥 User Roles & Permissions

### Concierge Admin (Primary Role)
- **Full system access** across all properties
- **Service configuration** management
- **Property management** and oversight
- **User management** across properties
- **Analytics and reporting**

### Property Manager
- **Property-specific operations**
- **Request management** for assigned properties
- **Service oversight** within properties
- **Feedback handling**

### Maintenance Team
- **Maintenance request handling**
- **Task assignment** across properties
- **Equipment management**

### Concierge Staff
- **Service delivery** based on configurations
- **Request fulfillment**
- **Guest services**

### Restaurant Admin
- **Restaurant service configuration**
- **Menu management**
- **Reservation handling**

### Spa Admin
- **Spa service configuration**
- **Appointment management**
- **Therapist assignment**

## 🏢 Property Management

### Current Properties
- **Lana Building** (Dubai Marina)
- **OBJ Tower** (Business Bay)

### Property Features
- **Individual service configurations**
- **Property-specific availability**
- **Custom service schedules**
- **Dedicated staff assignments**

## 🔧 Service Configuration System

### Concierge Services (Complimentary)
- **Valet Parking**: 24/7 service, car wash, detailing
- **Luggage Handling**: Pickup, delivery, storage
- **Laundry Services**: Express, dry cleaning
- **Access Card Management**: Guest access, temporary cards

### Restaurant Services (Complimentary)
- **Restaurant Configuration**: Operating hours, cuisine types
- **Menu Management**: Items, availability
- **Reservation System**: Booking management, capacity

### Spa & Wellness (Complimentary)
- **Treatment Configuration**: Services, duration
- **Therapist Management**: Staff assignment, specialties
- **Appointment System**: Booking, availability, scheduling

## 📊 Dashboard Features

### Holistic Overview
- **Cross-property statistics**
- **Unified request management**
- **Property comparison metrics**
- **Service performance analytics**

### Filtering Capabilities
- **Property-based filtering**
- **Service type filtering**
- **Status-based filtering**
- **Date range filtering**

### Quick Actions
- **New Request Creation**
- **Service Configuration**
- **Staff Assignment**
- **Property Management**

## 🎨 Design System

The portal uses a consistent design system based on shadcn/ui components with:
- **Color Scheme**: Neutral base with accent colors
- **Typography**: Clean, readable fonts
- **Spacing**: Consistent spacing scale
- **Components**: Reusable UI components
- **Responsive**: Mobile-first design approach

## 📱 Responsive Design

The admin portal is fully responsive and works seamlessly on:
- Desktop computers
- Tablets
- Mobile devices

## 🔒 Security Features (Planned)

- Role-based access control
- JWT authentication
- API rate limiting
- Data encryption
- Audit logging

## 🚧 Development Roadmap

### Phase 1: Core Asset Management Dashboard ✅
- [x] Holistic dashboard layout
- [x] Property filtering system
- [x] Cross-property statistics
- [x] Activity feed across properties
- [x] Quick actions

### Phase 2: Request Management ✅
- [x] Centralized request system
- [x] Property-based filtering
- [x] Service configuration references
- [x] Status tracking

### Phase 3: Service Configuration ✅
- [x] Concierge service management
- [x] HNWI complimentary services
- [x] Availability scheduling
- [x] Staff assignment

### Phase 4: Advanced Features (Planned)
- [ ] Real-time notifications
- [ ] Advanced analytics and charts
- [ ] Export functionality
- [ ] Mobile app integration
- [ ] API integration

### Phase 5: Enterprise Features (Planned)
- [ ] Multi-tenant architecture
- [ ] Advanced reporting
- [ ] Third-party integrations
- [ ] Automated workflows

## 🎯 **Tab Structure Analysis & Optimization**

### **1. Dashboard (Most Used)**
**Purpose**: Holistic overview and quick access
**Content**:
- Cross-property statistics
- Recent activity feed
- Quick action buttons
- Property performance comparison
- Service utilization metrics

**Optimization**:
- Real-time data updates
- Customizable widgets
- Quick filters for common views
- Performance metrics dashboard

### **2. Request Management (High Frequency)**
**Purpose**: Central hub for all service requests
**Content**:
- All requests across properties
- Advanced filtering and search
- Request assignment and tracking
- Service configuration references
- Bulk operations

**Optimization**:
- Smart request routing
- Automated assignment based on staff availability
- Request templates for common services
- Integration with service configurations

### **3. Concierge Services (High Frequency)**
**Purpose**: Manage complimentary concierge services
**Content**:
- Service configurations
- Staff assignment
- Availability management
- Service quality metrics
- Service templates

**Optimization**:
- Service performance analytics
- Staff workload balancing
- Service quality monitoring
- Automated service scheduling

### **4. Properties (Medium Frequency)**
**Purpose**: Property management and oversight
**Content**:
- Property listings and details
- Unit management
- Property-specific services
- Property performance metrics
- Property comparison tools

**Optimization**:
- Property performance benchmarking
- Unit availability tracking
- Property-specific analytics
- Integration with external property systems

### **5. Restaurant Services (Medium Frequency)**
**Purpose**: Manage complimentary dining services
**Content**:
- Restaurant configurations
- Menu management
- Reservation system
- Operating hours
- Staff assignment

**Optimization**:
- Menu rotation planning
- Reservation optimization
- Dietary preference tracking
- Integration with external restaurant systems

### **6. Spa & Wellness (Medium Frequency)**
**Purpose**: Manage complimentary wellness services
**Content**:
- Spa service configurations
- Treatment management
- Therapist assignment
- Appointment scheduling
- Wellness programs

**Optimization**:
- Treatment recommendation engine
- Therapist availability optimization
- Wellness program tracking
- Integration with health systems

### **7. Maintenance (Lower Frequency)**
**Purpose**: Property maintenance management
**Content**:
- Maintenance requests
- Preventive maintenance schedules
- Equipment management
- Vendor management
- Maintenance history

**Optimization**:
- Predictive maintenance
- Vendor performance tracking
- Equipment lifecycle management
- Maintenance cost analytics

### **8. Feedback & Complaints (Lower Frequency)**
**Purpose**: Guest feedback and complaint management
**Content**:
- Feedback collection
- Complaint tracking
- Resolution workflows
- Satisfaction metrics
- Improvement suggestions

**Optimization**:
- Sentiment analysis
- Automated response suggestions
- Feedback trend analysis
- Service improvement recommendations

### **9. User Management (Low Frequency)**
**Purpose**: Resident and staff management
**Content**:
- Resident profiles
- Staff management
- Role assignments
- Access control
- User activity tracking

**Optimization**:
- User behavior analytics
- Automated role assignment
- Access pattern analysis
- Integration with HR systems

### **10. Settings (Low Frequency)**
**Purpose**: System configuration and administration
**Content**:
- System preferences
- Integration settings
- Notification configurations
- Security settings
- Backup and recovery

**Optimization**:
- Configuration templates
- Automated backups
- Security monitoring
- System health monitoring

## 🔄 **Further Optimization Recommendations**

### **Performance Optimizations**
1. **Caching Strategy**: Implement Redis for session and data caching
2. **Database Optimization**: Use database indexing and query optimization
3. **Image Optimization**: Implement lazy loading and image compression
4. **Code Splitting**: Implement dynamic imports for better load times

### **User Experience Enhancements**
1. **Keyboard Shortcuts**: Add keyboard navigation for power users
2. **Bulk Operations**: Implement bulk actions for common tasks
3. **Advanced Search**: Add full-text search with filters
4. **Customizable Dashboard**: Allow users to customize their dashboard layout

### **Integration Opportunities**
1. **Property Management Systems**: Integrate with external PMS
2. **Payment Systems**: For future premium services
3. **Communication Platforms**: Integrate with messaging systems
4. **Analytics Platforms**: Connect with business intelligence tools

### **AI/ML Enhancements**
1. **Predictive Analytics**: Predict service demand and staff needs
2. **Smart Routing**: Automatically route requests to best available staff
3. **Quality Monitoring**: Monitor service quality and satisfaction
4. **Personalization**: Personalize services based on resident preferences

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Support

For support and questions:
- Email: support@omniyat.com
- Documentation: [docs.omniyat.com](https://docs.omniyat.com)
- Issues: [GitHub Issues](https://github.com/omniyat/admin-portal/issues)

## 🙏 Acknowledgments

- [shadcn/ui](https://ui.shadcn.com/) for the excellent component library
- [Tabler Icons](https://tabler-icons.io/) for the beautiful icons
- [Next.js](https://nextjs.org/) for the amazing framework
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
