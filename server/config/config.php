<?php

	class Config {
		private $errorSettings;

		function __construct() {
			//in prod version swith config err-veriables to false
			$this -> errorSettings = [
				'displayErrorDetails' => $_ENV['DISPLAY_ERR_DETAILS'],
				'logErrors' => $_ENV['LOG_ERRS'],
				'logErrorDetails' => $_ENV['LOG_ERR_DETAILS']
			];
		}

		public function getErrorSetting() {
			return $this -> errorSettings;
		}
	}