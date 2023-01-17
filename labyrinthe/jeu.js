// Création d'un labyrinthe avec une matrice 2D
let maze = [
    [1,1,1,1,1],
    [1,0,2,3,1],
    [1,0,1,0,1],
    [1,0,1,0,1],
    [1,1,1,1,1]
  ];
  
  
  // Fonction pour vérifier si la position est un mur
  function isWall(x, y) {
    if (maze[x][y] === 1) {
      return true;
    }
    return false;
  }
  
  
  // Fonction pour vérifier si la position est un chemin
  function isPath(x, y) {
    if (maze[x][y] === 0) {
      return true;
    }
    return false;
  }
  
  
  // Fonction pour vérifier si la position est une piège
  function isTrap(x, y) {
    if (maze[x][y] === 2) {
      return true;
    }
    return false;
  }
  
  
  // Fonction pour vérifier si la position est un bonus
  function isBonus(x, y) {
    if (maze[x][y] === 3) {
      return true;
    }
    return false;
  }
  
  
  // Fonction pour vérifier si la position est une sortie
  function isExit(x, y) {
    if (x === 0 || y === 0 || x === maze.length || y === maze[0].length) {
      return true;
    }
    return false;
  }
  
  
  // Fonction pour générer le labyrinthe en HTML
  function generateMaze() {
    let output = '';
    for.


    
// Génération des ennemis et des bonus
function generateEnemiesAndBonuses() {
    // Génération des ennemis
    let enemyTypes = ["basic", "strong", "poison", "flying"];
    let enemySpawnRatios = [0.4, 0.3, 0.2, 0.1]; // pour chaque type d'ennemi
  
  
  for (let i = 0; i < maze.length; i++) {
      let row = maze[i];
      for (let j = 0; j < row.length; j++) {
        // Vérification de la position
        let cell = row[j];
        let isPath = (cell === 0);
        let isTrap = (cell === 2);
        let isBonus = (cell === 3);
  
  
    // Génération des ennemis
    if (isPath || isTrap) {
      let randomEnemyTypeIndex = Math.floor(Math.random() * enemyTypes.length);
      let randomEnemyType = enemyTypes[randomEnemyTypeIndex];
      let randomEnemySpawnChance = Math.random();
      let enemySpawnRatio = enemySpawnRatios[randomEnemyTypeIndex];
      if (randomEnemySpawnChance < enemySpawnRatio) {
        // Ajouter un ennemi à cette position
      }
    }
  
    // Génération des bonus
    if (isPath || isBonus) {
      let randomBonusSpawnChance = Math.random();
      if (randomBonusSpawnChance < 0.3) {
        // Ajouter un bonus à cette position
      }
    }
  }
  
  }
  }.