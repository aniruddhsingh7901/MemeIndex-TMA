# MemeIndex Frontend

A vibrant and animated frontend for the MemeIndex Battle Arena, a Telegram Mini App (TMA) for meme coin voting and ranking.

## Features

- Mobile-first design optimized for iPhone 14 Pro and other mobile devices
- Rich animations and interactive elements
- Wallet connection for TON blockchain
- Live activity feed with real-time updates
- Achievement system with unlockable badges
- Ranking system for meme coins

## Development

### Prerequisites

- Node.js (v16 or higher)
- npm (v7 or higher)

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/memeindex-frontend.git
cd memeindex-frontend

# Install dependencies
npm install
```

### Development Server

```bash
# Start the development server
npm run dev
```

The development server will be available at http://localhost:5173

### Building for Production

```bash
# Build the application
npm run build
```

The built files will be available in the `dist` directory.

## Deployment

### Automatic Deployment

A deployment script is provided to automatically deploy the application to the server:

```bash
# Make the script executable (if not already)
chmod +x deploy.sh

# Run the deployment script
./deploy.sh
```

The script will:
1. Build the application
2. Create a tarball of the built files
3. Transfer the tarball to the server
4. Extract the tarball on the server
5. Configure Nginx (if not already configured)
6. Reload Nginx

### Manual Deployment

If you prefer to deploy manually:

1. Build the application:
   ```bash
   npm run build
   ```

2. Transfer the built files to the server:
   ```bash
   scp -P 17299 -r dist/* ubuntu@148.76.188.132:~/memeindex-latest/
   ```

3. Configure Nginx on the server:
   ```bash
   # Create Nginx configuration
   sudo nano /etc/nginx/sites-available/memeindex
   
   # Add the following configuration
   server {
       listen 80;
       server_name memeindex.org www.memeindex.org;
   
       root /home/ubuntu/memeindex-latest;
       index index.html;
   
       location / {
           try_files $uri $uri/ /index.html;
       }
   
       # Enable gzip compression
       gzip on;
       gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript;
   }
   
   # Create a symbolic link to enable the site
   sudo ln -s /etc/nginx/sites-available/memeindex /etc/nginx/sites-enabled/
   
   # Test Nginx configuration
   sudo nginx -t
   
   # Reload Nginx
   sudo systemctl reload nginx
   ```

## Project Structure

- `src/`: Source code
  - `Components/`: Reusable components
  - `pages/`: Page components
  - `assets/`: Static assets
- `public/`: Public assets
- `dist/`: Built files (generated)

## Technologies Used

- React
- TypeScript
- Vite
- TailwindCSS
- TON Connect
