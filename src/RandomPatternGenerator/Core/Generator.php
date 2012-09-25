<?php
/**
 * Generates the randomized tiles
 *
 * PHP version 5.3
 *
 * @category   RandomPatternGenerator
 * @package    Core
 * @author     Michel Nugteren <info@example.com>
 * @author     Pieter Hordijk <info@pieterhordijk.com>
 * @copyright  Copyright (c) 2012 The authors
 * @license    http://www.opensource.org/licenses/mit-license.html  MIT License
 * @version    0.0.1
 */
namespace RandomPatternGenerator\Core;

/**
 * Generates the randomized tiles
 *
 * @category   RandomPatternGenerator
 * @package    Core
 * @author     Pieter Hordijk <info@pieterhordijk.com>
 */
class Generator
{
    /**
     * @var int The maximum number of tiles per row
     */
    private $maxWidth;

    /**
     * @var int The maximum number of tiles per column
     */
    private $maxHeight;

    /**
     * Build the instance of the autoloader
     *
     * @param int $maxWidth     The maximum number of tiles per row
     * @param int $maxHeight    The maximum number of tiles per column
     */
    public function __construct($maxWidth = 41, $maxHeight = 21)
    {
        $this->maxWidth  = $maxWidth;
        $this->maxHeight = $maxHeight;
    }

    /**
     * Get the maximum width
     *
     * @return int The maximum number of tiles per row
     */
    public function getMaxWidth()
    {
        return $this->maxWidth;
    }

    /**
     * Get the maximum height
     *
     * @param int The maximum number of tiles per column
     */
    public function getMaxHeight()
    {
        return $this->maxHeight;
    }
}