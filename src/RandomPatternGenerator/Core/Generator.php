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
class Generator implements \Iterator
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
     * @var array The list of all possible options
     */
    private $options = array();

    /**
     * @var array The grid of valid tiles
     */
    private $tiles = array();

    /**
     * @var int The current position of the y axis of the iterator
     */
    private $currentY = 1;

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
        $this->options   = $this->buildOptions();
    }

    /**
     * Get the list of all possible options
     * Tile set with double entries to restrain dead ends and crossings
     *
     * @return array The possible options
     */
    private function buildOptions()
    {
        return array(
            'x', 't', 'r', 'b', 'l', 'trbl', 'tr', 'tb', 'tl', 'rb', 'rl', 'bl', 'trb', 'trl', 'tbl', 'rbl', 'tr', 'tb',
            'tl', 'rb', 'rl', 'bl', 'tr', 'tb', 'tl', 'rb', 'rl', 'bl', 'trb', 'trl', 'tbl', 'rbl', 'tr', 'tb', 'tl',
            'rb', 'rl', 'bl', 'trb', 'trl', 'tbl', 'rbl', 'tr', 'tb', 'tl', 'rb', 'rl', 'bl',
        );
    }

    /**
     * Generate the grid with random tiles
     *
     * @return void
     */
    public function generate()
    {
        for ($y = 1; $y <= $this->getMaxHeight(); $y++) {
            if (!array_key_exists($y, $this->tiles)) {
                $this->tiles[$y] = array();
            }

            for ($x = 1; $x < $this->getMaxWidth(); $x++) {
                $this->tiles[$y][$x] = $this->getRandomTileAtCurrentPosition($x, $y);
            }
        }
    }

    /**
     * Get a random and valid tile for the current position
     *
     * @todo refactor this method and find out what's going on in here
     *
     * @param int $x The current position on the x axis
     * @param int $y The current position on the y axis
     *
     * @return void
     */
    public function getRandomTileAtCurrentPosition($x, $y)
    {
        $possibilities = $this->options;

        $directionsToRemove = array(
            'x' => array(
                1 => 'l',
                ($this->getMaxWidth() - 1) => 'r',
            ),
            'y' => array(
                1 => 't',
                ($this->getMaxHeight() - 1) => 'b',
            ),
        );

        // fix edges
        if (array_key_exists($x, $directionsToRemove['x'])) {
            $possibilities = $this->removeDirectionFromPossibilities($possibilities, $directionsToRemove['x'][$x]);
        }
        if (array_key_exists($y, $directionsToRemove['y'])) {
            $possibilities = $this->removeDirectionFromPossibilities($possibilities, $directionsToRemove['y'][$y]);
        }

        // check left
        if ($x > 1 && strpos($this->tiles[$y][$x-1], 'r') !== false) {
            $possibilities = $this->requireDirectionFromPossibilities($possibilities, 'l');
        } else {
            $possibilities = $this->removeDirectionFromPossibilities($possibilities, 'l');
        }

        // check up
        if ($y > 1 && strpos($this->tiles[$y-1][$x], 'b') !== false) {
            $possibilities = $this->requireDirectionFromPossibilities($possibilities, 't');
        } else {
            $possibilities = $this->removeDirectionFromPossibilities($possibilities, 't');
        }

        return $possibilities[array_rand($possibilities)];
    }

    /**
     * Remove tile with a certain direction in it
     *
     * @param array     $possibilities  List to check for directions to remove
     * @param string    $direction      The direction to be removed
     *
     * @return array    The valid directions
     */
    private function removeDirectionFromPossibilities($possibilities, $direction)
    {
        foreach ($possibilities as $key => $possibility) {
            if(strpos($possibility, $direction) !== false) {
                unset($possibilities[$key]);
            }
        }

        return $possibilities;
    }

    /**
     * Remove tile which doesn't have a certain direction in it
     *
     * @param array     $possibilities  List to check for required directions
     * @param string    $direction      The direction which is required
     *
     * @return array    The valid directions
     */
    private function requireDirectionFromPossibilities($possibilities, $direction)
    {
        foreach ($possibilities as $key => $possibility) {
            if(strpos($possibility, $direction) === false) {
                unset($possibilities[$key]);
            }
        }

        return $possibilities;
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
     * @return int The maximum number of tiles per column
     */
    public function getMaxHeight()
    {
        return $this->maxHeight;
    }

    /**
     * Rewind the iterator
     *
     * @return void
     */
    public function rewind()
    {
        $this->currentY = 1;
    }

    /**
     * Get the current tile
     *
     * @return string The current tile
     */
    public function current()
    {
        return $this->tiles[$this->currentY];
    }

    /**
     * Get the current key
     *
     * @return string The current key (concatenated both x and y)
     */
    public function key()
    {
        return $this->currentY;
    }

    /**
     * Get the next tile
     *
     * @return string The next tile
     */
    public function next()
    {
        return $this->tiles[++$this->currentY];
    }

    /**
     * Get validity of the current position
     *
     * @return boolean Whether there are more items in the array
     */
    public function valid()
    {
        if ($this->currentY < $this->getMaxHeight()) {
            return true;
        }

        return false;
    }
}