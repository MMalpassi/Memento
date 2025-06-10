#!/bin/bash

echo "Starting My Notes App setup..."

# Check dependencies
for cmd in node npm mysql; do
  if ! command -v $cmd &> /dev/null; then
    echo "$cmd not installed. Aborting mission."
    exit 1
  fi
done

# Create .env if it doesn't exist
if [ ! -f backend/api-nest-notes/.env ]; then
  echo "Creating .env: backend/api-nest-notes/.env..."
  cat <<EOF > backend/api-nest-notes/.env
DB_HOST=localhost
DB_PORT=3308
DB_USERNAME=root
DB_PASSWORD=
DB_NAME=apinestnotesdb
EOF
fi

# Create database if it doesn't exist
echo "Creating database..."
mysql -h localhost -P 3308 -u root -e "CREATE DATABASE IF NOT EXISTS apinestnotesdb;" || {
  echo "Error creating the database. Check your credentials of MySQL."
  exit 1
}

# Backend
echo "Installing backend dependencies..."
cd backend/api-nest-notes
npm install

echo "Building backend..."
npm run build

echo "Starting backend in the background..."
npm run start:dev &

# Frontend
cd ../../frontend
echo "Installing frontend dependencies..."
npm install

echo "Starting frontend in the background..."
npm run dev &

cd ..
echo "App is running. Congrats!"
echo "Backend: http://localhost:3000"
echo "Frontend: http://localhost:5173"