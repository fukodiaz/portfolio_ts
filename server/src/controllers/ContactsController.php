<?php
namespace Slim\App\Controller;

use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;

require_once __DIR__ . '/BaseController.php';
require_once __DIR__ . '/../../utils/jeneral.php';

class ContactsController extends BaseController {

	function saveContacts(Request $req, Response $res): Response {
		if ($req -> getMethod() == 'POST') {
			$data = $req->getParsedBody();
			$name = clearString($data['name']);
			$email = clearString($data['email']);
			$message = clearString($data['message']);

			if (empty($name) || empty($email) || empty($message)) {
				$result = 'Some fields is empty';
				return $this -> sendResponse($res, ['msg' => $result], 401);
			}

			// adding contacts into file contact.txt
			// format data (name:|email:|message \n)
			$dataContacts = $name . ':|' . $email . ':|' . $message . "\n";
			file_put_contents(__DIR__ . '/../../data/contacts.txt', $dataContacts, FILE_APPEND);

			$result = "Contacts were added";
			return $this -> sendResponse($res, ['msg' => $result], 200);
		}
	}

	function sendResponse(Response $res, $msg, int $codeRes) {
		$res -> getBody() -> write(json_encode($msg));
		$newResponse = $res -> withStatus($codeRes);
		return $newResponse -> withHeader('Content-Type', 'application/json');
	}
}