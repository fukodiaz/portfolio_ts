<?php
use Symfony\Component\Dotenv\Dotenv;
//use Dotenv\Dotenv;
use DI\Container;
use DI\ContainerBuilder;
use Slim\Factory\AppFactory;

//access to dependencies received via composer 
require_once __DIR__ . '/../vendor/autoload.php';

$dotenv = new Dotenv();
$dotenv -> load(__DIR__ . '/../.env');
// $dotenv = Dotenv::createImmutable(__DIR__ . '/..');
// $dotenv->load();

// build container for DI
$containerBuilder = new ContainerBuilder();
$containerBuilder->addDefinitions(__DIR__ . '/../config/definitions.php');
$container = $containerBuilder->build();

//create instance of the application
AppFactory::setContainer($container);
$app = AppFactory::create();

//add middlewares
$middlewares = require_once __DIR__ . '/../config/middlewares.php';
$middlewares($app);

//add routes
$routes = require_once __DIR__ . '/../config/routes.php';
$routes($app);

$errorSettings = $container -> get('Config') -> getErrorSetting();
$errorMiddleware = $app -> addErrorMiddleware(
	$errorSettings['displayErrorDetails'],
	$errorSettings['logErrors'],
	$errorSettings['logErrorDetails']
);

$app->run();