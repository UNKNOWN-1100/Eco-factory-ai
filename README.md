# Eco Factory AI

Nature-inspired, clean professional frontend prototype for an AI-powered industrial sustainability platform.

## Requirements
- Node.js 20 or later
- npm

## Run locally
```bash
npm install
npm run dev
```
Open http://localhost:3000

## Included pages
- `/` Homepage
- `/dashboard` Factory sustainability dashboard
- `/scanner` Interactive waste scanner demo
- `/waste` Waste records (local component state only)
- `/marketplace` Circular resource marketplace
- `/energy` Energy and water monitor
- `/carbon` Carbon footprint calculator
- `/assistant` Eco assistant demo

## Important prototype notes
This is a frontend-first prototype. Dashboard metrics, marketplace listings, and AI assistant responses are illustrative. The scanner currently demonstrates the upload flow and a clearly labelled sample result; it does not run an image recognition model. Waste records are held in browser component state and reset on refresh. No authentication, database, live sensor, or backend integration is included yet.

## Next implementation stage
1. Configure Supabase Auth, PostgreSQL and Storage.
2. Add FastAPI backend and connect frontend API calls.
3. Integrate a validated waste-classification model.
4. Persist waste scans and factory records.
5. Add role-based access control and marketplace requests.
6. Use verified local emission factors for formal carbon reporting.

## Suggested environment variables
Create `.env.local` only when adding integrations:
```env
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
NEXT_PUBLIC_API_BASE_URL=http://localhost:8000
```
Never expose private service-role keys or LLM API keys in browser code.
