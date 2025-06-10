# My Notes App

Note-taking application. Full stack app with persistent storage.

## Technologies

- **Frontend**: React + Vite
- **Backend**: NestJS + TypeORM
- **Database**: MySQL2
- **ORM**: TypeORM

## Requirements

- Node.js v18.17+
- npm 10.1.0
- MySQL Server (v8 recommended)
- Bash/Zsh (to execute `run.sh`)

## Quick installation

```bash
chmod +x run.sh
./run.sh

## Clarification

I'm running MySQL in port 3308 and not in default port 3306. Just a heads up :)

## Running on Windows

If you are using Windows, you have two main options:

1. **Using GitBash or Using WSL (Windows Subsystem for Linux):**  
   - Install WSL and a Linux distribution (Ubuntu recommended).  
   - Open your Linux terminal in WSL, navigate to the project folder, and run:  
     ```bash
     chmod +x run.sh
     ./run.sh
     ```

2. **Running manually on Windows Command Prompt or PowerShell:**  
   - Ensure you have Node.js, npm, and MySQL installed and running on Windows.  
   - Manually start backend and frontend:  
     - Backend:  
       ```powershell
       cd backend
       npm install
       npm run start:dev
       ```  
     - Frontend:  
       ```powershell
       cd frontend
       npm install
       npm run dev
       ```  
   - Configure your `.env` file manually inside the `backend` folder as described above.

