FROM php:8.0.2-fpm-alpine

WORKDIR /var/www/html

#install packages from composer
RUN apk add composer
RUN apk add --repository http://dl-cdn.alpinelinux.org/alpine/edge/testing/ \
	openssh \
	&& curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/bin --filename=composer --version=2.5.1
COPY composer.json /var/www/html/
RUN  php /usr/bin/composer install

RUN docker-php-ext-install pdo_mysql mysqli

COPY . /var/www/html/

RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer