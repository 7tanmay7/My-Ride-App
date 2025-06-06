# 🚀 Uber - Ride-Sharing Service  
**SOLID + Design Patterns + Full-Stack Alignment**  

---

## 📌 **Hackathon Submission Overview**  
A **production-grade ride-sharing system** with:  
- **Backend**: Node.js (In-memory, SOLID-compliant)  
- **Frontend**: React (Demonstrates real-world integration)  
- **Key Hackathon Focus**:  
  - 5+ design patterns implemented  
  - SOLID principles enforced  
  - Extensible architecture  

---

## 🧩 **Frontend-Backend Alignment**  

### **1. Core Flow Integration**  
| Component          | Frontend File           | Backend File            | Design Pattern          |  
|--------------------|-------------------------|-------------------------|-------------------------|  
| **Ride Booking**   | `ConfirmRide.jsx`       | `ride.controller.js`    | Singleton (RideManager) |  
| **Live Tracking**  | `LiveTracking.jsx`      | `socket.js`             | Observer                |  
| **Driver Matching**| `VehiclePanel.jsx`      | `matchingStrategy.js`   | Strategy                |  
| **Fare Calculation**| `RidePopUp.jsx`        | `fareCalculator.js`     | Decorator               |  

### **2. Data Models Mirroring**  
 
// Shared Structures  
interface User {  
  fullname: { firstname: string, lastname?: string };  
  email: string;  
  // Maps to both:  
  // - Backend: `user.model.js`  
  // - Frontend: `UserContext.jsx`  
}  🛠️ System Architecture
Backend (LLD Focus)
Diagram
Code
flowchart TD  
    A[Ride Request] --> B[RideManager]  
    B --> C{Strategy}  
    C -->|Nearest| D[NearestDriverStrategy]  
    C -->|Rated| E[BestRatedDriverStrategy]  
    B --> F[FareCalculator]  
    F -->|Base| G[BaseFare]  
    F -->|Peak| H[SurgeDecorator]  
    B --> I[NotificationService]  
Matches hackathon's requirement of pluggable strategies and decorators

Frontend (UI Integration Proof)
Diagram
Code
flowchart LR  
    A[LocationSearchPanel.jsx] -->|POST /rides/create| B(ride.controller.js)  
    B --> C[Socket.io]  
    C --> D[LiveTracking.jsx]  