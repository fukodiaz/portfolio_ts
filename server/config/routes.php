<?php
use Slim\App;

require_once __DIR__ . '/../src/controllers/HomeController.php';
require_once __DIR__ . '/../src/controllers/ContactsController.php';

return function (App $app) {
	$app -> get('/', App\Controller\HomeController::class . ':index');
	$app -> post('/contacts', App\Controller\ContactsController::class . ':saveContacts');

	//for cors
	$app -> options('/{routes:.+}', function ($request, $response, $args) {
		return $response;
	});
};