<?php
use Slim\App;

require_once __DIR__ . '/../src/controllers/HomeController.php';

return function (App $app) {
	$app -> get('/', App\Controller\HomeController::class . ':index');

	//for cors
	$app -> options('/{routes:.+}', function ($request, $response, $args) {
		return $response;
	});
};