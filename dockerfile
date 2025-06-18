# # Use official nginx image as the base
# FROM nginx:alpine

# # Remove default nginx static files
# RUN rm -rf /usr/share/nginx/html/*

# # Copy your index.html into the nginx web root
# COPY index.html /usr/share/nginx/html/index.html
# COPY favicon.ico /usr/share/nginx/html/favicon.ico


# # Expose port 80
# EXPOSE 80

# # Start nginx
# CMD ["nginx", "-g", "daemon off;"]
FROM nginx:alpine

# Copy static HTML file
COPY index.html /usr/share/nginx/html/index.html

# Copy custom Nginx config
COPY nginx.conf /etc/nginx/nginx.conf
