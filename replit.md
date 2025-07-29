# FourSight - AI-Powered Website Builder

## Overview

FourSight is a modern, responsive landing page for an AI-powered website building service targeting entrepreneurs and small businesses. The application features a React frontend with comprehensive component library (shadcn/ui), custom SVG logo design, and an Express.js backend with newsletter subscription functionality.

## Recent Changes

- **January 29, 2025**: Configured project as fully static website for GitHub Pages deployment
- Added custom pricing calculator with instant cost estimates based on user requirements
- Converted all forms (contact, newsletter, pricing) to use mailto links for static deployment
- Updated navigation structure to About Us, Contact Us, and Pricing sections
- Rebranded from SiteForge to FourSight with custom logo design
- Created About Us section highlighting company values and mission
- Built Contact Us section with form functionality and contact information
- Removed all backend API dependencies for complete static hosting compatibility

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for client-side routing
- **State Management**: TanStack Query (React Query) for server state management
- **UI Framework**: shadcn/ui components built on Radix UI primitives
- **Styling**: Tailwind CSS with CSS variables for theming
- **Build Tool**: Vite for development and production builds
- **Animations**: Framer Motion for smooth animations and transitions

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **Database ORM**: Drizzle ORM for type-safe database operations
- **Database**: PostgreSQL (configured for Neon Database)
- **Session Storage**: PostgreSQL session storage with connect-pg-simple
- **API Design**: RESTful API with JSON responses

### Key Components

#### Frontend Components
- **Landing Page**: Marketing website with hero section, about us, contact form, and pricing
- **About Section**: Company story, values, and mission with animated content
- **Contact Section**: Professional contact form with company information
- **UI Components**: Complete set of accessible components including forms, navigation, dialogs, and data display
- **Static Site Configuration**: Optimized for GitHub Pages deployment
- **Responsive Design**: Mobile-first approach with responsive layouts

#### Backend Services
- **Route Management**: Centralized route registration system
- **Storage Layer**: Abstracted storage interface with in-memory implementation (ready for database integration)
- **Newsletter Service**: Email subscription functionality with validation
- **Error Handling**: Centralized error handling with proper HTTP status codes

#### Database Schema
- **Users Table**: User authentication and profile management
- **Newsletters Table**: Email subscription tracking with timestamps
- **Schema Validation**: Zod integration for runtime type checking

### Data Flow

1. **Client Requests**: Frontend makes HTTP requests using fetch API through TanStack Query
2. **API Layer**: Express.js handles routing and request processing
3. **Business Logic**: Controllers process requests and interact with storage layer
4. **Data Storage**: Drizzle ORM manages database operations with type safety
5. **Response Handling**: Structured JSON responses with proper error handling

### External Dependencies

#### Frontend Dependencies
- **React Ecosystem**: React, React DOM, React Query for state management
- **UI Libraries**: Radix UI primitives, Lucide React icons, Framer Motion
- **Form Handling**: React Hook Form with Hookform Resolvers
- **Styling**: Tailwind CSS, Class Variance Authority for component variants
- **Date Handling**: date-fns for date manipulation
- **Carousel**: Embla Carousel for image/content carousels

#### Backend Dependencies
- **Database**: Neon Database serverless PostgreSQL
- **ORM**: Drizzle ORM with PostgreSQL adapter
- **Validation**: Zod for schema validation
- **Session Management**: Express session with PostgreSQL storage
- **Development**: tsx for TypeScript execution, esbuild for production builds

#### Development Tools
- **Build System**: Vite with React plugin and TypeScript support
- **Replit Integration**: Cartographer and runtime error overlay for development
- **Database Management**: Drizzle Kit for migrations and schema management

### Deployment Strategy

#### Development Environment
- **Hot Reload**: Vite development server with HMR
- **TypeScript**: Real-time type checking and compilation
- **Database**: Development database with auto-migration support
- **Error Handling**: Runtime error overlay for debugging

#### Production Build
- **Frontend**: Vite builds optimized React application to `dist/public`
- **Backend**: esbuild compiles TypeScript server to `dist/index.js`
- **Static Assets**: Frontend serves from Express in production
- **Database**: Production PostgreSQL with migration support

#### Key Architectural Decisions

1. **Monorepo Structure**: Client, server, and shared code in single repository for easier development and deployment
2. **Type Safety**: End-to-end TypeScript with shared types between frontend and backend
3. **Database Strategy**: Drizzle ORM chosen for type safety and better developer experience over traditional ORMs
4. **Component Architecture**: shadcn/ui provides consistent, accessible components with customization flexibility
5. **State Management**: TanStack Query handles server state, eliminating need for global state management
6. **Build Strategy**: Separate optimization for client and server code with appropriate bundling strategies

#### Performance Considerations
- **Code Splitting**: Vite automatically splits code for optimal loading
- **Image Optimization**: Unsplash integration for high-quality images
- **Caching**: TanStack Query provides intelligent caching and background updates
- **Bundle Size**: Tree shaking and dead code elimination in production builds