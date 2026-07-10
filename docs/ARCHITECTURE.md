# AuraVision Architecture

## System Overview
```
User (Merchant)
↓
Next.js Frontend
↓
FastAPI Backend
↓
├→ Supabase (Auth + DB + Storage)
├→ Replicate API (AI 3D)
└→ Three.js Viewer
↓
Customer (AR Experience)
```


## Key Components

### Frontend (Next.js)
- Login & Register pages
- Image upload interface
- Generation dashboard
- 3D model viewer
- Share & download pages

### Backend (FastAPI)
- Authentication endpoints
- Image upload & storage
- Generation job management
- Model retrieval & serving

### AI Pipeline (Replicate)
- Image preprocessing
- Background removal
- 3D reconstruction (TripoSR)
- Texture generation
- GLB/USDZ conversion

### Database (Supabase/PostgreSQL)
- Users table
- Products table
- Generation jobs table

### Storage (Supabase Storage)
- User uploaded images
- Generated 3D models (GLB & USDZ)

## Data Flow

1. User uploads 4-8 furniture images
2. Frontend sends to Backend API
3. Backend stores images in Supabase Storage
4. Backend submits job to Replicate API
5. Replicate processes and returns 3D model
6. Backend stores GLB + USDZ in Supabase
7. Frontend retrieves and displays in Three.js
8. Customer opens share link and views AR