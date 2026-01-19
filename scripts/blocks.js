import * as THREE from 'three';

const textureLoader = new THREE.TextureLoader();

function loadTexture(path) {
  const texture = textureLoader.load(path);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.magFilter = THREE.NearestFilter;
  texture.minFilter = THREE.NearestFilter;
  return texture;
}

const textures = {
  cactusSide: loadTexture('textures/cactus_side.png'),
  cactusTop: loadTexture('textures/cactus_top.png'),
  dirt: loadTexture('textures/dirt.png'),
  grass: loadTexture('textures/grass.png'),
  grassSide: loadTexture('textures/grass_side.png'),
  coalOre: loadTexture('textures/coal_ore.png'),
  ironOre: loadTexture('textures/iron_ore.png'),
  jungleTreeSide: loadTexture('textures/jungle_tree_side.png'),
  jungleTreeTop: loadTexture('textures/jungle_tree_top.png'),
  jungleLeaves: loadTexture('textures/jungle_leaves.png'),
  leaves: loadTexture('textures/leaves.png'),
  treeSide: loadTexture('textures/tree_side.png'),
  treeTop: loadTexture('textures/tree_top.png'),
  sand: loadTexture('textures/sand.png'),
  snow: loadTexture('textures/snow.png'),
  snowSide: loadTexture('textures/snow_side.png'),
  stone: loadTexture('textures/stone.png'),
};

export const blocks = {
  empty: {
    id: 0,
    name: 'empty',
    visible: false
  },
  grass: {
    id: 1,
    name: 'grass',
    color: 0x559020
  },
  dirt: {
    id: 2,
    name: 'dirt',
    color: 0x807020
  },
};