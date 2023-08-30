<?php
require_once __DIR__ . '/config.php';

use function DI\create;

return [
	'config' => create(Config::class)
];