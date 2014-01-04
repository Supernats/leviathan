(function(root) {
  var Snake = root.Snake = (root.Snake || {});

  var Beast = Snake.Beast = function () {
    this.dir = null;
    this.segments = [];
    this.vertices = [];
  };

  Beast.prototype.move = function() {
    beast = this;
    beast.segments.forEach(function(segment) {
      beast.checkForVertex(segment);
      segment.handyPlus();
    });
  };

  Beast.prototype.checkForVertex = function(segment) {
    var beast = this;
    beast.vertices.forEach(function(vertex) {
      if (segment.matchesPos(vertex)) {
        segment.dir = vertex.dir;
        if (beast.segments.indexOf(segment) === beast.segments.length - 1) {
          beast.vertices.shift();
        }
      }
    });
  };

  Beast.prototype.turn = function (newDir) {
    this.dir = newDir;
    var newX = this.segments[0].x;
    var newY = this.segments[0].y;
    var newVertex = new Snake.SimpleCoord(newX, newY, newDir);
    this.vertices.push(newVertex);
  };

  Beast.DIRS = ['w', 'd', 's', 'a'];

  var Board = Snake.Board = function () {

  };

  var SimpleCoord = Snake.SimpleCoord = function (x, y, dir) {
    this.x = x;
    this.y = y;
    this.dir = dir;
  };

  SimpleCoord.prototype.matchesPos = function(otherCoord) {
    if (this.x === otherCoord.x && this.y === otherCoord.y) {
      return true;
    } else {
      return false;
    }
  };

  SimpleCoord.prototype.handyPlus = function () {
    switch(this.dir) {
      case 'w':
        this.y += 1;
        break;
      case 's':
        this.y -= 1;
        break;
      case 'a':
        this.x -= 1;
        break;
      case 'd':
        this.x += 1;
        break;
      default:
        console.log("HOW DID YOU BREAK THIS!!?!?!");
    };
  };
})(this);