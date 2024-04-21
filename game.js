AFRAME.registerComponent('game-play', {
    init: function() {
      const sceneEl = this.el.sceneEl;
  
      // Define coins and fish
      this.createFish();
      this.createCoins();
  
      // Add collision event listener to detect collisions
      sceneEl.addEventListener('collide', this.handleCollision);
    },
    
    // Create coins and set them as static bodies
    createCoins: function() {
      const coinPositions = [
        { x: 2, y: -1, z: -3 },
        { x: -3, y: -1, z: -6 },
        { x: 1, y: -1, z: -5 }
      ];
      coinPositions.forEach(pos => {
        const coin = document.createElement('a-entity');
        coin.setAttribute('geometry', { primitive: 'sphere', radius: 0.2 });
        coin.setAttribute('material', { color: 'gold' });
        coin.setAttribute('position', `${pos.x} ${pos.y} ${pos.z}`);
        coin.setAttribute('static-body', '');
        coin.setAttribute('game-play', '');
        this.el.appendChild(coin);
      });
    },
    
    // Create fish and set them as static bodies
    createFish: function() {
      const fishPositions = [
        { x: 0, y: 1, z: -5 },
        { x: 3, y: 2, z: -6 },
        { x: -3, y: 1, z: -4 }
      ];
      fishPositions.forEach(pos => {
        const fish = document.createElement('a-entity');
        fish.setAttribute('geometry', { primitive: 'box', height: 0.3, width: 1, depth: 0.5 });
        fish.setAttribute('material', { color: 'orange' });
        fish.setAttribute('position', `${pos.x} ${pos.y} ${pos.z}`);
        fish.setAttribute('static-body', '');
        fish.setAttribute('game-play', '');
        this.el.appendChild(fish);
      });
    },
  
    // Handle collision between scuba diver and coins or fish
    handleCollision: function(event) {
      if (event.detail.body.el.id === 'diver') {
        const target = event.detail.target.el;
        if (target.hasAttribute('coin') || target.hasAttribute('fish')) {
          // Collision detected with coin or fish, perform desired action (e.g., play sound or increment score)
          console.log('Collision detected!');
          target.parentNode.removeChild(target); // Remove the collided entity
        }
      }
    }
  });
  