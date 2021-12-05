<?php

const UUID = "b09ee54e-23b6-4bda-97d1-591a9e56d768";

if (empty($_GET['uuid']) || $_GET['uuid'] != UUID) {
  echo "FALSE";
}

file_put_contents("../TPAY_RESPONSE.txt", (new Date())->toString() . PHP_EOL . print_r($_POST, true));
echo "true";