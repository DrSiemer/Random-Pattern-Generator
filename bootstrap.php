<?php
/**
 * Bootstrap the project
 *
 * PHP version 5.3
 *
 * @category   RandomPatternGenerator
 * @author     Pieter Hordijk <info@pieterhordijk.com>
 * @copyright  Copyright (c) 2012 The authors
 * @license    http://www.opensource.org/licenses/mit-license.html  MIT License
 * @version    0.0.1
 */

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
 * Bootstrap the library
 */
require_once '/../src/RandomPatternGenerator/bootstrap.php';

/**
 * Create an instance of the generator
 */
$generator = new \RandomPatternGenerator\Core\Generator();

/**
 * Display HTML
 */
require '/views/index.phtml';