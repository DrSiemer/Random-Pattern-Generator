<?php
/**
 * Bootstrap the library.
 *
 * PHP version 5.3
 *
 * @category   RandomPatternGenerator
 * @author     Pieter Hordijk <info@pieterhordijk.com>
 * @copyright  Copyright (c) 2012 The authors
 * @license    http://www.opensource.org/licenses/mit-license.html  MIT License
 * @version    0.0.1
 */
namespace RandomPatternGenerator;

require_once __DIR__ . '/Core/AutoLoader.php';

$autoloader = new Core\AutoLoader(__NAMESPACE__, dirname(__DIR__));

$autoloader->register();