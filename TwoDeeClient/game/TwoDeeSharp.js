(function() {
	'use strict';
	global.TwoDeeSharp = global.TwoDeeSharp || {};
	////////////////////////////////////////////////////////////////////////////////
	// TwoDeeSharp.Program
	var $TwoDeeSharp_$Program = function() {
	};
	$TwoDeeSharp_$Program.__typeName = 'TwoDeeSharp.$Program';
	$TwoDeeSharp_$Program.$main = function() {
		window.onload = function(e) {
			new $TwoDeeSharp_Game();
		};
	};
	////////////////////////////////////////////////////////////////////////////////
	// TwoDeeSharp.ArrayExtensions
	var $TwoDeeSharp_ArrayExtensions = function() {
	};
	$TwoDeeSharp_ArrayExtensions.__typeName = 'TwoDeeSharp.ArrayExtensions';
	$TwoDeeSharp_ArrayExtensions.first = function(T) {
		return function(elements, conditional) {
			for (var $t1 = 0; $t1 < elements.length; $t1++) {
				var element = elements[$t1];
				if (conditional(element)) {
					return element;
				}
			}
			return ss.getDefaultValue(T);
		};
	};
	$TwoDeeSharp_ArrayExtensions.select = function(T, T2) {
		return function(elements, conditional) {
			var ts = [];
			for (var $t1 = 0; $t1 < elements.length; $t1++) {
				var element = elements[$t1];
				ss.add(ts, conditional(element));
			}
			return ts;
		};
	};
	global.TwoDeeSharp.ArrayExtensions = $TwoDeeSharp_ArrayExtensions;
	////////////////////////////////////////////////////////////////////////////////
	// TwoDeeSharp.BoardData
	var $TwoDeeSharp_BoardData = function() {
		this.$1$BgTilesField = null;
		this.$1$FgTilesField = null;
		this.$1$SpritesField = null;
		this.$1$BoardWidthField = 0;
		this.$1$BoardHeightField = 0;
		this.$1$BoardNameField = null;
	};
	$TwoDeeSharp_BoardData.__typeName = 'TwoDeeSharp.BoardData';
	global.TwoDeeSharp.BoardData = $TwoDeeSharp_BoardData;
	////////////////////////////////////////////////////////////////////////////////
	// TwoDeeSharp.BoardModel
	var $TwoDeeSharp_BoardModel = function(tileData) {
		this.$1$BgTilesField = null;
		this.$1$FgTilesField = null;
		this.$1$SpritesField = null;
		this.$1$BoardWidthField = 0;
		this.$1$BoardHeightField = 0;
		this.$1$BoardNameField = null;
		this.set_bgTiles(tileData.get_bgTiles());
		this.set_fgTiles(tileData.get_fgTiles());
		this.set_sprites($TwoDeeSharp_ArrayExtensions.select($TwoDeeSharp_SpriteInstanceData, $TwoDeeSharp_SpriteInstanceModel).call(null, tileData.get_sprites(), function(s) {
			return new $TwoDeeSharp_SpriteInstanceModel(s);
		}));
		this.set_boardWidth(tileData.get_boardWidth());
		this.set_boardHeight(tileData.get_boardHeight());
		this.set_boardName(tileData.get_boardName());
	};
	$TwoDeeSharp_BoardModel.__typeName = 'TwoDeeSharp.BoardModel';
	global.TwoDeeSharp.BoardModel = $TwoDeeSharp_BoardModel;
	////////////////////////////////////////////////////////////////////////////////
	// TwoDeeSharp.Game
	var $TwoDeeSharp_Game = function() {
		this.$1$ScreenModelField = null;
		this.$1$CurrentGameViewField = null;
		var $t1 = document.getElementById('gameBG');
		var canvasBgElement = ss.cast($t1, ss.isValue($t1) && (ss.isInstanceOfType($t1, Element) && $t1.tagName === 'CANVAS'));
		var $t2 = document.getElementById('gameSprites');
		var canvasSpritesElement = ss.cast($t2, ss.isValue($t2) && (ss.isInstanceOfType($t2, Element) && $t2.tagName === 'CANVAS'));
		var $t3 = document.getElementById('gameFG');
		var canvasFgElement = ss.cast($t3, ss.isValue($t3) && (ss.isInstanceOfType($t3, Element) && $t3.tagName === 'CANVAS'));
		this.set_screenModel(new $TwoDeeSharp_ScreenModel(canvasBgElement, canvasSpritesElement, canvasFgElement));
		window.addEventListener('resize', ss.mkdel(this, this.$resizeCanvas), false);
		this.$resizeCanvas();
		this.set_currentGameView(new $TwoDeeSharp_GameView(this.get_screenModel(), new $TwoDeeSharp_GameModel($TwoDeeSharp_StaticData.fakeGameData[0])));
	};
	$TwoDeeSharp_Game.__typeName = 'TwoDeeSharp.Game';
	global.TwoDeeSharp.Game = $TwoDeeSharp_Game;
	////////////////////////////////////////////////////////////////////////////////
	// TwoDeeSharp.GameData
	var $TwoDeeSharp_GameData = function() {
		this.$1$PaletteField = null;
		this.$1$TilesField = null;
		this.$1$BoardsField = null;
		this.$1$SpritesField = null;
		this.$1$NameField = null;
		this.$1$TileWidthField = 0;
		this.$1$TileHeightField = 0;
		this.$1$InitField = null;
		this.$1$TickField = null;
	};
	$TwoDeeSharp_GameData.__typeName = 'TwoDeeSharp.GameData';
	global.TwoDeeSharp.GameData = $TwoDeeSharp_GameData;
	////////////////////////////////////////////////////////////////////////////////
	// TwoDeeSharp.GameModel
	var $TwoDeeSharp_GameModel = function(gameData) {
		this.$1$PaletteField = null;
		this.$1$TilesField = null;
		this.$1$BoardsField = null;
		this.$1$SpritesField = null;
		this.$1$NameField = null;
		this.$1$TileWidthField = 0;
		this.$1$TileHeightField = 0;
		this.$1$InitField = null;
		this.$1$TickField = null;
		this.set_name(gameData.get_name());
		this.set_palette(gameData.get_palette());
		this.set_tileWidth(gameData.get_tileWidth());
		this.set_tileHeight(gameData.get_tileHeight());
		this.set_tiles($TwoDeeSharp_ArrayExtensions.select($TwoDeeSharp_TileData, $TwoDeeSharp_TileModel).call(null, gameData.get_tiles(), function(t) {
			return new $TwoDeeSharp_TileModel(t);
		}));
		this.set_boards($TwoDeeSharp_ArrayExtensions.select($TwoDeeSharp_BoardData, $TwoDeeSharp_BoardModel).call(null, gameData.get_boards(), function(t1) {
			return new $TwoDeeSharp_BoardModel(t1);
		}));
		this.set_sprites($TwoDeeSharp_ArrayExtensions.select($TwoDeeSharp_SpriteData, $TwoDeeSharp_SpriteModel).call(null, gameData.get_sprites(), function(t2) {
			return new $TwoDeeSharp_SpriteModel(t2);
		}));
		this.set_init(ss.cast(eval($TwoDeeSharp_StringExtensions.formatMe($TwoDeeSharp_Helper.functionFormat, [gameData.get_init()])), Function));
		this.set_tick(ss.cast(eval($TwoDeeSharp_StringExtensions.formatMe($TwoDeeSharp_Helper.functionFormat, [gameData.get_tick()])), Function));
	};
	$TwoDeeSharp_GameModel.__typeName = 'TwoDeeSharp.GameModel';
	global.TwoDeeSharp.GameModel = $TwoDeeSharp_GameModel;
	////////////////////////////////////////////////////////////////////////////////
	// TwoDeeSharp.GameView
	var $TwoDeeSharp_GameView = function(screenModel, gameModel) {
		this.$screenModel = null;
		this.$gameModel = null;
		this.$1$CurrentBoardField = null;
		this.$screenModel = screenModel;
		this.$gameModel = gameModel;
		this.set_currentBoard('First Level');
		this.init();
	};
	$TwoDeeSharp_GameView.__typeName = 'TwoDeeSharp.GameView';
	global.TwoDeeSharp.GameView = $TwoDeeSharp_GameView;
	////////////////////////////////////////////////////////////////////////////////
	// TwoDeeSharp.Helper
	var $TwoDeeSharp_Helper = function() {
	};
	$TwoDeeSharp_Helper.__typeName = 'TwoDeeSharp.Helper';
	$TwoDeeSharp_Helper.canvasWrapper = function(renderer, canvas) {
		canvas.save();
		renderer(canvas);
		canvas.restore();
	};
	$TwoDeeSharp_Helper.canvasWrapper$1 = function(renderer, canvas1, canvas2) {
		canvas1.save();
		canvas2.save();
		renderer(canvas1, canvas2);
		canvas1.restore();
		canvas2.restore();
	};
	$TwoDeeSharp_Helper.requestAnimFrame = function(render) {
		window.setTimeout(render, 16);
	};
	$TwoDeeSharp_Helper.canvasDraw = function(render) {
		var happen = null;
		happen = function() {
			$TwoDeeSharp_Helper.requestAnimFrame(happen);
			render();
		};
		happen();
	};
	global.TwoDeeSharp.Helper = $TwoDeeSharp_Helper;
	////////////////////////////////////////////////////////////////////////////////
	// TwoDeeSharp.ScreenModel
	var $TwoDeeSharp_ScreenModel = function(canvasBgElement, canvasSpritesElement, canvasFgElement) {
		this.$1$CanvasBgElementField = null;
		this.$1$CanvasSpritesElementField = null;
		this.$1$CanvasFgElementField = null;
		this.$1$CanvasBgCanvasField = null;
		this.$1$CanvasSpritesCanvasField = null;
		this.$1$CanvasFgCanvasField = null;
		this.set_canvasBgElement(canvasBgElement);
		this.set_canvasSpritesElement(canvasSpritesElement);
		this.set_canvasFgElement(canvasFgElement);
		this.set_canvasBgCanvas(ss.cast(this.get_canvasBgElement().getContext('2d'), CanvasRenderingContext2D));
		this.set_canvasSpritesCanvas(ss.cast(this.get_canvasSpritesElement().getContext('2d'), CanvasRenderingContext2D));
		this.set_canvasFgCanvas(ss.cast(this.get_canvasFgElement().getContext('2d'), CanvasRenderingContext2D));
	};
	$TwoDeeSharp_ScreenModel.__typeName = 'TwoDeeSharp.ScreenModel';
	global.TwoDeeSharp.ScreenModel = $TwoDeeSharp_ScreenModel;
	////////////////////////////////////////////////////////////////////////////////
	// TwoDeeSharp.SpriteData
	var $TwoDeeSharp_SpriteData = function() {
		this.$1$PaletteField = null;
		this.$1$PixelsField = null;
		this.$1$OriginXField = 0;
		this.$1$OriginYField = 0;
		this.$1$SpriteWidthField = 0;
		this.$1$SpriteHeightField = 0;
		this.$1$InitField = null;
		this.$1$TickField = null;
		this.$1$DestroyField = null;
		this.$1$OffloadField = null;
		this.$1$CollideWithSpriteField = null;
		this.$1$CollideWithTileField = null;
	};
	$TwoDeeSharp_SpriteData.__typeName = 'TwoDeeSharp.SpriteData';
	global.TwoDeeSharp.SpriteData = $TwoDeeSharp_SpriteData;
	////////////////////////////////////////////////////////////////////////////////
	// TwoDeeSharp.SpriteInstanceData
	var $TwoDeeSharp_SpriteInstanceData = function() {
		this.$1$StartXField = 0;
		this.$1$StartYField = 0;
		this.$1$IndexField = 0;
	};
	$TwoDeeSharp_SpriteInstanceData.__typeName = 'TwoDeeSharp.SpriteInstanceData';
	global.TwoDeeSharp.SpriteInstanceData = $TwoDeeSharp_SpriteInstanceData;
	////////////////////////////////////////////////////////////////////////////////
	// TwoDeeSharp.SpriteInstanceModel
	var $TwoDeeSharp_SpriteInstanceModel = function(spriteInstanceData) {
		this.$1$StartXField = 0;
		this.$1$StartYField = 0;
		this.$1$IndexField = 0;
		this.set_startX(spriteInstanceData.get_startX());
		this.set_startY(spriteInstanceData.get_startY());
		this.set_index(spriteInstanceData.get_index());
	};
	$TwoDeeSharp_SpriteInstanceModel.__typeName = 'TwoDeeSharp.SpriteInstanceModel';
	global.TwoDeeSharp.SpriteInstanceModel = $TwoDeeSharp_SpriteInstanceModel;
	////////////////////////////////////////////////////////////////////////////////
	// TwoDeeSharp.SpriteModel
	var $TwoDeeSharp_SpriteModel = function(spriteData) {
		this.$1$PaletteField = null;
		this.$1$PixelsField = null;
		this.$1$OriginXField = 0;
		this.$1$OriginYField = 0;
		this.$1$SpriteWidthField = 0;
		this.$1$SpriteHeightField = 0;
		this.$1$InitField = null;
		this.$1$TickField = null;
		this.$1$DestroyField = null;
		this.$1$OffloadField = null;
		this.$1$CollideWithSpriteField = null;
		this.$1$CollideWithTileField = null;
		this.set_palette(spriteData.get_palette());
		this.set_pixels(spriteData.get_pixels());
		this.set_originX(spriteData.get_originX());
		this.set_originY(spriteData.get_originY());
		this.set_spriteWidth(spriteData.get_spriteWidth());
		this.set_spriteHeight(spriteData.get_spriteHeight());
		this.set_init(ss.cast(eval($TwoDeeSharp_StringExtensions.formatMe($TwoDeeSharp_Helper.functionFormat, [spriteData.get_init()])), Function));
		this.set_tick(ss.cast(eval($TwoDeeSharp_StringExtensions.formatMe($TwoDeeSharp_Helper.functionFormat, [spriteData.get_tick()])), Function));
		this.set_destroy(ss.cast(eval($TwoDeeSharp_StringExtensions.formatMe($TwoDeeSharp_Helper.functionFormat, [spriteData.get_destroy()])), Function));
		this.set_offload(ss.cast(eval($TwoDeeSharp_StringExtensions.formatMe($TwoDeeSharp_Helper.functionFormat, [spriteData.get_offload()])), Function));
		this.set_collideWithSprite(ss.cast(eval($TwoDeeSharp_StringExtensions.formatMe($TwoDeeSharp_Helper.functionFormat, [spriteData.get_collideWithSprite()])), Function));
		this.set_collideWithTile(ss.cast(eval($TwoDeeSharp_StringExtensions.formatMe($TwoDeeSharp_Helper.functionFormat, [spriteData.get_collideWithTile()])), Function));
	};
	$TwoDeeSharp_SpriteModel.__typeName = 'TwoDeeSharp.SpriteModel';
	global.TwoDeeSharp.SpriteModel = $TwoDeeSharp_SpriteModel;
	////////////////////////////////////////////////////////////////////////////////
	// TwoDeeSharp.StaticData
	var $TwoDeeSharp_StaticData = function() {
	};
	$TwoDeeSharp_StaticData.__typeName = 'TwoDeeSharp.StaticData';
	global.TwoDeeSharp.StaticData = $TwoDeeSharp_StaticData;
	////////////////////////////////////////////////////////////////////////////////
	// TwoDeeSharp.StringExtensions
	var $TwoDeeSharp_StringExtensions = function() {
	};
	$TwoDeeSharp_StringExtensions.__typeName = 'TwoDeeSharp.StringExtensions';
	$TwoDeeSharp_StringExtensions.formatMe = function(str, values) {
		return ss.formatString.apply(null, [str].concat(values));
	};
	global.TwoDeeSharp.StringExtensions = $TwoDeeSharp_StringExtensions;
	////////////////////////////////////////////////////////////////////////////////
	// TwoDeeSharp.TileData
	var $TwoDeeSharp_TileData = function() {
		this.$1$PixelsField = null;
	};
	$TwoDeeSharp_TileData.__typeName = 'TwoDeeSharp.TileData';
	global.TwoDeeSharp.TileData = $TwoDeeSharp_TileData;
	////////////////////////////////////////////////////////////////////////////////
	// TwoDeeSharp.TileModel
	var $TwoDeeSharp_TileModel = function(tileData) {
		this.$1$PixelsField = null;
		this.set_pixels(tileData.get_pixels());
	};
	$TwoDeeSharp_TileModel.__typeName = 'TwoDeeSharp.TileModel';
	global.TwoDeeSharp.TileModel = $TwoDeeSharp_TileModel;
	ss.initClass($TwoDeeSharp_$Program, {});
	ss.initClass($TwoDeeSharp_ArrayExtensions, {});
	ss.initClass($TwoDeeSharp_BoardData, {
		get_bgTiles: function() {
			return this.$1$BgTilesField;
		},
		set_bgTiles: function(value) {
			this.$1$BgTilesField = value;
		},
		get_fgTiles: function() {
			return this.$1$FgTilesField;
		},
		set_fgTiles: function(value) {
			this.$1$FgTilesField = value;
		},
		get_sprites: function() {
			return this.$1$SpritesField;
		},
		set_sprites: function(value) {
			this.$1$SpritesField = value;
		},
		get_boardWidth: function() {
			return this.$1$BoardWidthField;
		},
		set_boardWidth: function(value) {
			this.$1$BoardWidthField = value;
		},
		get_boardHeight: function() {
			return this.$1$BoardHeightField;
		},
		set_boardHeight: function(value) {
			this.$1$BoardHeightField = value;
		},
		get_boardName: function() {
			return this.$1$BoardNameField;
		},
		set_boardName: function(value) {
			this.$1$BoardNameField = value;
		}
	});
	ss.initClass($TwoDeeSharp_BoardModel, {
		get_bgTiles: function() {
			return this.$1$BgTilesField;
		},
		set_bgTiles: function(value) {
			this.$1$BgTilesField = value;
		},
		get_fgTiles: function() {
			return this.$1$FgTilesField;
		},
		set_fgTiles: function(value) {
			this.$1$FgTilesField = value;
		},
		get_sprites: function() {
			return this.$1$SpritesField;
		},
		set_sprites: function(value) {
			this.$1$SpritesField = value;
		},
		get_boardWidth: function() {
			return this.$1$BoardWidthField;
		},
		set_boardWidth: function(value) {
			this.$1$BoardWidthField = value;
		},
		get_boardHeight: function() {
			return this.$1$BoardHeightField;
		},
		set_boardHeight: function(value) {
			this.$1$BoardHeightField = value;
		},
		get_boardName: function() {
			return this.$1$BoardNameField;
		},
		set_boardName: function(value) {
			this.$1$BoardNameField = value;
		}
	});
	ss.initClass($TwoDeeSharp_Game, {
		get_screenModel: function() {
			return this.$1$ScreenModelField;
		},
		set_screenModel: function(value) {
			this.$1$ScreenModelField = value;
		},
		get_currentGameView: function() {
			return this.$1$CurrentGameViewField;
		},
		set_currentGameView: function(value) {
			this.$1$CurrentGameViewField = value;
		},
		$resizeCanvas: function() {
			var w = window.innerWidth;
			var h = window.innerHeight;
			this.get_screenModel().get_canvasBgElement().width = w;
			this.get_screenModel().get_canvasBgElement().height = h;
			this.get_screenModel().get_canvasFgElement().width = w;
			this.get_screenModel().get_canvasFgElement().height = h;
			this.get_screenModel().get_canvasSpritesElement().width = w;
			this.get_screenModel().get_canvasSpritesElement().height = h;
		}
	});
	ss.initClass($TwoDeeSharp_GameData, {
		get_palette: function() {
			return this.$1$PaletteField;
		},
		set_palette: function(value) {
			this.$1$PaletteField = value;
		},
		get_tiles: function() {
			return this.$1$TilesField;
		},
		set_tiles: function(value) {
			this.$1$TilesField = value;
		},
		get_boards: function() {
			return this.$1$BoardsField;
		},
		set_boards: function(value) {
			this.$1$BoardsField = value;
		},
		get_sprites: function() {
			return this.$1$SpritesField;
		},
		set_sprites: function(value) {
			this.$1$SpritesField = value;
		},
		get_name: function() {
			return this.$1$NameField;
		},
		set_name: function(value) {
			this.$1$NameField = value;
		},
		get_tileWidth: function() {
			return this.$1$TileWidthField;
		},
		set_tileWidth: function(value) {
			this.$1$TileWidthField = value;
		},
		get_tileHeight: function() {
			return this.$1$TileHeightField;
		},
		set_tileHeight: function(value) {
			this.$1$TileHeightField = value;
		},
		get_init: function() {
			return this.$1$InitField;
		},
		set_init: function(value) {
			this.$1$InitField = value;
		},
		get_tick: function() {
			return this.$1$TickField;
		},
		set_tick: function(value) {
			this.$1$TickField = value;
		}
	});
	ss.initClass($TwoDeeSharp_GameModel, {
		get_palette: function() {
			return this.$1$PaletteField;
		},
		set_palette: function(value) {
			this.$1$PaletteField = value;
		},
		get_tiles: function() {
			return this.$1$TilesField;
		},
		set_tiles: function(value) {
			this.$1$TilesField = value;
		},
		get_boards: function() {
			return this.$1$BoardsField;
		},
		set_boards: function(value) {
			this.$1$BoardsField = value;
		},
		get_sprites: function() {
			return this.$1$SpritesField;
		},
		set_sprites: function(value) {
			this.$1$SpritesField = value;
		},
		get_name: function() {
			return this.$1$NameField;
		},
		set_name: function(value) {
			this.$1$NameField = value;
		},
		get_tileWidth: function() {
			return this.$1$TileWidthField;
		},
		set_tileWidth: function(value) {
			this.$1$TileWidthField = value;
		},
		get_tileHeight: function() {
			return this.$1$TileHeightField;
		},
		set_tileHeight: function(value) {
			this.$1$TileHeightField = value;
		},
		get_init: function() {
			return this.$1$InitField;
		},
		set_init: function(value) {
			this.$1$InitField = value;
		},
		get_tick: function() {
			return this.$1$TickField;
		},
		set_tick: function(value) {
			this.$1$TickField = value;
		}
	});
	ss.initClass($TwoDeeSharp_GameView, {
		get_currentBoard: function() {
			return this.$1$CurrentBoardField;
		},
		set_currentBoard: function(value) {
			this.$1$CurrentBoardField = value;
		},
		init: function() {
			$TwoDeeSharp_Helper.canvasDraw(ss.mkdel(this, this.render));
		},
		tick: function() {
		},
		render: function() {
			var board = $TwoDeeSharp_ArrayExtensions.first($TwoDeeSharp_BoardModel).call(null, this.$gameModel.get_boards(), ss.mkdel(this, function(b) {
				return ss.referenceEquals(b.get_boardName(), this.get_currentBoard());
			}));
			$TwoDeeSharp_Helper.canvasWrapper(ss.mkdel(this, function(canvas) {
				for (var i = 0; i < board.get_bgTiles().length; i++) {
					var tile = board.get_bgTiles()[i];
					this.$gameModel.get_tiles()[tile].render(canvas);
				}
				canvas.fillStyle = 'red';
				canvas.fillRect(100, 100, 200, 200);
			}), this.$screenModel.get_canvasBgCanvas());
			$TwoDeeSharp_Helper.canvasWrapper(function(canvas1) {
				canvas1.fillStyle = 'blue';
				canvas1.fillRect(300, 300, 200, 200);
			}, this.$screenModel.get_canvasSpritesCanvas());
			$TwoDeeSharp_Helper.canvasWrapper(function(canvas2) {
				canvas2.fillStyle = 'green';
				canvas2.fillRect(500, 500, 200, 200);
			}, this.$screenModel.get_canvasFgCanvas());
		}
	});
	ss.initClass($TwoDeeSharp_Helper, {});
	ss.initClass($TwoDeeSharp_ScreenModel, {
		get_canvasBgElement: function() {
			return this.$1$CanvasBgElementField;
		},
		set_canvasBgElement: function(value) {
			this.$1$CanvasBgElementField = value;
		},
		get_canvasSpritesElement: function() {
			return this.$1$CanvasSpritesElementField;
		},
		set_canvasSpritesElement: function(value) {
			this.$1$CanvasSpritesElementField = value;
		},
		get_canvasFgElement: function() {
			return this.$1$CanvasFgElementField;
		},
		set_canvasFgElement: function(value) {
			this.$1$CanvasFgElementField = value;
		},
		get_canvasBgCanvas: function() {
			return this.$1$CanvasBgCanvasField;
		},
		set_canvasBgCanvas: function(value) {
			this.$1$CanvasBgCanvasField = value;
		},
		get_canvasSpritesCanvas: function() {
			return this.$1$CanvasSpritesCanvasField;
		},
		set_canvasSpritesCanvas: function(value) {
			this.$1$CanvasSpritesCanvasField = value;
		},
		get_canvasFgCanvas: function() {
			return this.$1$CanvasFgCanvasField;
		},
		set_canvasFgCanvas: function(value) {
			this.$1$CanvasFgCanvasField = value;
		}
	});
	ss.initClass($TwoDeeSharp_SpriteData, {
		get_palette: function() {
			return this.$1$PaletteField;
		},
		set_palette: function(value) {
			this.$1$PaletteField = value;
		},
		get_pixels: function() {
			return this.$1$PixelsField;
		},
		set_pixels: function(value) {
			this.$1$PixelsField = value;
		},
		get_originX: function() {
			return this.$1$OriginXField;
		},
		set_originX: function(value) {
			this.$1$OriginXField = value;
		},
		get_originY: function() {
			return this.$1$OriginYField;
		},
		set_originY: function(value) {
			this.$1$OriginYField = value;
		},
		get_spriteWidth: function() {
			return this.$1$SpriteWidthField;
		},
		set_spriteWidth: function(value) {
			this.$1$SpriteWidthField = value;
		},
		get_spriteHeight: function() {
			return this.$1$SpriteHeightField;
		},
		set_spriteHeight: function(value) {
			this.$1$SpriteHeightField = value;
		},
		get_init: function() {
			return this.$1$InitField;
		},
		set_init: function(value) {
			this.$1$InitField = value;
		},
		get_tick: function() {
			return this.$1$TickField;
		},
		set_tick: function(value) {
			this.$1$TickField = value;
		},
		get_destroy: function() {
			return this.$1$DestroyField;
		},
		set_destroy: function(value) {
			this.$1$DestroyField = value;
		},
		get_offload: function() {
			return this.$1$OffloadField;
		},
		set_offload: function(value) {
			this.$1$OffloadField = value;
		},
		get_collideWithSprite: function() {
			return this.$1$CollideWithSpriteField;
		},
		set_collideWithSprite: function(value) {
			this.$1$CollideWithSpriteField = value;
		},
		get_collideWithTile: function() {
			return this.$1$CollideWithTileField;
		},
		set_collideWithTile: function(value) {
			this.$1$CollideWithTileField = value;
		}
	});
	ss.initClass($TwoDeeSharp_SpriteInstanceData, {
		get_startX: function() {
			return this.$1$StartXField;
		},
		set_startX: function(value) {
			this.$1$StartXField = value;
		},
		get_startY: function() {
			return this.$1$StartYField;
		},
		set_startY: function(value) {
			this.$1$StartYField = value;
		},
		get_index: function() {
			return this.$1$IndexField;
		},
		set_index: function(value) {
			this.$1$IndexField = value;
		}
	});
	ss.initClass($TwoDeeSharp_SpriteInstanceModel, {
		get_startX: function() {
			return this.$1$StartXField;
		},
		set_startX: function(value) {
			this.$1$StartXField = value;
		},
		get_startY: function() {
			return this.$1$StartYField;
		},
		set_startY: function(value) {
			this.$1$StartYField = value;
		},
		get_index: function() {
			return this.$1$IndexField;
		},
		set_index: function(value) {
			this.$1$IndexField = value;
		}
	});
	ss.initClass($TwoDeeSharp_SpriteModel, {
		get_palette: function() {
			return this.$1$PaletteField;
		},
		set_palette: function(value) {
			this.$1$PaletteField = value;
		},
		get_pixels: function() {
			return this.$1$PixelsField;
		},
		set_pixels: function(value) {
			this.$1$PixelsField = value;
		},
		get_originX: function() {
			return this.$1$OriginXField;
		},
		set_originX: function(value) {
			this.$1$OriginXField = value;
		},
		get_originY: function() {
			return this.$1$OriginYField;
		},
		set_originY: function(value) {
			this.$1$OriginYField = value;
		},
		get_spriteWidth: function() {
			return this.$1$SpriteWidthField;
		},
		set_spriteWidth: function(value) {
			this.$1$SpriteWidthField = value;
		},
		get_spriteHeight: function() {
			return this.$1$SpriteHeightField;
		},
		set_spriteHeight: function(value) {
			this.$1$SpriteHeightField = value;
		},
		get_init: function() {
			return this.$1$InitField;
		},
		set_init: function(value) {
			this.$1$InitField = value;
		},
		get_tick: function() {
			return this.$1$TickField;
		},
		set_tick: function(value) {
			this.$1$TickField = value;
		},
		get_destroy: function() {
			return this.$1$DestroyField;
		},
		set_destroy: function(value) {
			this.$1$DestroyField = value;
		},
		get_offload: function() {
			return this.$1$OffloadField;
		},
		set_offload: function(value) {
			this.$1$OffloadField = value;
		},
		get_collideWithSprite: function() {
			return this.$1$CollideWithSpriteField;
		},
		set_collideWithSprite: function(value) {
			this.$1$CollideWithSpriteField = value;
		},
		get_collideWithTile: function() {
			return this.$1$CollideWithTileField;
		},
		set_collideWithTile: function(value) {
			this.$1$CollideWithTileField = value;
		}
	});
	ss.initClass($TwoDeeSharp_StaticData, {});
	ss.initClass($TwoDeeSharp_StringExtensions, {});
	ss.initClass($TwoDeeSharp_TileData, {
		get_pixels: function() {
			return this.$1$PixelsField;
		},
		set_pixels: function(value) {
			this.$1$PixelsField = value;
		}
	});
	ss.initClass($TwoDeeSharp_TileModel, {
		get_pixels: function() {
			return this.$1$PixelsField;
		},
		set_pixels: function(value) {
			this.$1$PixelsField = value;
		},
		render: function(canvas) {
		}
	});
	$TwoDeeSharp_Helper.functionFormat = '(function(){{{0}}})';
	$TwoDeeSharp_StaticData.fakeGameData = null;
	$TwoDeeSharp_StaticData.fakeGameData = [];
	var $t14 = $TwoDeeSharp_StaticData.fakeGameData;
	var $t1 = new $TwoDeeSharp_GameData();
	$t1.set_name('Game One');
	var $t2 = [];
	ss.add($t2, 'red');
	null;
	ss.add($t2, 'blue');
	null;
	$t1.set_palette($t2);
	$t1.set_tileWidth(16);
	$t1.set_tileHeight(16);
	$t1.set_init('');
	$t1.set_tick('');
	var $t3 = [];
	var $t4 = new $TwoDeeSharp_TileData();
	var $t5 = [];
	ss.add($t5, 1);
	null;
	ss.add($t5, 0);
	null;
	ss.add($t5, 1);
	null;
	ss.add($t5, 0);
	null;
	ss.add($t5, 1);
	null;
	ss.add($t5, 0);
	null;
	ss.add($t5, 1);
	null;
	ss.add($t5, 0);
	null;
	ss.add($t5, 1);
	null;
	ss.add($t5, 0);
	null;
	ss.add($t5, 1);
	null;
	ss.add($t5, 0);
	null;
	ss.add($t5, 1);
	null;
	ss.add($t5, 0);
	null;
	ss.add($t5, 1);
	null;
	ss.add($t5, 0);
	null;
	ss.add($t5, 1);
	null;
	ss.add($t5, 0);
	null;
	ss.add($t5, 1);
	null;
	ss.add($t5, 0);
	null;
	ss.add($t5, 1);
	null;
	ss.add($t5, 0);
	null;
	ss.add($t5, 1);
	null;
	ss.add($t5, 0);
	null;
	ss.add($t5, 1);
	null;
	ss.add($t5, 0);
	null;
	ss.add($t5, 1);
	null;
	ss.add($t5, 0);
	null;
	ss.add($t5, 1);
	null;
	ss.add($t5, 0);
	null;
	ss.add($t5, 1);
	null;
	ss.add($t5, 0);
	null;
	ss.add($t5, 1);
	null;
	ss.add($t5, 0);
	null;
	ss.add($t5, 1);
	null;
	ss.add($t5, 0);
	null;
	ss.add($t5, 1);
	null;
	ss.add($t5, 0);
	null;
	ss.add($t5, 1);
	null;
	ss.add($t5, 0);
	null;
	ss.add($t5, 1);
	null;
	ss.add($t5, 0);
	null;
	ss.add($t5, 1);
	null;
	ss.add($t5, 0);
	null;
	ss.add($t5, 1);
	null;
	ss.add($t5, 0);
	null;
	ss.add($t5, 1);
	null;
	ss.add($t5, 0);
	null;
	ss.add($t5, 1);
	null;
	ss.add($t5, 0);
	null;
	ss.add($t5, 1);
	null;
	ss.add($t5, 0);
	null;
	ss.add($t5, 1);
	null;
	ss.add($t5, 0);
	null;
	ss.add($t5, 1);
	null;
	ss.add($t5, 0);
	null;
	ss.add($t5, 1);
	null;
	ss.add($t5, 0);
	null;
	ss.add($t5, 1);
	null;
	ss.add($t5, 0);
	null;
	ss.add($t5, 1);
	null;
	ss.add($t5, 0);
	null;
	ss.add($t5, 1);
	null;
	ss.add($t5, 0);
	null;
	ss.add($t5, 1);
	null;
	ss.add($t5, 0);
	null;
	ss.add($t5, 1);
	null;
	ss.add($t5, 0);
	null;
	ss.add($t5, 1);
	null;
	ss.add($t5, 0);
	null;
	ss.add($t5, 1);
	null;
	ss.add($t5, 0);
	null;
	ss.add($t5, 1);
	null;
	ss.add($t5, 0);
	null;
	ss.add($t5, 1);
	null;
	ss.add($t5, 0);
	null;
	ss.add($t5, 1);
	null;
	ss.add($t5, 0);
	null;
	ss.add($t5, 1);
	null;
	ss.add($t5, 0);
	null;
	ss.add($t5, 1);
	null;
	ss.add($t5, 0);
	null;
	ss.add($t5, 1);
	null;
	ss.add($t5, 0);
	null;
	ss.add($t5, 1);
	null;
	ss.add($t5, 0);
	null;
	ss.add($t5, 1);
	null;
	ss.add($t5, 0);
	null;
	ss.add($t5, 1);
	null;
	ss.add($t5, 0);
	null;
	ss.add($t5, 1);
	null;
	ss.add($t5, 0);
	null;
	ss.add($t5, 1);
	null;
	ss.add($t5, 0);
	null;
	ss.add($t5, 1);
	null;
	ss.add($t5, 0);
	null;
	ss.add($t5, 1);
	null;
	ss.add($t5, 0);
	null;
	ss.add($t5, 1);
	null;
	ss.add($t5, 0);
	null;
	ss.add($t5, 1);
	null;
	ss.add($t5, 0);
	null;
	ss.add($t5, 1);
	null;
	ss.add($t5, 0);
	null;
	ss.add($t5, 1);
	null;
	ss.add($t5, 0);
	null;
	ss.add($t5, 1);
	null;
	ss.add($t5, 0);
	null;
	ss.add($t5, 1);
	null;
	ss.add($t5, 0);
	null;
	ss.add($t5, 1);
	null;
	ss.add($t5, 0);
	null;
	ss.add($t5, 1);
	null;
	ss.add($t5, 0);
	null;
	ss.add($t5, 1);
	null;
	ss.add($t5, 0);
	null;
	ss.add($t5, 1);
	null;
	ss.add($t5, 0);
	null;
	ss.add($t5, 1);
	null;
	ss.add($t5, 0);
	null;
	ss.add($t5, 1);
	null;
	ss.add($t5, 0);
	null;
	ss.add($t5, 1);
	null;
	ss.add($t5, 0);
	null;
	ss.add($t5, 1);
	null;
	ss.add($t5, 0);
	null;
	ss.add($t5, 1);
	null;
	ss.add($t5, 0);
	null;
	ss.add($t5, 1);
	null;
	ss.add($t5, 0);
	null;
	ss.add($t5, 1);
	null;
	ss.add($t5, 0);
	null;
	ss.add($t5, 1);
	null;
	ss.add($t5, 0);
	null;
	ss.add($t5, 1);
	null;
	ss.add($t5, 0);
	null;
	ss.add($t5, 1);
	null;
	ss.add($t5, 0);
	null;
	ss.add($t5, 1);
	null;
	ss.add($t5, 0);
	null;
	ss.add($t5, 1);
	null;
	ss.add($t5, 0);
	null;
	ss.add($t5, 1);
	null;
	ss.add($t5, 0);
	null;
	ss.add($t5, 1);
	null;
	ss.add($t5, 0);
	null;
	ss.add($t5, 1);
	null;
	ss.add($t5, 0);
	null;
	ss.add($t5, 1);
	null;
	ss.add($t5, 0);
	null;
	ss.add($t5, 1);
	null;
	ss.add($t5, 0);
	null;
	ss.add($t5, 1);
	null;
	ss.add($t5, 0);
	null;
	ss.add($t5, 1);
	null;
	ss.add($t5, 0);
	null;
	ss.add($t5, 1);
	null;
	ss.add($t5, 0);
	null;
	ss.add($t5, 1);
	null;
	ss.add($t5, 0);
	null;
	ss.add($t5, 1);
	null;
	ss.add($t5, 0);
	null;
	ss.add($t5, 1);
	null;
	ss.add($t5, 0);
	null;
	ss.add($t5, 1);
	null;
	ss.add($t5, 0);
	null;
	ss.add($t5, 1);
	null;
	ss.add($t5, 0);
	null;
	ss.add($t5, 1);
	null;
	ss.add($t5, 0);
	null;
	ss.add($t5, 1);
	null;
	ss.add($t5, 0);
	null;
	ss.add($t5, 1);
	null;
	ss.add($t5, 0);
	null;
	ss.add($t5, 1);
	null;
	ss.add($t5, 0);
	null;
	ss.add($t5, 1);
	null;
	ss.add($t5, 0);
	null;
	ss.add($t5, 1);
	null;
	ss.add($t5, 0);
	null;
	ss.add($t5, 1);
	null;
	ss.add($t5, 0);
	null;
	ss.add($t5, 1);
	null;
	ss.add($t5, 0);
	null;
	ss.add($t5, 1);
	null;
	ss.add($t5, 0);
	null;
	ss.add($t5, 1);
	null;
	ss.add($t5, 0);
	null;
	ss.add($t5, 1);
	null;
	ss.add($t5, 0);
	null;
	ss.add($t5, 1);
	null;
	ss.add($t5, 0);
	null;
	ss.add($t5, 1);
	null;
	ss.add($t5, 0);
	null;
	ss.add($t5, 1);
	null;
	ss.add($t5, 0);
	null;
	ss.add($t5, 1);
	null;
	ss.add($t5, 0);
	null;
	ss.add($t5, 1);
	null;
	ss.add($t5, 0);
	null;
	ss.add($t5, 1);
	null;
	ss.add($t5, 0);
	null;
	ss.add($t5, 1);
	null;
	ss.add($t5, 0);
	null;
	ss.add($t5, 1);
	null;
	ss.add($t5, 0);
	null;
	ss.add($t5, 1);
	null;
	ss.add($t5, 0);
	null;
	ss.add($t5, 1);
	null;
	ss.add($t5, 0);
	null;
	ss.add($t5, 1);
	null;
	ss.add($t5, 0);
	null;
	ss.add($t5, 1);
	null;
	ss.add($t5, 0);
	null;
	ss.add($t5, 1);
	null;
	ss.add($t5, 0);
	null;
	ss.add($t5, 1);
	null;
	ss.add($t5, 0);
	null;
	ss.add($t5, 1);
	null;
	ss.add($t5, 0);
	null;
	ss.add($t5, 1);
	null;
	ss.add($t5, 0);
	null;
	ss.add($t5, 1);
	null;
	ss.add($t5, 0);
	null;
	ss.add($t5, 1);
	null;
	ss.add($t5, 0);
	null;
	ss.add($t5, 1);
	null;
	ss.add($t5, 0);
	null;
	ss.add($t5, 1);
	null;
	ss.add($t5, 0);
	null;
	ss.add($t5, 1);
	null;
	ss.add($t5, 0);
	null;
	ss.add($t5, 1);
	null;
	ss.add($t5, 0);
	null;
	ss.add($t5, 1);
	null;
	ss.add($t5, 0);
	null;
	ss.add($t5, 1);
	null;
	ss.add($t5, 0);
	null;
	ss.add($t5, 1);
	null;
	ss.add($t5, 0);
	null;
	ss.add($t5, 1);
	null;
	ss.add($t5, 0);
	null;
	ss.add($t5, 1);
	null;
	ss.add($t5, 0);
	null;
	ss.add($t5, 1);
	null;
	ss.add($t5, 0);
	null;
	ss.add($t5, 1);
	null;
	ss.add($t5, 0);
	null;
	ss.add($t5, 1);
	null;
	ss.add($t5, 0);
	null;
	ss.add($t5, 1);
	null;
	ss.add($t5, 0);
	null;
	ss.add($t5, 1);
	null;
	ss.add($t5, 0);
	null;
	ss.add($t5, 1);
	null;
	ss.add($t5, 0);
	null;
	$t4.set_pixels($t5);
	ss.add($t3, $t4);
	null;
	var $t6 = new $TwoDeeSharp_TileData();
	var $t7 = [];
	ss.add($t7, 1);
	null;
	ss.add($t7, 0);
	null;
	ss.add($t7, 1);
	null;
	ss.add($t7, 0);
	null;
	ss.add($t7, 1);
	null;
	ss.add($t7, 1);
	null;
	ss.add($t7, 1);
	null;
	ss.add($t7, 1);
	null;
	ss.add($t7, 1);
	null;
	ss.add($t7, 1);
	null;
	ss.add($t7, 1);
	null;
	ss.add($t7, 0);
	null;
	ss.add($t7, 1);
	null;
	ss.add($t7, 0);
	null;
	ss.add($t7, 1);
	null;
	ss.add($t7, 0);
	null;
	ss.add($t7, 1);
	null;
	ss.add($t7, 0);
	null;
	ss.add($t7, 1);
	null;
	ss.add($t7, 0);
	null;
	ss.add($t7, 1);
	null;
	ss.add($t7, 1);
	null;
	ss.add($t7, 1);
	null;
	ss.add($t7, 1);
	null;
	ss.add($t7, 1);
	null;
	ss.add($t7, 1);
	null;
	ss.add($t7, 1);
	null;
	ss.add($t7, 0);
	null;
	ss.add($t7, 1);
	null;
	ss.add($t7, 0);
	null;
	ss.add($t7, 1);
	null;
	ss.add($t7, 0);
	null;
	ss.add($t7, 1);
	null;
	ss.add($t7, 0);
	null;
	ss.add($t7, 1);
	null;
	ss.add($t7, 0);
	null;
	ss.add($t7, 1);
	null;
	ss.add($t7, 1);
	null;
	ss.add($t7, 1);
	null;
	ss.add($t7, 1);
	null;
	ss.add($t7, 1);
	null;
	ss.add($t7, 1);
	null;
	ss.add($t7, 1);
	null;
	ss.add($t7, 0);
	null;
	ss.add($t7, 1);
	null;
	ss.add($t7, 0);
	null;
	ss.add($t7, 1);
	null;
	ss.add($t7, 0);
	null;
	ss.add($t7, 1);
	null;
	ss.add($t7, 0);
	null;
	ss.add($t7, 1);
	null;
	ss.add($t7, 0);
	null;
	ss.add($t7, 1);
	null;
	ss.add($t7, 1);
	null;
	ss.add($t7, 1);
	null;
	ss.add($t7, 0);
	null;
	ss.add($t7, 1);
	null;
	ss.add($t7, 1);
	null;
	ss.add($t7, 1);
	null;
	ss.add($t7, 0);
	null;
	ss.add($t7, 1);
	null;
	ss.add($t7, 0);
	null;
	ss.add($t7, 1);
	null;
	ss.add($t7, 0);
	null;
	ss.add($t7, 1);
	null;
	ss.add($t7, 0);
	null;
	ss.add($t7, 1);
	null;
	ss.add($t7, 0);
	null;
	ss.add($t7, 1);
	null;
	ss.add($t7, 1);
	null;
	ss.add($t7, 1);
	null;
	ss.add($t7, 1);
	null;
	ss.add($t7, 1);
	null;
	ss.add($t7, 1);
	null;
	ss.add($t7, 1);
	null;
	ss.add($t7, 0);
	null;
	ss.add($t7, 1);
	null;
	ss.add($t7, 0);
	null;
	ss.add($t7, 1);
	null;
	ss.add($t7, 0);
	null;
	ss.add($t7, 1);
	null;
	ss.add($t7, 0);
	null;
	ss.add($t7, 1);
	null;
	ss.add($t7, 0);
	null;
	ss.add($t7, 1);
	null;
	ss.add($t7, 1);
	null;
	ss.add($t7, 1);
	null;
	ss.add($t7, 0);
	null;
	ss.add($t7, 1);
	null;
	ss.add($t7, 1);
	null;
	ss.add($t7, 1);
	null;
	ss.add($t7, 0);
	null;
	ss.add($t7, 1);
	null;
	ss.add($t7, 0);
	null;
	ss.add($t7, 1);
	null;
	ss.add($t7, 0);
	null;
	ss.add($t7, 1);
	null;
	ss.add($t7, 0);
	null;
	ss.add($t7, 1);
	null;
	ss.add($t7, 0);
	null;
	ss.add($t7, 1);
	null;
	ss.add($t7, 1);
	null;
	ss.add($t7, 1);
	null;
	ss.add($t7, 1);
	null;
	ss.add($t7, 1);
	null;
	ss.add($t7, 1);
	null;
	ss.add($t7, 1);
	null;
	ss.add($t7, 0);
	null;
	ss.add($t7, 1);
	null;
	ss.add($t7, 0);
	null;
	ss.add($t7, 1);
	null;
	ss.add($t7, 0);
	null;
	ss.add($t7, 1);
	null;
	ss.add($t7, 0);
	null;
	ss.add($t7, 1);
	null;
	ss.add($t7, 0);
	null;
	ss.add($t7, 1);
	null;
	ss.add($t7, 1);
	null;
	ss.add($t7, 1);
	null;
	ss.add($t7, 0);
	null;
	ss.add($t7, 1);
	null;
	ss.add($t7, 1);
	null;
	ss.add($t7, 1);
	null;
	ss.add($t7, 0);
	null;
	ss.add($t7, 1);
	null;
	ss.add($t7, 0);
	null;
	ss.add($t7, 1);
	null;
	ss.add($t7, 0);
	null;
	ss.add($t7, 1);
	null;
	ss.add($t7, 0);
	null;
	ss.add($t7, 1);
	null;
	ss.add($t7, 0);
	null;
	ss.add($t7, 1);
	null;
	ss.add($t7, 1);
	null;
	ss.add($t7, 1);
	null;
	ss.add($t7, 1);
	null;
	ss.add($t7, 1);
	null;
	ss.add($t7, 1);
	null;
	ss.add($t7, 1);
	null;
	ss.add($t7, 0);
	null;
	ss.add($t7, 1);
	null;
	ss.add($t7, 0);
	null;
	ss.add($t7, 1);
	null;
	ss.add($t7, 0);
	null;
	ss.add($t7, 1);
	null;
	ss.add($t7, 0);
	null;
	ss.add($t7, 1);
	null;
	ss.add($t7, 0);
	null;
	ss.add($t7, 1);
	null;
	ss.add($t7, 1);
	null;
	ss.add($t7, 1);
	null;
	ss.add($t7, 0);
	null;
	ss.add($t7, 1);
	null;
	ss.add($t7, 1);
	null;
	ss.add($t7, 1);
	null;
	ss.add($t7, 0);
	null;
	ss.add($t7, 1);
	null;
	ss.add($t7, 0);
	null;
	ss.add($t7, 1);
	null;
	ss.add($t7, 0);
	null;
	ss.add($t7, 1);
	null;
	ss.add($t7, 0);
	null;
	ss.add($t7, 1);
	null;
	ss.add($t7, 0);
	null;
	ss.add($t7, 1);
	null;
	ss.add($t7, 1);
	null;
	ss.add($t7, 1);
	null;
	ss.add($t7, 1);
	null;
	ss.add($t7, 1);
	null;
	ss.add($t7, 1);
	null;
	ss.add($t7, 1);
	null;
	ss.add($t7, 0);
	null;
	ss.add($t7, 1);
	null;
	ss.add($t7, 0);
	null;
	ss.add($t7, 1);
	null;
	ss.add($t7, 0);
	null;
	ss.add($t7, 1);
	null;
	ss.add($t7, 0);
	null;
	ss.add($t7, 1);
	null;
	ss.add($t7, 0);
	null;
	ss.add($t7, 1);
	null;
	ss.add($t7, 1);
	null;
	ss.add($t7, 1);
	null;
	ss.add($t7, 0);
	null;
	ss.add($t7, 1);
	null;
	ss.add($t7, 1);
	null;
	ss.add($t7, 1);
	null;
	ss.add($t7, 0);
	null;
	ss.add($t7, 1);
	null;
	ss.add($t7, 0);
	null;
	ss.add($t7, 1);
	null;
	ss.add($t7, 0);
	null;
	ss.add($t7, 1);
	null;
	ss.add($t7, 0);
	null;
	ss.add($t7, 1);
	null;
	ss.add($t7, 0);
	null;
	ss.add($t7, 1);
	null;
	ss.add($t7, 1);
	null;
	ss.add($t7, 1);
	null;
	ss.add($t7, 1);
	null;
	ss.add($t7, 1);
	null;
	ss.add($t7, 1);
	null;
	ss.add($t7, 1);
	null;
	ss.add($t7, 0);
	null;
	ss.add($t7, 1);
	null;
	ss.add($t7, 0);
	null;
	ss.add($t7, 1);
	null;
	ss.add($t7, 0);
	null;
	ss.add($t7, 1);
	null;
	ss.add($t7, 0);
	null;
	ss.add($t7, 1);
	null;
	ss.add($t7, 0);
	null;
	ss.add($t7, 1);
	null;
	ss.add($t7, 1);
	null;
	ss.add($t7, 1);
	null;
	ss.add($t7, 0);
	null;
	ss.add($t7, 1);
	null;
	ss.add($t7, 1);
	null;
	ss.add($t7, 1);
	null;
	ss.add($t7, 0);
	null;
	ss.add($t7, 1);
	null;
	ss.add($t7, 0);
	null;
	ss.add($t7, 1);
	null;
	ss.add($t7, 0);
	null;
	ss.add($t7, 1);
	null;
	ss.add($t7, 0);
	null;
	ss.add($t7, 1);
	null;
	ss.add($t7, 0);
	null;
	ss.add($t7, 1);
	null;
	ss.add($t7, 1);
	null;
	ss.add($t7, 1);
	null;
	ss.add($t7, 1);
	null;
	ss.add($t7, 1);
	null;
	ss.add($t7, 1);
	null;
	ss.add($t7, 1);
	null;
	ss.add($t7, 0);
	null;
	ss.add($t7, 1);
	null;
	ss.add($t7, 0);
	null;
	ss.add($t7, 1);
	null;
	ss.add($t7, 0);
	null;
	ss.add($t7, 1);
	null;
	ss.add($t7, 0);
	null;
	ss.add($t7, 1);
	null;
	ss.add($t7, 0);
	null;
	ss.add($t7, 1);
	null;
	ss.add($t7, 1);
	null;
	ss.add($t7, 1);
	null;
	ss.add($t7, 1);
	null;
	ss.add($t7, 1);
	null;
	ss.add($t7, 1);
	null;
	ss.add($t7, 1);
	null;
	ss.add($t7, 0);
	null;
	ss.add($t7, 1);
	null;
	ss.add($t7, 0);
	null;
	ss.add($t7, 1);
	null;
	ss.add($t7, 0);
	null;
	$t6.set_pixels($t7);
	ss.add($t3, $t6);
	null;
	var $t8 = new $TwoDeeSharp_TileData();
	var $t9 = [];
	ss.add($t9, 1);
	null;
	ss.add($t9, 0);
	null;
	ss.add($t9, 0);
	null;
	ss.add($t9, 0);
	null;
	ss.add($t9, 0);
	null;
	ss.add($t9, 0);
	null;
	ss.add($t9, 1);
	null;
	ss.add($t9, 0);
	null;
	ss.add($t9, 1);
	null;
	ss.add($t9, 0);
	null;
	ss.add($t9, 1);
	null;
	ss.add($t9, 0);
	null;
	ss.add($t9, 1);
	null;
	ss.add($t9, 0);
	null;
	ss.add($t9, 1);
	null;
	ss.add($t9, 0);
	null;
	ss.add($t9, 1);
	null;
	ss.add($t9, 0);
	null;
	ss.add($t9, 0);
	null;
	ss.add($t9, 0);
	null;
	ss.add($t9, 0);
	null;
	ss.add($t9, 0);
	null;
	ss.add($t9, 1);
	null;
	ss.add($t9, 0);
	null;
	ss.add($t9, 1);
	null;
	ss.add($t9, 0);
	null;
	ss.add($t9, 1);
	null;
	ss.add($t9, 0);
	null;
	ss.add($t9, 1);
	null;
	ss.add($t9, 0);
	null;
	ss.add($t9, 1);
	null;
	ss.add($t9, 0);
	null;
	ss.add($t9, 1);
	null;
	ss.add($t9, 0);
	null;
	ss.add($t9, 0);
	null;
	ss.add($t9, 0);
	null;
	ss.add($t9, 0);
	null;
	ss.add($t9, 0);
	null;
	ss.add($t9, 1);
	null;
	ss.add($t9, 0);
	null;
	ss.add($t9, 1);
	null;
	ss.add($t9, 0);
	null;
	ss.add($t9, 1);
	null;
	ss.add($t9, 0);
	null;
	ss.add($t9, 1);
	null;
	ss.add($t9, 0);
	null;
	ss.add($t9, 1);
	null;
	ss.add($t9, 0);
	null;
	ss.add($t9, 1);
	null;
	ss.add($t9, 0);
	null;
	ss.add($t9, 0);
	null;
	ss.add($t9, 0);
	null;
	ss.add($t9, 0);
	null;
	ss.add($t9, 0);
	null;
	ss.add($t9, 1);
	null;
	ss.add($t9, 0);
	null;
	ss.add($t9, 1);
	null;
	ss.add($t9, 0);
	null;
	ss.add($t9, 1);
	null;
	ss.add($t9, 0);
	null;
	ss.add($t9, 1);
	null;
	ss.add($t9, 0);
	null;
	ss.add($t9, 1);
	null;
	ss.add($t9, 0);
	null;
	ss.add($t9, 1);
	null;
	ss.add($t9, 0);
	null;
	ss.add($t9, 0);
	null;
	ss.add($t9, 0);
	null;
	ss.add($t9, 0);
	null;
	ss.add($t9, 0);
	null;
	ss.add($t9, 1);
	null;
	ss.add($t9, 0);
	null;
	ss.add($t9, 1);
	null;
	ss.add($t9, 0);
	null;
	ss.add($t9, 1);
	null;
	ss.add($t9, 0);
	null;
	ss.add($t9, 1);
	null;
	ss.add($t9, 0);
	null;
	ss.add($t9, 1);
	null;
	ss.add($t9, 0);
	null;
	ss.add($t9, 1);
	null;
	ss.add($t9, 0);
	null;
	ss.add($t9, 0);
	null;
	ss.add($t9, 0);
	null;
	ss.add($t9, 0);
	null;
	ss.add($t9, 0);
	null;
	ss.add($t9, 1);
	null;
	ss.add($t9, 0);
	null;
	ss.add($t9, 1);
	null;
	ss.add($t9, 0);
	null;
	ss.add($t9, 1);
	null;
	ss.add($t9, 0);
	null;
	ss.add($t9, 1);
	null;
	ss.add($t9, 0);
	null;
	ss.add($t9, 1);
	null;
	ss.add($t9, 0);
	null;
	ss.add($t9, 1);
	null;
	ss.add($t9, 0);
	null;
	ss.add($t9, 0);
	null;
	ss.add($t9, 0);
	null;
	ss.add($t9, 0);
	null;
	ss.add($t9, 0);
	null;
	ss.add($t9, 1);
	null;
	ss.add($t9, 0);
	null;
	ss.add($t9, 1);
	null;
	ss.add($t9, 0);
	null;
	ss.add($t9, 1);
	null;
	ss.add($t9, 0);
	null;
	ss.add($t9, 1);
	null;
	ss.add($t9, 0);
	null;
	ss.add($t9, 1);
	null;
	ss.add($t9, 0);
	null;
	ss.add($t9, 1);
	null;
	ss.add($t9, 0);
	null;
	ss.add($t9, 0);
	null;
	ss.add($t9, 0);
	null;
	ss.add($t9, 0);
	null;
	ss.add($t9, 0);
	null;
	ss.add($t9, 1);
	null;
	ss.add($t9, 0);
	null;
	ss.add($t9, 1);
	null;
	ss.add($t9, 0);
	null;
	ss.add($t9, 1);
	null;
	ss.add($t9, 0);
	null;
	ss.add($t9, 1);
	null;
	ss.add($t9, 0);
	null;
	ss.add($t9, 1);
	null;
	ss.add($t9, 0);
	null;
	ss.add($t9, 1);
	null;
	ss.add($t9, 0);
	null;
	ss.add($t9, 0);
	null;
	ss.add($t9, 0);
	null;
	ss.add($t9, 0);
	null;
	ss.add($t9, 0);
	null;
	ss.add($t9, 1);
	null;
	ss.add($t9, 0);
	null;
	ss.add($t9, 1);
	null;
	ss.add($t9, 0);
	null;
	ss.add($t9, 1);
	null;
	ss.add($t9, 0);
	null;
	ss.add($t9, 1);
	null;
	ss.add($t9, 0);
	null;
	ss.add($t9, 1);
	null;
	ss.add($t9, 0);
	null;
	ss.add($t9, 1);
	null;
	ss.add($t9, 0);
	null;
	ss.add($t9, 0);
	null;
	ss.add($t9, 0);
	null;
	ss.add($t9, 0);
	null;
	ss.add($t9, 0);
	null;
	ss.add($t9, 1);
	null;
	ss.add($t9, 0);
	null;
	ss.add($t9, 1);
	null;
	ss.add($t9, 0);
	null;
	ss.add($t9, 1);
	null;
	ss.add($t9, 0);
	null;
	ss.add($t9, 1);
	null;
	ss.add($t9, 0);
	null;
	ss.add($t9, 1);
	null;
	ss.add($t9, 0);
	null;
	ss.add($t9, 1);
	null;
	ss.add($t9, 0);
	null;
	ss.add($t9, 0);
	null;
	ss.add($t9, 0);
	null;
	ss.add($t9, 0);
	null;
	ss.add($t9, 0);
	null;
	ss.add($t9, 1);
	null;
	ss.add($t9, 0);
	null;
	ss.add($t9, 1);
	null;
	ss.add($t9, 0);
	null;
	ss.add($t9, 1);
	null;
	ss.add($t9, 0);
	null;
	ss.add($t9, 1);
	null;
	ss.add($t9, 0);
	null;
	ss.add($t9, 1);
	null;
	ss.add($t9, 0);
	null;
	ss.add($t9, 1);
	null;
	ss.add($t9, 0);
	null;
	ss.add($t9, 0);
	null;
	ss.add($t9, 0);
	null;
	ss.add($t9, 0);
	null;
	ss.add($t9, 0);
	null;
	ss.add($t9, 1);
	null;
	ss.add($t9, 0);
	null;
	ss.add($t9, 1);
	null;
	ss.add($t9, 0);
	null;
	ss.add($t9, 1);
	null;
	ss.add($t9, 0);
	null;
	ss.add($t9, 1);
	null;
	ss.add($t9, 0);
	null;
	ss.add($t9, 1);
	null;
	ss.add($t9, 0);
	null;
	ss.add($t9, 1);
	null;
	ss.add($t9, 0);
	null;
	ss.add($t9, 0);
	null;
	ss.add($t9, 0);
	null;
	ss.add($t9, 0);
	null;
	ss.add($t9, 0);
	null;
	ss.add($t9, 1);
	null;
	ss.add($t9, 0);
	null;
	ss.add($t9, 1);
	null;
	ss.add($t9, 0);
	null;
	ss.add($t9, 1);
	null;
	ss.add($t9, 0);
	null;
	ss.add($t9, 1);
	null;
	ss.add($t9, 0);
	null;
	ss.add($t9, 1);
	null;
	ss.add($t9, 0);
	null;
	ss.add($t9, 1);
	null;
	ss.add($t9, 0);
	null;
	ss.add($t9, 0);
	null;
	ss.add($t9, 0);
	null;
	ss.add($t9, 0);
	null;
	ss.add($t9, 0);
	null;
	ss.add($t9, 1);
	null;
	ss.add($t9, 0);
	null;
	ss.add($t9, 1);
	null;
	ss.add($t9, 0);
	null;
	ss.add($t9, 1);
	null;
	ss.add($t9, 0);
	null;
	ss.add($t9, 1);
	null;
	ss.add($t9, 0);
	null;
	ss.add($t9, 1);
	null;
	ss.add($t9, 0);
	null;
	ss.add($t9, 1);
	null;
	ss.add($t9, 0);
	null;
	ss.add($t9, 0);
	null;
	ss.add($t9, 0);
	null;
	ss.add($t9, 0);
	null;
	ss.add($t9, 0);
	null;
	ss.add($t9, 1);
	null;
	ss.add($t9, 0);
	null;
	ss.add($t9, 1);
	null;
	ss.add($t9, 0);
	null;
	ss.add($t9, 1);
	null;
	ss.add($t9, 0);
	null;
	ss.add($t9, 1);
	null;
	ss.add($t9, 0);
	null;
	ss.add($t9, 1);
	null;
	ss.add($t9, 0);
	null;
	ss.add($t9, 1);
	null;
	ss.add($t9, 0);
	null;
	ss.add($t9, 0);
	null;
	ss.add($t9, 0);
	null;
	ss.add($t9, 0);
	null;
	ss.add($t9, 0);
	null;
	ss.add($t9, 1);
	null;
	ss.add($t9, 0);
	null;
	ss.add($t9, 1);
	null;
	ss.add($t9, 0);
	null;
	ss.add($t9, 1);
	null;
	ss.add($t9, 0);
	null;
	ss.add($t9, 1);
	null;
	ss.add($t9, 0);
	null;
	ss.add($t9, 1);
	null;
	ss.add($t9, 0);
	null;
	$t8.set_pixels($t9);
	ss.add($t3, $t8);
	null;
	$t1.set_tiles($t3);
	$t1.set_sprites([]);
	var $t10 = [];
	var $t11 = new $TwoDeeSharp_BoardData();
	var $t12 = [];
	ss.add($t12, 0);
	null;
	ss.add($t12, 1);
	null;
	ss.add($t12, 2);
	null;
	ss.add($t12, 0);
	null;
	ss.add($t12, 1);
	null;
	ss.add($t12, 0);
	null;
	ss.add($t12, 1);
	null;
	ss.add($t12, 2);
	null;
	ss.add($t12, 1);
	null;
	ss.add($t12, 1);
	null;
	ss.add($t12, 0);
	null;
	ss.add($t12, 0);
	null;
	ss.add($t12, 2);
	null;
	ss.add($t12, 1);
	null;
	ss.add($t12, 1);
	null;
	ss.add($t12, 0);
	null;
	ss.add($t12, 1);
	null;
	ss.add($t12, 0);
	null;
	ss.add($t12, 0);
	null;
	ss.add($t12, 1);
	null;
	ss.add($t12, 0);
	null;
	ss.add($t12, 1);
	null;
	ss.add($t12, 2);
	null;
	ss.add($t12, 0);
	null;
	ss.add($t12, 1);
	null;
	$t11.set_bgTiles($t12);
	var $t13 = [];
	ss.add($t13, 0);
	null;
	ss.add($t13, 1);
	null;
	ss.add($t13, 2);
	null;
	ss.add($t13, 0);
	null;
	ss.add($t13, 1);
	null;
	ss.add($t13, 0);
	null;
	ss.add($t13, 1);
	null;
	ss.add($t13, 2);
	null;
	ss.add($t13, 1);
	null;
	ss.add($t13, 1);
	null;
	ss.add($t13, 0);
	null;
	ss.add($t13, 0);
	null;
	ss.add($t13, 2);
	null;
	ss.add($t13, 1);
	null;
	ss.add($t13, 1);
	null;
	ss.add($t13, 0);
	null;
	ss.add($t13, 1);
	null;
	ss.add($t13, 0);
	null;
	ss.add($t13, 0);
	null;
	ss.add($t13, 1);
	null;
	ss.add($t13, 0);
	null;
	ss.add($t13, 1);
	null;
	ss.add($t13, 2);
	null;
	ss.add($t13, 0);
	null;
	ss.add($t13, 1);
	null;
	$t11.set_fgTiles($t13);
	$t11.set_sprites([]);
	$t11.set_boardWidth(5);
	$t11.set_boardHeight(5);
	$t11.set_boardName('First Level');
	ss.add($t10, $t11);
	null;
	$t1.set_boards($t10);
	ss.add($t14, $t1);
	$TwoDeeSharp_$Program.$main();
})();
