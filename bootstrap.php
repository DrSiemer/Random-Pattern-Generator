<?php

/**
 * Enable all error reporting
 */
error_reporting(-1);
ini_set('display_errors', 1);

/**
 * Setup environment constants
 */
define('RPG_ENV_DEBUG', 1);
define('RPG_ENV_PRODUCTION', 2);

/**
 * Setup environment
 */
define('RPG_ENV', RPG_ENV_DEBUG);

/**
 * Display HTML
 */
require '/views/index.phtml';