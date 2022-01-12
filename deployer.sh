set -e

echo "Deploying application..."

# enter on maintance mode
echo "Entering on maintenance mode..."
    (php artisan down --message="O aplicativo esta sendo rapidamente atualizado, por favor, aguarde." || true)
    # update code base
echo "Updating code base..."
git pull origin main
    # clear cache
echo "Clearing cache..."
php artisan cache:clear
    # clear config cache
echo "Clearing config cache..."
php artisan config:clear
    # clear route cache
echo "Clearing route cache..."
php artisan route:clear
    # clear view cache
echo "Clearing view cache..."
php artisan view:clear
    # clear compiled views
echo "Clearing compiled views..."
php artisan clear-compiled
    # clear opcache
echo "Clearing opcache..."
php artisan opcache:clear
    # clear session
echo "Clearing session..."
php artisan session:clear

php artisan up
echo "Application deployed!"

